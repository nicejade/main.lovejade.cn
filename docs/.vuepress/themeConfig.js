const helper = require('./../helper/')

module.exports = {
  repo: 'nicejade/main.lovejade.cn',
  editLinks: false,
  docsDir: './dist',
  // 开启 vuepress 内置搜索
  search: true,
  searchMaxSuggestions: 10,
  // algolia: {
  //   apiKey: '6290673b2059b2332d64c13d248877ad',
  //   indexName: 'lovejade',
  //   inputSelector: '',
  //   debug: false
  // },
  comment: {
    clientID: 'ca88ac4a7b6ff8b64d00',
    clientSecret: '556f72ac84f3f71db43c6eeeaa716c03c4c06419',
    repo: 'main.lovejade.cn',
    owner: 'nicejade',
    admin: ['nicejade'],
    perPage: 5,
    distractionFreeMode: false // Facebook-like distraction free mode
  },
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: '博客',
          link: '/zh/blog/'
        },
        {
          text: '博文',
          link: '/zh/article/'
        },
        {
          text: '作品',
          link: '/zh/works/'
        }
      ],
      sidebar: {
        '/zh/blog/': helper.utils.genSidebarConfig('轩帅の博客', './docs/zh/blog/', false),
        '/zh/article/': helper.utils.genSidebarConfig('最新文章', './docs/zh/article/', false)
      }
    },
    '/en/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'Works',
          link: '/en/works/'
        }
      ]
    }
  }
}
