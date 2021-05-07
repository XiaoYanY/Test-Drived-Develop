const path = require('path'); 
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const base = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsPlugin =  require('uglifyjs-webpack-plugin');


module.exports = merge(base,{
  optimization: {
    minimizer: [
        new UglifyjsPlugin({
            cache: true, // 使用缓存
        }),
        new OptimizeCssPlugin()
    ]      
  },
  mode: 'production',
  plugins:[
    new HtmlWebpackPlugin({
      title:'I Learning to Webpack',
      filename:'index.html',
      template:path.resolve(__dirname,'public/index.html'),
      favicon: './public/favicon.ico', //favicon.ico文件路径
        // 压缩代码
        minify: {
            removeAttributeQuotes: true,// 删除html双引号
            collapseWhitespace: true,// 压缩成一行
        },
        // 文件哈希
        hash: true
    }),
    // 抽离css为单独文件
    new MiniCssExtractPlugin({
        filename: 'css/main.css'
    }),
    // 压缩css
    new OptimizeCssPlugin(),
    new UglifyjsPlugin({
        cache: true, // 使用缓存
    }),
    new webpack.IgnorePlugin({
      resourceRegExp:/^\.\/locale$/, 
      contextRegExp:/moment$/
    }) //忽略第三方包中的插件
  ]
})