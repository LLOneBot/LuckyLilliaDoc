# 快速开始

## HTTP 调用 API

在 LLOneBot 设置中开启 HTTP 服务，使用默认的 3000 端口

Python 示例:

```python
import requests

requests.post('http://localhost:3000/send_private_msg', json={
    'user_id': 123456,
    'message': [{
        'type': 'text',
        'data': {
            'text': 'Hello, World!'
        }
    }]
})
```

其中 send_private_msg 是 OneBot V11 的 发送私聊消息 API，具体 API 可以查看 [API 文档](./api.md)

user_id 是 QQ 号，message 是消息内容

这里以文本消息格式为例，type 表示消息类型，type: text 表示文本消息，data 是消息内容，text 表示文本内容

更多的消息内容的格式可以查看 [消息类型](./msg.md)


## HTTP 接受消息

在 LLOneBot 设置中开启 HTTP 事件上报，地址为 `http://localhost:8080/`

Python 示例:

```python
import uvicorn
from fastapi import FastAPI, Request

app = FastAPI()


@app.post("/")
async def root(request: Request):
    data = await request.json()  # 获取事件数据
    print(data)
    return {}

if __name__ == "__main__":
    uvicorn.run(app, port=8080)
```

运行这个 Python 代码后，会在本地 8080 端口启动一个 HTTP 服务

当有事件发生时，LLOneBot 会向 `http://localhost:8080/` 发送 POST JSON 请求，具体事件数据可以查看 [事件](./event.md)