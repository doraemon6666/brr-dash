const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // Entry file
  entry: './src/index.tsx',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  // Mode: use 'development' during local development
  mode: 'development',

  // Enable source maps for easier debugging
  devtool: 'source-map',

  // Development server settings
  devServer: {
    static: './public',
    historyApiFallback: true, // Supports React Router
    port: 3000,
    open: true,
  },

  // Module resolution
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias '@' to 'src' directory
    },
  },

  // Module loaders
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
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(), // Load environment variables from .env
  ],
};
