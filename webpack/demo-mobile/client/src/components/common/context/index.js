import React, { Component } from 'react';

let Color = React.createContext('#fff');

class ContextA extends Component {

    constructor(props) {
        super(props);
    }
    contentFn = e => {
        alert(1);
    }

    handleClick = e => {
        alert(2);
    }
    render () {
        return (
            <Color.Provider value={this.contentFn}>
                12asd
                <ContextB onClick={this.handleClick} />
            </Color.Provider>
        );
    }

}

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
class ContextC extends Component {
    static contextType = Color
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        console.log(this.context());
    }

    render () {
        return (
            <div style={{ "color": this.context }}>
                1213
            </div >
        );
    }

}

export default ContextA;