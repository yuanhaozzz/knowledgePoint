let path = require('path');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        // chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        // 查找后缀名
        extensions: ['.js', 'jsx'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
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

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '环境搭建',
            template: path.resolve(__dirname, '../index.html')
        }),

    ]
}
    ;
