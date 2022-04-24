1.什么是前端工程化
    前端工程化指的是:在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。
    目前主流前端工程化的解决方案:webpack
2.什么是webpack
    webpack是前端项目工程化的具体解决方案。
    主要功能:它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端JavaScript 的兼容性、性能优化等强大的功能。
3.项目配置步骤
    ① 新建空项目 npm init -y 初始化包管理配置文件package.json
    ② 新建src源代码目录
    ③ 在src下新建index.html首页和index.js脚本文件
    ④ 安装jquery npm i jquery
4.安装webpack
    npm i webpack@5.42.1 webpack-cli@4.9.0 -D
5.在项目配置webpack
    ① 在项目根目录下创建webpack.config.js配置文件,并初始化配置
    ② 在package.json的scripts节点下,新增dev脚本
    ③ 在终端运行npm run dev 启动webpack进行项目的打包构建
      运行后生成dist文件夹及其下的main.js(代码并没有被压缩)
      执行命令时会先去读取webpack.config.js,再根据配置运行webpack
    ④ 在webpack4.x和webpack5.x中有默认约定
          默认打包入口文件为src -> index.js
          默认输出文件路径dist -> main.js
      可以在webpack.config.js中修改打包的默认约定
    ⑤ 在webpack.config.js中通过entry节点指定打包入口,通过output指定打包出口
6.webpack插件的使用
    通过安装和配置第三方的插件,可以拓展webpack的能力,从而让webpack用起来更方便。
    最常用的webpack插件有如下两个:
        webpack-dev-server   npm i webpack-dev-server@3.11.2 -D
            类似于node.js 阶段用到的nodelmon工具
            每当修改了源代码，webpack会自动进行项目的打包和构建
        html-webpack-plugin  npm i html-webpack-plugin@5.3.2 -D
            webpack中的HTML插件(类似于一个模板引擎插件)
            可以通过此插件可以复制src下的index.html放到内存中,同时也会自动引入打包页面
    配置webpack-dev-server
        修改package.json -> scripts中的dev为webpack serve
        再次运行项目,webpack-dev-server会启动一个实时打包的服务器
        注:打包后的文件没有放到dist中，而是保存在内存中
           在webpack.config.js中通过devServer节点对webpack-dev-server插件做更多配置
    配置html-webpack-plugin
        在webpack.config.js中引入和使用
7.webpack中的loader
    webpack默认只能处理以.js为后缀的模块,非js后缀的需要调用loader才可以正常打包
    如css-loader打包处理.css相关的文件
      less-loader打包处理.less相关文件
      babel-loader打包处理js高级语法
    打包处理css文件
        ①安装相关loader   npm i style-loader@3.0.0 css-loader@5.2.6 -D
        ②在webpack.config.js的module -> rules数组中做相关配置
    打包处理less文件
        npm i less-loader@10.0.1 less@4.1.1 -D
    打包处理样式表中与url路径相关的文件
        npm i url-loader@4.1.1 file-loader@6.2.0 -D
    处理一些js高级语法
        npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
        在项目根目录下创建babel.config.js
8.打包发布
    在package.json的scripts中配置build命令
    开发时用npm run dev,打包文件在内存中
    项目打包上线用npm run build,打包文件在磁盘上
9.配置和使用clean-webpack-plugin自动删除dist目录
    npm i clean-webpack-plugin -D
10.在开发模式下配置SourceMap
    开发环境下默认生成的Source Map,记录的是生成后的代码的位置。会导致运行时报错的行数与源代码的行数不一致的问题。
    配置之后，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。
    在webpack.config.js中配置devtool:'eval-source-map'
    在发布时出于安全性考虑关闭SourceMap
    在生产环境下，如果只想定位报错的具体行数，且不想暴露源码。此时可以将devtool的值设置为nosources-source-map。
