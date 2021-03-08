# 帧动画

## Demo

[https://eva.js.org/playground/#/spriteAnimation](https://eva.js.org/playground/#/spriteAnimation)

## 介绍

帧动画是由多张连续的图片按照一定的时间间隔播放的动画，通常会将图片合并到一张图片里面，然后通过 JSON 来描述图片的位置以及播放的顺序。

EVAJS 对接的帧动画类型是用[EVA Store](https://eva.alibaba-inc.com/assets)进行制作的，请到 EVAStore 进行精灵图制作

## Member

### resource `string` 

资源名

### speed `number` 

帧动画速度，毫秒，每张图片播放的间隔时间。

## Methods

### play()

默认自动播放

### stop()

停止

## 注意

在手淘中使用精灵图需要给图片 url 添加 `?getAvatar` 属性，这样能够防止手淘图片库自动压缩图片导致图片与贴图描述文件无法对齐产生报错。

<br/>
<br/>
<br/>
<br/>
<br/>
