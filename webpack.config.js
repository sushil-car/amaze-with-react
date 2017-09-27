var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app'
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.jsx$/],
          include: SRC_DIR,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["es2015", "react"],
              plugins: [
                'transform-class-properties',
                'transform-object-rest-spread'
              ]
            }
          }
        },
        {
          test: [/\.css$/, /\.less$/],
          loader: 'style-loader!css-loader!less-loader'
        }
      ]
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      HtmlWebpackPluginConfig,
      new webpack.LoaderOptionsPlugin({
        debug: true
      })
    ]
};

module.exports = config;
