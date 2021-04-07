const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口配置
    entry: [
      './src/index.js'
    ],
    // 输出配置
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.min.js'
    },
    //插件
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve('./dist/index.html'),
        template: path.resolve(__dirname, 'public/index.html'),
      })
    ],
    module: {
      // 加载器 - loader
      rules: [
        { 
          test: /\.css$/, 
          use: ['style-loader', 'css-loader'], 
          include: path.resolve('./src')
        },
        { 
          test: /\.scss$/, 
          use: ['style-loader', 'css-loader', 'sass-loader'], 
          include: path.resolve('./src')
        },
        { 
          test: /\.(js|jsx)$/, 
          use: [{loader:'babel-loader'}] ,
          include: path.resolve('./src')},
        { 
          test: /\.(png|jpg|jpeg)$/, 
          use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]', 
          include: path.resolve('./src')
        },
      ]
    },
    //热更新
    devServer: {
      "contentBase": __filename,
      "compress": true,
      "hot":true,
    },
};

