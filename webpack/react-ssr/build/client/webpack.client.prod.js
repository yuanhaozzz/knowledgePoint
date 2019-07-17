let merge = require('webpack-merge')
let config = require('../webpack.base.js')
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')

let _path = _path => path.resolve(__dirname, _path)

module.exports = merge(config, {
    mode: 'production',
    entry: {
        app: _path('../../client/main.js')
    },
    output: {
        path: _path('../../dist/client'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/client'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'react 服务端渲染',
            template: _path('../../index.html')
        })
    ]
})