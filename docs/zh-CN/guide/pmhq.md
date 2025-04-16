# 收发包工具(pmhq)配置

1. 下载 [pmhq](https://github.com/linyuchen/PMHQ/releases/)

2. 修改 pmhq 配置文件 `pmhq_config.json`
```json5
{
    "servers": [
        {
            "qq": 123456789,
            "host": "localhost",
            "port": 13000  // pmhq 绑定的端口号
        }
    ],
    "qq_path": "D:\\Program Files\\QQNT9.9.18-33800\\QQ.exe"
}
```

如果你的 pmhq 位于 QQ.exe 的上级目录，pmhq 会自动寻找到 QQ.exe，则不需要填写 `qq_path`

3. 启动 pmhq 后会自动启动 QQ 进行内存注入，让 QQ 有了收发 protobuf 包的能力
 
4. 打开 LLOneBot 设置，在发包器端口处填入上面 pmhq 配置的端口，如 13000，点击保存即可