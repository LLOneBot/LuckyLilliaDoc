# Linux CLI 版本

LLBot Linux CLI 版本是专为 Linux 系统优化的命令行版本，支持一键安装和运行。

### 适用场景

- Linux 服务器部署
- 树莓派等 ARM 设备
- 容器化部署（非 Docker）
- 需要高性能和稳定性的生产环境

## 系统要求

### 支持的发行版

- **Debian** 系列（Debian、Ubuntu、Linux Mint 等）
- **Arch** 系列（Arch Linux、Manjaro 等）
- 其他发行版可能需要手动安装依赖

### 架构支持

- **x64**: 适用于大多数服务器和 PC
- **ARM64**: 适用于树莓派 4/5、ARM 服务器等

## 安装步骤

### x64 架构安装

#### 1. 下载安装包

前往 [GitHub Release 页面](https://github.com/LLOneBot/LuckyLilliaBot/releases) 下载 `LLBot-CLI-linux-x64.zip`

#### 2. 解压文件

```bash
unzip LLBot-CLI-linux-x64.zip
cd LLBot-CLI-linux-x64
```

#### 3. 运行启动脚本

```bash
chmod +x start.sh
./start.sh
```

### ARM64 架构安装

#### 1. 下载安装包

前往 [GitHub Release 页面](https://github.com/LLOneBot/LuckyLilliaBot/releases) 下载 `LLBot-CLI-linux-arm64.zip`

#### 2. 解压文件

```bash
unzip LLBot-CLI-linux-arm64.zip
cd LLBot-CLI-linux-arm64
```

#### 3. 运行启动脚本

```bash
chmod +x start.sh
./start.sh
```

## 高级配置

### 环境变量

可以通过环境变量来配置 LLBot：

```bash
# 设置日志级别
export LLBOT_LOG_LEVEL=debug

# 设置配置文件路径
export LLBOT_CONFIG=/path/to/config.json

# 运行 LLBot
./start.sh
```

### 作为 systemd 服务运行

创建服务文件 `/etc/systemd/system/llbot.service`：

```ini
[Unit]
Description=LLBot Service
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/path/to/llbot
ExecStart=/path/to/llbot/start.sh
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

启用并启动服务：

```bash
sudo systemctl daemon-reload
sudo systemctl enable llbot
sudo systemctl start llbot
```

### 查看服务状态

```bash
sudo systemctl status llbot
```

### 查看日志

```bash
sudo journalctl -u llbot -f
```

## 依赖说明

启动脚本会自动安装必要的依赖库，包括：

- X11 相关库（用于运行 QQ）
- 字体库
- 其他运行时依赖

如果自动安装失败，可以手动安装：

**Debian/Ubuntu:**
```bash
sudo apt-get update
sudo apt-get install -y xvfb libxcb1 libxcomposite1 libxdamage1 \
  libxext6 libxfixes3 libxrandr2 libxtst6 libnss3 libatk1.0-0 \
  libatk-bridge2.0-0 libcups2 libdrm2 libgbm1 libasound2
```

**Arch Linux:**
```bash
sudo pacman -S xorg-server-xvfb libxcb libxcomposite libxdamage \
  libxext libxfixes libxrandr libxtst nss atk at-spi2-atk cups \
  libdrm mesa alsa-lib
```

## 使用提示

- 首次运行需要扫码登录 QQ
- 建议使用 screen 或 tmux 来保持会话
- 可以通过配置文件自定义各项参数

## 下一步

安装完成后，请查看 [配置指南](./config.md) 了解如何配置 LLBot 对接你的机器人框架。

## 常见问题

### 启动时提示缺少依赖？

运行 `./start.sh` 会自动安装依赖，如果失败请手动安装上述依赖包。

### 如何在后台运行？

可以使用 `nohup ./start.sh &` 或配置为 systemd 服务。

### ARM 设备性能够用吗？

树莓派 4/5 等设备完全可以流畅运行 LLBot。

### 如何更新版本？

下载新版本后，停止旧版本，解压新版本并运行即可。
