import { renderToString } from 'react-dom/server';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import React from 'react'
// 静态路由配置
import { renderRoutes } from 'react-router-config';

import routes from '../client/routes/config'

function asyncData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1])
        }, 1000)
    })
}

export const render = (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} >
                {
                    renderRoutes(routes)
                }
            </StaticRouter>
        </Provider>

    );
    return content
}