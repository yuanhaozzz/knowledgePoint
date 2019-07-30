let path = require('path')
let merge = require('webpack-merge')
let config = require('./webpack.base.config.js')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
let UglifyJsPlugin=require('uglifyjs-webpack-plugin');

let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/**
 * css 压缩 会清除css中注释
 * npm install --save-dev optimize-css-assets-webpack-plugin
 */
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let _path = dir => path.resolve(__dirname, dir)
const devMode = process.env.NODE_ENV !== 'production';
console.log(devMode)

module.exports = merge(config, {
    mode: 'production',
    entry: {
        app: _path('../client/src/main.js')
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: process.env.NODE_ENV === 'development',
                        },
                      },
                    'css-loader',
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
    output: {
        path: _path('../dist'),
        filename: '[name].[contenthash:8].js'
    },
    devtool: false,
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
          }),
        new BundleAnalyzerPlugin({
            analyzerPort: 3002
        })
    ]

})