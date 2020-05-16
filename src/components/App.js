import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from "./Welcome";

class App extends React.Component {
    render() {
        return(<div>
            <Welcome kiks={5} state={"Kel"}/>
            <Welcome kiks={17} name="Jopa"/>
            <Welcome kiks={0}name="Programmer"/>
            <Welcome kiks={99}name="228"/>
        </div>)
    }
}

export default App;