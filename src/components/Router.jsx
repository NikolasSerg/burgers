import React from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import Admin from './Admin';
import Burgershop from "./Burgershop";
import NotFound from "./NotFound";

export default function (props) {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/hot-burgers/" component={Home} />
                <Route exact path="/hot-burgers/not-found" component={NotFound} />
                <Route path="/hot-burgers/:urlburer" component={Burgershop} />
                <Route path="/hot-burgers/admin" component={Admin} />

            </Switch>
        </BrowserRouter>
    )
}