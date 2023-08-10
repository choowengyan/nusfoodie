import React, { useState, useEffect } from 'react';
import { Grid, Item, ListItem, Chip, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { genreStyles } from './genreStyles';

var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '100%'
}

const url = 'http://34.126.91.148:5001/api'

export default function HomeCuisineListings({ foodItems: propsFoodItems }) {
    const [foodItems, setFoodItems] = useState([]);

    // fetch data from the API if no data is passed in via props
    useEffect(() => {
        if (!propsFoodItems) {
            axios.get('http://localhost:5001/api/fooditems')
                //axios.get(`${url}/fooditems`)
                .then(response => {
                    setFoodItems(response.data);
                })
                .catch(error => {
                    console.error(`Error fetching data: ${error}`);
                });
        }
    }, []);

    // use data from props if available
    useEffect(() => {
        if (propsFoodItems) {
            setFoodItems(propsFoodItems);
        }
    }, [propsFoodItems]);

    return (
        <>
            <Grid container style={{ paddingLeft: '8em', paddingRight: '8em' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                {foodItems.map((item, index) => (
                    <Grid item xs={6} md={3} key={item.foodId ? item.foodId : index}>
                        <ListItem>
                            <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.imageId ? item.imageId : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}
                                    title={item.foodName}
                                />
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                        {item.food_name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {item.establishmentName}
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }} color="text.primary">{item.rating} ⭐</Typography>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }} color="text.secondary">
                                            {item.locationName}
                                        </Typography>
                                    </Typography>
                                    <Chip sx={{
                                        textTransform: 'uppercase',
                                        ...genreStyles[item.genre_name]
                                    }}
                                        rowSpacing={12}
                                        label={item.genre_name} />
                                </CardContent>
                            </Card>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
