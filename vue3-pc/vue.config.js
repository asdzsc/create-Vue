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
        config.cache(true)
    },
}