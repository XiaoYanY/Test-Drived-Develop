const path = require('path'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    entry: path.resolve(__dirname, 'src/index.js'),  
    output: {  
        path: path.resolve(__dirname, 'dist'),  
        filename: '[name].bundle.js',  
    },  
    mode: 'development',
    plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title:'我学习的webpack',
        filename:'index.html',
        template:path.resolve(__dirname,'public/index.html')
      })
    ]
}; 