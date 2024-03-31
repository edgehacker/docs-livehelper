---
title: 取通用礼物列表
sidebar_position: 2
---

接口描述：返回指定平台的通用礼物列表（非当前直播间的礼物列表）。

## 请求说明
|HTTP Method|HTTP URL|
|:-:|:-:|
|GET|http://localhost:7902/Api/giftlist/:platform|


:::info

platform: bilibili、douyin、tiktok、kuaishou

:::

## 详细请求地址说明

|platform|HTTP URL|说明|
|:-:|:-:|:-:|
|bilibili|http://localhost:7902/Api/giftlist/bilibili|哔哩哔哩通用礼物列表|
|douyin|http://localhost:7902/Api/giftlist/douyin|抖音通用礼物列表|
|tiktok|http://localhost:7902/Api/giftlist/tiktok|抖音国际版通用礼物列表|
|kuaishou|http://localhost:7902/Api/giftlist/kuaishou|快手通用礼物列表|

## 常见报错码
```
{"code":501,"msg":"拉取缓存数据失败，请在使用本Api前打开一次对应平台的直播间小窗，以此刷新缓存"}
```

:::info

通过 API 获取指定平台的礼物列表 JSON 数据，需要在此之前进行开启直播间小窗。

:::