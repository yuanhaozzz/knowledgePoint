
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import './App.less'
import store from '@/redux/store'
import routes from '@/router/config'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {/* {
                        routes.map(item => (
                            <Route path={item.path} component={item.component}></Route>
                        ))
                    } */}
                    {renderRoutes(routes)}
                </BrowserRouter>
            </Provider>

        )
    }
}

export default App