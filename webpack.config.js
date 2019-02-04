const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin =require('webpack-livereload-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
        rules: [
          // What to do with JS files
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          // What to do with SCSS files
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
          },
          // What to do with HTML files
          {
              test: /\.html$/,
              use: ['html-loader']
          },
          // What to do with image files
          {
              test: /\.(jpg|png)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: 'img/'
                  },
                },
              ],
          }
        ]
    },
    plugins: [
      new ExtractTextPlugin('main.css'),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new CleanWebpackPlugin(['dist']),
      new LiveReloadPlugin()
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    }
};
