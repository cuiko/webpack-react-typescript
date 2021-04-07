const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: resolve('build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre', // 该 loader 执行将放到最前面
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 将编译后的 css 放在一个新文件中
          'css-loader', // 解析任何导入的 css
          'sass-loader', // 解析 sass, node-sass 将 sass 转换成 css
        ]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}