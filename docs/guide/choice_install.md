# 选择要安装的版本

<div class="install-selector">
  <div class="selector-group">
    <label for="os-select">选择操作系统</label>
    <select id="os-select" class="select-box">
      <option value="">请选择操作系统</option>
      <option value="windows">🪟 Windows</option>
      <option value="linux">🐧 Linux</option>
    </select>
  </div>

  <div class="selector-group">
    <label for="version-select">选择 LLBot 版本</label>
    <select id="version-select" class="select-box" disabled>
      <option value="">请先选择操作系统</option>
    </select>
  </div>

  <div class="button-group" id="button-group" style="display: none;">
    <button id="go-install" class="install-button">查看详细安装指南 →</button>
  </div>
</div>

<div id="version-preview" class="version-preview"></div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const osSelect = document.getElementById('os-select')
  const versionSelect = document.getElementById('version-select')
  const versionPreview = document.getElementById('version-preview')
  const buttonGroup = document.getElementById('button-group')
  const goInstallBtn = document.getElementById('go-install')

  const versions = {
    windows: [
      { 
        value: 'desktop', 
        label: '🎨 Desktop 版本（带界面程序）', 
        desc: '新手友好，图形化界面，支持一键对接各种框架',
        features: ['图形化界面，无需命令行', '一键启动 QQ', '可视化配置', '实时监控日志', '自动更新检查'],
        link: './install-windows-desktop.md'
      },
      { 
        value: 'cli', 
        label: '⚡ CLI 版本（命令行版本）', 
        desc: '轻量级命令行工具，适合服务器部署',
        features: ['资源占用更少', '命令行操作', '灵活配置', '便于自动化部署', '后台运行'],
        link: './install-windows-cli.md'
      }
    ],
    linux: [
      { 
        value: 'cli', 
        label: '🐧 CLI 版本', 
        desc: '原生 Linux 支持，一键安装脚本',
        features: ['支持 x64 和 ARM64', '一键安装脚本', 'systemd 集成', '高性能优化', '适合树莓派'],
        link: './install-linux-cli.md'
      },
      { 
        value: 'docker', 
        label: '🐳 Docker Compose 版本', 
        desc: '使用 Docker Compose 一键部署',
        features: ['容器化部署', '环境隔离', '一键安装', '易于管理', '自动化配置'],
        link: './install-linux-docker.md'
      },
      { 
        value: 'docker-nix', 
        label: '📦 Docker 镜像版本', 
        desc: '单独镜像，支持 NixOS',
        features: ['单镜像部署', '不依赖 Compose', 'Web UI 登录', 'NixOS 优化', 'K8s 友好'],
        link: './install-linux-docker-nix.md'
      }
    ]
  }

  let currentLink = ''

  osSelect.addEventListener('change', (e) => {
    const os = e.target.value
    versionSelect.innerHTML = '<option value="">请选择版本</option>'
    versionPreview.innerHTML = ''
    buttonGroup.style.display = 'none'
    
    if (os && versions[os]) {
      versionSelect.disabled = false
      versions[os].forEach(version => {
        const option = document.createElement('option')
        option.value = version.value
        option.textContent = version.label
        versionSelect.appendChild(option)
      })
    } else {
      versionSelect.disabled = true
    }
  })

  versionSelect.addEventListener('change', (e) => {
    const os = osSelect.value
    const versionValue = e.target.value
    
    if (os && versionValue && versions[os]) {
      const version = versions[os].find(v => v.value === versionValue)
      
      if (version) {
        currentLink = version.link
        
        let html = `
          <div class="preview-card">
            <div class="preview-header">
              <h3>${version.label}</h3>
              <p class="preview-desc">${version.desc}</p>
            </div>
            
            <div class="preview-features">
              <h4>✨ 主要特性</h4>
              <ul>
                ${version.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
          </div>
        `
        versionPreview.innerHTML = html
        buttonGroup.style.display = 'block'
      }
    } else {
      versionPreview.innerHTML = ''
      buttonGroup.style.display = 'none'
    }
  })

  goInstallBtn.addEventListener('click', () => {
    if (currentLink) {
      window.location.href = currentLink
    }
  })
})
</script>

<style scoped>
.install-selector {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 2.5rem;
  margin: 2rem 0;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

.selector-group {
  margin-bottom: 1.5rem;
}

.selector-group label {
  display: block;
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.select-box {
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1.05rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath fill='%23667eea' d='M7 10L2 5h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
  font-weight: 500;
}

.select-box:hover:not(:disabled) {
  border-color: white;
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.select-box:focus {
  outline: none;
  border-color: white;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.select-box:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.5);
}

.button-group {
  margin-top: 2rem;
  text-align: center;
}

.install-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.install-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.install-button:active {
  transform: translateY(-1px);
}

.version-preview {
  margin-top: 2rem;
}

.preview-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: fadeInUp 0.5s ease;
  border: 2px solid #f0f0f0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preview-header h3 {
  color: #667eea;
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.preview-desc {
  color: #666;
  font-size: 1.05rem;
  margin: 0;
  line-height: 1.6;
}

.preview-features {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f0f0f0;
}

.preview-features h4 {
  color: #764ba2;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.preview-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.preview-features li {
  padding-left: 1.75rem;
  position: relative;
  color: #444;
  line-height: 1.6;
}

.preview-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .install-selector {
    padding: 1.5rem;
  }
  
  .preview-card {
    padding: 1.5rem;
  }
  
  .install-button {
    width: 100%;
    padding: 1rem;
  }
}
</style>