const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');

const pug = {
  test: /\.pug$/, // see how we match anything that ends in `.js`? Cool
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
      title: 'MorTraqr',
      template: './src/index.pug'
    })
  ]
};
module.exports = config;
