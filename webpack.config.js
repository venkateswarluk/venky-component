const path = require('path');
const HtmlWebPackPlugIn = require('html-webpack-plugin');
const htmlWebPackPlugin = new HtmlWebPackPlugIn({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html'
});

module.exports = {
  entry: path.join(__dirname, 'examples/src/index.js'),
  output: {
    path: path.join(__dirname, 'examples/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [htmlWebPackPlugin],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3001
  }
};
