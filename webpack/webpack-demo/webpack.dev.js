 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
     devtool: 'inline-source-map',
     devServer: {
         contentBase: './dist'
     },
     module: {
         rules: [{
             test: /\.(sa|sc|c)ss$/,
             use: [
                 // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                 MiniCssExtractPlugin.loader,
                 'css-loader',
                 'postcss-loader',
                 'sass-loader'
             ]
         }]
     }
 });