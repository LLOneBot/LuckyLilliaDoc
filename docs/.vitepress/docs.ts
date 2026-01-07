import {defineConfig} from 'vitepress'

export const docs = defineConfig({
  lang: 'zh-CN',
  description: 'LLBot',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': {base: '/guide/', items: sidebarGuide()},
      '/zh-CN/guide/': {base: '/zh-CN/guide/', items: sidebarGuide()},
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

function sidebarGuide() {
  return [
    {
      text: '基础配置',
      collapsed: false,
      items: [
        {text: '介绍', link: 'introduction'},
        {text: '安装', link: 'install'},
        {text: '配置', link: 'config'},
      ]
    }, {
      text: '进阶',
      collapsed: false,
      items: [
        {text: '框架对接', link: 'config_framework'},
        {text: '开发对接', link: 'develop'},
      ]
    },
    {
      text: '其他',
      collapsed: false,
      items: [
        {text: '常见问题', link: 'faq'},
        {text: '配置 FFmpeg', link: 'ffmpeg'},
      ]
    }
  ];
}
