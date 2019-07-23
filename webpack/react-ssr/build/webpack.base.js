let path = require('path');
// 抽取css为单个文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// copy static目录到dist目录下

let webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true
                        }
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true
                        }
                    },
                    {
                        loader: 'css-loader',
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            //     javascriptEnabled: true,
                            //     modifyVars: {
                            //         'primary-color': 'red',
                            //    },
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'static/images/[name]-picf.[ext]'
                    }
                }]
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),

        // 提供全局变量，这样不需要每次导入   import React from 'react'   等等！
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            Component: ['react', 'Component'] // 导出react模块中的Component
        })
    ]
};