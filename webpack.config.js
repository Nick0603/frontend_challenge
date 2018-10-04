var webpack = require('webpack');
var path = require('path');

const SassPlugin = require('sass-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var src = path.join(__dirname, 'src');

function pugPage(name) {
  return new HtmlWebpackPlugin({
    filename: name + '.html',
    template: path.join(src, name+'.pug'),
    inject: false
  })
}

var config = {
    devServer: {
      hot: true,
      inline: true,
    },
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },
  entry: {
    index: path.join(src, 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use:  ['html-loader', 'pug-html-loader?pretty&exports=false']
      },
      {
        test: /\.sass$/,
        use: ['style-loader','css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    pugPage('layout'),
    pugPage('index'),
    pugPage('sweet'),
    pugPage('login'),
    pugPage('product'),
    pugPage('cart'),
    pugPage('checkout'),
    pugPage('checkout_success'),
  ],
};

module.exports = config;