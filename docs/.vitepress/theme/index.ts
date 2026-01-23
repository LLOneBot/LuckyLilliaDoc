// docs/.vitepress/theme/index.ts
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watchEffect, onMounted } from 'vue'
import CustomHome from './components/CustomHome.vue'
import './custom.css'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('CustomHome', CustomHome)
	},
	setup() {
		const { lang, page } = useData()
		
		watchEffect(() => {
			if (inBrowser) {
				document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
			}
		})

		// 隐藏首页的导航栏并移除顶部间距
		onMounted(() => {
			if (inBrowser) {
				const hideNavOnHome = () => {
					const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html'
					if (isHome) {
						// 查找并隐藏导航栏
						const nav = document.querySelector('.VPNav')
						const navBar = document.querySelector('.VPNavBar')
						if (nav) nav.style.display = 'none'
						if (navBar) navBar.style.display = 'none'
						
						// 移除所有可能的顶部间距
						const layout = document.querySelector('.Layout')
						const vpContent = document.querySelector('.VPContent')
						const app = document.querySelector('#app')
						const body = document.body
						
						if (layout) {
							layout.style.paddingTop = '0'
							layout.style.marginTop = '0'
						}
						if (vpContent) {
							vpContent.style.paddingTop = '0'
							vpContent.style.marginTop = '0'
						}
						if (app) {
							app.style.paddingTop = '0'
							app.style.marginTop = '0'
						}
						if (body) {
							body.style.paddingTop = '0'
							body.style.marginTop = '0'
						}
					}
				}
				
				// 立即执行
				hideNavOnHome()
				
				// 监听路由变化
				setTimeout(hideNavOnHome, 100)
				setTimeout(hideNavOnHome, 500)
			}
		})
	},
}
