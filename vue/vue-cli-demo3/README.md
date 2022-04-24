# vue-cli-demo3

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

###

创建.prettierrc 文件的内容：
{
"semi": false,
"singleQuote": true,
"bracketSpacing": true
}
安装 Prettier - Code formatter 和 ESLint 后的配置
"prettier.configPath": "C:\\Users\\12287\\AppData\\.prettierrc",
// 安装 Prettier 配置
"eslint.alwaysShowStatus": true,
"prettier.trailingComma": "none",
"prettier.semi": false,
// 每行文字个数超出此限制将会被迫换行
"prettier.printWidth": 300,
// 使用单引号替换双引号
"prettier.singleQuote": true,
"prettier.arrowParens": "avoid",
// 设置 .vue 文件中，HTML 代码的格式化插件
"vetur.format.defaultFormatter.html": "js-beautify-html",
"vetur.ignoreProjectWarning": true,
"vetur.format.defaultFormatterOptions": {
"prettier": {
"trailingComma": "none",
"singleQuote": true,
"semi": false,
"arrowParens": "avoid",
"printWidth": 300
},
"js-beautify-html": {
"wrap_attributes": false
}
},
