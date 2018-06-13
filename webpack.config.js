const webpack = require('webpack');
const path = require('path');

const bundlePath = path.join(__dirname, '/dist');

module.exports = {
  entry: path.join(__dirname, '/client/components/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: bundlePath,
    filename: 'review-module-bundle.js',
  },
  // resolve: {
  //   extensions: ['*', '.js', '.jsx'],
  // },
};
