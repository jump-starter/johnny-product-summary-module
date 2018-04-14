var path = require('path');
var dirSOURCE = path.join(__dirname, '/client/src');
var dirPUBLIC = path.join(__dirname, '/client/public/assets');

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
        },
      },
    ],
  },
};
