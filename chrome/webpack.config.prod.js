const { join } = require('path');
const { optimize } = require('webpack');
const RunChromeExtension = require('webpack-run-chrome-extension')

module.exports = {
  mode: 'production',
  entry: {
    contentPage: join(__dirname, 'src/contentPage.ts'),
    serviceWorker: join(__dirname, 'src/serviceWorker.ts')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [new RunChromeExtension(), new optimize.AggressiveMergingPlugin()],
  resolve: {
    extensions: ['.ts', '.js']
  }
};
