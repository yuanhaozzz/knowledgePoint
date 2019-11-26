let config = require('./webpack.base.config.js')
let merge = require('webpack-merge')
let path = require('path')



let resolvePath = _path => {
    return path.resolve(__dirname, _path)
}
module.exports = merge(config, {
    mode: 'development',
    devtool: 'sourse-map',
    output: {
        filename: '[name].js',
        path: resolvePath('../../client/src/dist'),
        // publicPath: '/client'
    },
    devServer: {
        contentBase: resolvePath('../../client/src/dist'),
        host: '0.0.0.0',
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        progress: true,
        port: 9000
    }
})