import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';

export default function Router (props) {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home shops={props.shops} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}