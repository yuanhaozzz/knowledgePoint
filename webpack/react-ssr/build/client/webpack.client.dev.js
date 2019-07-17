let merge = require('webpack-merge')
let config = require('../webpack.base.js')
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

let _path = _path => path.resolve(__dirname, _path)

module.exports = merge(config, {
    mode: 'development',
    entry: {
        app: _path('../../client/main.js')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: _path('../../dist/client'),
        hot: true,

    },
    output: {
        path: _path('../../dist/client'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/client'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react 服务端渲染',
            template: _path('../../index.html')
        })
    ]
})