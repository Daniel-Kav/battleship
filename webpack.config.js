const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Set the mode to "development"
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/template.html'),
    })
    ],
  module:{
    rules: [
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/, // Apply the loader to .js files
        exclude: /node_modules/, // Don't apply it to files in node_modules
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }
};
