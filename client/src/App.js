  import React, {useEffect, useState} from "react";
import './App.scss';
import Home from "./components/pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {asyncloadShops} from "./redux/store/reduserShops";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Bandera from "./components/pages/Bandera";
import Menu from "./components/assets/Menu";

function App() {
    const shops = useSelector(state => state.shopsReducers.shops);
    console.log(shops, ' - shops')
    const [state, setState] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncloadShops())
        console.log('dispatch')
    }, []);
    useEffect(() => {
        let newState = {};
        shops.map((i) => {
            newState[i['url']] = i
        })
        setState(newState);
    }, [shops]);

    const test = 'left'

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home shops={shops}/>
                </Route>
                <Route path="/bandera">
                    <Bandera  {...state.bandera}/>
                </Route>
                <Route path="/menu" >
                    <Menu props='left' />
                </Route>

            </Switch>
        </BrowserRouter>
    );

}

export default App;
