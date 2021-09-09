import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "../Menu";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    icon: {
        borderRadius: '50%',
        '&:hover': {
            filter: 'grayscale(100%)'
        }
    }

}));


export default function Navbar({...props}) {
    const classes = useStyles();
    const history = useHistory();
    const onHandleMain = () => {
        history.push('/')
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu props='left'/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.address}
                    </Typography>
                    <Button color="inherit" className={classes.icon} onClick={onHandleMain}>
                        <img src="/assets/img/burger_icon_32*32.png" alt="icon"/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

