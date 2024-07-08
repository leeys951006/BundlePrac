const path = require('path');

let name = 'app';

module.exports = {
  entry: `./src/${name}.ts`,
  output: {
    filename: `${name}.bundle.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 타스인지 확인할 거야
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
