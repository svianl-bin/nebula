export default {
    // 配置需要使用的 PostCSS 插件
    plugins: {
        // 自动添加浏览器前缀（依赖 browserslist 配置）
        autoprefixer: {},
        // 生产环境压缩 CSS
        cssnano: process.env.NODE_ENV === 'production' ? {} : false
    }
}
