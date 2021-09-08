import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Fab} from "@material-ui/core";
import NavigationIcon from '@material-ui/icons/Navigation';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    display: {
        position: "fixed",
        bottom: 20,
        opacity: '0.4',
        '&:hover': {
            opacity: '1'
        }

    }
}));



const HomeBtn = (props) => {
const history = useHistory();
    const classes = useStyles();
    const onHandleHome = () => {
        console.log('to home')
        history.push('/');
    }
    return (
        <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            className={classes.margin +', '+ classes.display}
            onClick={onHandleHome}>
            <NavigationIcon className={classes.extendedIcon}/>
            ГЛАВНАЯ
        </Fab>
    )
};

export default HomeBtn;