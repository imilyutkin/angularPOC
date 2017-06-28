var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var helpers = require('../helpers');
var ROOT = path.resolve(__dirname, '..');

module.exports = function (options) {
  return {
   entry: {
      'main': './src/gc/app/index.ts'
    },
    output: {
        filename: "./src/gc/bundle.js"
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [path.resolve(ROOT, 'node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                configFileName: 'tsconfig.webpack.json',
                useCache: false
              }
            },
            {
              loader: 'angular2-template-loader'
            }
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [helpers.root('src/gc', 'styles')]
        },
        {
          test: /\.scss$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader'],
          exclude: [helpers.root('src/gc', 'styles')]
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('src/gc/index.html')]
        }
      ]
    }
  };
}