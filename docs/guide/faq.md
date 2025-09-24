# FAQ
## 常见问题
::: details 已经登录过了 QQ 无头模式快速登录依然要扫码
请检查是否有 QQ 进程残留，如果是 `pmhq_config.json` 的 `"enable_gui": false`，关闭控制台是不会关掉 QQ 的！
:::


::: details 发送不了图片和语音
检查当前操作用户是否有 `data/` 的写入权限。
::: 

::: details 如何使用CQ码
前往配置文件将消息上报类型格式更改从 Array 为 string 即可。
::: 

::: details 无法发送语音或视频
需要在 LLOneBot 配置 FFmpeg 路径，[FFmpeg 下载地址](/guide/ffmpeg)。
::: 

