# LLBot 配置

LLBot 的配置基本是针对协议的配置，
LLBot 支持 OneBot11/GoCQ, Milky, Satori 协议


## 配置方式

LLBot CLI、Docker、Desktop 都自带一个 WebUI(网页界面)，可在里面配置，WebUI 默认地址是 <http://localhost:3080>

LLBot Desktop 可在左边 `Bot 配置`进行配置

也可以直接修改配置文件进行配置

- Desktop 版本的配置文件位于 `bin/llbot/data/config_<你的QQ>号.json`
- CLI 版本的配置文件位于 `data/config_<你的QQ>号.json`
- Docker 版本的配置文件位置有点特殊，Compose 版本的 Docker 是挂载到 Volume 的，请自行寻找 data/config_xxxx.json

如果你想在登录之前进行配置，可修改 `default_config.json`，登录后会使用 `config_<你的QQ>号.json` 作为配置文件，如果从未登录过，`config_xxx.json` 会继承 `default_config.json`

配置示例：
```json5
```json5
{
   "webui": {
    "enable": true,  // 是否启用 WebUI
    "port": 3080 // WebUI 监听端口
  }, 
  "milky": {
    "enable": false,
    "reportSelfMessage": false,
    "http": {
      "port": 3010,
      "prefix": "", // http api 路径前缀，可为空，默认是/api
      "accessToken": ""
    },
    "webhook": {
      "urls": [],  // 注意这里是个数组，每项都是字符串，需要用引号包裹起来，如 ["http://127.0.0.1:8080", "http://localhost:9090"]
      "accessToken": ""
    }
  }
  "satori": {
    "enable": true,  // 是否启用 Satori 协议
    "port": 5600,  // Satori 监听端口
    "token": "", // Satori token
  },
  "ob11": {
    "enable": true, // 是否启用 OneBot 11 协议
    "connect": [
      {
        "type": "ws",  // 正向 WS
        "enable": true,
        "port": 3001,
        "heartInterval": 60000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      },
      {
        "type": "ws-reverse",  // 反向 WS
        "enable": false,
        "url": "",
        "heartInterval": 60000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      },
      {
        "type": "http",  // HTTP 服务端
        "enable": true,
        "port": 3000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      },
      {
        "type": "http-post",  // HTTP 上报
        "enable": false,
        "url": "",
        "enableHeart": false,
        "heartInterval": 60000,
        "token": "",
        "reportSelfMessage": false,
        "reportOfflineMessage": false,
        "messageFormat": "array",
        "debug": false
      }
    ] 
  },
  "log": true, // 是否启用日志
  "autoDeleteFile": false, // 是否自动删除收到的文件
  "autoDeleteFileSecond": 60, // 自动删除收到的文件的时间，单位秒
  "musicSignUrl": "", // 音乐签名地址
  "msgCacheExpire": 120, // 消息缓存过期时间，单位秒
  "onlyLocalhost": true, // 是否只监听本地地址，否则监听公网地址，暴露在公网请务必设置 token
  "ffmpeg": "/tmp/ffmpeg", // FFmpeg 路径，可为空
}
```

## OneBot11 配置

### OneBot 11 HTTP 配置

启用此项配置会启动一个 HTTP 服务，使用 HTTP 调用可以调用 QQ 相关 API，和使用 HTTP SSE 获取消息

这里主要是配置 HTTP 端口和 Token，Token 是用于 HTTP Header 的 `Authorization`, Token 的值是 `Bearer <你的Token>`，可为空

### OneBot 11 HTTP POST(Webhook)

启动此项会将 LLBot 当做 HTTP 客户端向你设置的 HTTP Url POST 消息，用于接收推送事件


### OneBot 11 正向 WS

启用此项会启动一个 WebSocket 服务，使用 WebSocket 调用可以调用 QQ 相关 API，和接收推送消息

这里主要是配置 WebSocket 端口和 Token，Token 是用于 Header 的 `Authorization`, Token 的值是 `Bearer <你的Token>`，可为空

OneBot 11 相关更多解释见 <https://11.onebot.dev/>


### OneBot 11 反向 WS

启用此项会将 LLBot 作为 WebSocket 客户端，向你设置的 WebSocket Url 连接，连接之后和正向 WS 功能一致

它和正向 WS 的区别在于，正向 WS 是 LLBot 当做服务端，反向 WS 是 LLBot 当做客户端，反向 WS 需要你提供一个 WS 服务端来供 LLBot 连接

## Milky 配置

Milky 协议的配置主要是配置 HTTP 端口和 Token，其中端口是可被 Milky 的 WS 复用的

Webhook URL 和 OneBot 11 的 HTTP POST(Webhook) 功能一致，是 LLBot 当做 HTTP 客户端向你设置的 HTTP Url POST 消息，用于接收推送事件


更多解释见 <https://milky.ntqqrev.org/>

## Satori 配置

Satori 协议的配置主要是配置 HTTP 端口和 Token，其中端口是可被 Satori 的 WS 复用的

更多解释见 <https://satori.chat/zh-CN/>

## 其他配置

### 启用无头模式

**无头模式有掉线风险，号体质不佳的慎用**

修改 `pmhq_config.json`，把 `headless` 设置为 `true`

如果没有 `pmhq_config.json` 运行一下 llbot.exe 即可

- Desktop 版本的配置文件位于 `bin/pmhq/pmhq_config.json`，既然使用了 Desktop GUI 了，直接在 GUI 界面系统配置进行配置即可
- CLI 版本的配置文件位于 `pmhq_config.json`
- Docker 版本的配置文件位置有点特殊，Compose 版本的 Docker 是挂载到 Volume 的，请自行寻找 pmhq_config.json

二维码的网址和文件路径会打印在终端上，也可以访问 WebUI 进行登录, WebUI 默认地址为 `http://localhost:3080`

如果是 Docker 部署，进入容器日志会看到二维码会打印在终端上

### 启用快速登录自动登录

修改 `pmhq_config.json` 的 `quick_login_qq` 为你要自动登录的 QQ 号

如：

```json
{
  "quick_login_qq": "123456789"
}
```

如果你手动登录过这个 QQ 号，下次启动会自动登录


下一步：基于上面的配置你可以选择[基于协议开发](./develop.md)，或者[使用现成框架对接](./config_framework.md)