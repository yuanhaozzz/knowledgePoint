import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import routes from './routes/config'

export default function () {
    return (
        <Fragment>
            {
                routes.map(routes => (
                    <Route {...routes}></Route>
                ))
            }
        </Fragment>
    )
}