import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import currentPageReducer from "../../../redux/store/reducerCurentPage";


const Banner = (props) => {

    const currentShop = useSelector(state => state.currentPageReducer.currentShop);

    const useStyles = makeStyles((theme) => ({
        banner: {
            width: '100%',
            height: '500px',
            background: `${currentShop.img}`
        },
        media: {
            [theme.breakpoints.between('xs', 'sm')]: {
                height: '220px',
                background: 'green'
            },
            [theme.breakpoints.up('sm')]: {
                height: '350px',
                background: 'brown'
            },
            [theme.breakpoints.up('md')]: {
                height: '450px',
                background: 'yellow'
            },
            [theme.breakpoints.up('lg')]: {
                height: '550px',
                background: 'red'
            }
        }
    }))

    const classes = useStyles();

    return (
        <div className={classes.banner + ' ' + classes.media}>
            <p>{currentShop.url}</p>
        </div>
    )
};

export default Banner;