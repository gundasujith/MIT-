import react from "react"
// import AppBar from "@material-ui/core/AppBar"
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import useScrollTrigger from "@material-ui/core/useScrollTrigger"
// import Toolbar from "@material-ui/core/Toolbar"
// import Typography from "@material-ui/core/Typography"
// import {makeStyles} from "@material-ui/styles"
// import Tab from "@material-ui/core/Tab"
// import Tabs from "@material-ui/core/Tabs"
// import Button from "@material-ui/core/Button"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from "react";
import { makeStyles } from '@mui/styles';
import logo from "../../assets/logo.svg"
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import HelloWorld from "./HelloWorld"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
        target: window ? window() : undefined,
    });

    return react.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
export const useStyles=makeStyles( (theme)=>{

        return ({
            toolbarMargin: {...theme.mixins.toolbar, marginTop:"200px !important"},
            logo:{
                height:"7em",

            },
            tabContainer:{
                marginLeft:"auto"
            },
            mainLogoButton:{
                padding:0,
            },
            test1: {
                fontFamily:"Raleway",
                textTransform:"none",
                fontWeight:700,
                minWidth:10,
                marginLeft: "25px",

            },

            expanded: {
                borderRadius:"200px",
                color: "red ",
                textTransform:"lowercase",


            },
            menu:{
                backgroundColor:theme.palette.secondary
            },
            menuItem:{
                fontSize:"3rem",
                fontWeight: 700,
                textTransform:"none",
                fontFamily:"Raleway",
                color: theme.palette.primary.main

            }



        })

    }
)



export const Header =(props)=>{

    const[value, setValue]=useState(0);
    const[anchorEl, setAnchorEl]=useState(null)
    const [open, setOpen]=useState(false)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    };
    const handleChange=(event,updatedValue)=>{
        console.log(updatedValue);
        setValue(updatedValue);

    }
    const buttonStyles={  backgroundColor: 'primary.main',
        fontSize: 15,
        verticalAlign: 'sub',
        color:"secondary.contrastText",
        borderRadius:"10px",
        fontFamily:"pacifico",
        textTransform:"lowercase",
        fontStyle:"italic",
        marginRight:"25px",
        height:"30px",
        fontsize:"1rem",
        textDecoration:"none",

    }
    const classes=useStyles(props);
    useEffect(()=>{
        console.log(`test0 ${value}`)
        if(window.location.pathname==="/" && value !==0){

            setValue(0)
        }else if(window.location.pathname==="/services" && value !==1){
            setValue(1)
        }else if(window.location.pathname==="/revolution" && value !==2){
            setValue(2)
        }else if(window.location.pathname==="/about" && value !==3){
            setValue(3)
        }else if(window.location.pathname==="/contact" && value !==4){
            setValue(4)
        } else if(window.location.pathname==="/customsoftware" && value !==1){
            setValue(1)
        }else if(window.location.pathname==="/mobileapps" && value !==1){
            setValue(1)
        }else if(window.location.pathname==="/websites" && value !==1){
            setValue(1)
        }


    },[value] )
    return(
    <React.Fragment>
        <ElevationScroll>
            <AppBar  position="static" elevation={0} color="secondary" >
                <Toolbar disableGutters>
                    <Button  className={classes.mainLogoButton} component={Link} to="/" onClick={()=> setValue(0)}><img className={classes.logo} alt="Company Logo" src={logo}/></Button>

                    <Tabs className={classes.tabContainer} value={value} onChange={handleChange}>
                        <Tab className={classes.test1} component={Link} to="/" label="Home"/>
                        <Tab aria-owns={anchorEl ? "SimpleMenu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} className={classes.test1} onClick={handleClick} component={Link} to="/services" label="Services"/>
                        <Tab className={classes.test1}  component={Link} to="/revolution" label="The Revolution"/>
                        <Tab className={classes.test1}  component={Link} to="/about" label="About Us"/>
                        <Tab className={classes.test1}  component={Link} to="/contact" label="Contact Us"/>
                    </Tabs>
                    <Box
                        component={Link}
                        sx={buttonStyles}
                        to="/createdataset"
                    >  Add Data Set </Box>

                    <Menu
                        id="Menu"
                        anchorEl={anchorEl}
                        open={open}
                        onMouseLeave={handleClose}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        classes={{paper:classes.menu}}
                        elevation={0}

                    >
                        <MenuItem onClick={handleClose} classes={{root:classes.menuItem}} component={Link} to="/services">Services</MenuItem>
                        <MenuItem onClick={handleClose} classes={{root:classes.menuItem}} component={Link} to="/customsoftware">CustomSoftware</MenuItem>
                        <MenuItem onClick={handleClose} classes={{root:classes.menuItem}} component={Link} to="/mobileapps">Mobile Apps</MenuItem>
                        <MenuItem onClick={handleClose} classes={{root:classes.menuItem}} component={Link} to="/websites">Websites</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </React.Fragment>
    )

}


