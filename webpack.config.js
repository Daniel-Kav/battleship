const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to "development"
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Other webpack configuration options...
};
