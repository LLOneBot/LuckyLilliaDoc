import {defineConfig} from 'vitepress'

export const docs = defineConfig({
  lang: 'zh-CN',
  description: 'LLBot',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide('/guide/'),
      '/zh-CN/guide/': sidebarGuide('/zh-CN/guide/'),
    },

    editLink: {
      pattern: 'https://github.com/LLOneBot/LuckyLilliaDoc/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav() {
  return [
    // {text: '指南', link: '/guide/getting-started'},
  ];
}

function sidebarGuide(base: string) {
  return [
    {
      text: '基础配置',
      collapsed: false,
      items: [
        {text: '介绍', link: `${base}introduction`},
        {text: '安装', link: `${base}install`},
        {text: '配置', link: `${base}config`},
      ]
    }, {
      text: '进阶',
      collapsed: false,
      items: [
        {text: '框架对接', link: `${base}config_framework`},
        {text: '开发对接', link: `${base}develop`},
      ]
    },
    {
      text: '其他',
      collapsed: false,
      items: [
        {text: '常见问题', link: `${base}faq`},
        {text: '配置 FFmpeg', link: `${base}ffmpeg`},
        {text: '配置邮箱通知', link: `${base}config_email`},
      ]
    }
  ];
}
