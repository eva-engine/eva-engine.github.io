# 游戏 Game

Game 是游戏对象，通过 Game 实例上的方法，控制游戏暂停、继续。通过将 System 添加到 Game 上让游戏能够支持不同的能力，这些能力都是通过组件添加到 GameObject 上展现出来的。

## 创建游戏

```html
<style>
  #canvas {
    width: 100%;
    height: auto;
  }
</style>
<canvas id="canvas"></canvas>
```

```js
import { Game } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'

// 创建渲染系统
const renderSystem = new RendererSystem({
  canvas: document.querySelector('#canvas'), // 可选，自动生成canvas 挂在game.canvas上
  width: 750, // 必填
  height: 1000, // 必填
  transparent: false, // 可选
  resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以 2
  preventScroll: false, // 阻止页面滚动
  renderType: 0 // 0:自动判断，1: WebGL，2:Canvas，建议android6.1 ios9 以下使用Canvas，需业务判断。
})

// 初始化游戏
const game = new Game({
  frameRate: 60, // 可选
  autoStart: true, // 可选
  systems: [renderSystem]
})
```

## 添加系统

有两种方式添加系统，一种是在 Game 实例化的时候，传入构造函数的 `systems`  参数中，比如 `renderSystem` 渲染能力是必备的，可以通过这种方式添加。另外一种是在创建游戏后调用游戏实例上面的 `addSystem`  方法添加。EVAJS 提供了很多系统，这些系统都是作为插件单独在一个 package 中，比如，如果我们想检测帧率，可以使用 `@eva/plugin-stats` 插件。

```js
import { StatsSystem } from '@eva/plugin-stats'

const statsSystem = new StatsSystem({
  show: true, // 这里设置是否显示 fps 面板
  style: {
    x: 0, // 这里的数值全部都是屏幕宽度的百分比 单位vw
    y: 50,
    width: 20,
    height: 12
  }
})

game.addSystem(statsSystem)
```

## 获取系统

```ts
import { StatsSystem } from '@eva/plugin-stats'

const stats = game.getSystem(StatsSystem) // 通过类获取系统
// or
const stats = game.getSystem('StatsSystem') // 通过系统名获取系统
```

## 开始游戏

```js
game.start()
```

## 暂停游戏

建议在应用退出到后台时暂停游戏，返回后开始

```ts
game.pause()
```

## 多场景管理

### 切换场景

```js
import { Scene } from '@eva/eva.js'

const scene = new Scene('bg')

game.loadScene({
  scene,
  type: LOAD_SCENE_MODE.SINGLE
})
```

### 渲染到多个 canvas

在项目中，游戏默认会渲染到一个默认 canvas 上，当我们会有渲染到多个 canvas 上的需求，可以将该场景渲染到另一个 canvas 上。

```js
import { Scene, LOAD_SCENE_MODE } from '@eva/eva.js'

const scene = new Scene('bg')

game.loadScene({
  scene,
  type: LOAD_SCENE_MODE.MULTI_CANVAS,
  params: {
    // 这里和RendererSystem 参数相同
    canvas: document.querySelector('#canvas'), //可选，自动生成canvas 挂在game.canvas上
    width: 750, //必填
    height: 1000, // 必填
    transparent: false, // 可选
    resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以 2
    preventScroll: false, // 阻止页面滚动
    renderType: 0
    // 0:自动判断，1: WebGL，2:Canvas，建议android6.1 ios9 以下使用Canvas，需业务判断。
  }
})
```

<br/>
<br/>
<br/>
<br/>
<br/>
