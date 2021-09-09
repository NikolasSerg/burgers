import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    baner: {
        width: '100%',
        height: '500px',
        background: 'red'
    }
}))

const Banner = (props) => {
    const classes = useStyles();

    return (
    <div className={classes.baner}>

    </div>
    )
};

export default Banner;