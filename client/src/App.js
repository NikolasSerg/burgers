import React, {useEffect} from "react";
import './App.scss';
import Home from "./components/Home";
import {useDispatch, useSelector} from "react-redux";
import {asyncloadShops} from "./redux/store/reduserShops";
import {Container} from '@material-ui/core';

function App() {
    const shops = useSelector(state => state.shopsReducers.shops);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncloadShops())
        console.log('dispatch')
    }, []);

    return (
        <Home shops={shops}/>
    );

}

export default App;
