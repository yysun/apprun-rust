const path = require('path');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
module.exports = {
  entry: {
    'dist/app': './src/main.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  devServer: {
    open: true
  },
  devtool: 'source-map',
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "wasm")
    }),
  ]
}