import React, { Component } from 'react';
import Child from './Child'

class Ref extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            text: 'asd'
        }
    }

    handleFocus = e => {
        this.refs.input.focus()
    }

    handleInoutChange = e => {
        console.log(e.target.name)
        this.setState({
            text: this.refs.input.value
        })
    }

    getChild = e => {
        let child = this.refs.child
        child.setChildData()
        console.log(child)
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.text} ref="input" name="text" onChange={this.handleInoutChange}/>
                <button onClick={this.handleFocus}>获取焦点</button>
                {this.state.text}
                <button onClick={this.getChild}>child</button>
                <Child ref="child"></Child>
            </div>
        );
    }

}


export default Ref;