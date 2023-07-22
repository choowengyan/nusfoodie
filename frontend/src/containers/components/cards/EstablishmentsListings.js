import React from 'react';
import { Grid, Item, ListItem, Link, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// import './cards.css';
var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '20vw'
    // height: '100%'
}

// const EstablishmentsListings = (props) => {
export default function EstablishmentsListings() {
    return (
        <>
            <Grid container style={{ paddingLeft: '8em', paddingRight: '8em' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                <Grid item xs={6} md={4}>
                    <ListItem>
                 
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                        <CardActionArea href='/establishments/1'>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Frontier-Canteen-1024x684.jpg"
                                title="Frontier Canteen"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div" fontSize="1.2rem" fontWeight="lg">
                                    Frontier Canteen
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Faculty of Science
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', color: 'black' }}>
                                        Opening Hours
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Mon-Fri, 7.30am-4.00pm/8.00pm*
                                    </Typography>
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                     
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={4}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2021/01/Techno-Edge-1024x684.jpg"
                                title="Techno Edge Canteen"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div" fontSize="1.2rem">
                                    Techno Edge Canteen
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Faculty of Engineering / School of Design and Environment
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', color: 'black' }}>
                                    Opening Hours
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Mon-Fri, 7.30am-4.00pm/8.00pm*
                                </Typography>
                            </CardContent>

                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={4}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/deck.jpg"
                                title="The Deck"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div" fontSize="1.2rem">
                                    The Deck
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Faculty of Arts and Social Sciences
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', color: 'black' }}>
                                        Opening Hours
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Mon-Fri, 7.30am-4.00pm/8.00pm
                                    </Typography>
                                </Typography>
                            </CardContent>

                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={4}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/PGP-canteen.jpg"
                                title="PGP Aircon Canteen"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div" fontSize="1.2rem">
                                    PGP Aircon Canteen
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', color: 'black' }}>
                                    Opening Hours
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Mon-Fri, 7.30am-8.00pm
                                </Typography>
                            </CardContent>

                        </Card>
                    </ListItem>
                </Grid>
            </Grid>
        </>

    );
}


// export default EstablishmentsListings;
