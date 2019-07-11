
let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '测试',
            template: './index.html'
        }),
    ]
}
    ;
