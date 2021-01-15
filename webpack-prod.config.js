const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack-base.config');

module.exports = merge(baseConfig, {
  plugins: [
    new CompressionPlugin({
      include: /\.(js|css)$/
    })
  ],
  devtool: 'source-map'
});
