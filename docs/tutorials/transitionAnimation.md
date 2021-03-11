# 过渡动画

对 Component 上的属性做线性变化，实现过渡动画。

- [https://eva.js.org/playground/#/transition](https://eva.js.org/playground/#/transition)
- [https://eva.js.org/playground/#/transition2](https://eva.js.org/playground/#/transition2)

## 安装

```bash
npm i @eva/plugin-transition
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Img, ImgSystem } from '@eva/plugin-renderer-img'
import { Transition, TransitionSystem } from '@eva/plugin-transition'

resource.addResource([
  {
    name: 'heart',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: '//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'
      }
    },
    preload: false
  }
])

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000
    }),
    new ImgSystem(),
    new TransitionSystem()
  ]
})

const image = new GameObject('image', {
  size: { width: 200, height: 200 },
  origin: { x: 0, y: 0 },
  position: {
    x: 0,
    y: 0
  },
  anchor: { x: 0.5, y: 0.5 }
})
const img = image.addComponent(
  new Img({
    resource: 'heart'
  })
)

const animation = image.addComponent(new Transition())
animation.group = {
  idle: [
    {
      name: 'scale.x',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween: 'ease-out'
        },
        {
          time: 300,
          value: 1.2,
          tween: 'ease-in'
        },
        {
          time: 600,
          value: 1
        }
      ]
    },
    {
      name: 'scale.y',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween: 'ease-out'
        },
        {
          time: 300,
          value: 1.2,
          tween: 'ease-in'
        },
        {
          time: 600,
          value: 1
        }
      ]
    }
  ],
  move: [
    {
      name: 'position.x',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween: 'ease-out'
        },
        {
          time: 300,
          value: 300,
          tween: 'ease-in'
        }
      ]
    },
    {
      name: 'position.y',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween: 'ease-in'
        },
        {
          time: 300,
          value: 300
        }
      ]
    }
  ]
}

animation.play('move', 1)
animation.on('finish', name => {
  name === 'move' && animation.play('idle', 5)
})

game.scene.addChild(image)
```

## 参数

### group: `Object`

属性变化的时间轴，是一个对象，每个属性将对应一个动画，在一个 gameObject 上可以配置多个动画。

```js
const gameObject = new GameObject()
let transition = gameObject.addComponent(new Transition())
transition.group = {
  up: [
    {
      component: gameObject.transform,
      name: 'position.y',
      values: [
        {
          time: 0,
          tween: 'linear',
          value: 10
        }
      ]
    },
    {
      component: gameObject.transform,
      name: 'position.y',
      values: [
        {
          time: 1,
          tween: 'linear',
          value: 20
        }
      ]
    }
  ]
}
```

##### component

需要变化的 component

##### name: `String`

需要变化的 component 的属性，比如 `component.position.x` 写成 `'position.x'`

##### values: `Array`

时间轴列表，时间对应的位置，和到下一个时间点所用的缓动函数

- time: `number` 变化所对应的时间
- value: `number | string` 当前时间所对应的值
- tween 缓动函数，可选 `linear`,`ease`,`ease-in`,`ease-out`,`ease-in-out`,`bounce-in`,`bounce-out`,`bounce-in-out`

## 方法

### play(name, iteration)

播放动画，`name` 参数可选，不填写播放第一个动画。`iteration` 是循环次数，默认为 1，表示播放一次。

### stop(name)

停止动画 `name` 参数可选，不传入 `name` 则停止所有动画。

## 事件

### finish

动画结束时触发

```js
transition.on('finish', animationName => {})
```

<br/>
<br/>
<br/>
<br/>
<br/>
