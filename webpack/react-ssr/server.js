import express from 'express';
import { render } from './utils';
import { createServerStore } from './client/redux/store'

const app = express();
let fs = require('fs')
let html = fs.readFileSync('dist/client/index.html', 'utf-8')

app.use(express.static('dist'))

//注意这里要换成*来匹配
app.get('*', function (req, res) {
    console.log(req.path)
    // 同一个服务 返回的实例一样
    let store = createServerStore()

    // 插入服务器渲染字符串
    let renderHtml = html.replace('<!-- react-ssr -->', render(req, store)).replace('<!-- store -->', `
    <script>
        window._REACT_SOTRE = ${JSON.stringify(store.getState())}
    </script>
`)
    console.log(renderHtml)
    res.send(renderHtml);
});

app.listen(3001, () => {
    console.log('listen:3001')
});