'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { useCopyButton } from 'fumadocs-ui/utils/use-copy-button';
import { cn } from '@/lib/cn';

type OSKey = 'windows' | 'macos' | 'linux' | 'docker' | 'manual';

type Step = {
  title: string;
  detail: ReactNode;
  code?: string;
  note?: ReactNode;
};

type Method = {
  value: string;
  label: string;
  desc: ReactNode;
  features: string[];
  requirements: string[];
  steps: Step[];
};

type Option = { value: OSKey; label: string };

const osOptions: Option[] = [
  { value: 'windows', label: 'Windows' },
  { value: 'macos', label: 'macOS' },
  { value: 'linux', label: 'Linux' },
  { value: 'docker', label: 'Docker' },
  { value: 'manual', label: '手动安装' },
];

const linkClass =
  'text-fd-primary underline underline-offset-4 hover:text-fd-primary/80';

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={linkClass}
    >
      {children}
    </a>
  );
}

const methodsByOS: Record<OSKey, Method[]> = {
  windows: [
    {
      value: 'desktop',
      label: 'Desktop 版本（带界面程序）',
      desc: '新手优先，图形化界面，开箱即用。',
      features: ['图形化界面', '可视化配置', '实时日志', '自动更新检查'],
      requirements: [
        'Windows Server 2012 / Windows 10 及以上',
        '64 位 NTQQ（官方原版）',
        '不要安装第三方 QQ 插件',
      ],
      steps: [
        {
          title: '下载安装包',
          detail: (
            <>
              前往{' '}
              <ExternalLink href="https://github.com/LLOneBot/LuckyLilliaBot/releases">
                LuckyLilliaBot Releases
              </ExternalLink>{' '}
              下载 <code>LLBot-Desktop-win-x64.zip</code>。
            </>
          ),
        },
        {
          title: '解压文件',
          detail: (
            <>
              将压缩包解压到固定目录，例如 <code>D:\\LLBot</code>。
            </>
          ),
        },
        {
          title: '启动程序',
          detail: (
            <>
              双击 <code>llbot.exe</code>，点击启动。
            </>
          ),
        },
        {
          title: '登录 QQ',
          detail: '按提示登录。必须由 LLBot 拉起 QQ，手动打开的 QQ 不生效。',
        },
      ],
    },
    {
      value: 'cli',
      label: 'CLI 版本（命令行）',
      desc: '轻量部署，适合命令行和服务器场景。',
      features: ['资源占用更低', '命令行可控', '支持 WebUI'],
      requirements: [
        'Windows Server 2012 / Windows 10 及以上',
        '64 位 NTQQ（官方原版）',
      ],
      steps: [
        {
          title: '下载安装包',
          detail: (
            <>
              前往{' '}
              <ExternalLink href="https://github.com/LLOneBot/LuckyLilliaBot/releases">
                LuckyLilliaBot Releases
              </ExternalLink>{' '}
              下载 <code>LLBot-CLI-win-x64.zip</code>。
            </>
          ),
        },
        {
          title: '解压并启动',
          detail: (
            <>
              解压后运行 <code>llbot.exe</code>。
            </>
          ),
          code: 'llbot.exe -help',
          note: '可先查看命令行参数。',
        },
        {
          title: '登录与配置',
          detail: '按提示完成登录，随后访问 WebUI。',
          code: 'http://127.0.0.1:3080',
        },
      ],
    },
  ],
  macos: [
    {
      value: 'desktop',
      label: 'Desktop 版本（带界面程序）',
      desc: '适合本地桌面环境，操作直观。',
      features: ['图形化界面', '可视化配置', '实时日志'],
      requirements: ['macOS 12 及以上', 'Apple Silicon（arm64）'],
      steps: [
        {
          title: '下载安装包',
          detail: (
            <>
              前往{' '}
              <ExternalLink href="https://github.com/LLOneBot/LuckyLilliaBot/releases">
                LuckyLilliaBot Releases
              </ExternalLink>{' '}
              下载 <code>LLBot-Desktop-macos-arm64.tar.xz</code>。
            </>
          ),
        },
        {
          title: '解压文件',
          detail: '解压并放到你常用目录（可拖入“应用程序”）。',
          code: 'tar -xf LLBot-Desktop-macos-arm64.tar.xz',
        },
        {
          title: '启动并登录',
          detail:
            '启动程序并按提示完成 QQ 登录。若遇系统拦截，请在“隐私与安全性”中放行。',
        },
      ],
    },
    {
      value: 'cli',
      label: 'CLI 版本（命令行）',
      desc: '本地或远程终端都可用。',
      features: ['资源占用更低', '命令行操作'],
      requirements: ['macOS 12 及以上', 'Apple Silicon（arm64）'],
      steps: [
        {
          title: '下载安装包',
          detail: (
            <>
              前往{' '}
              <ExternalLink href="https://github.com/LLOneBot/LuckyLilliaBot/releases">
                LuckyLilliaBot Releases
              </ExternalLink>{' '}
              下载 <code>LLBot-CLI-macos-arm64.tar.xz</code>。
            </>
          ),
        },
        {
          title: '解压并进入目录',
          detail: '解压后进入目录。',
          code: 'tar -xf LLBot-CLI-macos-arm64.tar.xz\ncd LLBot-CLI-macos-arm64',
        },
        {
          title: '启动',
          detail: '赋权并运行启动脚本。',
          code: 'chmod +x start.sh\n./start.sh',
        },
        {
          title: '登录',
          detail: '按提示登录，或打开 WebUI。',
          code: 'http://localhost:3080',
        },
      ],
    },
  ],
  linux: [
    {
      value: 'cli',
      label: 'CLI 版本',
      desc: '原生运行，适合长期部署。',
      features: ['支持 x64 / ARM64', '一键脚本流程', '无需 Docker'],
      requirements: ['Debian / Ubuntu / Arch', 'x64 或 ARM64 架构'],
      steps: [
        {
          title: '下载安装包',
          detail: (
            <>
              前往{' '}
              <ExternalLink href="https://github.com/LLOneBot/LuckyLilliaBot/releases">
                LuckyLilliaBot Releases
              </ExternalLink>{' '}
              下载对应架构包：<code>LLBot-CLI-linux-x64.zip</code> 或{' '}
              <code>LLBot-CLI-linux-arm64.zip</code>。
            </>
          ),
        },
        {
          title: '解压并进入目录',
          detail: '解压后进入目录。',
          code: 'unzip LLBot-CLI-linux-*.zip\ncd LLBot-CLI-linux-*',
        },
        {
          title: '启动',
          detail: '赋权并运行启动脚本。',
          code: 'chmod +x start.sh\n./start.sh',
        },
        {
          title: '登录',
          detail: '按提示扫码登录，或打开 WebUI。',
          code: 'http://localhost:3080',
        },
      ],
    },
  ],
  docker: [
    {
      value: 'compose',
      label: 'Docker Compose 版本',
      desc: '一键脚本快速部署，适合大多数容器用户。',
      features: ['容器化部署', '自动化配置', '易于管理'],
      requirements: [
        'Linux: 已安装 Docker + Docker Compose',
        'macOS: 推荐 OrbStack，避免 Docker Desktop',
      ],
      steps: [
        {
          title: '安装环境',
          detail: (
            <>
              macOS 建议使用{' '}
              <ExternalLink href="https://orbstack.dev">OrbStack</ExternalLink>
              （兼容 Docker 命令，性能更好）。
            </>
          ),
          code: 'brew install orbstack',
        },
        {
          title: '运行一键脚本',
          detail: '下载并执行安装脚本，自动生成 docker-compose.yaml。',
          code: 'curl -fsSL https://gh-proxy.com/https://raw.githubusercontent.com/LLOneBot/LuckyLilliaBot/refs/heads/main/script/install-llbot-docker.sh -o llbot-docker.sh && chmod u+x ./llbot-docker.sh && ./llbot-docker.sh',
        },
        {
          title: '启动并查看日志',
          detail: '启动容器并观察日志。',
          code: 'docker-compose up -d\ndocker-compose logs -f',
        },
        {
          title: '登录',
          detail: '按日志提示扫码，或打开 WebUI 登录。',
          code: 'http://localhost:3080',
        },
      ],
    },
    {
      value: 'image',
      label: 'Docker 单镜像版本',
      desc: '无需 Compose，适合最小化部署。',
      features: ['单镜像部署', '跨平台可用', '启动简单'],
      requirements: ['已安装 Docker', 'macOS: 推荐 OrbStack'],
      steps: [
        {
          title: '拉取镜像',
          detail: '拉取最新 LLBot 镜像。',
          code: 'docker pull initialencounter/llonebot:latest',
        },
        {
          title: '运行容器',
          detail: '启动容器并映射端口。',
          code: 'docker run -d \\\n  --name llbot \\\n  -p 3080:3080 \\\n  initialencounter/llonebot:latest',
          note: '可按需增加环境变量，例如 QUICK_LOGIN_QQ。',
        },
        {
          title: '访问 WebUI',
          detail: '打开浏览器访问：',
          code: 'http://localhost:3080',
        },
      ],
    },
  ],
  manual: [
    {
      value: 'manual',
      label: '通用手动安装',
      desc: '适用于特殊环境或需要完整自定义的场景。',
      features: ['跨平台', '可完全自定义', '适合高级用户'],
      requirements: [
        'Node.js 22+',
        'PMHQ 与 LLBot 安装包',
        'Linux 可能需要额外系统库',
      ],
      steps: [
        {
          title: '下载并运行 PMHQ',
          detail: (
            <>
              从{' '}
              <ExternalLink href="https://github.com/linyuchen/PMHQ/releases">
                PMHQ Releases
              </ExternalLink>{' '}
              下载并运行 PMHQ，登录 QQ 后会生成 <code>pmhq_config.json</code>。
            </>
          ),
          note: (
            <>
              若未自动生成配置，可参考{' '}
              <ExternalLink href="https://github.com/linyuchen/PMHQ/blob/main/doc/config.md">
                PMHQ 配置文档
              </ExternalLink>{' '}
              手动创建。
            </>
          ),
        },
        {
          title: '记录连接参数',
          detail: (
            <>
              在配置中记录 <code>default_host</code> 与{' '}
              <code>default_port</code>。
            </>
          ),
          note: '默认通常是 127.0.0.1:13000。',
        },
        {
          title: '下载 LLBot',
          detail: (
            <>
              前往{' '}
              <ExternalLink href="https://github.com/LLOneBot/LuckyLilliaBot/releases">
                LuckyLilliaBot Releases
              </ExternalLink>{' '}
              下载 <code>LLBot.zip</code> 并解压。
            </>
          ),
        },
        {
          title: '启动 LLBot',
          detail: '使用 Node.js 运行 llbot.js，并传入 PMHQ 参数。',
          code: 'node llbot.js --pmhq-host=127.0.0.1 --pmhq-port=13000',
        },
        {
          title: '验证连接',
          detail: 'QQ 登录后，确认 LLBot 输出连接成功日志。',
        },
      ],
    },
  ],
};

function CopyCodeButton({ code }: { code: string }) {
  const [checked, onClick] = useCopyButton(() =>
    navigator.clipboard.writeText(code),
  );

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({
          color: 'ghost',
          size: 'icon-sm',
          className: 'absolute right-2 top-2',
        }),
      )}
      aria-label="复制命令"
      title="复制命令"
      type="button"
    >
      {checked ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}

function StepCode({ code }: { code: string }) {
  return (
    <div className="relative mt-3">
      <pre className="overflow-x-auto rounded-lg border bg-fd-secondary p-3 text-xs leading-5 sm:text-sm">
        <code>{code}</code>
      </pre>
      <CopyCodeButton code={code} />
    </div>
  );
}

export function InstallationMethods() {
  const [os, setOS] = useState<OSKey>('windows');
  const [methodValue, setMethodValue] = useState<string>(
    methodsByOS.windows[0].value,
  );

  const methodOptions = useMemo(() => methodsByOS[os], [os]);
  const currentMethod =
    methodOptions.find((item) => item.value === methodValue) ??
    methodOptions[0];

  return (
    <div className="not-prose my-6 space-y-5">
      <Card title="" description="">
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <label className="grid gap-2 text-sm">
            <span className="font-medium text-fd-foreground">选择操作系统</span>
            <select
              className="w-full rounded-lg border bg-fd-background px-3 py-2 text-sm outline-none transition-colors focus:border-fd-primary"
              value={os}
              onChange={(event) => {
                const nextOS = event.target.value as OSKey;
                setOS(nextOS);
                setMethodValue(methodsByOS[nextOS][0].value);
              }}
            >
              {osOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm">
            <span className="font-medium text-fd-foreground">
              选择 LLBot 版本
            </span>
            <select
              className="w-full rounded-lg border bg-fd-background px-3 py-2 text-sm outline-none transition-colors focus:border-fd-primary"
              value={currentMethod.value}
              onChange={(event) => setMethodValue(event.target.value)}
            >
              {methodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </Card>

      <Card title="" description="">
        <div className="mt-6 space-y-5">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-fd-foreground">
              {currentMethod.label}
            </h4>
            <ul className="grid gap-1 text-sm text-fd-muted-foreground">
              {currentMethod.desc}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-fd-foreground">
              特性
            </h4>
            <ul className="grid gap-1 text-sm text-fd-muted-foreground">
              {currentMethod.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-fd-foreground">
              系统要求
            </h4>
            <ul className="grid gap-1 text-sm text-fd-muted-foreground">
              {currentMethod.requirements.map((requirement) => (
                <li key={requirement}>- {requirement}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-fd-foreground">
              安装步骤
            </h4>
            <Cards className="grid-cols-1">
              {currentMethod.steps.map((step, index) => (
                <Card
                  key={`${currentMethod.value}-${step.title}`}
                  title={`${index + 1}. ${step.title}`}
                  description={step.detail}
                >
                  {step.code ? <StepCode code={step.code} /> : null}
                  {step.note ? (
                    <p className="mt-3 rounded-lg border-l-2 border-fd-primary bg-fd-secondary/60 p-2 text-xs text-fd-muted-foreground sm:text-sm">
                      提示：{step.note}
                    </p>
                  ) : null}
                </Card>
              ))}
            </Cards>
          </div>
        </div>
      </Card>
    </div>
  );
}
