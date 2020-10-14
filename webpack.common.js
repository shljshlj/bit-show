const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    home: './src/pages/index.js',
    details: './src/pages/details.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env.local',
      safe: true
    })
  ]
};