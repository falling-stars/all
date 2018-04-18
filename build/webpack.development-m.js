const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: resolve(__dirname, '../m/main')
  },
  output: {
    path: resolve(__dirname, '../dist-m'),
    filename: '[name].js?'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
      {test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/},
      {test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.less$/, loader: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.vue$/, loader: ['vue-loader']},
      {
        test: /favicon\.ico$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'assets/images/[name].[hash].[ext]',
            limit: 5000
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../m/template.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    alias: {
      '~': resolve(__dirname, '../m')
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    contentBase: resolve(__dirname, '../dist-m'),
    proxy: {
      '/web': {
        target: 'https://m.xxx.com/',
        changeOrigin: true
      }
    }
  },
  devtool: 'eval'
}