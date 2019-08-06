import React, { Component } from 'react';

export let {Provider, Consumer} = React.createContext('#fff');
import ContextB from './ComponentB'

class ContextA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }
    contentFn = e => {
        alert(1);
    }

    handleClick = e => {
        alert(2);
    }

    handleColor = e => {
        this.setState({
            color: 'blue'
        })
    }

    render () {
        return (
            <Provider value={this.state.color}>
                12asd
                <button onClick={this.handleColor}>变色</button>
                <ContextB onClick={this.handleClick} />
            </Provider>
        );
    }

}


export default ContextA;