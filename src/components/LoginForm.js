import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'введите логин',
            password: 'введите пароль',

        };

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);

    }

    loginChange(event) {
        this.setState(

            {email: event.target.value});

    }
    passwordChange(event) {
        this.setState(

            {password: event.target.value});

    }

    submit(event) {
        const axios = require('axios').default;
        axios.post('src/components/testServer.php',
            {

          email:  this.state.email,
          password: this.state.password

        },
            {withCredentials: true})

            .then(function (response) {
                console.log(response.config.data);
                console.log("32");

            })

            .catch(function (error) {
                console.log(error);
                console.log("23");

            });

        alert('вход выполнен, : ' + this.state.email + '   подождите. пароль ' + this.state.password);
        alert(JSON.stringify(this.state));
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    логин:
                    <textarea value={this.state.email} onChange={this.loginChange} /> </label>
                    пароль:
                    <textarea value={this.state.password} onChange={this.passwordChange}/>
                <input type="submit" value="Отправить"/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <button>1</button>
                </Route>
                <Route exact path="/tobe">
                    <button>2</button>
                </Route>
            </Switch>
        </BrowserRouter>
            </form>
        );

    }

}

export default LoginForm;

