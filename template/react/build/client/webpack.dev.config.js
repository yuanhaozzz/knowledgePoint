let config = require('./webpack.base.config.js')
let merge = require('webpack-merge')
let path = require('path')
let webpack = require('webpack')



let resolvePath = _path => {
    return path.resolve(__dirname, _path)
}
module.exports = merge(config, {
    entry: {
        app: ['webpack-hot-middleware/client?noInfo=true&reload=true', "@babel/polyfill", resolvePath('../../client/src/main.js')]
    },
    mode: 'development',
    devtool: 'cheap-source-map',
    output: {
        filename: '[name].js',
        path: resolvePath('../../dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin(),
    ]
})