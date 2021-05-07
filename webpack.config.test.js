const webpack = require('webpack')
const { merge } = require('webpack-merge');
const path = require('path'); 
const base = require('./webpack.config.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(base,{
  mode: 'development',
  module:{
      rules:[
         
      ]
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin({}),
      new HtmlWebpackPlugin({
        title:'I Learning to Webpack',
        filename:'index.html',
        template:path.resolve(__dirname,'public/index.html'),
        favicon: './public/favicon.ico' //favicon.ico文件路径
      }),
    ],
    devServer:{
      contentBase: path.join(__dirname, 'dist'),
      hot:true,
      port:3000,
      inline:true,
    }
})