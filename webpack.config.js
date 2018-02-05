const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');

const pug = {
  test: /\.pug$/,
  use: ['html-loader', 'pug-html-loader']
};

const config = {
  entry: './src/app.js',
  output: {
    // path is a built in node module
    // __dirname is a variable from node that gives us the
    path: path.resolve(__dirname, 'dist'),
    // we can use "substitutions" in file names like [name] and [hash]
    // name will be `App` because that is what we used above in our entry
    filename: '[name].bundle.js'
  },
  module: {
    rules: [pug]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: 'terms.html',
      template: 'src/terms.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'src/404.pug',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: 'maint.html',
      template: 'src/maint.pug',
      inject: false
    })
  ]
};
module.exports = config;
