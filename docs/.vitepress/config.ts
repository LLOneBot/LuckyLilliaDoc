import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { shared } from './shared'
import { docs } from './docs'

export default withMermaid(defineConfig({
  ...shared,
  ...docs
}))
