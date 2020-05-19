import React from 'react';
import Peoples from "./Peoples";

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
        axios.post('src/components/Peoples.js',
            {

          email:  this.state.email,
          password: this.state.password

        },
            {withCredentials: true})

            .then(function (responnse ) {
               responnse.data

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
            </form>
        );

    }

}

export default LoginForm;

