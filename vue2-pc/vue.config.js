// 用于兼容 ie9和一些低版本的高级浏览器对es6新语法并不支持
require("babel-polyfill");
module.exports = {
    // publicPath: './', //基本路径
    outputDir: 'dist', //输出文件名称
    assetsDir: 'static', //设置放置打包生成的静态资源 (js、css、img、fonts) 的目录。
    // devtool: 'eval-source-map',开发环境  //生产环境 nosources-source-map 定位报错的行数 不暴露源码 //source-map 定位报错的行数 暴露源码
    lintOnSave: false, //关闭eslint
    devServer: {
        open: true, //项目启动后自动打开浏览器
        host: "0.0.0.0", //不清楚主机和目的网络 指定要使用的主机。如果您希望服务器可以从外部访问，请按以下方式指定它：
        port: 8099, // 源地址端口，自行修改
        disableHostCheck: true, // 绕过主机检查(不建议这样做，因为不检查主机的应用容易受到DNS重新绑定攻击的攻击)
        hotOnly: false, //启用热模块替换 无需页面刷新作为构建失败时的回退
        useLocalIp: false, //使浏览器可以使用您的本地IP打开
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '自定义title'
                return args
            })
            // 使用缓存 提高项目启动速度
        config.cache(true)
            // 删除默认的splitChunk
        config.optimization.delete("splitChunks");
    },
    // 使用缓存 配合 hard-source-webpack-plugin 提高项目启动速度
    // chainWebpack: (config) => {
    //     config.plugin('cache').use(HardSourceWebpackPlugin)
    //   }
}