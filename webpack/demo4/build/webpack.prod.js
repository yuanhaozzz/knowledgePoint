
let merge = require('webpack-merge');
let config = require('./webpack.base.js');
let prod = merge(config, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [

    ]
});
module.exports = prod
    ;
