import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from '../route'

import { createClientStore } from '../redux/store'
import { Provider } from 'react-redux'
import './App.css'
const App = () => {
    return (
        <Provider store={createClientStore()}>
            <BrowserRouter>
                <Router></Router>
            </BrowserRouter>
        </Provider>

    )
}
export default App