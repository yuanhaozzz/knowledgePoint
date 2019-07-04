
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: {
        index: path.join(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '第一次配置'
        })
    ]
}