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
                <Peoples login={"names"}password={"hfhdhdfgfd"} firstName={"alex"}lastName={"петров"}
                patronymic={"иванович"}position={"director"}rootPrivileges={"admin"}/>

            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'),
    document.getElementById('account'),
);


