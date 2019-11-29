import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import EntryRouterAuth from './components/common/entry-router-auth'

import { clientStore } from './store/store'
import { Provider } from 'react-redux'

import './assets/css/reset.less';
import './app.less'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <Provider store={clientStore()}>
                <Router>
                    <Switch>
                        <EntryRouterAuth></EntryRouterAuth>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;