
let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


let findPath = _path => path.resolve(__dirname, _path)
module.exports = {
    entry: {
        app: findPath('../src/js/index.js')
    },
    output: {
        filename: 'app.js',
        path: findPath('../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: findPath('../src/index.html')
        })
    ]
}

