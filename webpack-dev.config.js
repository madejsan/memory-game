const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack-base.config');

module.exports = merge(baseConfig, {
  plugins: [new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])],
  devtool: 'eval',
  devServer: {
    historyApiFallback: true
  }
});
