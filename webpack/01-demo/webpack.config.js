const path = require("path");
// 导入插件,得到构造函数
const HtmlPlugin = require("html-webpack-plugin");

// 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html", //指定要复制的页面
  filename: "./index.html", //指定复制出来的文件名和存放路径
});

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  //mode用于指定运行模式,可选值有development和production
  //开发时候一定要用development，因为追求的是打包的速度，而不是体积;
  //反过来，发布上线的时候一定能要用production，因为上线追求的是体积小，而不是打包速度快!
  entry: path.join(__dirname, "./src/index.js"),
  //__dirname代表当前文件所在目录
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "js/bundle.js",
  },
  // 通过plugins节点使插件生效
  plugins: [htmlPlugin, cleanWebpackPlugin],
  devServer: {
    // open: true, // 初次打包完，自动打开浏览器
    // host: "127.0.0.1",
    // port: 80,
  },
  module: {
    //所有第三方文件模块的匹配规则
    rules: [
      //文件后缀名的匹配规则
      //use中多个loader调用顺序是从后往前调用
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      //limit用来指定图片大小，单位是字节，只有<=limit才会被转为base64格式
      {
        test: /\.jpg|png|gif$/,
        use: {
          loader: "url-loader?limit=3000&outputPath=images",
        },
      },
      //注意:必须使用exclude 指定排除项;因为 node_modules目录下的第三方包不需要被打包
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
  resolve: {
    alias: {
      //告诉webpack@代表src这一层目录
      "@": path.join(__dirname, "./src/"),
    },
  },
};
