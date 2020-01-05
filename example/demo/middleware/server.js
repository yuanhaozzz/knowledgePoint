let express = require('express'),
    app = express(),
    webpack = require('webpack'),
    config = require('./build/webpack.client.config')
    compiler = webpack(config),
    middleware = require('webpack-dev-middleware');


     // 热更新操作
     config.entry.bundle = [
        `webpack-hot-middleware/client?path=${'http://localhost'}:${3000}/__webpack_hmr`
    ];


    // 指定 热更后文件名 和 热更新块名称
    config.output.hotUpdateMainFilename = 'updates/[hash].hot-update.json';
    config.output.hotUpdateChunkFilename = 'updates/[id].[hash].hot-update.js';

app.use()

console.log(compiler)


app.listen(3000, () => {
    console.log('start')
})