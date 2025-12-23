# 快速开始

LLBot 支持最新版本的 QQ。注意要用原版的 QQ ，不要安装任何插件！

## LLBot 系统要求

### Windows
- Desktop 版本（带界面程序）：Windows Server 2016 / Windows 10 及以上
- CLI 版本（命令行版本）：Windows Server 2012 R2 / Windows 8.1 及以上

### Linux
- Debian / Ubuntu 系列系统（一键安装）
- 其他发行版可使用 Docker 或手动安装

## Windows 一键安装方案

**Windows Desktop 版本只支持 Windows Server 2016 / Windows 10 及以上版本**

**Windows CLI 版本只支持 Windows server 2012 R2 / Windows 8.1 及以上版本**

首先确认你已经安装了 [64 位的 NTQQ](https://im.qq.com)

---
到 [release 页面](https://github.com/LLOneBot/LLOneBot/releases) 下载 LLBot-Desktop-win-x64 或者 LLBot-CLI-win-x64

---
解压后双击 `llbot.exe` 后点击启动，会启动QQ


## Linux 本地一键安装方案

**目前只支持 Debian 或 Ubuntu 系列的系统**

到 [release 页面](https://github.com/LLOneBot/LLOneBot/releases) 下载 `LLBot-CLI-linux-x64.zip` 或者 `LLBot-CLI-linux-arm64.zip`

解压后运行 `start.sh` 即可

## Linux 一键 Docker 安装方案

```shell
curl -fsSL https://raw.githubusercontent.com/LLOneBot/LuckyLilliaBot/refs/heads/main/script/install-llbot-docker.sh -o llbot-docker.sh && chmod u+x ./llbot-docker.sh && ./llbot-docker.sh
```

如果连接 GitHub 不顺畅可以使用

```shell
curl -fsSL https://gh-proxy.com/https://raw.githubusercontent.com/LLOneBot/LuckyLilliaBot/refs/heads/main/script/install-llbot-docker.sh -o llbot-docker.sh && chmod u+x ./llbot-docker.sh && ./llbot-docker.sh
```

## Linux 使用 NixOS/Docker 安装

见 <https://github.com/llonebot/llonebot.nix>

## 通用手动安装方法

下载 [pmhq](https://github.com/linyuchen/PMHQ/releases)

运行 pmhq 后会启动 QQ 登录后生成配置文件 `pmhq_config.json`

*如果你是 Linux 上运行，要安装一些必需库，然后用 xvfb-run 运行 pmhq，详情见 pmhq 的 [Docker](https://github.com/linyuchen/PMHQ/blob/main/docker/pmhq/Dockerfile)*

`pmhq_config.json` 的 `default_host` 和 `default_port` 是用来和 LLBot 通信的，我们需要记下两个参数

---

再下载 [LLBot.zip](https://github.com/LLOneBot/LLOneBot/releases)

解压后可以看到它是一个 nodejs 包，使用 node 运行 `llbot.js`，并把刚刚的 pmhq host 和 port 传进去

*注意需要 node22 及以上版本*

```shell
node llbot.js --pmhq-host=127.0.0.1 --pmhq-port=13000
```

---
登录 QQ 后 LLBot 就会显示连接上了



## 下一步

[进行配置](./config.md)



