import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";


const Banner = (props) => {
    const [image, setImage] = useState();
    const currentShop = useSelector(state => state.currentShopReducer.currentShop);

    useEffect(() => {
        if (currentShop !== null) {
            import(`../img/${currentShop.img}`).then(data => {
                console.log(data, ' - data IMG');
                setImage(data.default)
            })
        }
    }, [currentShop])

    const useStyles = makeStyles((theme) => ({
        banner: {
            width: '100%',
            height: '500px',
            overflow: 'hidden',
            position: 'relative'
        },
        img: {
            width: '100%',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '-10'
        },
        media: {
            [theme.breakpoints.between('xs', 'sm')]: {
                height: '220px'
            },
            [theme.breakpoints.up('sm')]: {
                height: '400px'
            },
            [theme.breakpoints.up('md')]: {
                height: '470px'
            },
            [theme.breakpoints.up('lg')]: {
                height: '600px'
            }
        }
    }))

    const classes = useStyles();

    return (
        <div className={classes.banner + ' ' + classes.media}>
            <img src={image} alt="banner" className={classes.img}/>
        </div>
    )
};

export default Banner;