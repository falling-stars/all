const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
  module: {
    rules: [
      {test: /\.css$/, loader: ['style-loader', 'css-loader', 'postcss-loader']},
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
    new VueLoaderPlugin()
  ]
}