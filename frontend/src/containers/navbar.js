// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { makeStyles } from "@material-ui/core/styles";
// // import AdbIcon from '@mui/icons-material/Adb';
// import NUSFoodieVlogo from "../assets/logoV.png"

// import headerBackground from "../../src/assets/nav.jpeg";

// const pages = ['Canteen', 'Cuisine', 'Food Review'];
// const settings = ['Change Password', 'Logout'];

// const useStyles = makeStyles((theme) => ({
//     header: {
//         backgroundImage: `url(${headerBackground})`,
//         // backgroundImage: headerBackground,
//     },
//   }));


// function ResponsiveAppBar2() {
//     const classes = useStyles();

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <AppBar position="static" className='classes.header'>
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Box sx={{ flexGrow: 1 }}>
//                         <img src={NUSFoodieVlogo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} alt="NUSFoodie"
//                             style={{ minWidth: "8.5em", maxWidth: "9.5em", marginBottom: "14px", paddingTop: "10px" }} />
//                     </Box>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     {/* <Box sx={{ flexGrow: 1 }}>
//                         <img src={NUSFoodieVlogo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} alt="NUSFoodie1"
//                             style={{ minWidth: "8.5em", maxWidth: "9.5em", marginBottom: "14px", paddingTop: "10px" }} />
//                     </Box> */}

//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'white', display: 'block' }}
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                     </Box>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center">{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default ResponsiveAppBar2;

import * as React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import NUSFoodieVlogo from "../assets/logoV.png"
import headerBackground from "../assets/nav.jpeg";
import { width } from '@mui/system';

// import Login from '../containers/Authentication/login';

// const auth = new Login()

const ResponsiveAppBar = (props) => {
    // const { isAuthenticated, onBoarded, csrf } = props;
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [profilePic, setProfilePic] = React.useState("")

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // React.useEffect(() => {
    //     fetchMe();
    // }, [])

    // const fetchMe = () => {
    //     axios.get(`https://dev.silvi.io/api/me`,
    //         { withCredentials: true })
    //         .then(response => {
    //             console.log(response.data)
    //             console.log(response.data.profile.profile_picture)
    //             setProfilePic(response.data.profile.profile_picture)
    //             console.log(profilePic)
    //             return response.data
    //         })
    //         .catch(error => {
    //             console.error('Error', error);
    //         });
    // }

    const useStyles = makeStyles((theme) => ({
        navlinks: {
            display: "flex",
        },
        customHeight: {
            minHeight: '10000000em'
        },
        logo: {
            // minHeight: '90px',
            minWidth: 30,
            maxHeight: 40,
            // width: 40
            // maxWidth: "10vh"
        },
        button: {
            display: "flex",
            justifyContent: "flex-end"
        }

    }));

    const classes = useStyles();


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar style={{ background: '#FFC95F', boxShadow: 'none' }}>
            <Container maxWidth="md">
                <Toolbar disableGutters className={classes.customHeight}>
                    <Box style={{ width: "20%" }} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, pt: 0 }}>
                        <IconButton
                            size="medium"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="default"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ flexGrow: 1 }}>
                            <img src={NUSFoodieVlogo} alt="NUSFoodie" style={{ minWidth: "3.5em", maxWidth: "5.5em", marginBottom: "14px", paddingTop: "10px" }} />
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Menu
                            id="menu-appbar"
                            className={classes.navlinks}
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleCloseNavMenu} className={classes.button} component={Link} to="/establishments">
                                <Typography textAlign="center">Canteens</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} className={classes.button} component={Link} to="/cuisines">
                                <Typography textAlign="center">Cuineses</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} className={classes.button} component={Link} to="/food-review">
                                <Typography textAlign="center">Food Review</Typography>
                            </MenuItem>

                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >

                                <ListItemButton onClick={handleClick}>
                                    <ListItemText primary="Resources" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                </Collapse>
                            </List>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, width: '30%', justifyContent: "flex-end", m: 1 }}>


                        <img src={NUSFoodieVlogo} alt="NUSFoodie_" className={classes.logo} style={{width:'20%'}}/>

                        <Box sx={{ flexGrow: 1 }} />

                        <Button onClick={handleCloseNavMenu} component={Link} to="/establishments"
                            sx={{ my: 1, color: 'black', display: 'block', fontSize: "10px" }}>
                            Canteen
                        </Button>
                        <Button onClick={handleCloseNavMenu} component={Link} to="/cuisines" sx={{ my: 1, color: 'black', display: 'block', fontSize: "10px" }}>
                            Cuisine
                        </Button>
                        <Button onClick={handleCloseNavMenu} component={Link} to="/food-review" sx={{ my: 1, color: 'black', display: 'block', fontSize: "10px" }}>
                            Food Review
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                {/* {profilePic.length < 0 ?
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> : <Avatar alt="profilepic" src={profilePic} />} */}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '25px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >



                            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/change-password">
                                <Typography textAlign="center" fontSize="10px">Change Password</Typography>
                            </MenuItem>

                            {/* <MenuItem onClick={() => auth.logout()} >
                                <Typography textAlign="center" fontSize="10px">Log Out</Typography>
                            </MenuItem> */}

                            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/logout">
                                <Typography textAlign="center" fontSize="10px">Log Out</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default ResponsiveAppBar;