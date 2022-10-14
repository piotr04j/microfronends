const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const isDevelopment = process.env.NODE_ENV === 'development'
const authDomain = process.env.PRODUCTION_DOMAIN ? process.env.PRODUCTION_DOMAIN + '/auth/remoteEntry.js' : 'http://localhost:8081/remoteEntry.js'
const marketingDomain = process.env.PRODUCTION_DOMAIN ? process.env.PRODUCTION_DOMAIN + '/marketing/remoteEntry.js' : 'http://localhost:8082/remoteEntry.js'
const dashboardDomain = process.env.PRODUCTION_DOMAIN ? process.env.PRODUCTION_DOMAIN + '/dashboard/remoteEntry.js' : 'http://localhost:8083/remoteEntry.js'


module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'source-map' : false,
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        auth: `auth@${authDomain}`,
        marketing: `marketing@${marketingDomain}`,
        dashboard: `dashboard@${dashboardDomain}`
      },
    })
  ],
  performance: {
    hints: false
  }
}
