
import SignUpPic from '../../assets/signup.png';
import logo from '../../assets/logoV.png'
import React, { Component } from "react";
import axios from 'axios';
import { Grid, Link, TextField, Typography, Box, Button } from '@mui/material';

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get("email"),
        password: data.get("password"),
    });
};

class SignUp extends Component {
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
                <Grid item md={6} xs={12}>
                    <img src={SignUpPic} style={{ width: '75%', paddingTop: '8em', alignContent: 'right' }} className="signIn-Logo" id="signinLogo" alt="logo" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: '5em',
                            // marginRight:'3em',
                            // paddingRight:'3em',
                            // paddingLeft:'5em',
                            width:'70%'
                        }}
                    >
                        <img src={logo} style={{ width: '30%', paddingBottom: '2em' }} className="signIn-Logo" id="signinLogo" alt="logo" />
                        <Typography component="h1" variant="h5">
                            Welcome to NUSFoodie!
                        </Typography>
                        <Typography component="h5">
                            Sign Up to be part of us!
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
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
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

                            <Button type="submit" variant="contained" sx={{ width: '100%', marginTop: '1em', marginBottom: '2em', backgroundColor: '#F5B102', color: 'white' }}>Sign Up</Button>
                            <Grid container>
                                <Grid item>
                                    {/* <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up Now!"}
                                    </Link> */}
                                    Already have an account? <Link href="/login" underline="none" color="#000A60" style={{ fontWeight: 'bold' }}>{'Log In Now!'}</Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        );
    };
};


export default SignUp;