const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 4400, // Specify your desired port number here
    contentBase: path.join(__dirname, 'dist'),
    hot: true, // Enable HMR
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      // Rule for handling images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // This specifies the output file name and extension
              outputPath: 'img/', // This determines the output directory for images
            },
          },
        ],
      },
    ],
  },
};
