import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { docs } from './docs'

export default defineConfig({
  ...shared,
  ...docs
})
