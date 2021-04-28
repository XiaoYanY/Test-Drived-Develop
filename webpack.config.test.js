const webpack = require('webpack')
const { merge } = require('webpack-merge');
const path = require('path'); 
const base = require('./webpack.config.base.js')

module.exports = merge(base,{
  mode: 'development',
  module:{
      rules:[
         
      ]
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin({}),
    ],
    devServer:{
      contentBase: path.join(__dirname, 'dist'),
      hot:true,
      port:3000,
      inline:true,
    }
})