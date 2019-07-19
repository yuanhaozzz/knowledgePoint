import express from 'express';
import { render } from './utils';
import { createServerStore } from '../client/redux/store'
import { matchRoutes } from 'react-router-config';

import routes from '../client/routes/config'
const app = express();
let fs = require('fs')

let html = fs.readFileSync('dist/client/index.html', 'utf-8')

app.use(express.static('dist'))

//注意这里要换成*来匹配
app.get('*', async function (req, res) {
    console.log(req.path)
    // 同一个服务 返回的实例一样
    let store = createServerStore()

    // // 返回匹配路由的数组。
    // const matchedRoutes = matchRoutes(routes, req.path)
    // console.log(JSON.stringify(matchedRoutes))
    // // 请求对应组件的接口
    // let loadData = ''
    // matchedRoutes.forEach(routes => {
    //     if (routes.route.loadData) {
    //         loadData = routes.route.loadData
    //     }
    // })
    // if (loadData) {
    //     await loadData(store)
    // }

    // 插入服务器渲染字符串
    //     render(req, store)).replace('<!-- store -->', `
    //     <script>
    //         window._REACT_SOTRE = ${JSON.stringify(store.getState())}
    //     </script>
    // `
    let renderHtml = html.replace('<!-- react-ssr -->', '')
    res.send(renderHtml);
});

app.listen(3001, () => {
    console.log('listen:3001')
});