# Dragonbones 龙骨动画

> DragonBones是白鹭时代推出的面向设计师的2D游戏动画和富媒体内容创作平台,他提供了2D骨骼动画解决方案和动态漫画解决方案。

## Demo
[https://eva.js.org/playground/#/dragonBone](https://eva.js.org/playground/#/dragonBone)


## 介绍
使用Dragonbones骨骼动画可以实现一些更加丰富的效果，相对于帧动画能够更好的减少内存占用。
Dragonbones 龙骨动画官网：[http://dragonbones.com/cn/index.html](http://dragonbones.com/cn/index.html)
## Member
### resource `string` 
龙骨动画的资源名称
### armatureName `string` 
导出龙骨动画的时候设置的骨骼名字，在整个项目中，多个资源不能使用同一个armatureName，详见最后的注意。
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


```typescript
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
导出时 项目名称 project name使用英文


![image.png](https://cdn.nlark.com/yuque/0/2019/png/107226/1576564162150-0b6eb9f0-e880-4c0e-b6ef-b10b988f7422.png#align=left&display=inline&height=202&margin=%5Bobject%20Object%5D&name=image.png&originHeight=404&originWidth=764&size=228304&status=done&style=none&width=382)




![image.png](https://cdn.nlark.com/yuque/0/2019/png/107226/1576564198005-f0e4edcd-4027-4590-b68c-6579a892e977.png#align=left&display=inline&height=740&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1480&originWidth=2080&size=1360006&status=done&style=none&width=1040)




