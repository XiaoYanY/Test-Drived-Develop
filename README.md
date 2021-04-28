
这是一个create-react-app脚手架搭建初始化react项目，用于对 webpack + babel 的编译打包配置的入门学习  webpack + babel 配置的使用。
可以做到区分测试正式发布环境运行不同的配置文件，而不同的配置文件编译配置也不同。本地运行环境时使用了webpack-dev-server做到了热更新。
打包正式环境时做了压缩代码的配置。

### npm run build
打包正式环境命令

### npm run build:test
打包测试环境命令

### npm start
本地运行命令


#### webpack-dev-server
此插件相当于启用了一个小型的本地服务器，里面有一些配置可以多种方式改变行为。以做到响应式更新。但此插件只用于开发环境。