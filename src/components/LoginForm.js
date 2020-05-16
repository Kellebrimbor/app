import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: 'введите логин',
            password: 'введите пароль',
        };
        this.click = this.click.bind(this);
        this.click1=this.click1.bind(this);
        this.submit = this.submit.bind(this);
    }

    click(event) {
        this.setState(
            {login: event.target.login});
    }
    click1(event) {
        this.setState(
            {password: event.target.password});
    }

    submit(event) {
        alert('вход выполнен, : ' + this.state.login + '   подождите. пароль ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    логин:
                    <textarea value={this.state.login} onChange={this.click} /> </label>
                    пароль:
                    <textarea value={this.state.password} onChange={this.click1}/>
                <input type="submit" value="Отправить"/>
            </form>
        );
    }
}

export default LoginForm;

