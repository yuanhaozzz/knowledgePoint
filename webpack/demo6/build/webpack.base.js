
let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'h5/live/[name].[hash].js',
        chunkFilename: 'h5/live/[name].[chunkhash].js',
        publicPath: "/dist/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // 外部扩展  只支持cdn引入
    // externals: {
    //     'react': 'react',
    //     'react-dom': 'react-dom'
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                exclude: /node_modules/,
                use: [
                    'babel-loader'
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
