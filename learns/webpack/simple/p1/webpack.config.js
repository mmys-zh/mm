const path = require("path");

module.exports = {
  entry: "./src/index", // 入口文件
  output: {
    // 输出路径
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    // 其他资源模块加载规则
    rules: [
      {
        test: /\.less$/i,
        include: {
          and: [path.join(__dirname, "./src/")],
        },
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
};
