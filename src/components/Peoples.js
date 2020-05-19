import React from 'react'
import ReactDOM from "react-dom";

class Peoples extends React.Component {

    constructor(props) {

        super(props);


        this.state = {
            login: "Логин :",
            password: "Пароль :",
            firstName: "Имя :",
            lastName: "Фамилия :",
            patronymic: "Отчество :",
            position: "Должность :",
            rootPrivileges: "Права администратора :",

        }

    }


    render() {
        return (
            <div>
                <table border={"5"} width={"50%"} >
                    <td >
                        <tr > {this.state.login}</tr>
                        <tr> {this.state.password}</tr>
                        <tr> {this.state.firstName}</tr>
                        <tr> {this.state.lastName}</tr>
                        <tr> {this.state.patronymic}</tr>
                        <tr> {this.state.position}</tr>
                        <tr> {this.state.rootPrivileges}</tr>
                    </td>
                    <td>
                        <tr> {this.props.login}</tr>
                        <tr> {this.props.password}</tr>
                        <tr> {this.props.firstName}</tr>
                        <tr> {this.props.lastName}</tr>
                        <tr> {this.props.patronymic}</tr>
                        <tr> {this.props.position}</tr>
                        <tr> {this.props.rootPrivileges}</tr>
                    </td>
                <td>
                    <tr>
                    <button>
                        сменить пароль
                    </button>
                    </tr>
                    <tr>
                    <button>редактировать профиль</button>
                    </tr>
                    <tr >
                    <button >удалить профиль</button>
                    </tr>
                </td>
                </table>
            </div>
        );

    }
}

export default Peoples;