import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRow, MDBCol,
    MDBCardSubTitle
} from 'mdb-react-ui-kit';
import { Grid, Item, ListItem, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';

// import './cards.css';
var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '100%'
    // height: '100%'
}

// const EstablishmentsListings = (props) => {
export default function CuisineListings() {
    return (
        <>
            <Grid container style={{ paddingLeft: '8em', paddingRight: '8em' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                <Grid item xs={6} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.wandercooks.com/wp-content/uploads/2021/06/easy-15-minute-curry-udon-3.jpg"
                                title="Tamoya Udon"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Tamoya Udon
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Udon Don Bar
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }} color="text.primary">4.3 ⭐</Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }} color="text.secondary">
                                        UTown
                                    </Typography>
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase' }} rowSpacing={12} color="primary" label="Japanese" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://4.bp.blogspot.com/-YxEChnNtEfQ/WSO2zlZHFDI/AAAAAAADiRE/z_VaOLpFkLwo_-IaVxtrBcXlCoaC-eWkgCLcB/s1600/1P1530375.JPG"
                                title="Mixed Vegetable Rice"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Mixed Vegetable Rice
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Mixed Vegetable Rice Stall
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }} color="text.primary"  >4.8 ⭐</Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }} color="text.secondary">
                                        Frontier
                                    </Typography>
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase' }} rowSpacing={12} color="success" label="Japanese" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.seasonsandsuppers.ca/wp-content/uploads/2015/01/spicy-udon-1200-5.jpg"
                                title="Stir-fry Udon"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Stir-Fry Udon
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Chef's Wok
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }} color="text.primary" >4.4 ⭐</Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }} color="text.secondary">
                                        Frontier
                                    </Typography>
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase' }} rowSpacing={12} color="secondary" label="Halal" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ListItem>
                        <Card style={cardStyle} sx={{ maxWidth: 345, fontFamily: 'Poppins' }} md={{ minWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://e3.365dm.com/22/06/768x432/skynews-fish-chips_5796594.jpg?20220606075557"
                                title="Fish and Chips"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} gutterBottom variant="h5" component="div" fontSize="1rem" fontWeight="lg">
                                    Fish and Chips
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Western Stall
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }} color="text.primary">3.8 ⭐</Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }} color="text.secondary">
                                        PGP Aircon Canteen
                                    </Typography>
                                </Typography>
                                <Chip sx={{ textTransform: 'uppercase' }} rowSpacing={12} color="info" label="Western" />
                            </CardContent>
                        </Card>
                    </ListItem>
                </Grid>
            </Grid>
        </>

    );
}


// export default EstablishmentsListings;
