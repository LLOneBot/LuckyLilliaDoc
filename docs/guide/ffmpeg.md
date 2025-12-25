# 配置 FFmpeg

## FFmpeg 是什么

[FFmpeg](https://ffmpeg.org/) 是知名的开源音视频处理库，被用于许多音视频编解码相关的项目中。

## 为什么要使用 FFmpeg

本项目使用 FFmpeg 是为了编解码语音和视频，以使 LLOneBot 以 QQ 支持的格式处理语音和视频文件。

如果你的 Bot 没有处理语音和视频的需求，可以选择不安装 FFmpeg。

## 安装 FFmpeg

### Windows 系统

1. 在 [此处](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z) 下载官方许可的 FFmpeg；
2. 将解压后的 `ffmpeg.exe` 和 `ffprobe.exe` 放到 llbot.js 旁；

### Linux 系统

请使用你所使用的系统的包管理器直接安装 `ffmpeg` 即可正常使用。

### macOS 系统

你可以使用 [Homebrew](https://brew.sh/) 安装 FFmpeg，也可以 [在此处](https://evermeet.cx/ffmpeg/) 手动下载二进制文件安装。

注意如果你选择手动安装，请确保你下载并安装了 [FFmpeg](https://evermeet.cx/ffmpeg/#:~:text=static%20%2D%2Ddisable%2Dffplay-,FFmpeg,-ffmpeg%2D114296%2Dg5ff0eb34d2)、[FFprobe](https://evermeet.cx/ffmpeg/#:~:text=external%20ffmpeg%20libraries-,FFprobe,-ffprobe%2D114296%2Dg5ff0eb34d2) 以及 [FFplay](https://evermeet.cx/ffmpeg/#:~:text=external%20ffprobe%20libraries-,FFplay,-ffplay%2D113169%2Dge1c1dc8347) 三个库，否则可能会产生意想不到的错误。
