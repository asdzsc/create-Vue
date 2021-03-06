/**
 * PostCSS 配置文件 需要导出一个对象
 * PostCSS 是基于 Node.js运行的一个处理CSS的工具
 * 所以它的配置文件也是运行在Node.js中
 */
module.exports = {
    // 配置所需相关文件
    plugins: {
        // 自动添加浏览器厂商声明前缀，兼容不同浏览器
        // Vue Cli 已经内部配置了autoprefixer
        // autoprefixer: {
        // browsers 用来配置要兼容到的系统（浏览器）环境  这个配置有编译警告（Vue cli已经配置了） 
        // browsers: ['Android >= 4.0', 'iOS >= 8'],
        // },
        // 把px转换为rem
        'postcss-pxtorem': {
            /**  
             * 转换的根元素基准值
             * 正常按设计稿来计算
             * 750宽设计稿 750/10=75
             * 375宽设计稿 375/10=37.5
             * Vant 组件库是基于逻辑像素375写的 设计稿是基于物理像素750宽设计的
             * 所以如果设置成75，那么我们就可以在设计稿中测量多少写多少 但是Vant样式就会变小且小了一半
             * 我们要用Vant 就必须设置成37.5，但是在测量我们的设计稿的时候我们就让测量的单位/2
             */


            rootValue: 37.5,
            selectorBlackList: [".van"],
            // 需要转换的css属性，*是所有的属性都可以转换
            propList: ['*'],
        },
    },
};