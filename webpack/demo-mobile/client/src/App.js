
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

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
                    {renderRoutes(routes)}
                </BrowserRouter>
            </Provider>

        )
    }
}

export default App