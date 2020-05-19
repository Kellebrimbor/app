import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from "./components/LoginForm";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Peoples from "./components/Peoples";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <LoginForm/>
            </Route>
            <Route exact path="/tobe">
                <Peoples email={"names"}password={"hfhdhdfgfd"}/>
                <Peoples email={"dfd"}password={"hfhdhdfgfd"}/>
                <Peoples email={"rere"}password={"fdfdfdfdd"}/>
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'),
    document.getElementById('account'),
);


