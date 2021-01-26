# 渲染前置操作

## 介绍

所有渲染相关的操作依赖一个统一的渲染器，该渲染器是以系统的形式提供出来的，所以我们需要在初始化游戏的时候将渲染器安装到游戏上。

目前 EVAJS 提供了一个 2D 的渲染器，在使用渲染相关组件的时候需要提前安装。

## 使用系统
```typescript
import { Game, GameObject } from '@eva/eva.js';
import { RendererSystem, RENDERER_TYPE } from '@eva/plugin-renderer';

new Game({
	systems: [new RendererSystem({
    canvas: document.querySelector('#canvas'),//可选，自动生成canvas 挂载game.canvas上
    width: 750, //必填
    height: 1000, // 必填
    transparent: false, // 可选
    resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以 2
    preventScroll: false, // 阻止页面滚动
    renderType: RENDERER_TYPE.UNKNOWN, // RENDERER_TYPE.UNKNOWN:自动判断，RENDERER_TYPE.WEBGL/RENDERER_TYPE.CANVAS，建议android6.1以下使用Canvas。
    backgroundColor: 0xff0000
  })]
})
```

## 参数

### canvas
渲染所需canvas

### width
渲染画布的宽度，设计稿的宽度，

### height
渲染画布的高度，设计稿的高度

### transparent
背景是否透明，默认 false

### resolution
分辨率，如果设计稿是2倍（750*1334），可用 window.devicePixelRatio / 2

### preventScroll
是否阻止页面滚动，默认false

### renderType
使用 WebGL 或 Canvas 渲染默认为自动判断是否支持WebGL

### backgroundColor
背景颜色

<br/>
<br/>
<br/>
<br/>
<br/>