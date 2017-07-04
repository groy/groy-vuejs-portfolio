var merge = require('webpack-merge');

var webpackBase = require('./webpack.config.js');
var plugins = require('./plugins');

module.exports = merge(webpackBase, {
  plugins: plugins.production,
  performance: {
    hints: 'warning'
  }
});