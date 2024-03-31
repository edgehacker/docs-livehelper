---
title: 提交绿幕视频任务
sidebar_position: 3
---

接口描述：提交绿幕视频任务（此处视频位置不支持与事件相关的文本变量，仅简单说明参数，具体效果等请看流程树节点设置）。

## 请求说明
|HTTP Method|HTTP URL|
|:-:|:-:|
|POST|http://localhost:7902/Api/play/video|


## 请求参数

|属性|类型|必填|说明|
|:-:|:-:|:-:|:-:|
|dev|String|是|音频输出设备 id|
|id|String|是|动画 id|
|z|String|是|动画层级|
|x|String|是|动画水平位置|
|y|String|是|动画垂直位置|
|w|String|是|动画宽度|
|h|String|是|动画高度|
|pt|Number|是|播放模式（0, 1, 2）（播放一次，循环播放，播放指定时长）|
|ps|String|是|指定播放时长（单位: 秒）|
|po|Number|是|任务队列（0, 1, ... , 10）（不投入队列，0 号, ... , 9 号）|
|le|String|是|任务优先级（从低到高排序）：① 低 `low` ② 普通 `normal` ③ 中等 `mid` ④ 高 `high` ⑤ 紧急 `urgent`|
|pval|String|是|视频文件位置（本地 / 网络）|

## 返回参数

|属性|类型|说明|
|:-:|:-:|:-:|
|code|Number|错误码（code == 0 表示成功）|
|msg|String|错误发生原因|
