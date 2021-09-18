import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Button, CssBaseline, FormControl, InputLabel, MenuItem, Select,} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {loadCurrentPage} from "../../redux/store/reducerCurrentShop";
import currentShopReducer, {loadCurrentShop} from "../../redux/store/reducerCurrentShop";

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: "300px",
        height: "250px",
        paddingBottom: "1rem",
        borderRadius: "15px",
        fontFamily: "'Montserrat', sans-serif",
        color: "#37474f"
    },
    position: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    select: {
        width: "250px"
    },
    button: {
        color: "primary",
        margin: "1.5rem auto",
        width: "200px"
    }
})
let initialState = {
    currentShop: '',
    disabled: true
}

function Home(props) {
    const history = useHistory();
    const classes = useStyles();
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    // const currentShop = useSelector(state => state.currentShopReducer.currentShop)

    const onHandleSelect = (event) => {
        let newState = {...state};
        newState.currentShop = event.target.value;
        newState.disabled = false;

        props.urlChange(event.target.value)

        setState(newState);
    }

    const urlHandle = () => {
        console.log('click BTN');
        history.push(`/${state.currentShop.url}`);
        dispatch(loadCurrentShop(state.currentShop));
    }
    useEffect(() => {
        console.log('RELOAD HOME')
    } , [])
    return (
        <Box sx={{
            height: "100vh",
            backgroundImage: "url('./assets/img/burgerHome.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className={classes.position}>
            <CssBaseline />
            <h1 className='font-effect-fire-animation'>The HOTTEST Burgers</h1>
            <div className={`${classes.wrapper + ' ' + classes.position}`}>
                <h2 className='font-effect-shadow-multiple'>МИ В ВАШОМУ МІСТІ</h2>
                <FormControl variant="outlined">
                    <InputLabel id='burger-shops'>burgers shop</InputLabel>
                    <Select labelId='burger-shops' label='burgers shop' className={classes.select}
                            onChange={onHandleSelect} value={state.currentShop}>
                        {
                            props.shops.map((item, index) => {
                                return <MenuItem key={index} value={item}>{item.address}</MenuItem>
                            })
                        }
                    </Select>
                    <Button variant={state.disabled === true ? 'outlined' : 'contained'}
                            style={{margin: "1.5rem auto", width: "200px"}}
                            color="primary"
                            disabled={state.disabled}
                            onClick={urlHandle}
                    >
                        ПЕРЕЙТИ
                    </Button>
                </FormControl>
            </div>

        </Box>
    )

}

export default Home;