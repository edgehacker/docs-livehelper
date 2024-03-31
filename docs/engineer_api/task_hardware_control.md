---
title: 执行任务：硬件控制
sidebar_position: 6
---

接口描述：执行任务：向硬件串口发送的文本消息内容（此处仅提供简单说明，具体效果等请看流程树节点设置）。

## 请求说明
|HTTP Method|HTTP URL|
|:-:|:-:|
|POST|http://localhost:7902/Api/task/o3|


## 请求参数

|属性|类型|必填|说明|
|:-:|:-:|:-:|:-:|
|pval|String|是|向硬件串口发送的文本消息内容|
|hex|Bool|是|是否以十六进制格式发送|
|endl|Bool|是|是否尾部自动换行|

## 返回参数

|属性|类型|说明|
|:-:|:-:|:-:|
|code|Number|错误码（code == 0 表示成功）|
|msg|String|错误发生原因|
