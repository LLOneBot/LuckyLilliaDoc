# 扩展 API

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

::: details 设置头像 `/set_qq_avatar`
```json5
{
  "file": "file://D:/1.jpg"  // 支持http://, base64://
}
```
:::

::: details 获取已过滤的加群通知 `/get_group_ignore_add_request`

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
:::

::: details message_sent 事件的 target_id
相比于 go-cq 多了个 `target_id` 字段表示发送的目标QQ号或者群号
:::

::: details 下载收到的群文件或私聊文件 `/get_file`

```json5
{
  "file_id": "/xxxxx-xxxxx"
}
```

return

```json5
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "d:/xxxx",  // 文件的绝对路径
    "file_name": "文件名",
    "file_size": 123123,
    "base64": "/9j/4AAQSkZJRgABAQEASxxxx", // 文件的 base64 编码, 需要在 LLOneBot 的配置文件中开启 base64
  },
  "message": "",
  "wording": "",
}
```
:::

::: details 支持 base64 参数用于直接下载 base64 编码的文件

`/download_file`

::: tip 此 api 不适用于下载群文件或者私聊文件
:::

::: details 转发单条消息到好友 `/forward_friend_single_msg`
    
```json5
{
  "user_id": 123456,
  "message_id": 123456
}
```
:::


::: details 转发单条消息到群 `/forward_group_single_msg`

```json5
{
  "group_id": 123456,
  "message_id": 123456
}
```
:::

::: details 发送表情回应 `/set_msg_emoji_like`
```json5
{
    "message_id": "-2147480026",
    "emoji_id": "32"
}
```
emoji_id 参考 <https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType>
:::

::: details 获取带分组信息好友列表 `/get_friends_with_category`

return:
```json5
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "categoryId": 0,
      "categroyName": "",
      "categroyMbCount": 5,
      "buddyList": [
        {
          "uid": "u__xxxx",
          "qid": "",
          "uin": "123123123",
          "nick": "林雨辰的那只猫不见了",
          "remark": "",
          "longNick": "",
          "avatarUrl": "",
          "birthday_year": 2000,
          "birthday_month": 3,
          "birthday_day": 7,
          "sex": 1,
          "topTime": "0",
          "isBlock": false,
          "isMsgDisturb": false,
          "isSpecialCareOpen": false,
          "isSpecialCareZone": false,
          "ringId": "",
          "status": 10,
          "qidianMasterFlag": 0,
          "qidianCrewFlag": 0,
          "qidianCrewFlag2": 0,
          "extStatus": 0,
          "categoryId": 0,
          "onlyChat": false,
          "qzoneNotWatch": false,
          "qzoneNotWatched": false,
          "vipFlag": false,
          "yearVipFlag": false,
          "svipFlag": false,
          "vipLevel": 1,
          "isZPlanCoupleOpen": false,
          "zplanCoupleSceneId": 0,
          "teenagerFlag": 0,
          "studyFlag": 0,
          "pendantId": "0",
          "vipNameColorId": "0"
        }
      ]
    }
  ]
}
```
:::

::: details 设置自身在线状态 `/set_online_status`

在线:
```json
{ status: 10, extStatus: 0, batteryStatus: 0 }
```
离开:
```json
{ status: 30, extStatus: 0, batteryStatus: 0 }
```
隐身:
```json
{ status: 40, extStatus: 0, batteryStatus: 0 }
```
忙碌:
```json
{ status: 50, extStatus: 0, batteryStatus: 0 }
```
Q我吧:
```json
{ status: 60, extStatus: 0, batteryStatus: 0 }
```
请勿打扰:
```json
{ status: 70, extStatus: 0, batteryStatus: 0 }
```
:::