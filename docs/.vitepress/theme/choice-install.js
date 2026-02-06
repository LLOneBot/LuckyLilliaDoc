export function initChoiceInstall() {
  const osSelect = document.getElementById('os-select')
  const versionSelect = document.getElementById('version-select')
  const versionPreview = document.getElementById('version-preview')
  
  if (!osSelect || !versionSelect || !versionPreview) return

  // 添加复制功能
  function addCopyButtons() {
    const codeBlocks = versionPreview.querySelectorAll('pre code')
    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement
      if (pre.querySelector('.copy-button')) return

      const button = document.createElement('button')
      button.className = 'copy-button'
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `
      button.title = '复制代码'
      
      button.addEventListener('click', async () => {
        const code = codeBlock.textContent
        try {
          await navigator.clipboard.writeText(code)
          button.classList.add('copied')
          button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          `
          setTimeout(() => {
            button.classList.remove('copied')
            button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            `
          }, 2000)
        } catch (err) {
          console.error('复制失败:', err)
        }
      })
      
      pre.style.position = 'relative'
      pre.appendChild(button)
    })
  }

  // 共享的安装步骤模板
  const DOCKER_COMPOSE_SCRIPT = 'curl -fsSL https://gh-proxy.com/https://raw.githubusercontent.com/LLOneBot/LuckyLilliaBot/refs/heads/main/script/install-llbot-docker.sh -o llbot-docker.sh && chmod u+x ./llbot-docker.sh && ./llbot-docker.sh'
  const DOCKER_COMPOSE_UP = 'docker-compose up -d'
  const DOCKER_COMPOSE_LOGS = 'docker-compose logs -f'
  const DOCKER_PULL = 'docker pull initialencounter/llonebot:latest'
  const DOCKER_RUN = `docker run -d \\
  --name llbot \\
  -p 3080:3080 \\
  initialencounter/llonebot:latest`

  const dockerComposeSteps = [
    {
      title: '运行一键脚本',
      content: `<pre><code>${DOCKER_COMPOSE_SCRIPT}</code></pre>`,
      note: '脚本会自动配置生成 docker-compose.yaml'
    },
    {
      title: '启动容器',
      content: `<pre><code>${DOCKER_COMPOSE_UP}</code></pre>`
    },
    {
      title: '查看日志',
      content: `<pre><code>${DOCKER_COMPOSE_LOGS}</code></pre>`
    },
    {
      title: '扫码登录',
      content: '按照日志中的提示扫码登录 QQ 或者打开 WebUI http://localhost:3080 进行登录'
    }
  ]

  const dockerImageSteps = [
    {
      title: '拉取镜像',
      content: `<pre><code>${DOCKER_PULL}</code></pre>`
    },
    {
      title: '运行容器',
      content: `<pre><code>${DOCKER_RUN}</code></pre>`,
      note: '可以根据需要添加 -p 参数映射你想暴露的端口\n设置环境变量 `QUICK_LOGIN_QQ` 可以自动登录 QQ，前提是扫码登录过一次'
    },
    {
      title: '访问 Web UI',
      content: '打开浏览器访问 <code>http://localhost:3080</code>'
    }
  ]

  const versions = {
    windows: [
      { 
        value: 'desktop', 
        label: '🎨 Desktop 版本（带界面程序）', 
        desc: '新手友好，图形化界面，支持一键对接各种框架',
        features: ['图形化界面', '可视化配置', '实时监控日志', '自动更新检查'],
        requirements: ['Windows Server 2012 / Windows 10 及以上', '64 位的 NTQQ（官方下载）', '必须使用原版 QQ，不要安装任何插件'],
        steps: [
          {
            title: '下载安装包',
            content: '前往 <a href="https://github.com/LLOneBot/LuckyLilliaBot/releases" target="_blank">GitHub Release 页面</a> 下载最新版本的 <code>LLBot-Desktop-win-x64.zip</code>',
          },
          {
            title: '解压文件',
            content: '将下载的 zip 文件解压到任意目录，建议选择一个固定的位置（如 <code>D:\\LLBot</code>）',
          },
          {
            title: '启动程序',
            content: '双击 <code>llbot.exe</code> 文件，然后在界面上点击启动按钮'
          },
          {
            title: '登录 QQ',
            content: '启动后会自动启动QQ，登录成功后 LLBot 会自动连接',
            note: '⚠️ 必须是 LLBot 拉起的 QQ 才有效，自己手动打开 QQ 无效'
          }
        ]
      },
      { 
        value: 'cli', 
        label: '⚡ CLI 版本（命令行版本）', 
        desc: '轻量级命令行工具，适合服务器部署',
        features: ['资源占用更少', '命令行操作'],
        requirements: ['Windows Server 2012 / Windows 10 及以上', '64 位的 NTQQ（官方下载）'],
        steps: [
          {
            title: '下载安装包',
            content: '前往 <a href="https://github.com/LLOneBot/LuckyLilliaBot/releases" target="_blank">GitHub Release 页面</a> 下载 <code>LLBot-CLI-win-x64.zip</code>'
          },
          {
            title: '解压文件',
            content: '将下载的 zip 文件解压到任意目录',
          },
          {
            title: '运行启动',
            content: '双击 <code>llbot.exe</code> 或在命令行中运行',
            note: 'llbot.exe -help 可查看更多使用技巧'
          },
          {
            title: '登录 QQ',
            content: '启动 LLBot 之后会自动启动 QQ',
            note: '⚠️ 必须是 LLBot 拉起的 QQ 才有效'
          },
          {
            title: '打开 WebUI 配置',
            content: '访问 http://127.0.0.1:3080',
          }
        ]
      }
    ],
    linux: [
      { 
        value: 'cli', 
        label: '🐧 CLI 版本', 
        desc: '原生 Linux 支持，一键安装脚本',
        features: ['支持 x64 和 ARM64', '一键安装，自动处理依赖', '无需 Docker 原生运行'],
        requirements: ['Debian/Ubuntu/Arch', '支持 x64 或 ARM64 架构'],
        steps: [
          {
            title: '下载安装包',
            content: '前往 <a href="https://github.com/LLOneBot/LuckyLilliaBot/releases" target="_blank">GitHub Release 页面</a> 下载对应架构的安装包：<br>• x64: <code>LLBot-CLI-linux-x64.zip</code><br>• ARM64: <code>LLBot-CLI-linux-arm64.zip</code>'
          },
          {
            title: '解压文件',
            content: '<pre><code>unzip LLBot-CLI-linux-*.zip\ncd LLBot-CLI-linux-*</code></pre>'
          },
          {
            title: '运行启动脚本',
            content: '<pre><code>chmod +x start.sh\n./start.sh</code></pre>',
            note: './llbot --help 可查看更多使用技巧'
          },
          {
            title: '扫码登录',
            content: '按照提示扫码登录 QQ，或者打开 WebUI http://localhost:3080 进行登录'
          }
        ]
      }
    ],
    docker: [
      { 
        value: 'compose', 
        label: '🐳 Docker Compose 版本', 
        desc: '使用 Docker Compose 一键部署，支持 Linux 和 macOS',
        features: ['容器化部署', '环境隔离', '一键安装', '易于管理', '自动化配置'],
        requirements: [
          '如果是 macOS 请安装 OrbStack 不要使用 Docker Desktop !!!',
        ],
        steps: [
          {
            title: '安装 Docker 环境',
            content: '<strong>Linux 用户：</strong>确保已安装 Docker 和 Docker Compose<br><br><strong>macOS 用户：</strong>⚠️ 必须使用 OrbStack，不要使用 Docker Desktop<br>前往 <a href="https://orbstack.dev" target="_blank">OrbStack 官网</a> 下载并安装，或使用 Homebrew：<pre><code>brew install orbstack</code></pre>',
            note: 'OrbStack 比 Docker Desktop 更快、更轻量，且完全兼容 Docker 命令'
          },
          ...dockerComposeSteps
        ]
      },
      { 
        value: 'image', 
        label: '📦 Docker 单镜像版本', 
        desc: '单独镜像部署，支持 Linux、macOS 和 NixOS',
        features: ['单镜像部署', '不依赖 Compose', '支持更多平台'],
        requirements: [
          '如果是 macOS 请安装 OrbStack 不要使用 Docker Desktop !!!',
        ],
        steps: [
          {
            title: '安装 Docker 环境',
            content: '<strong>Linux 用户：</strong>确保已安装 Docker<br><br><strong>macOS 用户：</strong>⚠️ 必须使用 OrbStack，不要使用 Docker Desktop<br>前往 <a href="https://orbstack.dev" target="_blank">OrbStack 官网</a> 下载并安装，或使用 Homebrew：<pre><code>brew install orbstack</code></pre>',
            note: 'OrbStack 比 Docker Desktop 更快、更轻量，且完全兼容 Docker 命令'
          },
          ...dockerImageSteps
        ]
      }
    ],
    manual: [
      {
        value: 'manual',
        label: '🔧 通用手动安装',
        desc: '适用于所有平台的手动安装方法，需要分别安装 PMHQ 和 LLBot',
        features: ['跨平台支持', '完全控制', '适合高级用户', '可自定义配置', '适合特殊环境'],
        requirements: ['Node.js 22 及以上版本', 'PMHQ 和 LLBot 安装包', 'Linux 需要额外的系统库'],
        steps: [
          {
            title: '下载 PMHQ',
            content: '前往 <a href="https://github.com/linyuchen/PMHQ/releases" target="_blank">PMHQ Release 页面</a> 下载对应平台的 PMHQ',
            note: 'PMHQ 是用于与 QQ 通信的桥接程序，PMHQ 的更多用法参考 pmhq --help'
          },
          {
            title: '运行 PMHQ',
            content: '运行 PMHQ 后会启动 QQ，登录后会生成配置文件 <code>pmhq_config.json</code>。如果没有生成就手动创建，参考 <a href="https://github.com/linyuchen/PMHQ/blob/main/doc/config.md" target="_blank">config.md</a>',
            note: 'Linux 用户需要安装必需库，无界面 Linux 请使用 xvfb-run 运行 PMHQ，详情见 <a href="https://github.com/LLOneBot/LuckyLilliaBot/blob/main/script/start-linux.sh" target="_blank">start.sh</a>'
          },
          {
            title: '记录 PMHQ 配置',
            content: '打开 <code>pmhq_config.json</code>，记下 <code>default_host</code> 和 <code>default_port</code> 参数，这两个参数用于 LLBot 与 PMHQ 通信',
            note: '默认通常是 127.0.0.1:13000'
          },
          {
            title: '下载 LLBot',
            content: '前往 <a href="https://github.com/LLOneBot/LuckyLilliaBot/releases" target="_blank">LLBot Release 页面</a> 下载 <code>LLBot.zip</code>',
            note: 'LLBot 是一个 Node.js 包'
          },
          {
            title: '运行 LLBot',
            content: '解压后使用 Node.js 运行 <code>llbot.js</code>，并传入 PMHQ 的 host 和 port：<pre><code>node llbot.js --pmhq-host=127.0.0.1 --pmhq-port=13000</code></pre>',
            note: '⚠️ 需要 Node.js 22 及以上版本'
          },
          {
            title: '验证连接',
            content: '登录 QQ 后，LLBot 会显示连接成功的消息',
            note: '如果连接失败，请检查 PMHQ 配置和端口是否正确'
          }
        ]
      }
    ]
  }

  versionSelect.addEventListener('change', (e) => {
    const os = osSelect.value
    const versionValue = e.target.value
    
    if (os && versionValue && versions[os]) {
      const version = versions[os].find(v => v.value === versionValue)
      
      if (version) {
        const featuresHtml = version.features.map(feature => `<li>${feature}</li>`).join('')
        const requirementsHtml = version.requirements.map(req => `<li>${req}</li>`).join('')
        const stepsHtml = version.steps.map((step, index) => `
          <div class="install-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
              <h5>${step.title}</h5>
              <div class="step-detail">${step.content}</div>
              ${step.note ? `<div class="step-note">💡 ${step.note}</div>` : ''}
            </div>
          </div>
        `).join('')
        
        const html = `
          <div class="preview-card">
            <div class="preview-header">
              <h3>${version.label}</h3>
              <p class="preview-desc">${version.desc}</p>
            </div>
            
            <div class="preview-features">
              <h4>✨ 特性</h4>
              <ul>${featuresHtml}</ul>
            </div>
            
            <div class="preview-requirements">
              <h4>📋 系统要求</h4>
              <ul>${requirementsHtml}</ul>
            </div>

            <div class="preview-steps">
              <h4>🚀 安装步骤</h4>
              ${stepsHtml}
            </div>

            <div class="next-steps">
              <p>✅ 安装完成后，请查看 <a href="./config">配置指南</a> 了解如何配置 LLBot 对接你的机器人框架。</p>
            </div>
          </div>
        `
        versionPreview.innerHTML = html
        
        // 添加复制按钮
        setTimeout(() => addCopyButtons(), 0)
      }
    } else {
      versionPreview.innerHTML = ''
    }
  })

  osSelect.addEventListener('change', (e) => {
    const os = e.target.value
    versionSelect.innerHTML = ''
    versionPreview.innerHTML = ''
    
    if (os && versions[os]) {
      versionSelect.disabled = false
      versions[os].forEach(version => {
        const option = document.createElement('option')
        option.value = version.value
        option.textContent = version.label
        versionSelect.appendChild(option)
      })
      // 自动触发第一个版本的选择
      if (versions[os].length > 0) {
        versionSelect.value = versions[os][0].value
        versionSelect.dispatchEvent(new Event('change', { bubbles: true }))
      }
    } else {
      versionSelect.disabled = true
    }
  })

  // 页面加载时自动触发第一个 OS 的选择
  if (osSelect.options.length > 0) {
    osSelect.dispatchEvent(new Event('change', { bubbles: true }))
  }
}
