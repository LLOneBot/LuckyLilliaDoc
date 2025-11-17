# 快速开始

LLOneBot 支持最新版本的 QQ。注意要用原版的 QQ ，不要安装任何插件！

如果以前装过 LLOneBot5.0 以下版本，请卸载 QQ 并删干净 QQ 安装目录！

## Windows 一键安装方案

**只支持 Windows 8.1(Windows server 2012 R2) 及以上版本**

首先确认你已经安装了 [64 位的 NTQQ](https://im.qq.com)

---
到 [release 页面](https://github.com/LLOneBot/LLOneBot/releases) 下载 LLOneBot-win-x64.zip 或 LLOneBot-win-x64-ffmpeg.zip

其中 `LLOneBot-win-x64.zip` 是不包含 FFmpeg 的版本，`LLOneBot-win-x64-ffmpeg.zip` 是包含 FFmpeg 的版本

推荐使用包含 FFmpeg 的版本

---
解压后双击 `llonebot.exe` 会启动 QQ，登录后会在 llonebot.exe 所在目录生成一个 data 文件夹

**注意在登录的时候不能勾选多个账号，LLOneBot 不支持这种登录方式**

---
浏览器打开 `http://localhost:3080` 进行配置

也可修改`data/config_<qq号>.json` 文件，进行配置

配置文件具体内容往下翻

## Linux 一键 Docker 安装方案

```shell
curl -fsSL https://raw.githubusercontent.com/linyuchen/PMHQ/refs/heads/main/docker/install-llob.sh -o install-pmhq-llob.sh && chmod u+x ./install-pmhq-llob.sh && ./install-pmhq-llob.sh
```

如果连接 GitHub 不顺畅可以使用

```shell
curl -fsSL https://gh-proxy.com/https://raw.githubusercontent.com/linyuchen/PMHQ/refs/heads/main/docker/install-llob.sh -o install-pmhq-llob.sh && chmod u+x ./install-pmhq-llob.sh && ./install-pmhq-llob.sh
```

## Linux 使用 NixOS/Docker 安装

见 <https://github.com/llonebot/llonebot.nix>

## 通用手动安装方法

下载 [pmhq](https://github.com/linyuchen/PMHQ/releases)

运行 pmhq 后会启动 QQ 登录后生成配置文件 `pmhq_config.json`

*如果你是 Linux 上运行，要安装一些必需库，然后用 xvfb-run 运行 pmhq，详情见 pmhq 的 [Docker](https://github.com/linyuchen/PMHQ/blob/main/docker/pmhq/Dockerfile)*

`pmhq_config.json` 的 `default_host` 和 `default_port` 是用来和 LLOneBot 通信的，我们需要记下两个参数

---

再下载 [LLOneBot.zip](https://github.com/LLOneBot/LLOneBot/releases)

解压后可以看到它是一个 nodejs 包，使用 node 运行 `llonebot.js`，并把刚刚的 pmhq host 和 port 传进去

*注意需要 node22 及以上版本*

```shell
node llonebot.js --pmhq-host=127.0.0.1 --pmhq-port=13000
```

---
登录 QQ 后 LLOneBot 就会显示连接上了

浏览器打开 `http://localhost:3080` 进行配置

也可修改`data/config_<qq号>.json` 文件，进行配置。

## LLOneBot 配置文件

配置文件是自动生成的，位于 data/config_<qq号>.json

修改后会自动重载，无需重启 QQ 和 LLOneBot

config_<qq号>.json 示例：

```json5
{
   "webui": {
    "enable": true,  // 是否启用 WebUI
    "port": 3080 // WebUI 监听端口
  }, 
  "satori": {
    "enable": true,  // 是否启用 Satori 协议
    "port": 5600,  // Satori 监听端口
    "token": "", // Satori token
  },
  "ob11": {
    "enable": true, // 是否启用 OneBot 11 协议
    "connect": [
      {
        "type": "ws",  // 正向 WS
        "enable": true,
        "port": 3001,
        "heartInterval": 60000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      },
      {
        "type": "ws-reverse",  // 反向 WS
        "enable": false,
        "url": "",
        "heartInterval": 60000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      },
      {
        "type": "http",  // HTTP 服务端
        "enable": true,
        "port": 3000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      },
      {
        "type": "http-post",  // HTTP 上报
        "enable": false,
        "url": "",
        "enableHeart": false,
        "heartInterval": 60000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      }
    ] 
  },
  "log": true, // 是否启用日志
  "autoDeleteFile": false, // 是否自动删除收到的文件
  "autoDeleteFileSecond": 60, // 自动删除收到的文件的时间，单位秒
  "musicSignUrl": "", // 音乐签名地址
  "msgCacheExpire": 120, // 消息缓存过期时间，单位秒
  "onlyLocalhost": true, // 是否只监听本地地址，否则监听公网地址，暴露在公网请务必设置 token
  "ffmpeg": "/tmp/ffmpeg", // FFmpeg 路径
}
```

## 启用无头模式

修改 `pmhq_config.json`，把 `headless` 设置为 `true`

如果没有 `pmhq_config.json` 运行一下 llonebot.exe 即可

二维码的网址和文件路径会打印在终端上，也可以访问 WebUI 进行登录, WebUI 默认地址为 `http://localhost:3080`

如果是 Docker 部署，进入容器日志会看到二维码会打印在终端上

## 启用快速登录自动登录

修改 `pmhq_config.json` 的 `quick_login_qq` 为你要自动登录的 QQ 号

如：

```json
{
  "quick_login_qq": 123456789
}
```

如果你手动登录过这个 QQ 号，下次启动会自动登录

## 下一步

参阅 [对接其他框架](./configuration.md#对接其他框架)



