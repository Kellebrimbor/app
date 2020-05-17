import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: 'введите логин',
            password: 'введите пароль',
        };
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    loginChange(event) {
        this.setState(
            {login: event.target.value});
    }
    passwordChange(event) {
        this.setState(
            {password: event.target.value});
    }

    submit(event) {
        const axios = require('axios').default;
        axios.post('http://localhost:8080/src/components/testServer.php', {
          login:  this.state.login,
          password: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        alert('вход выполнен, : ' + this.state.login + '   подождите. пароль ' + this.state.password);
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    логин:
                    <textarea value={this.state.login} onChange={this.loginChange} /> </label>
                    пароль:
                    <textarea value={this.state.password} onChange={this.passwordChange}/>
                <input type="submit" value="Отправить"/>
            </form>
        );
    }
}

export default LoginForm;

