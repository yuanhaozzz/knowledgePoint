import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import EntryRouterAuth from '@/components/common/entry-router-auth'


import './app.less'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <Router>
                <Switch>
                    <EntryRouterAuth></EntryRouterAuth>
                </Switch>
            </Router>

        );
    }
}

export default App;