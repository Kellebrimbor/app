import React from 'react'
import ReactDOM from "react-dom";

class Peoples extends React.Component {

    constructor(props) {

        super(props);


        this.state = {
            firstName: "Имя",
            lastName: "Фамилия",
            patronymic: "Отчество",
            position: "Должность",
            rootPrivileges: "Права администратора",

        }

    }


    render() {
        return (
            <div>
                <div>
                    <p> {this.props.email}</p>
                    <p> {this.props.password}</p>
                    <p> {this.state.firstName}</p>
                    <p> {this.state.lastName}</p>
                    <p> {this.state.patronymic}</p>
                    <p> {this.state.position}</p>
                    <p> {this.state.rootPrivileges}</p>
                </div>
                <div>
                    <button>
                        сменить пароль
                    </button>
                    <button>редактировать профиль</button>
                    <button>удалить профиль</button>
                </div>
            </div>
        );

    }
}

export default Peoples;