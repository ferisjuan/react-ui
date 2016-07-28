const webpack = require('webpack')

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: './public/js',
    filename: 'bundle.js',
  },
  module: {
    loaders:[{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};
