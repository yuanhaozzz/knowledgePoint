
import React from 'react'
import { renderToString } from 'react-dom/server';
// 服务端渲染 静态路由
import { StaticRouter } from 'react-router-dom';
// 静态路由配置
import { renderRoutes, matchRoutes } from 'react-router-config';
import Routes from '../client/src/router'
import { serverStore } from '../client/src/store/store'
import { Provider } from 'react-redux'
import { ApiEnvironment } from '../client/src/api/apiHost'

const path = require('path')
const fs = require('fs')
const compression = require('compression');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('../build/client/webpack.dev.config');
const compiler = webpack(config);
const DIST_DIR = path.join(__dirname, "../dist")
const CATCH_TIME = 60 * 1000 * 60 * 24 * 30;
const express = require('express')
const app = express();

let dev = process.env.NODE_ENV === 'development'
let html;



if (dev) {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        // writeToDisk: true
    }));
    app.use(require("webpack-hot-middleware")(compiler));
}
app.use(compression());
app.use(express.static('dist', { maxAge: CATCH_TIME }))

// app.use(express.static(path.resolve(__dirname, './dist'), { maxAge: CACHETIME }))

function useStaticRouter (req, store) {
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


app.get('*', function (req, res) {
    let api = new ApiEnvironment({ host: req.hostname })
    if (dev) {
        const filename = path.join(DIST_DIR, 'template.html');
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return
            }
            html = result.toString()
        })
    } else {
        html = fs.readFileSync('dist/client/template.html').toString()
    }


    let store = serverStore()

    const matchedRoutes = matchRoutes(Routes.routes, req.path)

    //promise对象数组
    const promises = [];
    matchedRoutes.forEach(item => {
        //如果这个路由对应的组件有loadData方法
        if (item.route.loadData) {
            //那么就执行一次,并将store传进去
            //注意loadData函数调用后需要返回Promise对象
            promises.push(item.route.loadData(store, api))
        }
    })


    // 同一个页面多个请求如何处理
    // node环境如何区分接口环境变量

    Promise.all(promises).then(() => {
        //此时该有的数据都已经到store里面去了
        //执行渲染的过程(res.send操作)
        html = html.replace("<!-- ssr -->", useStaticRouter(req, store)).replace("<!-- store -->", `
            <script>
                window._STATE = ${JSON.stringify(store.getState())}
            </script>
        `)
        res.setHeader("Content-Type", "text/html")
        res.send(html);
    }).catch(err => {
        res.send('错误');
    })

})

app.listen(3000, () => {
    console.log('listen:3000')
})