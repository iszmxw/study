module.exports = {
    base: '/',
    title: 'WorkNotes',
    description: '腾付通工作笔记',
    dest: '.vuepress/dist',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '项目说明', link: '/project/' },
            { text: '百度一下', link: 'https://baidu.com' },
        ],
        sidebar: [
            ['/', '首页归档'],
            ['/project', '项目说明'],
            ['/param', '支付测试参数'],
            ['/xwserver', '本地测试服务器'],
        ]
    }
}