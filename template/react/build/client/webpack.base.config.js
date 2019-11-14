
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
let resolvePath = _path => {
    return path.resolve(__dirname, _path)
}

module.exports = {
    // mode: 'production',
    entry: resolvePath('../../client/src/main.js'),
    resolve: {
        alias: {
            '@': resolvePath('../../client/src')
        },
        // 使用扩展名    当引入文件不写后缀时使用
        extensions: ['.js', '.jsx', '.less']
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
                    // 将样式注入到html中
                    'style-loader',
                    // 解析css里面的import 和 url
                    'css-loader',
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
            template: resolvePath('../../client/index.html')
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../../client/static'), to: path.resolve(__dirname, '../../client/src/dist/static'), ignore: ['.*'] }
        ])
    ]

}