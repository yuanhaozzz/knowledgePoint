let path = require('path')
let config = require('./webpack.base.config')

let merge = require('webpack-merge')
let resolvePath = _path => {
    return path.resolve(__dirname, _path)
}
module.exports = merge(config, {
    mode: 'production',
    output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: resolvePath('../../dist'),
        publicPath: '/client'
    }
})