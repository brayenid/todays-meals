import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const __dirname = path.resolve()

export default {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      favicon: './src/favicon.ico',
      minify: 'auto',
    }),
  ],
}
