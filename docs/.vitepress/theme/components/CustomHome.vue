<template>
  <div class="hero-container">
    <div class="gradient-bg"></div>
    <div class="gradient-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <div class="content-wrapper">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="fade-in">
          <img src="/asset/img/configuration/logo.jpg" alt="Lucky Lillia Bot Logo" class="hero-logo" />
          <h1 class="hero-title">Lucky Lillia Bot</h1>
          <p class="hero-subtitle">
            幸运莉莉娅
          </p>
          <p class="hero-subtitle">
            LLBot，强大的 QQ 机器人框架，部署机器人更简单、更高效
          </p>
          <div class="cta-buttons">
            <a href="/guide/choice_install" class="cta-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              谁看破文档，立即安装!
            </a>
            <a href="/guide/introduction" class="cta-button cta-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              了解什么是 LLBot
            </a>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="features-section">
        <h2 class="features-title fade-in">为什么选择 LLBot？</h2>
        <div class="features-grid">
          <div class="feature-card fade-in">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            </div>
            <h3 class="feature-title">多平台支持</h3>
            <p class="feature-desc">
              支持 Windows、Linux 多平台部署，无论是桌面版还是服务器环境都能轻松运行
            </p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </div>
            <h3 class="feature-title">多种安装方式</h3>
            <p class="feature-desc">
              提供 Desktop 版、CLI 版、Docker 镜像等多种安装方式，满足不同使用场景
            </p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <h3 class="feature-title">协议支持</h3>
            <p class="feature-desc">
              完整支持 OneBot 11 、Milky、 Satori 协议，可对接各种主流框架
            </p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 class="feature-title">功能丰富</h3>
            <p class="feature-desc">
              完善的 API，内置 WebQQ，一键安装和对接各种框架
            </p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
            </div>
            <h3 class="feature-title">开源免费</h3>
            <p class="feature-desc">
              开源框架，社区驱动开发，持续更新维护
            </p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M14 8h7"/><path d="M14 12h7"/><path d="M14 16h7"/></svg>
            </div>
            <h3 class="feature-title">漂亮的 Web / GUI 管理界面</h3>
            <p class="feature-desc">
              现代化 WebUI / GUI，可视化配置和管理，无需编辑配置文件
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

.hero-container {
  font-family: 'IBM Plex Sans', sans-serif;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(224, 231, 255, 1) 0%, 
    rgba(233, 213, 255, 1) 25%,
    rgba(252, 231, 243, 1) 50%,
    rgba(254, 240, 220, 1) 75%,
    rgba(240, 253, 250, 1) 100%
  );
  z-index: 0;
}

.gradient-orbs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: rgba(224, 231, 255, 0.8);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: rgba(252, 231, 243, 0.8);
  bottom: -10%;
  right: -10%;
  animation-delay: 7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: rgba(254, 240, 220, 0.8);
  top: 50%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.content-wrapper {
  position: relative;
  z-index: 2;
}

.hero-section {
  padding: 6rem 2rem 3rem;
  text-align: center;
}

.hero-logo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  display: block;
  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  object-fit: cover;
}

.hero-logo:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 12px 48px rgba(236, 72, 153, 0.4);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #4b5563;
  margin-bottom: 3rem;
  font-weight: 400;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.3);
  cursor: pointer;
  border: none;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(236, 72, 153, 0.4);
  background: linear-gradient(135deg, #db2777 0%, #ec4899 100%);
  color: white;
}

.cta-secondary {
  background: rgba(255, 255, 255, 0.8);
  color: #1f2937;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.95);
  color: #1f2937;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.features-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.85);
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.feature-desc {
  color: #4b5563;
  line-height: 1.7;
  font-size: 1rem;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 2rem 2rem;
  }

  .hero-logo {
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }

  .features-section {
    padding: 2rem 1.5rem 4rem;
  }

  .features-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .orb, .fade-in, .cta-button, .feature-card {
    animation: none !important;
    transition: none !important;
  }
}
</style>
