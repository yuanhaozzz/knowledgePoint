import { renderToString } from 'react-dom/server';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import React from 'react'
// 静态路由配置
import { matchRoutes, renderRoutes } from 'react-router-config';

import routes from './client/routes/config'


export const render = (req, store) => {

    // 返回匹配路由的数组。
    const matchedRoutes = matchRoutes(routes, req.path)
    //构建服务端的路由
    matchedRoutes.forEach(routes => {
        if (routes.route.loadData) {
            routes.route.loadData(store)
        }
    })
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