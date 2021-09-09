  import React, {useEffect, useState} from "react";
import './App.scss';
import Home from "./components/pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {asyncloadShops} from "./redux/store/reduserShops";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Template from "./components/pages/Template";
import NotFound from "./components/pages/NotFound";

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
        // let newState = {};
        // shops.map((i) => {
        //     newState[i['url']] = i
        // })

        // setState(newState);
        setState(shops);
    }, [shops]);

    const test = 'left'
    const onChangeUrl = () => {
        console.log('TEST')
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home shops={shops} urlChange={onChangeUrl}/>
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
        </BrowserRouter>
    );

}

export default App;
