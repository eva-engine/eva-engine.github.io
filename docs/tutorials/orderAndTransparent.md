# 遮挡排序与透明度

使用前需要安装渲染器

- [透明度 Demo](https://eva.js.org/playground/#/render/alpha)
- [排序 Demo](https://eva.js.org/playground/#/render/sort)

## 安装

```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-render
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Img, ImgSystem } from '@eva/plugin-renderer-img'
import { Render, RenderSystem } from '@eva/plugin-renderer-render'
import { Transition, TransitionSystem } from '@eva/plugin-transition'

resource.addResource([
  {
    name: 'heart',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'
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
    new RenderSystem(),
    new TransitionSystem()
  ]
})

const image = new GameObject('image', {
  size: { width: 200, height: 200 },
  origin: { x: 0, y: 0 },
  position: {
    x: 300,
    y: 400
  },
  anchor: {
    x: 0,
    y: 0
  }
})
const img = image.addComponent(
  new Img({
    resource: 'heart'
  })
)

const render = image.addComponent(
  new Render({
    alpha: 0.5
  })
)

const animation = image.addComponent(new Transition())
animation.group = {
  idle: [
    {
      name: 'alpha',
      component: render,
      values: [
        {
          time: 0,
          value: 1,
          tween: 'ease-out'
        },
        {
          time: 1000,
          value: 0,
          tween: 'ease-in'
        },
        {
          time: 2000,
          value: 1
        }
      ]
    }
  ]
}

animation.play('idle', Infinity)

game.scene.addChild(image)
```

## 参数

### sortableChildren: `boolean` 

如果需要使用 zIndex 排序，需要在父级的 Render 组件上设置 sortableChildren

### zIndex: `number` 

渲染顺序，zIndex 越大在上面

### alpha: `number` 

透明度
