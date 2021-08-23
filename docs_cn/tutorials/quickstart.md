# 快速开始

## Demo 项目

基于 webpack 创建的 demo 项目：[https://github.com/eva-engine/start-demo](https://github.com/eva-engine/start-demo)

## 安装

### 使用 NPM
```bash
npm install @eva/eva.js
```

### 在浏览器中
```html
<script src="https://unpkg.com/@eva/eva.js@1.1.x/dist/EVA.min.js"></script>
```

## 创建画布

Eva.js 依赖于 HTML 中的 canvas 进行绘制。如果设计稿中的宽高是固定的（例如 750px\*1000px）又占满全屏，我们可以设置 canvas 的 css 宽度为 100%，高度为 auto。

```html
<style>
  #canvas {
    width: 100%;
    height: auto;
  }
</style>
<canvas id="canvas"></canvas>
```

## 添加资源

在创建游戏之前，我们需要添加资源文件到资源管理器中，这里我们添加两个图片资源。当然还可以添加龙骨动画、spine 动画资源，更多请看[资源管理](/tutorials/resourceManagement)。

```js
import { resource, RESOURCE_TYPE } from '@eva/eva.js'

resource.addResource([
  {
    name: 'image1',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp'
      }
    },
    preload: true
  },
  {
    name: 'image2',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg'
      }
    },
    preload: true
  }
])
```

## 创建游戏

Eva.js 内核是一个非常轻量级的运行时，其他功能都是通过插件的方式实现的，如果想实现游戏最基础的渲染能力，需要安装渲染插件 `@eva/plugin-renderer`。

```bash
npm i @eva/plugin-renderer
```

```js
import { Game } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'

// 创建渲染系统
const rendererSystem = new RendererSystem({
  canvas: document.querySelector('#canvas'), // 可选，自动生成 canvas 挂在 game.canvas 上
  width: 750,
  height: 1000,
  transparent: false,
  resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以2
  enableScroll: true, // 允许页面滚动
  renderType: 0 // 0:自动判断，1: WebGL，2:Canvas，建议android6.1 ios9 以下使用Canvas，需业务判断。
})

// 创建游戏对象
const game = new Game({
  frameRate: 60, // 可选，游戏帧率，默认60
  autoStart: true, // 可选，自动开始
  systems: [rendererSystem]
})
```

当然这样只让 Eva.js 有了基础的渲染能力，但是 canvas 上还没有展示任何元素，接下来我们将添加 gameObject，它将会展现在画布上。

## 添加游戏对象

创建完游戏后，我们需要在游戏里面添加一个[游戏对象](/tutorials/gameObject)，并且给游戏对象添加[组件](/tutorials/customComponent)。游戏对象是游戏中最基本的可操作单位，而组件则赋予了游戏对象各种能力，比如 Img 组件让一个 gameObject 展示一张图片。


- 使用 NPM
```bash
npm i @eva/plugin-renderer
```

- 在浏览器中
```html
<!-- import PixiJS -->
<script src="//unpkg.com/pixi.js@4.8.9/dist/pixi.min.js"></script>
<!-- import RendererAdapter -->
<script src="//unpkg.com/@eva/renderer-adapter@1.1.x/dist/EVA.rendererAdapter.min.js"></script>
<script src="https://unpkg.com/@eva/plugin-renderer@1.1.x/dist/EVA.plugin.renderer.min.js"></script>
<script src="//unpkg.com/@eva/plugin-renderer-img@1.1.x/dist/EVA.plugin.renderer.img.min.js"></script>
```


```js
import { GameObject } from '@eva/eva.js'
import { Img, ImgSystem } from '@eva/plugin-renderer-img' // 引入渲染图片所需要的组件和系统

game.addSystem(new ImgSystem()) // 给游戏添加渲染图片的能力

const gameObject = new GameObject('gameObj1', {
  size: {
    width: 658,
    height: 1152
  }
})

gameObject.addComponent(
  new Img({
    resource: 'image1'
  })
)

game.scene.addChild(gameObject) // 把游戏对象放入场景，这样画布上就可以显示这张图片了
```

## 组件管理

### 获取组件

方式 1：创建时保留组件

```js
const img = gameObject.addComponent(
  new Img({
    resource: 'image1'
  })
)
// or
const img = new Img({ resource: 'image1' })
gameObject.addComponent(img)
```

方式 2：创建后从游戏对象上获取

```js
const img = gameObject.getComponent(Img)
// or
const img = gameObject.getComponent('Img')
```

### 修改组件属性

```js
img.resource = 'image2' // 切换资源名称，要确保资源已经被添加到资源管理器
```

## 准备好了吗？

刚刚介绍了 Eva.js 最简单的 demo，接下来我们看一些 2D 互动游戏[常用能力](/tutorials/resourceManagement)。

<br/>
<br/>
<br/>
<br/>
<br/>
