import React, { Component } from 'react';

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    setChildData = e => {
        this.setState({
            color: 'blue'
        })
    }

    render () {
        return (
            <div>
                refschild <br/>
                {
                    this.state.color
                }
            </div>
        );
    }

}


export default Child;