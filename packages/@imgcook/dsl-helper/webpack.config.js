let path = require('path'); //node的模块
module.exports = {
  entry: './index.js', // 入口
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        // include: [
        //   path.resolve(__dirname, 'node_modules/@imgcook/dsl-css-processor'),
        //   path.resolve(__dirname, 'node_modules/acorn'),
        //   path.resolve(__dirname, 'node_modules/acorn-jsx'),
        //   path.resolve(__dirname, 'node_modules/lodash'),
        //   path.resolve(__dirname, 'node_modules/escodegen'),
        // ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'env', 'stage-3']
          }
        }
      }
    ]
  }
};
