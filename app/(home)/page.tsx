'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  AppWindow,
  Boxes,
  Download,
  MonitorCog,
  ShieldCheck,
  Settings,
} from 'lucide-react';
import './home.css';

const features = [
  {
    title: '多平台支持',
    description:
      '支持 Windows、Linux、macOS 多平台部署，无论是桌面版还是服务器环境都能轻松运行',
    icon: MonitorCog,
  },
  {
    title: '多种安装方式',
    description:
      '提供 Desktop 版、CLI 版、Docker 镜像等多种安装方式，满足不同使用场景',
    icon: Download,
  },
  {
    title: '协议支持',
    description: '完整支持 OneBot 11、Milky、Satori 协议，可对接各种主流框架',
    icon: ShieldCheck,
  },
  {
    title: '功能丰富',
    description: '完善的 API，内置 WebQQ，一键安装和对接各种框架',
    icon: Settings,
  },
  {
    title: '开源免费',
    description: '开源框架，社区驱动开发，持续更新维护',
    icon: Boxes,
  },
  {
    title: '漂亮的 Web / GUI 管理界面',
    description: '现代化 WebUI / GUI，可视化配置和管理，无需编辑配置文件',
    icon: AppWindow,
  },
] as const;

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 },
    );

    const els = containerRef.current?.querySelectorAll('.fade-in');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={containerRef} className="home-container">
      <div className="gradient-bg" />
      <div className="gradient-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="content-wrapper">
        <section className="hero-section">
          <div className="fade-in">
            <img
              src="/logo.jpg"
              alt="Lucky Lillia Bot Logo"
              className="hero-logo"
            />
            <h1 className="hero-title">Lucky Lillia Bot</h1>
            <p className="hero-subtitle">幸运莉莉娅</p>
            <p className="hero-subtitle">
              LLBot，强大的 QQ 机器人框架，部署机器人更简单、更高效
            </p>
            <div className="cta-buttons">
              <Link href="/guide/choice_install" className="cta-button">
                <Download size={20} />
                谁看破文档，立即安装!
              </Link>
              <Link
                href="/guide/introduction"
                className="cta-button cta-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                了解什么是 LLBot
              </Link>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="features-title fade-in">为什么选择 LLBot？</h2>
          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="feature-card fade-in">
                  <div className="feature-icon">
                    <Icon size={32} color="white" />
                  </div>
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
