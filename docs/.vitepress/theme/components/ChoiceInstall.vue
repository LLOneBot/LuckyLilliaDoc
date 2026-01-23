<template>
  <div>
    <div class="install-selector">
      <div class="selector-group">
        <label for="os-select">选择操作系统</label>
        <select id="os-select" class="select-box">
          <option value="windows">🪟 Windows</option>
          <option value="linux">🐧 Linux</option>
          <option value="manual">🔧 手动安装</option>
        </select>
      </div>

      <div class="selector-group">
        <label for="version-select">选择 LLBot 版本</label>
        <select id="version-select" class="select-box">
        </select>
      </div>
    </div>

    <div id="version-preview" class="version-preview"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initChoiceInstall } from '../choice-install.js'

onMounted(() => {
  initChoiceInstall()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

.install-selector {
  font-family: 'IBM Plex Sans', sans-serif;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(244, 114, 182, 0.15) 100%);
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  margin: 2rem 0;
  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.1);
  backdrop-filter: blur(10px);
}

.selector-group {
  margin-bottom: 1.5rem;
}

.selector-group:last-child {
  margin-bottom: 0;
}

.selector-group label {
  display: block;
  color: #1f2937;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.select-box {
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1.05rem;
  border: 2px solid rgba(236, 72, 153, 0.3);
  border-radius: 12px;
  background: white;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath fill='%23ec4899' d='M7 10L2 5h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
  font-weight: 500;
  font-family: 'IBM Plex Sans', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.select-box:hover:not(:disabled) {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.15);
  border-color: rgba(236, 72, 153, 0.5);
}

.select-box:focus {
  outline: none;
  background: white;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.15);
  transform: translateY(-2px);
  border-color: #ec4899;
}

.select-box:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.5);
  transform: none;
}

.version-preview {
  margin-top: 2rem;
}

:deep(.preview-card) {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.5s ease;
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

:deep(.preview-header h3) {
  color: #ec4899;
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

:deep(.preview-desc) {
  color: #4b5563;
  font-size: 1.05rem;
  margin: 0;
  line-height: 1.6;
}

:deep(.preview-features),
:deep(.preview-requirements),
:deep(.preview-steps) {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

:deep(.preview-features h4),
:deep(.preview-requirements h4),
:deep(.preview-steps h4) {
  color: #1f2937;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

:deep(.preview-features ul),
:deep(.preview-requirements ul) {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

:deep(.preview-features li),
:deep(.preview-requirements li) {
  padding-left: 1.75rem;
  position: relative;
  color: #4b5563;
  line-height: 1.6;
}

:deep(.preview-features li::before) {
  content: "✓";
  position: absolute;
  left: 0;
  color: #ec4899;
  font-weight: bold;
  font-size: 1.2rem;
}

:deep(.preview-requirements li::before) {
  content: "•";
  position: absolute;
  left: 0;
  color: #f472b6;
  font-weight: bold;
  font-size: 1.4rem;
}

:deep(.install-step) {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(244, 114, 182, 0.05) 100%);
  border-radius: 16px;
  border-left: 4px solid #ec4899;
  transition: all 0.3s ease;
}

:deep(.install-step:hover) {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.15);
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(244, 114, 182, 0.08) 100%);
}

:deep(.step-number) {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
}

:deep(.step-content) {
  flex: 1;
}

:deep(.step-content h5) {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.1rem;
  font-weight: 600;
}

:deep(.step-detail) {
  color: #4b5563;
  line-height: 1.7;
  font-size: 0.95rem;
}

:deep(.step-detail code) {
  background: rgba(236, 72, 153, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
  font-size: 0.9rem;
  color: #ec4899;
  font-weight: 500;
}

:deep(.step-detail pre) {
  background: #1f2937;
  color: #e5e7eb;
  padding: 1rem;
  border-radius: 12px;
  overflow-x: auto;
  margin: 0.75rem 0 0 0;
  font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  position: relative;
}

:deep(.step-detail pre .copy-button) {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e7eb;
  opacity: 0;
}

:deep(.step-detail pre:hover .copy-button) {
  opacity: 1;
}

:deep(.step-detail pre .copy-button:hover) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

:deep(.step-detail pre .copy-button.copied) {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.3);
  color: #10b981;
}

:deep(.step-detail pre code) {
  background: none;
  padding: 0;
  color: inherit;
}

:deep(.step-detail a) {
  color: #ec4899;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

:deep(.step-detail a:hover) {
  border-bottom-color: #ec4899;
}

:deep(.step-note) {
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
  border-left: 3px solid #3b82f6;
  border-radius: 6px;
  color: #1e40af;
  font-size: 0.9rem;
  line-height: 1.6;
}

:deep(.next-steps) {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
  border-radius: 16px;
  border-left: 4px solid #10b981;
}

:deep(.next-steps p) {
  margin: 0;
  color: #065f46;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
}

:deep(.next-steps a) {
  color: #047857;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #10b981;
  transition: all 0.2s ease;
}

:deep(.next-steps a:hover) {
  color: #10b981;
  border-bottom-color: #047857;
}

@media (max-width: 768px) {
  .install-selector {
    padding: 1.5rem;
  }
  
  :deep(.preview-card) {
    padding: 1.5rem;
  }
  
  :deep(.install-step) {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.25rem;
  }
  
  :deep(.step-number) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  :deep(.step-detail pre) {
    font-size: 0.85rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  :deep(.install-step),
  :deep(.preview-card) {
    animation: none !important;
    transition: none !important;
  }
}
</style>
