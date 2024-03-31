---
title: 执行任务：结束进程
sidebar_position: 14
---

接口描述：执行任务：结束指定目标进程（此处仅提供简单说明，具体效果等请看流程树节点设置）。

## 请求说明
|HTTP Method|HTTP URL|
|:-:|:-:|
|POST|http://localhost:7902/Api/task/of|


## 请求参数

|属性|类型|必填|说明|
|:-:|:-:|:-:|:-:|
|pval|String|是|目标进程名称，例如：python.exe|
## 返回参数

|属性|类型|说明|
|:-:|:-:|:-:|
|code|Number|错误码（code == 0 表示成功）|
|msg|String|错误发生原因|
