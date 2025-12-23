import {defineConfig} from 'vitepress'

export const docs = defineConfig({
  lang: 'zh-CN',
  description: 'LLBot',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': {base: '/', items: sidebarGuide()},
      '/zh-CN/guide/': {base: '/zh-CN/', items: sidebarGuide()},
    },

    editLink: {
      pattern: 'https://github.com/LLOneBot/LLOneBotDoc/tree/main/docs/:path',
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

function sidebarGuide() {
  return [
    {
      text: '基础配置',
      collapsed: false,
      items: [
        {text: '介绍', link: 'guide/introduction', activeMatch: '/guide/'},
        {text: '快速开始', link: 'guide/getting-started', activeMatch: '/guide/'},
        {text: '对接配置', link: 'guide/configuration', activeMatch: '/guide/'},
        {text: '常见问题', link: 'guide/faq', activeMatch: '/guide/'},
        {text: '配置 FFmpeg', link: 'guide/ffmpeg', activeMatch: '/guide/'},
        {text: '从零安装 NoneBot2', link: 'guide/nonebot2', activeMatch: '/guide/'},
      ]
    }, {
      text: '进阶配置',
      collapsed: false,
      items: [
        {text: '开发对接', link: 'guide/develop', activeMatch: '/guide/develop'},
      ]
    }
  ];
}
