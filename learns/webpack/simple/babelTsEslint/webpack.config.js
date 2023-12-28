const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    // 输出路径
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        // use: ["babel-loader"],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.ts$/i,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new ESLintPlugin({ extensions: [".js", ".ts"] })], // 插件相关配置
};
