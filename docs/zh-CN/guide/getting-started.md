# 快速开始

## QQ 版本

LLOneBot 支持到最新版本的 QQ

不推荐太老的版本，9.9.7(21804) 之前的版本都没有经过仔细测试，可能会有一些问题.

## Windows 用户一键安装方案

<https://github.com/super1207/install_llob/releases>下载exe，双击运行即可，之后打开QQ的设置，看到了 `LLOneBot` 就代表安装成功了.

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

浏览器配置 LLOneBot 千万不要点那个选择 FFMPEG， 不要点！不要点！不要点！

::: 

## 使用termux安装

具体问题参考: [LLOneBot-Termux](https://github.com/LLOneBot/llonebot-termux)

::: code-group

```sh [Curl]
bash -c "$(curl -L https://github.com/LLOneBot/llonebot-termux/raw/main/onekey.sh)"
```

::: 


