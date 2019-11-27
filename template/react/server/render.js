
import React from 'react'
import { renderToString } from 'react-dom/server';
// 服务端渲染 静态路由
import { StaticRouter } from 'react-router-dom';
// 静态路由配置
import { renderRoutes, matchRoutes } from 'react-router-config';
import Routes from '@/router'
import { Provider } from 'react-redux'



exports = function useStaticRouter (req, store) {
    let toString = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path}>
                {
                    renderRoutes(Routes.routes)
                }
            </StaticRouter>
        </Provider>
    )
    return toString
}
