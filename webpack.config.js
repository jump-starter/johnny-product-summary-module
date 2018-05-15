const path = require('path');

const common = {
  mode: 'development',
  context: path.resolve(__dirname, 'client'),
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  entry: './client.js',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'bundle.js',
  },
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs-module',
  },
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server),
];
