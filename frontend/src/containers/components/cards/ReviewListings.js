import React from 'react';
import { Grid, Item, ListItem, Link, CardActionArea, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// import './cards.css';
var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    // height: '20vw'
    height: '100%'
}

// const EstablishmentsListings = (props) => {
export default function ReviewListings() {
    return (
        <>
            <Grid container style={{ paddingLeft: '8em', paddingRight: '8em' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                <Grid item xs={12} md={4}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins', boxShadow: 5 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://i.ytimg.com/vi/JUmFtHqwrnk/maxresdefault.jpg"
                                title="Ginseng Chicken"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Ginseng Chicken Soup And Spicy Chicken Set
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Both servings were very generous with huge portions. Very delicious and will come again!
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1em' }}>
                                    Rating: 5 🌟
                                </Typography>
                                <Chip style={{ marginTop: '1em' }} label="Korean" color="primary" />
                                <Typography variant="subtitle2" color="text.secondary" marginTop={2}>
                                    📍 Hwang's, <b>UTown</b>
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" marginTop={1.4} sx={{ fontSize: '11px' }}>
                                    Posted by <b>ilovefud</b>, 23/5/2023
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>

                <Grid item xs={12} md={4}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins', boxShadow: 5 }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://khinskitchen.com/wp-content/uploads/2022/08/beef-fried-rice-10.jpg"
                                title="Beef Fried Rice"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Beef Fried Rice
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Beef was tender, and it comes with chicken. Add on $2 for extra beef. Quite worth it
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginTop: '1em' }}>
                                    Rating: 3 🌟
                                </Typography>
                                <Chip style={{ marginTop: '1em' }} label="Chinese" color="secondary" />
                                <Typography variant="subtitle2" color="text.secondary" marginTop={2}>
                                    📍 Mini Wok, <b>PGPR</b>
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" marginTop={1.4} sx={{ fontSize: '11px' }}>
                                    Posted by <b>leagueZai</b>, 22/5/2023
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
            </Grid>
        </>

    );
}


