const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(woff|woff2)$/i,
        use:{
          loader: "url-loader",
          options:{
            limit:10000,
            minetype: "aplication/font-woff",
            name: "[name].[ext]",
            outputPath: "./assets/fonts",
            publicPath: "./assets/fonts",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    )
  ]
}