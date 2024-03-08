# 快速开始

## 通用安装方法
1.安装 [LiteLoaderQQNT](https://liteloaderqqnt.github.io/guide/install.html)

2.安装本项目插件 [OneBotApi](https://github.com/linyuchen/LiteLoaderQQNT-OneBotApi/releases/) 最新版本.
::: tip
注意本插件2.0以下的版本不支持LiteLoader 1.0.0及以上版本
:::
*关于插件的安装方法: 下载后解压复制到插件目录*
::: details 目录结构
*插件目录:LiteLoaderQQNT/plugins*
```
├── plugins
│   ├── LLOneBot
│   │   └── main.js
│   │   └── preload.js
│   │   └── renderer.js
│   │   └── manifest.json
│   │   └── node_modules/...
```
:::

## Linux 容器化快速安装

具体问题参考: [LLOneBot-Docker](https://github.com/MliKiowa/llonebot-docker)

::: code-group

```sh [Curl]
bash <(curl -s -L https://cdn.jsdelivr.net/gh/MliKiowa/llonebot-docker/fastboot.sh)
```

::: 

## 使用termux安装

具体问题参考: [LLOneBot-Termux](https://github.com/LLOneBot/llonebot-termux)

::: code-group

```sh [Curl]
bash -c "$(curl -L https://github.com/LLOneBot/llonebot-termux/raw/main/onekey.sh)"
```

::: 


