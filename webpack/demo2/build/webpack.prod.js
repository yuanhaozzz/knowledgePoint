
let merge = require('webpack-merge')
let config = require('./webpack.base')
let prod = merge(config, {
    mode: 'production',
    output: {
        // 在生产环境中 为了更好的缓存，使用chunkhash 打包后 只会打包以修改的chunk
        filename: '[name].[chunkhash].js',
    }
})
console.log(prod)
module.exports = prod;