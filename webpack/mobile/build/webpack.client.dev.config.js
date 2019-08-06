let path = require('path')
let merge = require('webpack-merge')
let config = require('./webpack.base.config.js')

let _path = dir => path.resolve(__dirname, dir)

module.exports = merge(config, {
    mode: 'development',
    entry: {
        app: ["@babel/polyfill", _path('../client/src/main.js')]
    },
    output: {
        path: _path('../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [
                    _path('../client/src')
                ],
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            configFile: _path('../.eslintrc'),
                            eslint: {
                                configFile: _path(__dirname, '../.eslintrc')
                            }
                        }
                    }
                ]
            }
        ]
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