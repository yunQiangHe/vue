# Webpack

> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

```
1. mkdir webpack-demo && cd webpack-demo
2. npm init -y
# 如果你使用 webpack 4+ 版本，你还需要安装 CLI。
3. npm install webpack webpack-cli --save-dev
4. 手写简单的webpack配置 npx webapck运行
5. cnpm install --save-dev style-loader css-loader
6. css-loader 辅助解析 js 中的 import './main.css'
7. style-loader  把 js 中引入的 css 内容 注入到 html 标签中，并添加 style 标签.依赖 css-loader
```