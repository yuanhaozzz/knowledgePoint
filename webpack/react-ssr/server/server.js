import express from 'express';
import { createServerStore } from '../client/redux/store';
import { matchRoutes } from 'react-router-config';
let fs = require('fs');

import { render } from './utils';
import routes from '../client/routes/config';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const config = require('../build/client/webpack.client.dev');
const compiler = webpack(config);
var cookieParser = require('cookie-parser');
let html = fs.readFileSync('dist/client/index.html', 'utf-8');

let dev = process.env.NODE_ENV === 'development';
console.log(dev);

if (dev) {
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true, publicPath: '/',
        writeToDisk: true
    }));
    app.use(require("webpack-hot-middleware")(compiler));
}


app.use(express.static('dist'));
app.use(cookieParser());

// //注意这里要换成*来匹配
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

app.listen(3001, () => {
    console.log('listen:3001');
});