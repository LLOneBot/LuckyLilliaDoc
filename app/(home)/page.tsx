import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import {
  AppWindow,
  Boxes,
  Download,
  MonitorCog,
  ShieldCheck,
  SquareDashedKanban,
} from 'lucide-react';

const features = [
  {
    title: '多平台支持',
    description:
      '支持 Windows、Linux 多平台部署，无论是桌面版还是服务器环境都能轻松运行',
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
    icon: SquareDashedKanban,
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
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14">
      <section className="relative overflow-hidden rounded-2xl border bg-fd-card p-6 sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--fd-primary)/0.15),transparent_45%),radial-gradient(circle_at_80%_30%,hsl(var(--fd-secondary)/0.12),transparent_40%)]"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-fd-muted-foreground">
            幸运莉莉娅
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
            LuckyLilliaBot
          </h1>
          <p className="mt-4 text-base text-fd-muted-foreground sm:text-lg">
            LLBot，强大的 QQ 机器人框架，部署机器人更简单、更高效
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
            >
              阅读文档
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          为什么选择 LLBot？
        </h2>
        <Cards className="mt-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={<Icon />}
              />
            );
          })}
        </Cards>
      </section>
    </main>
  );
}
