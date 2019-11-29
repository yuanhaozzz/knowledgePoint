
let path = require('path')
// 生成html 并将打完后的js嵌入
let HtmlWebpackPlugin = require('html-webpack-plugin')
// 复制文件/文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 删除console
// 打包css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 缩小js
const TerserPlugin = require('terser-webpack-plugin');
// css优化
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 当前开发环境
const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode)
let resolvePath = _path => {
    return path.resolve(__dirname, _path)
}

module.exports = {
    // mode: 'production',
    entry: [resolvePath('../../client/src/main.js'), "@babel/polyfill"],
    resolve: {
        alias: {
            '@': resolvePath('../../client/src')
        },
        // 使用扩展名    当引入文件不写后缀时使用
        extensions: ['.js', '.jsx', '.less']
    },
    optimization: {
        // 最小化器
        minimizer: [
            // 使用插件来缩小js
            new TerserPlugin({}),
            // 用于优化或者压缩CSS资源
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    // // 将样式注入到html中
                    // 'style-loader',
                    // 解析css里面的import 和 url
                    'css-loader',
                    'postcss-loader',
                    // 将less转换为css文件
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        // 处理图片  小于 8kb 转换为base64
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            filename: 'template.html',
            template: resolvePath('../../index.html')
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../../static'), to: path.resolve(__dirname, '../../dist/static'), ignore: ['.*'] }
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash:8].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash:8].css',
        })
    ]

}