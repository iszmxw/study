const _nav = require('./nav')
const _sidebar = require('./sidebar')

module.exports = {
    title: '小窝笔记',
    description: '小窝笔记',
    base: '/',
    port: '',
    dest: '.vuepress/dist',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
        ['meta', { 'name': 'viewport', content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" }],
        ['script', { src: 'https://s9.cnzz.com/z_stat.php?id=1278302134&web_id=1278302134' }]
    ],
    markdown: {
        lineNumbers: false, // 代码显示行号
        // markdown-it-anchor 的选项
        // anchor: { permalink: false },
        // // markdown-it-toc 的选项
        // toc: { includeLevel: [1, 2] },
        // config: md => {
        //   // 使用更多 markdown-it 插件！
        //   md.use(require('markdown-it-xxx'))
        // }
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: _nav,
        sidebar: _sidebar,
        sidebarDepth: 1,
        lastUpdated: '最近更新', // 显示更新时间
        searchMaxSuggestoins: 10,
        displayAllHeaders: true,
        serviceWorker: {
            updatePopup: true,
            // updatePopup: {
            //   message: "New content is available.",
            //   buttonText: 'Refresh'
            // }
        },
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        repo: 'https://github.com/iszmxw/studys.git'
    },
    plugins: [
        // 'axios'  // 配置插件
    ]
}