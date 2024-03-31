---
title: 从队列拉取直播间事件
sidebar_position: 1
---

接口描述：从队列拉取直播间事件，返回一个事件数组，队列至多缓存 1000 条最新的直播间事件。

## 请求说明
|HTTP Method|HTTP URL|
|:-:|:-:|
|GET|http://localhost:7902/Api/events|

## 返回参数



|属性|类型|说明|兼容|
|:-:|:-:|:-|:-:|
|platform|String|① 当结果是 `"bilibili"` 时：哔哩哔哩平台 <br/> ② 当结果是 `"douyin"` 时：抖音平台 <br/> ③ 当结果是 `"kuaishou"` 时：快手平台 <br/> ④ 当结果是 `"tiktok"` 时：抖音国际版平台 <br/> ⑤ 当结果是 `"taobao"` 时：淘宝平台||
|type|String|① 当结果是 `"comment"` 时：弹幕事件 <br/> ② 当结果是 `"like"` 时：点赞事件 <br/> ③ 当结果是 `"gift"` 时：礼物事件 <br/> ④ 当结果是 `"enter"` 时：进入直播间事件 <br/> ⑤ 当结果是 `"follow"` 时：关注主播事件||
|user|Object|user_id 用户 ID（类型：String） <br/> nick 用户昵称（类型：String） <br/> avatar 用户头像链接地址（类型：String）|部分平台不支持 avatar 参数|
|content|String|弹幕消息文本内容（弹幕事件携带）||
|gift|Object|gift_id 礼物 ID（类型：String） <br/> name 礼物名称（类型：String） <br/> image 礼物图片链接地址（类型：String） <br/> count 礼物数量（类型：Number）|仅抖音、tiktok 支持|
|totallike|Number|当前直播实时总点赞数（点赞事件携带）|仅抖音、tiktok 支持|
