import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Chip, Typography, cardStyle, CardMedia, Card, Box, CardContent } from '@mui/material';
import axios from "axios";

import './Reviews.css';
import ResponsiveAppBar from '../navbar';
import ReviewPic from '../../assets/review.png'

import ReviewListings from '../components/cards/ReviewListings';

const styles = {
    paperContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFC95F'
    }
};

class Reviews extends Component {
    constructor(props) {
        super(props);
    }

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


                <div className="container">
                    <Card sx={{ display: 'flex', width: '60%', margin: '0 auto', boxShadow: 4, borderRadius: '16px', backgroundColor: '#F9F9F9' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={ReviewPic}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h6" fontWeight={'bold'} fontSize='18px' color={'#0F006B'}>
                                    Share your food ratings and reviews with us!
                                </Typography>
                                <Button variant="contained" href='/review-form' style={{ bottom: 0, left: "90%", marginTop: '1em', backgroundColor: '#390A9D' }}>Post My Review</Button>
                            </CardContent>

                        </Box>
                    </Card>

                    <div className="subtitile">
                        <p style={{ fontSize: "16px", paddingTop: "1em", textAlign: 'left', paddingLeft: '9em' }}>Explore various food reviews by other foodies! Share yours too!</p>
                    </div>

                    <ReviewListings />
                </div>
            </Container >
        )
    }
}

export default Reviews;