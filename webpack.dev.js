const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.jpg$/,
        use: ['url-loader']
      }
    ]
  },
  devServer: {
      port: 3000,
      historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});
