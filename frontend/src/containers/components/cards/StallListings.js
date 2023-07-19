import React from 'react';

import { Grid, ListItem, Box } from '@mui/material';



// const EstablishmentsListings = (props) => {
export default function StallListings() {
    return (
        <>
            <Grid container style={{ paddingLeft: '9em', paddingRight: '9em', alignContent:'center' }} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                <Grid item xs={4} md={3}>
                    <ListItem>
                        <Box
                            sx={{
                                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROVP_w3yahovyTjpZIq5MTymLfHsYsRFlNg&usqp=CAU')",
                                backgroundRepeat: "no-repeat",
                                height: '180px',
                                width: '180px',
                                borderRadius: '50%',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                color: 'white',
                                backgroundColor: 'grey',
                                backgroundBlendMode: 'multiply',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                boxShadow: 5
                            }}
                        >
                            Taiwan Ichiban
                        </Box>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ListItem>
                        <Box
                            sx={{
                                backgroundImage: "url('https://natashaskitchen.com/wp-content/uploads/2021/10/Cajun-Chicken-Pasta-SQ-500x375.jpg')",
                                backgroundRepeat: "no-repeat",
                                height: '180px',
                                width: '180px',
                                borderRadius: '50%',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                color: 'white',
                                backgroundColor: 'grey',
                                backgroundBlendMode: 'multiply',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                boxShadow: 5
                            }}
                        >
                            Pasta Express
                        </Box>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ListItem>
                        <Box
                            sx={{
                                backgroundImage: "url('https://1.bp.blogspot.com/-uxxi96JfIPM/UpMi8I-I8OI/AAAAAAAAAAk/cw75-NUma50/s1600/ayam+penyet.jpg')",
                                backgroundRepeat: "no-repeat",
                                height: '180px',
                                width: '180px',
                                borderRadius: '50%',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                color: 'white',
                                backgroundColor: 'grey',
                                backgroundBlendMode: 'multiply',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                boxShadow: 5
                            }}
                        >
                            Uncle Penyet Fusion
                        </Box>
                    </ListItem>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ListItem>
                        <Box
                            sx={{
                                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHh_8jKFjh2CEr1t3HQ16uzrmEn4_9McWXBg&usqp=CAU')",
                                backgroundRepeat: "no-repeat",
                                height: '180px',
                                width: '180px',
                                borderRadius: '50%',
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                color: 'white',
                                backgroundColor: 'grey',
                                backgroundBlendMode: 'multiply',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                boxShadow: 5
                            }}
                        >
                            Korean
                        </Box>
                    </ListItem>
                </Grid>
            </Grid>
        </>

    );
}


