  import React, {useEffect, useState} from "react";
import './App.scss';
import Home from "./components/pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {asyncloadShops} from "./redux/store/reduserShops";
import {CurrentShop} from "./redux/store/reducerCurrentShop";
import {withRouter, Route, Switch} from "react-router-dom";
import Template from "./components/pages/Template";
import NotFound from "./components/pages/NotFound";
import Admin from "./components/pages/Admin";

export default withRouter(function App({location}) {
    const shops = useSelector(state => state.shopsReducers.shops);
    console.log(shops, ' - shops')
    const [state, setState] = useState([]);
    // const [currentPage, setCurrentPage] = useState([]);
    const dispatch = useDispatch();
    let current = '';

    useEffect(() => {
        dispatch(asyncloadShops())
        console.log('dispatch');
        // let current = localStorage.getItem('currentPage');
        // if(current !== null) {
        //     console.log('ДАНІ Є В СТОРІДЖ APP');
        //     dispatch(CurrentShop(JSON.parse(current)));
        // }

    },  []);

    useEffect(() => {
        setState(shops);
    }, [shops]);

    // useEffect(() => {
    //     console.log('URL CHANGES');
    //     dispatch(CurrentShop(current));
    // }, [location.pathname]);

    return (
            <Switch>
                <Route exact path="/">
                    <Home shops={shops} />
                </Route>
                {
                    state.map(item => {
                        return (
                            <Route path={`/${item.url}`} key={item._id}>
                                <Template {...item}/>
                            </Route>
                        )
                    })
                }
                <Route path='/admin' component={Admin} />
                <Route component={NotFound} />

            </Switch>
    );

})

