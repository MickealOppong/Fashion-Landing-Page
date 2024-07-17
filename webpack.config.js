const path = require("path");
const { Extension } = require("typescript");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: []
};
