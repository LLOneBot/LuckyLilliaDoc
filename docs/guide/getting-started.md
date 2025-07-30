# 快速开始

LLOneBot 支持最新版本的 QQ。注意要用原版的 QQ ，不要安装任何插件！

如果以前装过 LLOneBot5.0 以下版本，请卸载 QQ 并删干净 QQ 安装目录！

## Windows 一键安装方案

**只支持 Windows 8.1(Windows server 2012 R2) 及以上版本**

首先确认你已经安装了 [64 位的 NTQQ](https://im.qq.com)

---
到 [release 页面](https://github.com/LLOneBot/LLOneBot/releases) 下载 LLOneBot-win-x64.zip 或 LLOneBot-win-x64-ffmpeg.zip

如果你嫌 GitHub 下载慢，可以使用微云下载: 
<https://share.weiyun.com/dnOysKL8>
*注：微云上的版本都是带 ffmpeg 的*

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

## Linux 使用 NixOS/Docker 安装

见 <https://github.com/llonebot/llonebot.nix>

## 通用手动安装方法

下载 [pmhq](https://github.com/linyuchen/PMHQ/releases)

运行 pmhq 后会启动 QQ 并生成配置文件 `pmhq_config.json`

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

配置文件是自动生成的

修改后会自动重载，无需重启 QQ 和 LLOneBot

```json5
{
   "webui": {
    "enable": true,  // 是否启用 WebUI
    "port": 3080, // WebUI 监听端口
    "token": "", // WebUI 的访问 密码，留空时首次访问会要求设置密码
  }, 
  "satori": {
    "enable": true,  // 是否启用 Satori 协议
    "port": 5600,  // Satori 监听端口
    "token": "", // Satori token
  },
  "ob11": {
    "enable": true, // 是否启用 OneBot 11 协议
    "token": "", // OneBot 11 协议的 token
    "httpPort": 3000, // HTTP 监听端口
    "httpPostUrls": [],  // HTTP 上报地址，如 ["http://localhost:8080/onebot/v11"]
    "httpSecret": "",  // HTTP 上报密钥
    "wsPort": 3001, // 正向 WebSocket 监听端口
    "wsReverseUrls": [], // 反向 WebSocket 地址，如 ["ws://localhost:8080/onebot/v11/ws"]
    "enableHttp": true, // 是否启用 HTTP 服务
    "enableHttpPost": true, // 是否启用 HTTP 上报
    "enableWs": true, // 是否启用正向 WebSocket 服务
    "enableWsReverse": false, // 是否启用反向 WebSocket 服务
    "messagePostFormat": "array", // 消息上报格式，支持 "array" 或 "string"
    "enableHttpHeart": false, // 是否启用 HTTP 心跳
    "reportSelfMessage": true, // 是否上报自己的消息
  },
  "heartInterval": 60000, // 心跳间隔，单位毫秒
  "enableLocalFile2Url": false, // 是否启用本地文件转 URL 功能
  "debug": false, // 是否启用调试模式
  "log": true, // 是否启用日志
  "autoDeleteFile": false, // 是否自动删除收到的文件
  "autoDeleteFileSecond": 60, // 自动删除收到的文件的时间，单位秒
  "musicSignUrl": "", // 音乐签名地址
  "msgCacheExpire": 120, // 消息缓存过期时间，单位秒
  "onlyLocalhost": true, // 是否只监听本地地址，否则监听公网地址，暴露在公网请务必设置 token
  "ffmpeg": "/tmp/ffmpeg", // FFmpeg 路径
  "receiveOfflineMsg": false,  // 下次登录时是否接受离线期间产生的消息
}
```

## 下一步

参阅 [对接其他框架](./configuration.md#对接其他框架)



