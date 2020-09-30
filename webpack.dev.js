const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const path = require("path");
const {merge} = require("webpack-merge");

module.exports = merge(common,{
  mode: "development",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist")
  // },
//   plugins: [
//     new HtmlWebpackPlugin({
//         template: "./src/template.html",
//     })
// ],
  

});