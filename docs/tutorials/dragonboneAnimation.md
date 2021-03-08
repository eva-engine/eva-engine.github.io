# Dragonbones 龙骨动画

> DragonBones 是白鹭时代推出的面向设计师的 2D 游戏动画和富媒体内容创作平台,他提供了 2D 骨骼动画解决方案和动态漫画解决方案。

## Demo

[https://eva.js.org/playground/#/dragonBone](https://eva.js.org/playground/#/dragonBone)

## 介绍

使用 Dragonbones 骨骼动画可以实现一些更加丰富的效果，相对于帧动画能够更好的减少内存占用。
Dragonbones 龙骨动画官网：[http://dragonbones.com/cn/index.html](http://dragonbones.com/cn/index.html)

## Member

### resource `string` 

龙骨动画的资源名称

### armatureName `string` 

导出龙骨动画的时候设置的骨骼名字，在整个项目中，多个资源不能使用同一个 armatureName，详见最后的注意。

### animationName `string` 

开始播放的动画名字

## Method

### play(name?: string, times?: number)

播放某个动画，默认播放第一个
name: 动画名
times: 播放次数，默认无限次

### stop(name?: string)

停止播放某个动画

## Instance Event

对应龙骨官方事件：[http://developer.egret.com/cn/apidoc/index/name/dragonBones.EventObject](http://developer.egret.com/cn/apidoc/index/name/dragonBones.EventObject)

```js
// 以下事件对应龙骨官方事件
'start'
'loopComplete'
'complete'
'fadeIn'
'fadeInComplete'
'fadeOut'
'fadeOutComplete'
'frameEvent'
'soundEvent'

const db = gameObject.addComponent(new DragonBone({...}));
db.on('start', ()=>{})
db.on('complete', ()=>{})
```

## 注意

多个骨骼动画 armatureName 不能相同
导出时 项目名称 project name 使用英文

![image.png](https://gw.alicdn.com/imgextra/i1/O1CN01MwG7Zi1xPHLbANb8E_!!6000000006435-2-tps-764-404.png)

![image.png](https://gw.alicdn.com/imgextra/i3/O1CN019co6ry1JQ7RaVAZFa_!!6000000001022-2-tps-2080-1480.png)

<br/>
<br/>
<br/>
<br/>
<br/>
