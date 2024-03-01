import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LLOneBot",
  description: "LLOneBot",
  locales: {
    '/zh-CN/': {
      label: "简体中文",
      lang: "zh-CN",
      link: '/zh-CN/'
    },
    '/en-US/': {
      label: 'English',
      lang: 'en-us',
      link: '/en-US/'
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: './' },
      { text: '参考', link: './markdown' }
    ],

    sidebar: [
      {
        text: '基础配置',
        items: [
          { text: '快速开始', link: './guide/getting-started' },
          { text: '配置选项', link: './guide/configuration' },
          { text: '常见问题', link: './guide/faq' }
        ]
      }, {
        text: '其它配置',
        items: [
          { text: '语音配置', link: './other/voice' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LLOneBot/LLOneBot' }
    ]
  }
})
/*,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 LLOneBot'
    }*/