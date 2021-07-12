import React from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import Admin from './Admin';
import Bandera from "./Bandera";
import Soborna from "./Soborna";
import Independ from "./Independ";

export default function (props) {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bandera" component={Bandera} />
                <Route exact path="/soborna" component={Soborna} />
                <Route exact path="/independ" component={Independ} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}