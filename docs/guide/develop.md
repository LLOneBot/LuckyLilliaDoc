# 协议开发对接

LLBot 目前支持 OneBot11/GoCQ, Milky, Satori 协议

- [Onebot11/GoCQ](https://docs.go-cqhttp.org) 老牌 QQ 协议，支持的功能最多，但 LLBot 不是原版 OneBot11 的模样了，兼容绝大多数 GoCQ 接口

- [Milky](https://milky.ntqqrev.org) 新牌 QQ 协议，开发起来比 OneBot11 友好很多，但目前发展中，功能没有 OneBot11 多

- [Satori](https://satori.chat) 跨平台的聊天协议，如果你有多平台（如 QQ TG 飞书）的需求可以考虑使用，避免接入不同聊天软件重新编写代码 

## OneBot11 协议

OneBot11 支持四种连接方式，分别是：正向 WS、反向 WS，HTTP、HTTP POST(Webhook)

- 正向 WS：LLBot 当做 WebSocket 服务端，你通过 WebSocket 来连接 LLBot

- 反向 WS：LLBot 当做 WebSocket 客户端，LLBot 通过 WebSocket 来连接你，前提是你得先建立一个 WebSocket 服务端

- HTTP：LLBot 当做 HTTP 服务端，你通过 HTTP 请求来连接 LLBot

- HTTP POST(Webhook)：LLBot 当做 HTTP 客户端，LLBot 通过 HTTP 请求来连接你，前提是你得先建立一个 HTTP 服务端，这个主要是用来推送消息/事件，不是很推荐单独使用这种方式

### OneBot11 HTTP 连接示例

在 LLBot 配置中启用 OneBot11 的 HTTP，设置好端口，比如端口是 3000

这时候你就可以通过 HTTP 访问 http://localhost:3000 来调用 LLBot 了

比如浏览器打开 <http://localhost:3000/get_group_list> 就能看到群列表

---

使用 HTTP 客户端发送 POST JSON 请求则可以传入 API 所需的参数，比如

API: <http://localhost:3000/get_group_member_list>

POST JSON:
```json5
{
    
  "group_id": 123456
}
```

---

也可以访问 <http://localhost:3000/_events> 这个 SSE 接口，就能一直看到 LLBot 推送的事件


### OneBot11 HTTP POST(Webhook) 连接示例

在 LLBot 配置中启用 OneBot11 的HTTP POST，设置 HTTP POST url，比如 <http://localhost:8080>

然后自己编写代码建立一个 HTTP 服务端，绑定到 8080 端口，这时候就能通过你刚刚编写的 HTTP 服务端来接收 LLBot 推送的事件

### OneBot11 正向 WS 连接示例

在 LLBot 配置中启用 OneBot11 的 WS，设置好端口，比如端口是 3001

使用 WebSocket 客户端连接 <ws://localhost:3001>，这时候就能一直看到 LLBot 推送的事件

---

在 WebSocket 客户端发送 JSON 请求则可以调用并传入 API 所需的参数

比如：
```json5
{
  "action": "get_group_member_list", // API 名字
  "params": { // 所需参数
    "group_id": 123456
  }
}
```

### OneBot11 反向 WS 连接示例

在 LLBot 配置中启用 OneBot11 的反向 WS，设置反向 WS url，比如 <ws://localhost:3002>

然后自己编写代码建立一个 WebSocket 服务端，绑定到 3002 端口，这时候就能通过你刚刚编写的 WebSocket 服务端来接收 LLBot 推送的事件

也可在 WebSocket 服务端发送 JSON 请求调用 API，用法与正向 WS 一致

### OneBot11 API 文档

更多 API 用法参考<https://api.luckylillia.com/api-149035377>

## Milky 协议

Milky 支持 HTTP 调用，HTTP Webhook，WS 三种连接方式

- HTTP：Milky 当做 HTTP 服务端，你通过 HTTP 请求来连接 Milky 调用 API

- HTTP Webhook：Milky 当做 HTTP 客户端，Milky 通过 HTTP 请求来连接你，前提是你得先建立一个 HTTP 服务端，这个主要是用来推送消息/事件，不是很推荐单独使用这种方式

- WS：Milky 当做 WebSocket 服务端，通过 WebSocket 客户端来连接 Milky 接受消息

### Milky HTTP 连接示例

在 LLBot 配置中启用 Milky，设置好 HTTP 端口，比如端口是 3010

使用 HTTP 客户端 POST 访问 <http://localhost:3010/api/> 即可调用 Milky API

比如 POST 访问 <http://localhost:3010/api/get_login_info> 就能看到自己登录的账号信息

---

使用 GET 访问 <http://localhost:3010/event> 这个 SSE 接口就能一直获取 LLBot 推送的事件

### Milky HTTP Webhook 连接示例

在 LLBot 配置中启用 Milky 的 HTTP Webhook，设置好 HTTP Webhook url，比如 http://localhost:9090

然后自己编写代码建立一个 HTTP 服务端，绑定到 9090 端口，这时候就能通过你刚刚编写的 HTTP 服务端来接收 LLBot 推送的事件

### Milky WS 连接示例

Milky 的 WS 和 HTTP 实际上是共用一个端口的，比如设置 Milky HTTP 端口 3010

那么编写代码使用 WebSocket 客户端连接 <ws://localhost:3010/event> 即可一直获取 LLBot 推送的事件

注意 Milky 和 OneBot11 不同，Milky 的 WS 只是用于接收推送，不支持调用 API，所有 API 调用都是走 HTTP POST 的方式

### Milky API 文档

更多 Milky 细节可参考 (Milky 官方文档)[https://milky.ntqqrev.org/]

更多 Milky API 用法可参考<https://api.luckylillia.com/api-391181715>


## Satori 协议

Satori 支持 HTTP 调用，WS 接收

- HTTP：Satori 当做 HTTP 服务端，你通过 HTTP 请求来连接 Satori 调用 API

- WS：Satori 当做 WebSocket 服务端，通过 WebSocket 客户端来连接 Satori 接受消息/事件


### Satori HTTP 连接示例

在 LLBot 配置中启用 Satori，设置好 HTTP 端口，比如端口是 5600

使用 HTTP 客户端 POST 访问 <http://localhost:5600/v1/friend.list> 获取好友列表

注意 Satori 必须要在 Header 里面添加 `Satori-Platform` 和 `Satori-User-ID`，`Satori-User-ID` 是你机器人的 QQ 号

```text
POST /v1/friend.list
Content-Type: application/json
Satori-Platform: LLBot
Satori-User-ID: 1234567890  // 这里替换成你机器人的 QQ 号
```

### Satori WS 连接示例

使用 WS 客户端连接 <ws://localhost:5600/v1/events> 

连接之后，发送一个鉴权包
```json
{
    "op": 3
}
```

之后便一直开始推送事件


### Satori 文档

Satori 的更多详情见 <https://satori.chat/zh-CN/>