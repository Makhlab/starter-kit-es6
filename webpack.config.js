const path = require('path');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Introoutrobed',
  },
};
