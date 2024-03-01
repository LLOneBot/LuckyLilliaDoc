import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const enUS = defineConfig({
    lang: 'en-US',
    description: 'LLOneBot',
    themeConfig: {
        nav: nav(),

        sidebar: {
            '/en-US/guide/': { base: '/en-US/guide/', items: sidebarGuide() }
        },

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
          }
    }
})

function nav() {
    return [
        { text: '指南', link: '/' },
        { text: '参考', link: '/markdown' }
    ];
}
function sidebarGuide() {
    return [
        {
            text: '基础配置',
            collapsed: false,
            items: [
                { text: 'Quick Start', link: 'getting-started', activeMatch: '/en-US/guide/' },
                { text: 'Config', link: 'configuration', activeMatch: '/en-US/guide/' },
                { text: 'Q&A', link: 'faq', activeMatch: '/en-US/guide/' }
            ]
        }
    ];
}
