const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpack4 开始使用： mini-css-extract-plugin插件, 1-3 的版本可以用： extract-text-webpack-plugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';
// 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: '@babel/preset-env',
            }
          },{
            test: /\.(sa|sc|c)ss$/,
            use: [
                // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        }
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css', // 设置最终输出的文件名
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            // title: 'AICODER 全栈线下实习', // 默认值：Webpack App
            //filename: 'main.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, './src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new webpack.NamedModulesPlugin(),  // 更容易查看(patch)的依赖
        new webpack.HotModuleReplacementPlugin()  // 替换插件
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({ //js压缩
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}