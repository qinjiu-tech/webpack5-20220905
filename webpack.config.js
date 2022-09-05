/*
 * @Author: QinJiu
 * @Date: 2022-09-05 11:59:09
 * @LastEditors: Qinjiu
 * @LastEditTime: 2022-09-05 17:18:43
 * @Description: -
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV, // 模式
  entry: "./src/index.js", // 打包入口地址
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.join(__dirname, "dist"), // 输出文件目录
  },
  module: {
    // 转换规则
    rules: [
      {
        test: /\.css$/, // 匹配所有的 css 文件
        use: ["style-loader", "css-loader", "postcss-loader"], // use: 对应的 Loader 名称
      },
    ],
  },
  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // 静态文件目录
    },
    compress: true, // 是否启动压缩 gzip
    port: 9001,
    open: true, // 是否自动打开浏览器
  },
};
