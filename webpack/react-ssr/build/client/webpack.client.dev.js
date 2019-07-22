let merge = require('webpack-merge')
let config = require('../webpack.base.js')
let path = require('path')
let webpack = require('webpack')
// 根据模板生成打包后的html 自动引入打包后的资源路径
let HtmlWebpackPlugin = require('html-webpack-plugin')
// 删除dist目录
// let { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 打包分析
let _path = _path => path.resolve(__dirname, _path)

module.exports = merge(config, {
    mode: 'development',
    entry: {
        // polyfill 兼容低版本  试试不加 因为在preset-env中 已经制定usebuiltInt
        // webpack-hot-middleware 热更新
        app:['webpack-hot-middleware/client?noInfo=true&reload=true', _path('../../client/main.js')]
    },
  
    devtool: 'inline-source-map',
    // 外部引入  在指定后  需要在html中引入该资源
    // externals
    output: {
        path: _path('../../dist/client'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'react 服务端渲染',
            template: _path('../../index.html')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ]
})