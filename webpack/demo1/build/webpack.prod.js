
let merge = require('webpack-merge')
let common = require('./webpack.common.js')
let webpack = require('webpack')
let path = require('path')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
})
