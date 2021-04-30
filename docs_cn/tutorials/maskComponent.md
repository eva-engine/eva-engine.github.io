# 遮罩 Mask

Mask 组件可以将 GameObject 的展示范围进行裁剪，使用前需要安装渲染器。

[Demo](https://eva.js.org/playground/#/mask)

## 安装

### 使用 NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-mask
```

### 在浏览器中
```html
<script src="https://unpkg.com/@eva/plugin-renderer-mask@1.0.4/dist/EVA.plugin.renderer.mask.min.js"></script>
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Img, ImgSystem } from '@eva/plugin-renderer-img'
import { Mask, MaskSystem, MASK_TYPE } from '@eva/plugin-renderer-mask'

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
  },
  {
    name: 'tag',
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type: 'png',
        url: '//gw.alicdn.com/mt/TB1KcVte4n1gK0jSZKPXXXvUXXa-150-50.png'
      },
      json: {
        type: 'json',
        url: '//gw.alicdn.com/mt/TB1d4lse4D1gK0jSZFsXXbldVXa.json'
      }
    },
    preload: true
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
    new MaskSystem()
  ]
})

game.scene.transform.size = {
  width: 750,
  height: 1000
}

const image = new GameObject('image', {
  size: { width: 200, height: 200 }
})
image.addComponent(
  new Img({
    resource: 'heart'
  })
)
game.scene.addChild(image)
image.addComponent(
  new Mask({
    type: MASK_TYPE.Circle,
    style: {
      x: 100,
      y: 100,
      radius: 70
    }
  })
)

const image1 = new GameObject('image', {
  size: { width: 200, height: 200 },
  position: { x: 400, y: 300 }
})
image1.addComponent(
  new Img({
    resource: 'heart'
  })
)

image1.addComponent(
  new Mask({
    type: MASK_TYPE.Img,
    style: {
      width: 100,
      height: 100,
      x: 20,
      y: 20
    },
    resource: 'heart'
  })
)
game.scene.addChild(image1)

const image2 = new GameObject('image', {
  size: { width: 200, height: 200 },
  position: { x: 100, y: 400 }
})
image2.addComponent(
  new Img({
    resource: 'heart'
  })
)

image2.addComponent(
  new Mask({
    type: MASK_TYPE.Sprite,
    style: {
      width: 100,
      height: 100,
      x: 20,
      y: 20
    },
    resource: 'tag',
    spriteName: 'task.png'
  })
)
game.scene.addChild(image2)
```

## 参数

### type: `MARK_TYPE` 

### style: `object` 

| 类型     | **Type**              | **属性**                                                                   |
| -------- | --------------------- | -------------------------------------------------------------------------- |
| 圆形     | MASK_TYPE.Circle      | {style: {x,y,radius}}                                                      |
| 椭圆     | MASK_TYPE.Ellipse     | {style:{x,y,width,height}}                                                 |
| 矩形     | MASK_TYPE.Rect        | {style:{x,y,width,height}}                                                 |
| 圆角矩形 | MASK_TYPE.RoundedRect | {style:{x,y,width,height,radius}}                                          |
| 多边形   | MASK_TYPE.Polygon     | {style: {paths: [x,y,x,y,x,y]}} 或者 {style: {paths: [{x,y},{x,y},{x,y}]}} |
| 图片     | MASK_TYPE.Img         | {resource,style:{x,y,width,height}}                                        |
| 精灵图   | MASK_TYPE.Sprite      | {resource,spriteName,style:{x,y,width,height}}                             |

<br/>
<br/>
<br/>
<br/>
<br/>
