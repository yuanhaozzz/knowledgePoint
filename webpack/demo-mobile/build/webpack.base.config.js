let path = require('path')

let _path = dir => path.resolve(__dirname, dir)

module.exports = {
    resolve: {
        alias: {
            '@': _path('../client/src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
}