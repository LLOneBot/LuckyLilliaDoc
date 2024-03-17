# Api List

## api 详细说明

[onebot v11](https://11.onebot.dev/)

[go-cqhttp](https://docs.go-cqhttp.org/api)

## 连接方式支持情况
| 连接方式   |可用|
|----------|:-:| 
| HTTP接口调用 | ✔ |
| HTTP事件上报 | ✔ |
| 正向WS连接   | ✔ |
| 反向WS连接   | ✔ |
::: tip
http事件上报，不支持快捷回复等快捷操作
:::


## Api 支持情况
::: details OneBot V11
| 功能 |     Api    |可用| 备注 |
| --- | -------------  |:--:| -------------- | 
| 获取 bot 账号信息 |   get_login_info | ✔ | |
| 发送消息 |   send_msg | ✔ |
| 发送群聊消息 |   send_group_msg | ✔ |
| 发送好友消息 |   send_private_msg | ✔ | 不支持临时消息 |
| 获取消息详情 |   get_msg | ✔ |
| 撤回消息 |   delete_msg | ✔ |
| 点赞 |   send_like | ✔ | 支持给群员点赞 |
| 获取好友列表 |   get_friend_list | ✔ |
| 处理好友请求 |   set_friend_add_request | ✔ |
| 获取群列表 |   get_group_list | ✔ |
| 获取群信息 |   get_group_info | ✔ |
| 获取群成员列表 |   get_group_member_list | ✔ |
| 获取群成员信息 |   get_group_member_info | ✔ |
| 获取群荣誉信息 | get_group_honor_info | ❌ |
| 设置群组专属头衔 |   set_group_special_title | ❌ |
| 群匿名禁言 |   set_group_anonymous_ban | ❌ |
| 开关群匿名 |   set_group_anonymous | ❌ |
| 处理加群请求 |   set_group_add_request | ✔ |
| 退群 |   set_group_leave | ✔ |
| 群踢人 |   set_group_kick | ✔ |
| 群禁言 |   set_group_ban | ✔ |
| 全群禁言 |   set_group_whole_ban | ✔ |
| 设置管理员 |   set_group_admin | ✔ |
| 设置群名片 |   set_group_card | ✔ |
| 设置群名 |   set_group_name | ✔ |
| 获取陌生人信息 |   get_stranger_info | ✔ | 实际上只能获取群员信息 |
| 获取版本信息 |   get_version_info | ✔ |
| 获取状态 |   get_status | ✔ |
| 检查能否发送图片 |   can_send_image | ✔ |
| 检查能否发送语音 |   can_send_record | ✔ |
| 获取图片详情 |   get_image | ✔ |
| 获取语音文件 |   get_record | ✔ |
| 获取文件详情 |   get_file | ✔ |
| 获取 Cookies |  get_cookies | ❌ |
| 获取 CSRF Token |  get_csrf_token | ❌ |
| 获取 QQ 相关接口凭证 |  get_credentials | ❌ |
| 重启 OneBot 实现 | set_restart | ❌ |
| 清理缓存 | clean_cache | ✔ |
::: 

::: details Go-CQHTTP Api 支持情况
|     Api    |可用|
| -------------  |:--:| 
|   send_private_forward_msg | ✔ |
|   send_group_forward_msg | ✔ |
|   upload_group_file | ✔ |
:::

## 消息格式支持情况
::: details 点击展开
|     消息格式    |收|发| 备注 |
| -------------  |:--:|:--:| :--:|
|   cq码 | ✔ | ✔ | |
|   文字 | ✔ | ✔ | |
|   表情 | ✔ | ✔ |  |
|   商城表情 | ❌ | ❌ |  |
|   图片 | ✔ | ✔ |  |
|   引用消息 | ✔ | ✔ |  |
|   @群成员 | ✔ | ✔ |  |
|   语音| ✔ | ✔ |  支持mp3、wav等多种音频格式直接发送|
|   json消息 | ✔ | ❌ |   |
|   转发消息记录 | ❌ | ✔ | **不能伪造，需要先发给自己再转发出去，不建议发送大量节点，有封号风险** |
|   视频 | ✔ | ✔ | 上报时暂时只有个空的file |
|   文件 | ✔ | ✔ | 上报时暂时只有个空的file, 发送时可以指定`name`参数自定义文件名，详见本页下方的特殊说明 |
|  音乐卡片 | ❌ | ❌ | 实现有难度，遥遥无期 |
|  红包 | ❌ | ❌ | 没有计划支持|
|  xml | ❌ | ❌ | 没有计划支持 |
:::

## 上报事件支持情况
::: details 点击展开
| 事件类型  | 可用 | 备注 |
| -------  |:--:|:--:|
| 消息 | ✔ | |
| 好友消息撤回 | ✔ | |
| 群消息撤回 | ✔ | |
| 好友请求 | ✔ | |
| 邀请加群请求 | ✔ | |
| 加群请求 | ✔ | 需要管理员权限 |
| 管理变动 | ✔ | 需要管理员权限 |
| 群成员增加 | ✔ | |
| 群成员减少 | ✔ | |
| 群文件上传 | ✔ | |
| 群禁言 | ✔ | |
| 群内戳一戳 | ✔ | 暂时只支持 Windows 版本的LLOneBot， 残缺状态，识别不了谁戳的，戳的谁 |
| 好友戳一戳 | ✔ | 暂时只支持 Windows 版本的LLOneBot |
| 群红包运气王 | ❌ | |
| 群成员荣誉变更 | ❌ | |
| 生命周期 | ✔ | 目前只有 ws 的 connect |
| ws心跳 | ✔ | |
:::

### 扩展api

::: details 发送文件名自定义
发送文件时支持参数 `name` 用于自定义显示的文件名
```json
{
    "type": "file",
    "data": {
        "file": "file:///D:/1.txt",
        "name": "自定义显示的文件名.txt"
    }
}
```
:::

::: details 发送图片支持自定义图片预览文字
`/send_group_msg`

```json5
{
  "group_id": 123456,
  "message": [
    {
      "type": "image",
      "data": {
        "file": "file://D:/1.jpg",
        "summary": "喵喵喵"  // LLOneBot的扩展字段：图片预览文字
      }
    }
  ]
}
```
:::

::: details 设置头像api
`/set_qq_avatar`
```json5
{
  "file": "file://D:/1.jpg"  // 支持http://, base64://
}
```
:::

::: details 获取已过滤的加群通知

`/get_group_ignore_add_request`

return

```json5
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "group_id": 123122,
      "user_id": 123123,
      "flag": "1710117534729787"
    }
  ],
  "message": "",
  "wording": "",
}
```

::: details message_sent 事件的 target_id

相比于 go-cq 多了个 `target_id` 字段表示发送的目标QQ号或者群号