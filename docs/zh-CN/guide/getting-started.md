# 快速开始

## 通用安装方法

::: details 安装LiteLoaderQQNT
前往 [LiteLoaderQQNT](https://liteloaderqqnt.github.io/guide/install.html) 安装后,找到LiteLoader所在目录，打开后如下图。

![LiteLoaderPath](/asset/LiteLoaderPath.png)

:::

::: details 安装OneBotApi插件
前往  [OneBotApi](https://github.com/linyuchen/LiteLoaderQQNT-OneBotApi/releases/) 下载最新版本，进入LiteLoLoader子目录`plugins/LLOneBot`,将压缩包释放到该子目录，安装完成。
*关于插件的安装方法: 下载后解压复制到插件目录*
:::

::: details 正确安装后目录结构
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

::: tip
注意OneBotApi 2.0以下的版本不支持LiteLoader 1.0.0及以上版本
:::
## Linux 容器化快速安装

具体问题参考: [LLOneBot-Docker](https://github.com/LLOneBot/llonebot-docker)

::: code-group

```sh [Curl]
bash <(curl -s -L https://cdn.jsdelivr.net/gh/LLOneBot/llonebot-docker/fastboot.sh)
```

::: 

## 使用termux安装

具体问题参考: [LLOneBot-Termux](https://github.com/LLOneBot/llonebot-termux)

::: code-group

```sh [Curl]
bash -c "$(curl -L https://github.com/LLOneBot/llonebot-termux/raw/main/onekey.sh)"
```

::: 


