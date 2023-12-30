// webpack.config.js
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
