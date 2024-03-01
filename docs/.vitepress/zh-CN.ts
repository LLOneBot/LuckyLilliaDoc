import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zhCN = defineConfig({
    lang: 'zh-CN',
    description: 'LLOneBot',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh-CN/guide/': { base: '/zh-CN/guide/', items: sidebarGuide() }
        },

        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
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
                { text: '快速开始', link: 'getting-started', activeMatch: '/zh-CN/guide/' },
                { text: '配置选项', link: 'configuration', activeMatch: '/zh-CN/guide/' },
                { text: '常见问题', link: 'faq', activeMatch: '/zh-CN/guide/' }
            ]
        }
    ];
}
