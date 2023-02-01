const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
