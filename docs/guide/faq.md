# FAQ
## 常见问题
::: details 只能本机访问，无法局域网或者公网访问
出于安全考虑，默认只监听本地地址，可在 WebUI 关闭只监听本地地址选项，或者配置文件修改 `onlyLocalhost`
:::

::: details 已经登录过了 QQ，无头模式快速登录依然要扫码
请检查是否有 QQ 进程残留
:::

::: details 忘记了 WebUI 密码
密码位于 `./bin/llbot/data/webui_token.txt`
::: 

::: details 发送不了图片和语音
检查当前操作用户是否有 `data/` 的写入权限。
::: 

::: details 如何使用CQ码
前往配置文件将消息上报类型格式更改从 Array 为 string 即可。
::: 

::: details 无法发送语音或视频
需要在配置文件配置 FFmpeg 路径，[FFmpeg 下载地址](/guide/ffmpeg)。
::: 

