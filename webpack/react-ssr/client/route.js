import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from './src/home'
import Login from './src/Login'

export default function () {
    return (
        <Fragment>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Login" component={Login}></Route>
        </Fragment>
    )
}