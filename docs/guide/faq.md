# FAQ
## 常见问题
::: details LLOneBot 卡住了，没反应
请检查 LLOneBot 控制台是不是被你点击了，按下回车即可恢复，为了避免这种情况发生可以在标题栏 右键->属性->快速编辑模式 关闭
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

