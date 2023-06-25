import axios from "axios";
import React, { Component, useEffect, useState } from 'react';
import { Checkbox, containerClasses, FormControlLabel, TextField, Pagination, Container } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Form, FormGroup, FormLabel, Card, Row, Col, Button } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'

import './cards.css';
// import NotFound from '../../assets/NotFound.svg'
import Establishments from "../../Establishments/Establishments";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const BASE_API_URL = `https://dev.silvi.io/api`

// const CompareBottomSheet = (props) => {
//     const { compareCourses } = props

//     return (<div className="comparison-list-wrapper stack-top overlay" style={{ paddingBottom: "1em", width: "100%" }}>
//         <Container>
//             <Row>
//                 <div className="comparison-list-title">
//                     <h4 style={{ fontSize: "14px" }}>You may choose and compare up to maximum 2 courses</h4>
//                 </div>
//             </Row>

//             <div className="row">
//                 {compareCourses.length > 0 && compareCourses.map((course) => {
//                     console.log("course.id", course.id)
//                     return (
//                         <div className="col-md-5">
//                             <Card style={{ marginTop: "1em" }}>
//                                 <Card.Body key={course.id}>
//                                     <Card.Title style={{ fontSize: "13px" }}>{course.name}</Card.Title>
//                                     <Card.Subtitle className="mb-2 text-muted text-capitalize" style={{ fontSize: "10px" }}>{course.university}</Card.Subtitle>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     );
//                 })}

//                 {compareCourses.length > 1 ?
//                     <div className="col-md-2" style={{ marginTop: "2em", top: "10px" }}>
//                         <Button id="compare-btn" href="/undergraduate-programmes/compare" size="sm">Compare Now</Button>
//                     </div> : null}
//             </div>
//         </Container>
//     </div>
//     )
// }

const EstablishmentsListings = (props) => {
    const { selectedUniversity, selectedDiscipline, search, courses_, setCourses_, page, setPage, pageCount } = props
    // const storedValueAsNumber = Number(localStorage.getItem("compareID"))
    // const [selectedCompare, setSelectedCompare] = useState(
    //     Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : []);
    const [checked, setChecked] = useState([]);
    const [compareCourses, setCompareCourses] = useState([]);
    const [cardChecked, setCardChecked] = useState(false);
    const [showCompareWrapper, setShowCompareWrapper] = useState(false)
    const [csrf, setCSRF] = useState("")
    const [auth, setAuth] = useState(false)
    const selected = []

    axios.defaults.withCredentials = true

    // useEffect(() => {
    //     const storedSelectedOption = localStorage.getItem('compareID')
    //     let selectedList = []
    //     if (storedSelectedOption) {
    //         selectedList = storedSelectedOption.split(",").map(c => parseInt(c))

    //         // requests to be sent
    //         const requests = []
    //         selectedList.forEach(id => {
    //             requests.push(fetchCoursebyID(id))
    //         })
    //         axios.all(requests)
    //             .then(axios.spread((...responses) => {
    //                 console.log("responses", ...responses)
    //                 setCompareCourses([...responses])
    //             }))
    //     } else {
    //         localStorage.setItem("compareID", "")
    //     }
    //     setCardChecked(selectedList)
    //     setChecked(selectedList)
    // }, [])

    useEffect(() => {
        getSession();
    }, [])

    const getCSRF = () => {
        fetch("https://dev.silvi.io/api/csrf/", {
            credentials: "include",
        })
            .then((res) => {
                let csrfToken = res.headers.get("X-CSRFToken");
                setCSRF(csrfToken);
                //console.log("csrfToken: ", csrfToken);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // check if user is authenticated 
    const getSession = () => {
        fetch("https://dev.silvi.io/api/session/", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.isAuthenticated) {
                    setAuth({ isAuthenticated: true });
                    getCSRF();
                } else {
                    setAuth({ isAuthenticated: false });
                    window.location = "/login/"
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const fetchCoursebyID = (id) => {
        console.log(`inside fetch course detail- id: ${id}`)
        return axios.get(`${BASE_API_URL}/undergraduate-programmes/${id}`).then(response => {
            return response.data
        });
    }

    const handleCompare = (event, course_id) => {
        var updatedList = [...checked];
        var updatedCompareCourses = [];

        if (event.target.checked) {
            updatedList = [...checked, course_id];
            updatedCompareCourses = [...compareCourses, courses_.find(c => c.id == course_id)];
            //console.log("updatedCompareCourses: ", updatedCompareCourses)
        } else {
            updatedList.splice(checked.indexOf(course_id), 1)
            updatedCompareCourses = compareCourses.filter(course => { console.log(`course_id ${course_id} - course.id ${course.id}`); return course.id !== course_id })
        }
        setCompareCourses(updatedCompareCourses)
        setChecked(updatedList, () => { console.log(checked) });
    }

    useEffect(() => {
        localStorage.setItem("compareID", checked.toString())
        //console.log("useEffect: ", checked.toString())
        //console.log("localstorage: ", localStorage.getItem("compareID"))
        if (checked.length > 0) {
            checked.forEach(id => {

            })
            //console.log(compareCourses)
            setShowCompareWrapper(true)
        } else {
            setShowCompareWrapper(false)
        }
    }, [checked]);

    const isDisabled = (course_id) => {
        return (
            checked.length > 1 && checked.indexOf(course_id) === -1
        );
    }

    const handleCardCheck = (event) => {
        if (event.target.checked) {
            setCardChecked(true)
        }
    }

    useEffect(() => {
    }, [cardChecked])

    const addBookmark = (event, course_id) => {
        let bookmarkAction = event.target.checked ? "bookmark" : "unbookmark"
        console.log("event.target.c: ", event.target.checked)
        const data = {
            action: bookmarkAction,
            programme_id: course_id
        }

        const config = {
            headers: { "X-CSRFToken": csrf },
            withCredentials: true,
        }

        return (
            axios.post(`${BASE_API_URL}/undergraduate-programmes/bookmark`, data, config)
                .then(response => {
                    // manually set bookmarked state so that it changes in the frontend
                    // because we're using checked={course.bookmarked}
                    let course_idx = courses_.findIndex(c => c.id === course_id);
                    courses_[course_idx].bookmarked = !courses_[course_idx].bookmarked
                    setCourses_([...courses_])
                    return response.data
                })
                .catch(error =>
                    console.log("Error", error))
        )
    }

    return (
        <>
            <MDBRow className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 relative transform-container'>
                {courses_.length > 0 && (
                    courses_.map(course => (<MDBCol key={course.id}>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={BASE_API_URL + course.picture}
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBRow className="course-card-title">
                                    <MDBCol className="col-9" key={course.id}>
                                        <MDBCardTitle>{course.name}</MDBCardTitle>
                                    </MDBCol>

                                    <MDBCol className="col-3">
                                        <Checkbox
                                            {...label}
                                            icon={<BookmarkBorderIcon />}
                                            checkedIcon={<BookmarkIcon />}
                                            value={course.id}
                                            checked={course.bookmarked}
                                            onChange={(event) => addBookmark(event, course.id)}
                                        />
                                    </MDBCol>
                                </MDBRow>

                                {/* <MDBRow>
                                    <div className="course-similarity">
                                        {
                                            (() => {
                                                if (course.score >= 0.7)
                                                    return <Badge pill bg="success"> Highly Matched 🔥</Badge>
                                                if (course.score >= 0.35 && course.score < 0.7)
                                                    return <Badge pill bg="warning"> Moderately Matched ⭐</Badge>
                                            })()
                                        }
                                    </div>
                                </MDBRow> */}


                                <MDBCardSubTitle>{course.university} | {course.faculty}</MDBCardSubTitle>
                                <MDBCardText style={{ color: "black", fontSize: "11px" }}>
                                    {course.short_description}
                                </MDBCardText>


                                <MDBRow style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <div className="col-6 card__actions">
                                        <Button href={`/undergraduate-programmes/${course.id}`} className="btn btn-color-details" style={{ fontSize: "10px" }}>Details</Button>
                                    </div>

                                    <div className="col-6 card__actions">
                                        <FormGroup style={{ borderBlockColor: "black" }}>
                                            <FormControlLabel control={<Checkbox />} value={course.id} checked={checked.includes(course.id)} onChange={(event) => handleCompare(event, course.id)} disabled={isDisabled(course.id)}
                                                style={{ fontSize: "9px" }} label="Compare" />
                                        </FormGroup>
                                    </div>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>))
                )}
            </MDBRow>

            {/* {courses_.length < 1 ?
                <div id="wrapper" style={{ paddingTop: "0.5em" }}>
                    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                        <img className="page404" src={NotFound} style={{ width: "35%" }} />
                    </div>
                    <div id="info" style={{ marginTop: "1em" }}>
                        <h3 style={{ fontFamily: "Open Sans", textAlign: "center", fontSize: "medium" }}>
                            Opps! No Result Found 😔
                        </h3>
                    </div>
                </div > : null
            } */}

            <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", marginBottom: "4rem" }}>
                <Pagination count={pageCount} page={page} onChange={(event, value) => {
                    setPage(value)
                }} />
            </div>

            {/* {showCompareWrapper ? <CompareBottomSheet compareCourses={compareCourses} /> : null} */}
        </>
    )
}

export default EstablishmentsListings;
