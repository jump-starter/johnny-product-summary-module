var path = require('path');
var directorySOURCE = path.join(__dirname, '/client/src');
var directoryPUBLIC = path.join(__dirname, '/client/public/assets');

module.exports = {
  entry: `${directorySOURCE}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: directoryPUBLIC,
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : directorySOURCE,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
