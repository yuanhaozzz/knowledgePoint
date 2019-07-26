
import express from 'express';
import { createServerStore } from '../client/redux/store';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import routes from '../client/routes/config';
let fs = require('fs');
const webpack = require('webpack');

const clientConfig = require('../build/client/webpack.client.dev');
const clientCompiler = webpack(clientConfig);

let path = require('path');

module.exports = function (app) {

    const devMiddleware = require("webpack-dev-middleware")(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        noInfo: true,
        writeToDisk: true
    });

    app.use(devMiddleware);
    // 热更新中间件
    app.use(require("webpack-hot-middleware")(clientCompiler));


    let html = fs.readFileSync('dist/h5/live/index.html', 'utf-8');

    app.use(express.static('dist'));
    //注意这里要换成*来匹配
    app.get('*', async function (req, res) {
        // 同一个服务 返回的实例一样
        let store = createServerStore();
        // 返回匹配路由的数组。
        const matchedRoutes = matchRoutes(routes, req.path);
        // 请求对应组件的接口
        let loadData = '';
        matchedRoutes.forEach(routes => {
            if (routes.route.loadData) {
                loadData = routes.route.loadData;
            }
        });
        if (loadData) {
            await loadData(store, req.cookies);
        }
        // 插入服务器渲染字符串
        let renderHtml = html.replace('<!-- react-ssr -->', render(req, store)).replace('<!-- store -->', `
        <script>
            window._REACT_SOTRE = ${JSON.stringify(store.getState())}
        </script>
    `);
        res.send(renderHtml);
    });
};