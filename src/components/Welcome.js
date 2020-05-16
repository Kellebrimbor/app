import React from 'react';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.kiks
        };
        this.click = this.click.bind(this);
    }

    click(){
        this.setState({count: this.state.count+1});
    }

    render() {
        return (
            <h1>Привет, {this.props.name} это все я (я пнут {this.state.count} )
            <button onClick={this.click}>пни меня</button>
        </h1>);

    }
}

export default Welcome;