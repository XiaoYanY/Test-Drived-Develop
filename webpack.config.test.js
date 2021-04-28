const { merge } = require('webpack-merge');
var path = require('path'); 
const base = require('./webpack.config.base.js')

module.exports = merge(base,{
  mode: 'development',
  module:{
      rules:[
         {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test:/\.css$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use:[
            'style-loader',
            'css-loader'
          ]
        },
        {
          test:/\.gif|jpe?g|png|svg$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use:'url-loader'
        },
      ]
    },
    plugins:[
      
    ]
})