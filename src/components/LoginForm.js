import React from 'react';
import Welcome from "./Welcome";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'введите логин',
            value1:'введите пароль'
        };
        this.click = this.click.bind(this);
        this._subal=this._subal.bind(this);
    }
    click(){
        this.setState(
            {value: event.target.value});}

_subal(event) {
        alert('вход выполнен, : ' + this.state.value + '   подождите.'+ ' пароль '+ this.state.value1);
    event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this._subal}>
                <label>
                    логин:
                    <textarea value={this.state.value} onChange={this.click} />        </label>
                <label>
                    пароль:
                    <textarea value={this.state.value1}  />        </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
export default LoginForm;

