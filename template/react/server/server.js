
import React from 'react'
import { renderToString } from 'react-dom/server';
// 服务端渲染 静态路由
import { StaticRouter } from 'react-router-dom';
// 静态路由配置
import { renderRoutes, matchRoutes  } from 'react-router-config';
import Routes from '@/router'
import {serverStore} from '@/store/store'
import {Provider} from 'react-redux'
let fs = require('fs')
let express = require('express')
const app = express();

app.use(express.static('dist'))

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
    let html = fs.readFileSync('dist/client/template.html').toString()
    let store = serverStore()
    
    const matchedRoutes = matchRoutes(Routes.routes, req.path)

     //promise对象数组
    const promises = [];
    matchedRoutes.forEach(item => {
        //如果这个路由对应的组件有loadData方法
        if (item.route.loadData) {
            //那么就执行一次,并将store传进去
            //注意loadData函数调用后需要返回Promise对象
            promises.push(item.route.loadData(store))
        }
    })
    console.log(JSON.stringify(matchedRoutes))


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
        res.send(err);
    })
   
})

app.listen(3000, () => {
    console.log('listen:3000')
})