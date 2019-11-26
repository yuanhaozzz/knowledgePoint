
import React from 'react'
import { renderToString } from 'react-dom/server';
// 服务端渲染 静态路由
import { StaticRouter } from 'react-router-dom';
// 静态路由配置
import { renderRoutes } from 'react-router-config';
import Routes from '@/router'
let fs = require('fs')
let express = require('express')
const app = express();

app.use(express.static('dist'))

function useStaticRouter (req) {
    let toString = renderToString(
        <StaticRouter location={req.path}>
            {
                renderRoutes(Routes.routes)
            }
        </StaticRouter>
    )
    return toString
}


app.get('*', function (req, res) {
    let html = fs.readFileSync('dist/index.html').toString()
    html = html.replace("<!-- ssr -->", useStaticRouter(req))
    res.setHeader("Content-Type", "text/html")
    res.send(html);
})

app.listen(3000, () => {
    console.log('listen:3000')
})