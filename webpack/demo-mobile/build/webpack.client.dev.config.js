let path = require('path')
let merge = require('webpack-merge')
let config = require('./webpack.base.config.js')

let _path = dir => path.resolve(__dirname, dir)

module.exports = merge(config, {
    mode: 'development',
    entry: {
        app: _path('../client/src/main.js')
    },
    output: {
        path: _path('../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: '../dist',
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        progress: true,
        hot: true
    },
    devtool: 'inline-source-map',
})