let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
let path = require('path')

let _path = dir => path.resolve(__dirname, dir)
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    resolve: {
        alias: {
            '@': _path('../client/src')
        }
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
                    'babel-loader'
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    optimization: {
        /**
         * 分包
         */
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,

        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试',
            template: _path('../client/src/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[contenthash:8].css',
            chunkFilename: devMode ? '[id].css' : '[id].[contenthash:8].css',
        })

    ]
}