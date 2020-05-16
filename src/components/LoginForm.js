import React from 'react';
import Welcome from "./Welcome";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'введите логин'
        };
        this.click = this.click.bind(this);
        this._subal=this._subal.bind(this);
    }
    click(){
        this.setState({value: event.target.value});}
    _subal(event) {
        alert('Сочинение отправлено: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.click}>
                <label>
                    Сочинение:
                    <textarea value={this.state.value} onChange={this._subal} />        </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
export default index;

