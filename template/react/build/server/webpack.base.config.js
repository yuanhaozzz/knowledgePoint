let path = require('path')

let resolvePath = _path => path.resolve(__dirname, _path)
// 在打包node层 去除多余的插件打包
let nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: resolvePath('../../server/server.js'),
    output: {
        filename: 'server.js',
        path: resolvePath('../../dist/server'),
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    resolve: {
        alias: {
            "@": resolvePath('../../client/src')
        }
    },
    module: {
        rules: [
            // 忽略css less文件   否则在node层会报错
            {
                test: /\.(css|less)$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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
    }
}