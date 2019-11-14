import React, { Component } from 'react'
import Test from '@/view/test'

import './app.less'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>
                hello world
                            <Test></Test>
            </div>
        );
    }
}

export default App;