const path = require('path'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    entry:path.resolve(__dirname, 'src/index.js'),
    output: {  
        path: path.resolve(__dirname, 'dist'),  
        filename: '[name].bundle.js',  
    },  
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
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title:'I Learning to Webpack',
        filename:'index.html',
        template:path.resolve(__dirname,'public/index.html'),
        favicon: './public/favicon.ico' //favicon.ico文件路径
      }),
    ]
}; 