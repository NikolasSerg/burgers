import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
// import Admin from './MenuAdmin';
import Burgershop from "./Burgershop";
// import NotFound from "./NotFound";

export default function Router (props) {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home shops={props.shops} />
                </Route>
                <Route path="/hot-burgers/:urlburer" component={Burgershop} />
                {/*<Route path="/hot-burgers/admin" component={Admin} />*/}
                {/*<Route component={NotFound} />*/}

            </Switch>
        </BrowserRouter>
    )
}