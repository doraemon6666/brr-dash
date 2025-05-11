const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // 入口文件
  entry: './src/index.tsx',

  // 打包输出配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  // 模式：开发调试时建议用 development
  mode: 'development',

  // 开启 source-map 方便调试（可以看到 .tsx/.ts 源码行号）
  devtool: 'source-map',

  // 本地开发服务器配置
  devServer: {
    static: './public',
    historyApiFallback: true, // 支持 React Router
    port: 3000,
    open: true,
  },

  // 模块文件解析
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // 模块加载器配置
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(), // 加载 .env 环境变量
  ],
};
