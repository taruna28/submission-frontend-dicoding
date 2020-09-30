const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common")
const path = require("path");
const {merge} = require("webpack-merge")

module.exports = merge(common,{
  mode: "production",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  // plugins: [
  // new HtmlWebpackPlugin({
  //   template: 'src/template.html',
  //   minify: {
  //       minify: false
  //   //   collapseWhitespace: true,
  //   //   removeComments: true,
  //   //   removeRedundantAttributes: true,
  //   //   removeScriptTypeAttributes: true,
  //   //   removeStyleLinkTypeAttributes: true,
  //   //   useShortDoctype: true
  //   },
  // }),
  // ],
});