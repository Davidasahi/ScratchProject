const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');
const nodemon = require('nodemon');

console.log('Environment is: ', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, './client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './client/index.html',
    }),
  ],

  devServer: {
    static: [
      {
        publicPath: '/',
      },
    ],
    host: 'localhost',
    compress: true,
    port: 8080
  },

  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
