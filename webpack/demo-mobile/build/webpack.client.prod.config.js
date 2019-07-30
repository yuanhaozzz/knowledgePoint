let path = require('path')
let merge = require('webpack-merge')
let config = require('./webpack.base.config.js')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')

let _path = dir => path.resolve(__dirname, dir)

module.exports = merge(config, {
    mode: 'production',
    entry: {
        app: _path('../client/src/main.js')
    },
    output: {
        path: _path('../dist'),
        filename: '[name].[contenthash:8].js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试',
            template: _path('../client/src/index.html')
        }),
        new CleanWebpackPlugin()
    ]

})