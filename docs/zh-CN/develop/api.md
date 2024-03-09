# Api List
## 协议支持情况
|     协议支持    |可用|
| -------------  |:-:| 
|   HTTP接口调用  | ✔ |
|   HTTP事件上报  | ✔ |
|   正向WS连接    | ✔ |
::: tip
http事件上报，不支持快捷回复等快捷操作
:::
## 功能支持情况
::: details 点击展开
|     功能支持    |可用| 备注 |
| -------------  |:--:| :-: |
|   发送好友消息  | ✔ | |
|   发送群消息  | ✔ | |
|   获取好友列表  | ✔ | |
|   获取群列表  | ✔ | |
|   获取群成员列表  | ✔ | |
|   撤回消息  | ✔ | |
|   处理添加好友请求  | ✔ | |
|   处理加群请求  | ✔ | |
|   退群  | ✔ | |
|   上报好友消息  | ✔ | |
|   上报添加好友请求  | ✔ | |
|   上报群消息  | ✔ | |
|   上报好友、群消息撤回  | ✔ | |
|   上报加群请求  | ✔ | |
|   上报群员人数变动  | ✔ | 尚不支持识别群员人数变动原因 |
|   设置群管理员  | ✔ | |
|   群禁言/全体禁言  | ✔ | |
|   群踢人  | ✔ | |
|   群改群成员名片  | ✔ | |
|   修改群名  | ✔ | |
::: 
## 消息格式支持情况
::: details 点击展开
|     消息格式    |可用| 备注 |
| -------------  |:--:| :--:| 
|   cq码 | ✔ | |
|   文字 | ✔ | |
|   表情 | ✔ | |
|   图片 | ✔ | |
|   引用消息 | ✔ | |
|   @群成员 | ✔ | |
|   语音| ✔ | 支持mp3、wav等多种音频格式直接发送|
|   json消息) | ✔ | 只上报 |
|   转发消息记录 | ✔ | 目前只能发不能收 |
|   视频 | ✔ | 上报时暂时只有个空的file |
|   文件 | ✔ | 上报时暂时只有个空的file |
|  音乐卡片 |   | |
|  红包 |   | 没有计划支持|
|  xml |   | 没有计划支持 |
::: 
## OneBot V11 Api 支持情况
::: details 点击展开
|     Api    |可用|
| -------------  |:--:| 
|   get_login_info | ✔ |
|   send_msg | ✔ |
|   send_group_msg | ✔ |
|   send_private_msg | ✔ |
|   delete_msg | ✔ |
|   get_group_list | ✔ |
|   get_group_info | ✔ |
|   get_group_member_list | ✔ |
|   get_group_member_info | ✔ |
|   get_friend_list | ✔ |
|   set_friend_add_request | ✔ |
|   get_msg | ✔ |
|   send_like | ✔ |
|   set_group_add_request | ✔ |
|   set_group_leave | ✔ |
|   set_group_kick | ✔ |
|   set_group_ban | ✔ |
|   set_group_whole_ban | ✔ |
|   set_group_kick | ✔ |
|   set_group_admin | ✔ |
|   set_group_card | ✔ |
|   set_group_name | ✔ |
|   get_version_info | ✔ |
|   get_status | ✔ |
|   can_send_image | ✔ |
|   can_send_record | ✔ |
|   get_image | ✔ |
|   get_record | ✔ |
::: 
### Go-CQHTTP Api 支持情况
|     Api    |可用|
| -------------  |:--:| 
|   send_private_forward_msg | ✔ |
|   send_group_forward_msg | ✔ |
|   get_stranger_info | ✔ |