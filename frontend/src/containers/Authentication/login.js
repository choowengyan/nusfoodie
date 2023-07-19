
import SignInPic from '../../assets/signInPic.png';
import logo from '../../assets/logoV.png'
// import './login.css';
import React, { Component } from "react";
// import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";
import axios from 'axios';
import { Grid, Item, ListItem, Chip, Link, Checkbox, TextField, FormControlLabel, Typography, Box, Button } from '@mui/material';

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get("email"),
        password: data.get("password"),
    });
};

class Login extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     csrf: "",
        //     email: "",
        //     password: "",
        //     error: "",
        //     isAuthenticated: false,

        // };
    }

    // componentDidMount = () => {
    //     this.getSession();
    // }

    // //
    // getCSRF = () => {
    //     return fetch("https://dev.silvi.io/api/csrf/", {
    //         credentials: "include",
    //     })
    //         .then((res) => {
    //             let csrfToken = res.headers.get("X-CSRFToken");
    //             console.log("csrfToken: ", csrfToken);
    //             return csrfToken
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    // // check if user is authenticated 
    // getSession = () => {
    //     fetch("https://dev.silvi.io/api/session/", {
    //         credentials: "include",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.isAuthenticated) {
    //                 this.setState({ isAuthenticated: true });
    //                 //console.log("HERE: ", this.state.isAuthenticated)
    //             } else {
    //                 this.setState({ isAuthenticated: false });
    //                 this.getCSRF().then((csrfToken) => this.setState({ csrf: csrfToken }));
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    // //
    // whoami = () => {
    //     fetch("https://dev.silvi.io/api/whoami/", {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         credentials: "include",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("You are logged in as: " + data.email);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    // //
    // handlePasswordChange = (event) => {
    //     this.setState({ password: event.target.value });
    // }
    // //
    // isResponseOk(response) {
    //     if (response.status >= 200 && response.status <= 299) {
    //         return response.json();
    //     } else {
    //         throw Error(response.statusText);
    //     }
    // }
    // //
    // login = (event) => {
    //     event.preventDefault();
    //     fetch("https://dev.silvi.io/api/login/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-CSRFToken": this.state.csrf,
    //         },
    //         credentials: "include",
    //         body: JSON.stringify({
    //             email: this.state.email,
    //             password: this.state.password
    //         }),
    //     })
    //         .then(this.isResponseOk)
    //         .then((data) => {
    //             console.log("login data: ", data);
    //             this.setState({
    //                 isAuthenticated: true,
    //                 onBoarded: data.onboarded,
    //                 // rememberMe: true,
    //                 email: "",
    //                 password: "",
    //                 error: ""
    //             });
    //             this.fetchMe()
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             this.setState({ error: "Wrong email or password. Please try again." });
    //         });
    // }

    // getCookie = (cname) => {
    //     let name = cname + "=";
    //     let decodedCookie = decodeURIComponent(document.cookie);
    //     let ca = decodedCookie.split(';');
    //     for (let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) === ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) === 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }

    // //
    // logout = () => {
    //     this.getCSRF().then((csrf) => {
    //         // console.log(document.cookie)
    //         // const csrf = this.getCookie('csrftoken')
    //         console.log("csrf", csrf)
    //         // console.log("csrf state: ", this.state.csrf)
    //         fetch("https://dev.silvi.io/api/logout/", {
    //             method: "POST",
    //             credentials: "include",
    //             headers: {
    //                 "X-CSRFToken": csrf,
    //             },
    //         })
    //             .then(this.isResponseOk)
    //             .then((data) => {
    //                 console.log(data);
    //                 window.localStorage.clear();
    //                 window.location.href = "/login/"
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });

    //     });
    // };

    // onChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // onLoginClick = () => {
    //     const userData = {
    //         email: this.state.email,
    //         password: this.state.password
    //     };
    //     console.log("Login" + userData.email + " " + userData.password)
    // };

    // fetchMe = () => {
    //     axios.get(`https://dev.silvi.io/api/me`,
    //         { withCredentials: true })
    //         .then(response => {
    //             console.log("response.data.profile.interest_1: ", response.data.profile.interest_1)
    //             // console.log("response null? : ",response.data.profile.interest_1===null)
    //             console.log("onboarded data: ", response.data.onboarded)
    //             this.setOnboarding(response.data.onboarded)

    //             console.log("onboarded(state): ", this.state.onBoarded)
    //             console.log("response.data: ", response.data)
    //             return response.data
    //         })
    //         .catch(error => {
    //             console.error('Error', error);
    //         });
    // }


    render() {
        // if (this.state.isAuthenticated && this.state.onBoarded) {
        //     console.log("if state(onboard): ", this.state.onBoarded)
        //     return <Redirect to='/career-domains'></Redirect>
        // } else if (this.state.isAuthenticated && !this.state.onBoarded) {
        //     console.log("else state(onboard): ", !this.state.onBoarded)
        //     return <Redirect to='/onboarding'></Redirect>

        // }
        return (
            // <Container id="loginForm">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={6}>
                    <img src={SignInPic} style={{ width: '85%', paddingTop: '7em', alignContent: 'center' }} className="signIn-Logo" id="signinLogo" alt="logo" />
                </Grid>
                <Grid item md={6}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: '5em'
                        }}
                    >
                        <img src={logo} style={{ width: '30%', paddingBottom: '2em' }} className="signIn-Logo" id="signinLogo" alt="logo" />
                        <Typography component="h1" variant="h5">
                            Welcome to NUSFoodie!
                        </Typography>
                        <Typography component="h5">
                            Log In to your account now!
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            {/* <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button> */}
                            <Button variant="contained" sx={{ width: '100%', marginTop: '1em', marginBottom: '2em', backgroundColor: '#F5B102', color: 'white' }}>Log In</Button>
                            <Grid container>
                                <Grid item>
                                    {/* <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up Now!"}
                                    </Link> */}
                                    Don't have an account? <Link href="/signup" underline="none" color="#000A60" style={{ fontWeight: 'bold' }}>{'Sign Up Now!'}</Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        );
        {/* <Row style={{ paddingTop: "8em" }}>
                    <Col md={7} xs={6}>
                        <img src={SignInPic} style={{ width: '30%' }} className="signIn-Logo" id="signinLogo" alt="logo" />

                    </Col>
                    <Col md={5} xs={6}>
                        <h1>Welcome to NUSFoodie!</h1>
                        <h5>Log In to your account now!</h5>

                        <Form>
                            <Form.Group className="SignIn" controlId="emailId">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email address" />

                            </Form.Group>

                            <Form.Group className="SignIn" controlId="passwordId">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter password" />
                                <FormControl.Feedback type="invalid">Invalid Password</FormControl.Feedback>
                            </Form.Group> */}


        {/* {this.state.error && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.error}
                                    </div>
                                </div>
                            )} */}


        {/* <div className="d-grid gap-2" style={{ marginTop: '1em' }}>

                                <Button type="submit" style={{ backgroundColor: "#1A2E5A", marginTop: "1em" }}>Sign In</Button>

                            </div>

                        </Form>
                    </Col>
                </Row> */}


    };
};


export default Login;