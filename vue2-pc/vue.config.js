module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '自定义title'
                return args
            })
            // 使用缓存 提高项目启动速度
        config.cache(true)
    },
    // 使用缓存 配合 hard-source-webpack-plugin 提高项目启动速度
    // chainWebpack: (config) => {
    //     config.plugin('cache').use(HardSourceWebpackPlugin)
    //   }
}