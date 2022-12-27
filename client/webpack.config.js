import path from 'path';
import * as url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
  entry: [
    './src/main-page.ts', 
  ],
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      chunksSortMode: "none",
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    client: {
      reconnect: true,
    },
    liveReload: true,
  }
};