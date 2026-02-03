# FAQ
## 常见问题
::: details 只能本机访问，无法局域网或者公网访问
出于安全考虑，默认只监听本地地址，可在 WebUI 或者 GUI 修改监听的 host
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


::: details Mac 电脑上使用 Docker
请使用 OrbStack，不要使用 Docker Desktop，否则 QQ 无法启动
:::


::: details Docker 安装的无法访问相关地址
1.检查是否监听了所有地址，而不是只监听本机
2.是否将响应的端口映射出来
3.Docker 内访问访问宿主机请勿使用 127.0.0.1，请使用 host.docker.internal
:::