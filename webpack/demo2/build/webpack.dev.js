let path = require('path');

let merge = require('webpack-merge');
let config = require('./webpack.base');
let webpack = require('webpack');

let dev = merge(config, {
    mode: 'development',
    devServer: {
        contentBase: '../dist/',
        hot: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../component')
                ],
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // 插入到html中
                    'style-loader',
                    // 用于处理css文件中 @import 和 url路径相关
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 模块热替换插件
        new webpack.HotModuleReplacementPlugin()
    ]
});
console.log(dev.module.rules);
module.exports = dev;
