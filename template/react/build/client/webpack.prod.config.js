let path = require('path')
let config = require('./webpack.base.config')
// 清除dist文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let merge = require('webpack-merge')
let resolvePath = _path => {
    return path.resolve(__dirname, _path)
}
module.exports = merge(config, {
    mode: 'production',
    output: {
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: resolvePath('../../dist/ipad'),
        publicPath: '/ipad'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})