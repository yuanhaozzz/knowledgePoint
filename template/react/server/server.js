
let fs = require('fs')
let express = require('express')
const app = express();

// 热更新 ---------------------------
let dev = process.env.NODE_ENV === 'development'

if (dev) {
    require("./devServer.js")(app, (entry, template) => {
        html = template
        console.log(html, '=================')
    })
} else {
    html = fs.readFileSync('dist/client/template.html').toString()
}
let serverStore = require('../client/src/store/store')
let useStaticRouter = require('./render')
// -------------------------------------------------

app.use(express.static('dist'))

// 同一个页面多个请求如何处理
// node环境如何区分接口环境变量

app.get('*', function (req, res) {
    console.log(serverStore)
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