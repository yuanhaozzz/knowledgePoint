const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path')
module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/client/asadas'),
     publicPath: '/'
  }
};