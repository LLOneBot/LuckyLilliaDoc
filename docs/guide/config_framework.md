# 配置

## 接入 Koishi 的 adapter-onebot

#### 1. 在 Koishi 插件市场搜索并安装 adapter-onebot

![](../asset/img/configuration/koishi-install-onebot.png)

#### 2. 配置 adapter-onebot

这里以 WS 反向连接为例

填写 selfId 为你的机器人的 QQ 号

token 可以为空，需与 LLBot 配置的 token 一致

protocol 选择 `ws-reverse`

其他配置保持默认即可，保存配置然后启用插件

![](../asset/img/configuration/koishi-onebot-setting.png)

#### 3. 配置完成后，LLBot 添加 WS 反向地址

adapter-onebot 的 WS 反向地址为 `ws://127.0.0.1:5140/onebot`

使用 LLBot 桌面版在 Bot 配置中启用 OneBot11，启用反向 WS，填入反向 WS 地址保存

也可以使用 LLBot WebUI 启用 OneBot11 反向 WS，填入反向 WS 地址保存，WebUI 默认地址是 http://localhost:3080

或者直接改配置文件，将 LLBot 的 `data/config_<qq>.json` 中的反向 ws url 配置为 `"ws://127.0.0.1:5140/onebot"`

```json5
  {
    "type": "ws-reverse",
    "enable": true,  // 这里改为 true
    "url": "ws://127.0.0.1:5140/onebot",  // 填入反向的 ws 地址
    "heartInterval": 60000,
    "token": "",  
    "messageFormat": "array",
    "reportSelfMessage": true,
    "reportOfflineMessage": true,
    "debug": true
  }
```

保存即可


## 接入 NoneBot 的 adapter-onebot

#### 1. 配置 NoneBot

这里假设你已经安装了 Onebot 适配器

然后启用 NoneBot，可以看到 NoneBot 输出的端口号，如 `8080`

#### 2. 配置 LLBot

在 LLBot 配置添加反向 WS 地址，地址为 `ws://127.0.0.1:8080/onebot/v11/ws`, 这里的 `8080` 是 NoneBot 输出的端口号，`/onebot/v11/ws` 是 NoneBot onebot 适配器默认的路径

使用 LLBot 桌面版在 Bot 配置中启用 OneBot11，启用反向 WS，填入反向 WS 地址保存

也可以使用 LLBot WebUI 启用 OneBot11 反向 WS，填入反向 WS 地址保存，WebUI 默认地址是 http://localhost:3080

也可直接修改配置文件 `data/config_<qq>.json` 中的 反向 ws url 配置为 `"ws://127.0.0.1:8080/onebot/v11/ws"`

```json5
  {
    "type": "ws-reverse",
    "enable": true,  // 这里改为 true
    "url": "ws://127.0.0.1:8080/onebot/v11/ws",  // 填入反向的 ws 地址
    "heartInterval": 60000,
    "token": "",  
    "messageFormat": "array",
    "reportSelfMessage": true,
    "reportOfflineMessage": true,
    "debug": true
  }
```

::: tip
记得 LLBot 配置的 token 需要和 NoneBot 配置的 一致
:::

