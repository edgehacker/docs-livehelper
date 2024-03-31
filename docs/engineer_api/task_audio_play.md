---
title: 执行任务：音频播放
sidebar_position: 9
---

接口描述：执行任务：本地 / 网络音频播放（此处仅提供简单说明，具体效果等请看流程树节点设置）。


## 请求说明
|HTTP Method|HTTP URL|
|:-:|:-:|
|POST|http://localhost:7902/Api/task/o7|


## 请求参数

|属性|类型|必填|说明|
|:-:|:-:|:-:|:-:|
|dev|String|是|音频输出设备id|
|id|String|是|语音 id|
|pval|String|是|音频文件位置（本地 / 网络）|
|pt|String|是|播放模式（0, 1, 2）（播放一次，循环播放，播放指定时长）|
|ps|String|是|指定播放时长（单位: 秒）|

## 返回参数

|属性|类型|说明|
|:-:|:-:|:-:|
|code|Number|错误码（code == 0 表示成功）|
|msg|String|错误发生原因|


