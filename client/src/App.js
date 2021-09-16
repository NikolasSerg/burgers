  import React, {useEffect, useState} from "react";
import './App.scss';
import Home from "./components/pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {asyncloadShops} from "./redux/store/reduserShops";
import {loadCurrentPage} from "./redux/store/reducerCurrentPage";
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

    useEffect(() => {
        dispatch(asyncloadShops())
        console.log('dispatch');
        let current = localStorage.getItem('currentPage');
        if(current !== null) {
            console.log('ДАНІ Є В СТОРІДЖ APP');
            dispatch(loadCurrentPage(JSON.parse(current)));
        }

    },  []);

    useEffect(() => {
        setState(shops);
    }, [shops]);

    useEffect(() => {
        console.log('URL CHANGES')
    }, [location.pathname]);

    const onChangeUrl = (item) => {
        console.log(item, ' - item in App');
        // setCurrentPage(item);
        dispatch(loadCurrentPage(item));
        // let current = JSON.stringify(item);
        // localStorage.setItem('currentPage', current);
        // dispatch(loadCurrentPage(current));
    }

    return (
            <Switch>
                <Route exact path="/">
                    <Home shops={shops} urlChange={onChangeUrl} />
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

