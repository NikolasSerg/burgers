import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "../Menu";

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

export default function ButtonAppBar(props) {
    const classes = useStyles();

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
                    <Button color="inherit" className={classes.icon}>
                        <img src="/assets/img/burger_icon_32*32-2.png" alt="icon"/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
