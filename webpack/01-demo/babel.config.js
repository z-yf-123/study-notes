module.exports = {
  // webpack在调用babel-loader的时候，会先加载plugins插件来使用
  plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
};
