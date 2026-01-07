import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: '幸运莉莉娅',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
    /^ws:\/\/localhost/
  ],
  vite: {
    ssr: {
      noExternal: ['mermaid']
    }
  }
})
