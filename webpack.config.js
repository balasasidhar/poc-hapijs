require("dotenv").config();
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["public/**/*"],
      verbose: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
