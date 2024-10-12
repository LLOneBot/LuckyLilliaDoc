# API 列表

## API 详细说明

接口详细示例: [点击跳转](https://api.napneko.com)

## 连接方式支持情况
| 连接方式           |可用|
|----------------|:-:| 
| HTTP 接口调用      | ✔ |
| HTTP 事件上报      | ✔ |
| HTTP POST 快速操作 | ✔ |
| 正向 WS 连接       | ✔ |
| 反向 WS 连接       | ✔ |

## API 支持情况

### OneBot 11
| 功能 |     API    |可用| 备注 |
| --- | -------------  |:--:| -------------- | 
| 获取 bot 账号信息 |   get_login_info | ✔ | |
| 发送消息 |   send_msg | ✔ |
| 发送群聊消息 |   send_group_msg | ✔ |
| 发送好友消息 |   send_private_msg | ✔ | 不支持主动临时消息 |
| 获取消息详情 |   get_msg | ✔ |
| 撤回消息 |   delete_msg | ✔ |
| 发送好友赞 |   send_like | ✔ | |
| 获取好友列表 |   get_friend_list | ✔ |
| 处理好友请求 |   set_friend_add_request | ✔ |
| 获取群列表 |   get_group_list | ✔ |
| 获取群信息 |   get_group_info | ✔ |
| 获取群成员列表 |   get_group_member_list | ✔ |
| 获取群成员信息 |   get_group_member_info | ✔ |
| 获取群荣誉信息 | get_group_honor_info | ✔ |
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
| 获取陌生人信息 |   get_stranger_info | ✔ | |
| 获取版本信息 |   get_version_info | ✔ |
| 获取状态 |   get_status | ✔ |
| 检查能否发送图片 |   can_send_image | ✔ |
| 检查能否发送语音 |   can_send_record | ✔ |
| 获取图片详情 |   get_image | ✔ |
| 获取语音文件 |   get_record | ✔ |
| 获取文件详情 |   get_file | ✔ |
| 获取 Cookies |  get_cookies | ✔ |
| 获取 CSRF Token |  get_csrf_token | ❌ |
| 获取 QQ 相关接口凭证 |  get_credentials | ❌ |
| 重启 OneBot 实现 | set_restart | ❌ |
| 清理缓存 | clean_cache | ✔ |

### Go-CQHTTP
| 功能 |     API    |可用|
| --- | -------------  |:--:|
| 发送合并转发 ( 好友 ) | send_private_forward_msg | ✔ |
| 发送合并转发 ( 群聊 ) | send_group_forward_msg | ✔ |
| 获取群消息历史记录 | get_group_msg_history | ✔ |
| 获取合并转发内容 | get_forward_msg | ✔ |
| 上传群文件 | upload_group_file | ✔ |
| 上传私聊文件 | upload_private_file | ✔ |
| 下载文件到缓存目录 | download_file | ✔ |
| 设置精华消息 | set_essence_msg | ✔ |
| 移出精华消息 | delete_essence_msg | ✔ |
| 删除群文件 | delete_group_file | ✔ |
| 创建群文件文件夹 | create_group_file_folder | ✔ |
| 删除群文件文件夹 | delete_group_folder | ✔ |
| 获取群系统消息 | get_group_system_msg | ✔ |
| 获取群 @全体成员 剩余次数 | get_group_at_all_remain | ✔ |
| 获取群根目录文件列表 | get_group_root_files | ✔ |
| 发送群公告 | _send_group_notice | ✔ |
| 标记消息已读 | mark_msg_as_read | ✔ |
| 获取群子目录文件列表 | get_group_files_by_folder | ✔ |
| 获取精华消息列表 | get_essence_msg_list | ✔ |
| 获取群文件资源链接 | get_group_file_url | ✔ |
| 获取群公告 | _get_group_notice | ✔ |
| 删除好友 | delete_friend | ✔ |
| 图片 OCR | ocr_image | ✔ |

### LLOneBot
| 功能 |     API    |可用|
| --- | -------------  |:--:|
| 设置头像 | set_qq_avatar | ✔ |
| 获取文件信息 | get_file | ✔ |
| 获取已过滤的加群通知 | get_group_ignore_add_request | ✔ |
| 转发单条信息到私聊 | forward_friend_single_msg | ✔ |
| 转发单条信息到群聊 | forward_group_single_msg | ✔ |
| 设置消息的表情回应 | set_msg_emoji_like | ✔ |
| 获取好友分类列表 | get_friends_with_category | ✔ |
| 设置自身在线状态 | set_online_status | ✔ |
| 获取自身点赞列表 | get_profile_like | ✔ |
| 发送合并转发消息 | send_forward_msg | ✔ |
| 获取收藏表情 | fetch_custom_face | ✔ |
| 获取好友历史消息记录 | get_friend_msg_history | ✔ |
| 获取表情回应列表 | fetch_emoji_like | ✔ |
| 获取官方机器人 QQ 号区间 | get_robot_uin_range | ✔ |
