import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Item, ListItem, Chip, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { genreStyles } from './genreStyles';

const url = 'http://34.126.91.148:5001/api'

var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '100%'
}

// const genreStyles = {
//     Chinese: {
//         backgroundColor: '#934545',
//         color: '#FFFFFF',
//     },
//     Malay: {
//         backgroundColor: '#483D3F',
//         color: '#FFFFFF',
//     },
//     Indian: {
//         backgroundColor: '#0DBB50',
//         color: '#FFFFFF',
//     },
//     Taiwanese: {
//         backgroundColor: '#FAB700',
//         color: '#FFFFFF',
//     },
//     Western: {
//         backgroundColor: '#939F5C',
//         color: '#FFFFFF',
//     },
//     Japanese: {
//         backgroundColor: '#005694',
//         color: '#FFFFFF',
//     },
//     Korean: {
//         backgroundColor: '#7525D1',
//         color: '#FFFFFF',
//     },
//     Italian: {
//         backgroundColor: '#467599',
//         color: '#FFFFFF',
//     },
//     Thai: {
//         backgroundColor: '#1D3354',
//         color: '#FFFFFF',
//     },
//     Drinks: {
//         backgroundColor: '#E57373',
//         color: '#FFFFFF',
//     },
//     Fruits: {
//         backgroundColor: '#009583',
//         color: '#FFFFFF',
//     },
//     HongKong: {
//         backgroundColor: '#456793',
//         color: '#FFFFFF',
//     },
//     Vegetarian: {
//         backgroundColor: '#FA2D71',
//         color: '#FFFFFF',
//     },
// }


export default function CuisineListings({ limit, showPagination = false }) {
    const [foodItems, setFoodItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20; // 20 food items per page
    const totalPage = Math.ceil(foodItems.length / itemPerPage);

    useEffect(() => {
        axios.get('http://localhost:5001/api/fooditems')
            //axios.get(`${url}/fooditems`)
            .then(response => {
                setFoodItems(response.data);
                console.log("test:", response.data);
            })
            .catch(error => {
                console.error(`Error fetching data: ${error}`);
            });
    }, []);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    let foodItemsToDisplay = foodItems.slice(startIndex, endIndex);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    // limit the display of number of food items 
    if (limit !== undefined) {
        foodItemsToDisplay = foodItemsToDisplay.slice(0, limit);
    }

    return (
        <>
            <Grid container style={{ paddingLeft: '8em', paddingRight: '8em', marginBottom: '2em' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                {/* Render and display food items for current page  */}
                {/* {foodItems.map((item) => ( */}
                {foodItemsToDisplay.map((item) => (
                    <Grid item xs={6} md={3} key={item.foodId}>
                        <ListItem>
                            <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.imageId ? item.imageId : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}
                                    title={item.foodName}
                                />
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                        {item.foodName}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {item.establishmentName}
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }} color="text.primary">{item.Ratings} ⭐</Typography>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }} color="text.secondary">
                                            {item.locationName}
                                        </Typography>
                                    </Typography>
                                    <Chip sx={{
                                        textTransform: 'uppercase',
                                        ...genreStyles[item.genreName]
                                    }}
                                        rowSpacing={12}
                                        label={item.genreName} />
                                </CardContent>
                            </Card>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>

            {/* Pagination Control  */}
            {showPagination && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", marginBottom: "4rem" }}>
                    <Pagination
                        count={totalPage}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            )}
        </>

    );
}


