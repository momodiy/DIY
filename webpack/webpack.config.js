/*
* Created by Steven Lee
* Date: 2021/4/14
* Time: 0:27
* Project: DIY
* */

const path = require('path')

module.exports = {
  // devtool: 'source-map',
  // devtool: 'none',
  entry: {
    index: './src/index.js',
    index666: './src/index1.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },
  // mode: 'development'
  mode: 'production'
}
