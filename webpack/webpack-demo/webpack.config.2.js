const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpack4 开始使用： mini-css-extract-plugin插件, 1-3 的版本可以用： extract-text-webpack-plugin

const devMode = process.env.NODE_ENV !== 'production'; 
// 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。


module.exports = {
    // mode: "development",
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        noParse: /jquery|loadsh/,
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: ['style-loader', 'css-loader'] //应用于模块指定使用一个 loader。加载器可以链式传递，从右向左进行应用到模块上。 
        }, {
            test: /\.scss$/,
            use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                },
                {
                    loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
                    options:{
                        sourceMap: true
                    }
                },
                {
                    loader:"postcss-loader",
                    options:{
                        ident: "postcss",
                        sourceMap: true,
                        plugins: loader => [
                            require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                        ]
                    }
                },
                {
                    loader: "sass-loader",  // 将 Sass 编译成 CSS，默认使用 Node Sass
                    options:{
                        data: "$env: " + process.env.NODE_ENV + ";", //如果你要将 Sass 代码放在实际的入口文件(entry file)之前，可以设置 data 选项。此时 sass-loader 不会覆盖 data 选项，只会将它拼接在入口文件的内容之前。
                        sourceMap: true
                    }
                }
            ]
        }]
    }
}