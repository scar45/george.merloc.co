const path = require('path');

module.exports = {
  entry: [
    './src/scripts/index.js',
    './src/scripts/crt.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build/scripts'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
