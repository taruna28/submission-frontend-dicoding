const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // mode: "development",
  entry: "./src/app.js",
  // output: {
  //   filename: "main.[contentHash].js",
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist")
  // },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify : "false"
    })
],


  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
       /* babel loader */
       {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    }
    
    ]
  }
};