import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from "./components/LoginForm";
import {BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <LoginForm/>
            </Route>
            <Route exact path="/tobe">
                <button>jopa</button>
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);


