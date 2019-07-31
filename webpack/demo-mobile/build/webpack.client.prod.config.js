let path = require('path')
let merge = require('webpack-merge')
let config = require('./webpack.base.config.js')

let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/**
 * css 压缩 会清除css中注释
 * npm install --save-dev optimize-css-assets-webpack-plugin
 */
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let _path = dir => path.resolve(__dirname, dir)

module.exports = merge(config, {
    mode: 'production',
    entry: {
        app: _path('../client/src/main.js')
    },
    output: {
        path: _path('../dist'),
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
        publicPath: '/'
    },

    devtool: false,
    plugins: [
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 3002
        // })
    ]

})