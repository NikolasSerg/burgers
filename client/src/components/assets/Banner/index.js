import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";


const Banner = (props) => {
    const [image, setImage] = useState(false);
    const [page, setPage] = useState(false);
    const currentShop = useSelector(state => state.currentShopReducer.currentShop);

    useEffect(() => {
        if(localStorage.getItem('currentPage')) {
            let data = JSON.parse(localStorage.getItem('currentPage'))
            setPage(data);
            import(`../img/${data.img}`).then(data => {
                setImage(data.default)
            })
        } else {
            import(`../img/${currentShop.img}`).then(data => {
                setImage(data.default)
            });
            setPage(currentShop);
        }

    }, [currentShop])

    useEffect(() => {
        if(localStorage.getItem('currentPage') !== null) {
            localStorage.getItem('currentPage')
        }
    } , [])

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
        <div>
            <div className={classes.banner + ' ' + classes.media}>
                <img src={image} alt="banner" className={classes.img}/>
            </div>
        </div>
    )
};

export default Banner;