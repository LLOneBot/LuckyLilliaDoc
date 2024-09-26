# FAQ
## 常见问题
::: details 版本 28060+ 的 QQ 不显示插件
请确保 LiteLoaderQQNT 版本大于或等于 [1.2.2](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/releases/tag/1.2.2)
:::

::: details 下载了插件但是没有看到在 NTQQ 中生效
检查是否下载的是插件 release 的版本，如果是源码的话需要自行编译。依然不生效请查阅 LiteLoaderQQNT 的文档。
::: 

::: details 调用接口报 404
目前没有支持全部的 OneBot 规范接口，请检查是否调用了不支持的接口。
::: 

::: details 发送不了图片和语音
检查当前操作用户是否有 `LiteLoaderQQNT/data/LLOneBot` 的写入权限。如 Windows 把 QQ 上安装到 C 盘有可能会出现无权限导致发送失败。
::: 

::: details 如何使用CQ码
前往配置界面将消息上报类型格式更改从消息段为 CQ 码即可。
::: 

::: details 无法发送语音或视频
需要在 LLOneBot 配置 FFmpeg 路径，[FFmpeg 下载地址](/zh-CN/guide/ffmpeg)。
::: 

::: details 配置无法保存

更改了配置设置后，重新打开设置页面依然是默认配置？

可能是配置文件目录没有写入权限，尝试用管理员身份运行 NTQQ，或者将 NTQQ 装到非系统盘。
:::
