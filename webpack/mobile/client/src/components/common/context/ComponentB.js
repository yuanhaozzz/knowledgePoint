import React, { Component } from 'react';
import ContextC from './ComponentC'

class ContextB extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = e => {
        alert(11);
    }

    render () {
        return (
            <div>
                12
                <ContextC onClick={this.handleClick} />
            </div>
        );
    }

}

export default ContextB