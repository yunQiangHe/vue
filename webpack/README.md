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
8. npm install sass-loader node-sass webpack --save-dev
9.npm i -D postcss-loader
npm install autoprefixer --save-dev

# 以下可以不用安装
# cssnext可以让你写CSS4的语言，并能配合autoprefixer进行浏览器兼容的不全，而且还支持嵌套语法
$ npm install postcss-cssnext --save-dev

# 类似scss的语法，实际上如果只是想用嵌套的话有cssnext就够了
$ npm install precss --save-dev

# 在@import css文件的时候让webpack监听并编译
  $ npm install postcss-import --save-dev
  抽取了样式，就不能再用 style-loader注入到 html 中了。
  postcss.config.js
  module.exports = {
      plugins: {
          'autoprefixer': {
              browsers: 'last 5 version'
          }
      }
  }

10. npm install --save-dev mini-css-extract-plugin
11. npm i -D optimize-css-assets-webpack-plugin
  webpack5 貌似会内置 css 的压缩，webpack4 可以自己设置一个插件即可;
12. npm i -D uglifyjs-webpack-plugin
  压缩需要一个插件： uglifyjs-webpack-plugin, 此插件需要一个前提就是：mode: 'production'
13. cnpm install --save-dev html-webpack-plugin
  解决 CSS 文件或者 JS 文件名字哈希变化的问题
14. npm install clean-webpack-plugin --save-dev
  清理 dist 目录
15. 加载图片与图片优化
npm install --save-dev file-loader
16. image-webpack-loader可以帮助我们对图片进行压缩和优化。
npm install image-webpack-loader --save-dev
17. 更进一步处理图片成 base64
cnpm install --save-dev url-loader
18. npm install --save-dev webpack-merge
  合并两个webpack的js配置文件
  webpack-merge 的工具可以实现两个配置文件进合并，这样我们就可以把 开发环境和生产环境的公共配置抽取到一个公共的配置文件中。
      - |- webpack.config.js
      + |- webpack.common.js
      + |- webpack.dev.js
      + |- webpack.prod.js
19. 使用 inline-source-map 选项，这有助于解释说明 js 原始出错的位置。（不要用于生产环境）
    js 使用 source map
    当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js
    devtool: 'inline-source-map'
    20. 监控文件变化，自动编译。使用观察模式
    每次修改完毕后，都手动编译异常痛苦。最简单解决的办法就是启动watch。
    npx webpack --watch
21. 使用 webpack-dev-server 和热更新
devServer: {
  clientLogLevel: 'warning', // 可能的值有 none, error, warning 或者 info（默认值)
  hot: true,  // 启用 webpack 的模块热替换特性, 这个需要配合： webpack.HotModuleReplacementPlugin插件
  contentBase:  path.join(__dirname, "dist"), // 告诉服务器从哪里提供内容， 默认情况下，将使用当前工作目录作为提供内容的目录
  compress: true, // 一切服务都启用gzip 压缩
  host: '0.0.0.0', // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问 0.0.0.0
  port: 8080, // 端口
  open: true, // 是否打开浏览器
  overlay: {  // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
    warnings: true,
    errors: true
  },
  publicPath: '/', // 此路径下的打包文件可在浏览器中访问。
  proxy: {  // 设置代理
    "/api": {  // 访问api开头的请求，会跳转到  下面的target配置
      target: "http://192.168.0.102:8080",
      pathRewrite: {"^/api" : "/mockjsdata/5/api"}
    }
  },
  quiet: true, // necessary for FriendlyErrorsPlugin. 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
  watchOptions: { // 监视文件相关的控制选项
    poll: true,   // webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询. poll: true。当然 poll也可以设置成毫秒数，比如：  poll: 1000
    ignored: /node_modules/, // 忽略监控的文件夹，正则
    aggregateTimeout: 300 // 默认值，当第一个文件更改，会在重新构建前增加延迟
  }
}
22. JS启用babel转码
  虽然现代的浏览器已经兼容了96%以上的ES6的语法了，但是为了兼容老式的浏览器（IE8、9）我们需要把最新的ES6的语法转成ES5的。那么babel的loader就出场了。
  npm i -D babel-loader babel-core babel-preset-env
  touch .babelrc
  {
    "presets": ["env"]
  }
  babel-loader可以配置如下几个options
  22. ESLint校验代码格式规范
  npm install eslint --save-dev
  npm install eslint-loader --save-dev

  # 以下是用到的额外的需要安装的eslint的解释器、校验规则等
  npm i -D babel-eslint standard
23. npm install --save-dev webpack-bundle-analyzer
    webpack-bundle-analyzer插件可以帮助我们分析打包后的图形化的报表。
```