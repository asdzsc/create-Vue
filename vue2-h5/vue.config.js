module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'vant'
                return args
            })
        config.cache(true)
    },
}