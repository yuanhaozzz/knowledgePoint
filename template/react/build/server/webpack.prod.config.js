let merge = require('webpack-merge')
let config = require('./webpack.base.config')

module.exports = merge(config, {
    mode: "production"
})