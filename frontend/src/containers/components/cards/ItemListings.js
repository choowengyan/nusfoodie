import React from 'react';
import { Grid, Item, ListItem, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// import './cards.css';
var cardStyle = {
    display: 'block',
    width: '20vw',
    transitionDuration: '0.3s',
    // height: '20vw'
    height: '100%'
}

// const EstablishmentsListings = (props) => {
export default function ItemListings() {
    return (
        <>
            <Grid container style={{ paddingLeft: '8em', paddingRight: '8em' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                <Grid item xs={4} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins', boxShadow: 5 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://twoplaidaprons.com/wp-content/uploads/2022/04/Taiwanese-fried-chicken-on-plate-thumbnail-500x375.jpg"
                                title="Taiwanese Fried Chicken"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Taiwanese Fried Chicken
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase', marginTop: '2em' }} color="primary" label="Taiwanese" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={4} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins', boxShadow: 5 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://omnivorescookbook.com/wp-content/uploads/2020/08/200730_Scallion-Pancakes_3.jpg"
                                title="Scallion Pancake"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Scallion Pancake
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase', marginTop: '2em' }} color="primary" label="Taiwanese" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={4} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins', boxShadow: 5 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.vforveganista.com/wp-content/uploads/2021/04/hero-edited-4-1067x650.jpg"
                                title="Oyster Vermicelli Noodles"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Oyster Vermicelli Noodles
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase', marginTop: '2em' }} color="primary" label="Taiwanese" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={4} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://media.cnn.com/api/v1/images/stellar/prod/150520113507-best-taiwanese-food-1braised-pork-lurou-rice.jpg?q=w_1800,h_1198,x_0,y_0,c_fill/h_618"
                                title="Lu Rou Fan"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Lu Rou Fan
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase', marginTop: '2em' }} color="primary" label="Taiwanese" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
            </Grid>
        </>

    );
}


// export default EstablishmentsListings;
