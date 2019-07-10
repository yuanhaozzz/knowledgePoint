let path = require('path');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        // 查找后缀名
        extensions: ['.js', 'jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../component')
                ],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // 将css-loader 打包好的css文件  以style标签的形式插入到html中
                    'style-loader',
                    // 用于处理css文件中 @import 和 url路径相关
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '环境搭建',
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}
    ;
