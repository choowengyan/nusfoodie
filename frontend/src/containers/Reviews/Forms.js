import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Typography, Grid, TextField, Box, MenuItem } from '@mui/material';
import axios from "axios";

import './Reviews.css';
import ResponsiveAppBar from '../navbar';
import ReviewPic from '../../assets/review.png'


const styles = {
    paperContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFC95F'
    }
};

const cuisine = [
    {
        value: 'USD',
        label: 'Korean',
    },
    {
        value: 'EUR',
        label: 'Japanese',
    },
    {
        value: 'BTC',
        label: 'Taiwanese',
    },
    {
        value: 'JPY',
        label: 'Western',
    },
];

const canteen = [
    {
        value: 'PGPR',
        label: 'PGPR Aircon Canteen',
    },
    {
        value: 'Frontier',
        label: 'Frontier Canteen',
    },
    {
        value: 'deck',
        label: 'The Deck',
    },
    {
        value: 'TEC',
        label: 'Techno Edge Canteen',
    },
];



class ReviewForm extends Component {
    
    constructor(props) {
        super(props);
        
    }

    // handleButtonClick = () => {
    //     // Perform some actions
    //     // Then, use the history object to navigate back
    //     this.props.history.goBack();
    //   };



    // componentDidMount() {
    //     this.fetchCourses();
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.page !== this.state.page) {
    //         //console.log("page", this.state.page)
    //         this.fetchCourses();
    //     }
    // }

    // setSelectedUniversity = (data) => {
    //     this.setState({ selectedUniversity: data })
    // }

    // setSelectedDiscipline = (data) => {
    //     this.setState({ selectedDiscipline: data })
    // }

    // setSearchQuery = (data) => {
    //     // console.log("search: ",data.target.value)
    //     this.setState({ search: data.target.value })
    // }

    // setPage = (data) => {
    //     this.setState({ page: data })
    // }

    // setPageCount = (data) => {
    //     this.setState({ pageCount: data })
    // }

    // setTotal = (data) => {
    //     this.setState({ total: data })
    // }

    // setLoading = (data) => {
    //     this.setState({ loading: data })
    // }

    // getUrlQuery = () => {
    //     let uniFilter = "&university="
    //     for (let i = 0; i < this.state.selectedUniversity.length; i++) {
    //         uniFilter += `${this.state.selectedUniversity[i].value}`;
    //         if (i < this.state.selectedUniversity.length - 1) {
    //             uniFilter += ','
    //         }
    //     }

    //     let disciplineFilter = "&discipline="
    //     for (let i = 0; i < this.state.selectedDiscipline.length; i++) {
    //         disciplineFilter += `${this.state.selectedDiscipline[i].value}`;
    //         if (i < this.state.selectedDiscipline.length - 1) {
    //             disciplineFilter += ','
    //         }
    //     }
    //     return `https://dev.silvi.io/api/undergraduate-programmes?search=${this.state.search}&page=${this.state.page}${uniFilter}${disciplineFilter}`;
    // }

    // resetForm = () => {
    //     this.setState({
    //         ...this.state,
    //         selectedUniversity: [],
    //         selectedDiscipline: [],
    //         search: "",
    //         page: 1,
    //     }, () => {
    //         this.fetchCourses();
    //     })
    // }

    // handleSubmit = () => {
    //     this.setState({
    //         ...this.state,
    //         page: 1,
    //     }, () => {
    //         this.fetchCourses();
    //     })
    // }

    // fetchMe = () => {
    //     axios.get(`https://dev.silvi.io/api/me`,
    //         { withCredentials: true })
    //         .then(response => {
    //             // this.setRiasec_1(response.data.profile.interest_1.name)
    //             // this.setRiasec_2(response.data.profile.interest_2.name)
    //             // this.setRiasec_3(response.data.profile.interest_3.name)

    //             return response.data
    //         })
    //         .catch(error => {
    //             console.error('Error', error);
    //         });
    // }

    // fetchCourses = () => {
    //     const URL = this.getUrlQuery();
    //     axios.get(URL, { withCredentials: true })
    //         .then(response => {
    //             this.setCourses_(response.data.results)
    //             this.fetchMe();
    //             let contentRange = response.headers["content-range"]
    //             let total = contentRange.split("/")[1]
    //             let length = response.data.page_size
    //             const total_page = Math.ceil(total / length)
    //             this.setPageCount(total_page)
    //             this.setTotal(contentRange.split("/")[1])
    //         })
    //         .catch(error =>
    //             console.error('Error', error));
    // }



    render() {
        return (
            <Container fluid mx="3px" id="reviews" >
                <ResponsiveAppBar />

                <div className="flex-container align-content-sm-stretch" id="review-header" style={Object.assign({}, styles.paperContainer, { width: "100%", margin: 0, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' })}>
                    <h1 style={{ fontSize: "28px", textAlign: 'center' }}>Food Reviews</h1>
                    <div className="flex-container align-content-sm-stretch" id="review-subheader">
                        <h4 style={{ fontSize: "18px", paddingTop: '23px', paddingBottom: '29px' }}>Let others know your favourite food in NUS!</h4>
                    </div>
                </div>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '3em' }}>
                    <Grid item md={6} xs={12}>
                        <img src={ReviewPic} style={{ width: '75%', paddingTop: '8em', alignContent: 'right' }} className="signIn-Logo" id="signinLogo" alt="logo" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box
                            sx={{
                                marginTop: 3,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingTop: '2em',
                                width: '70%'
                            }}
                        >

                            <Typography component="h1" variant="h5">
                                Share Your Thoughts!
                            </Typography>

                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="foodName"
                                    label="Food Name"
                                    name="foodName"
                                    autoComplete="foodName"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="description"
                                    label="Review Description"
                                    name="description"
                                    autoComplete="description"
                                />
                                <TextField
                                    margin="normal"
                                    id="outlined-number"
                                    required
                                    fullWidth
                                    label="Rating"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="outlined-select-cuisine"
                                    select
                                    required
                                    margin="normal"
                                    fullWidth
                                    label="Cuisine Type"
                                // defaultValue="EUR"
                                // helperText="Please select your cuisine type"
                                >
                                    {cuisine.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    id="outlined-select-canteen"
                                    select
                                    required
                                    margin="normal"
                                    fullWidth
                                    label="Canteen"
                                >
                                    {canteen.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <Button type="submit" variant="contained" style={{ backgroundColor: '#0F006B', left: '37%', marginTop: '2em' }}>Post My Review</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        )
    }
}

export default ReviewForm;