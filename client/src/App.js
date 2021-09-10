  import React, {useEffect, useState} from "react";
import './App.scss';
import Home from "./components/pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {asyncloadShops} from "./redux/store/reduserShops";
import {withRouter, BrowserRouter, Route, Switch} from "react-router-dom";
import Template from "./components/pages/Template";
import NotFound from "./components/pages/NotFound";

export default withRouter(function App({location}) {
    const shops = useSelector(state => state.shopsReducers.shops);
    console.log(shops, ' - shops')
    const [state, setState] = useState([]);
    const [stateTest, setstateTest] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncloadShops())
        console.log('dispatch')
    }, []);
    useEffect(() => {
        setState(shops);
    }, [shops]);

    useEffect(() => {
        console.log('URL CHANGES')
    }, [location.pathname]);
    const test = 'left'
    const onChangeUrl = () => {
        console.log('TEST')
    }

    const stateTestConst = (item) => {
        console.log('IN APP')
        setstateTest(item)
    }

    return (
            <Switch>
                <Route exact path="/">
                    <Home shops={shops} urlChange={onChangeUrl} test={stateTestConst}/>
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
                <Route component={NotFound} />

            </Switch>
    );

})

