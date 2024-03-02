# 快速开始

## Linux 容器化快速安装

执行以下任意脚本，按照提示设置NoVnc密码，即可运行，脚本问题与异常参考 [llonebot-docker](https://github.com/MliKiowa/llonebot-docker) 项目。

 ```bash
curl https://cdn.jsdelivr.net/gh/MliKiowa/llonebot-docker/fastboot.sh -o fastboot.sh & chmod +x fastboot.sh & sudo sh fastboot.sh
 ```
 ```bash
wget -O fastboot.sh https://cdn.jsdelivr.net/gh/MliKiowa/llonebot-docker/fastboot.sh & chmod +x fastboot.sh & sudo sh fastboot.sh
 ```

## 通用手动安装方法

1.安装[LiteLoaderQQNT](https://liteloaderqqnt.github.io/guide/install.html)

2.安装本项目插件[OneBotApi](https://github.com/linyuchen/LiteLoaderQQNT-OneBotApi/releases/), 注意本插件2.0以下的版本不支持LiteLoader 1.0.0及以上版本

*关于插件的安装方法: 下载后解压复制到插件目录*

*插件目录:`LiteLoaderQQNT/plugins`*

安装后的目录结构如下
```
├── plugins
│   ├── LLOneBot
│   │   └── main.js
│   │   └── preload.js
│   │   └── renderer.js
│   │   └── manifest.json
│   │   └── node_modules/...
```

## 使用termux安装

见<https://github.com/LLOneBot/llonebot-termux>
