# 九宫格 NinePatch

我们经常会遇到一些尺寸不固定，但是周围或四遍样式不变形的图片，也就是 .9 图，例如消息气泡，如果直接设置宽高会将整个气泡图片拉变形。
下图中，第二个是通过九宫格创建的气泡，最后一个是直接把图片拉伸创建的，前两个明显符合预期。[Demo](https://eva.js.org/playground/#/ninePatch)

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01lDIcS31chVAZjBu7q_!!6000000003632-2-tps-894-1194.png)

## 安装

```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-ninepatch
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { NinePatch, NinePatchSystem } from '@eva/plugin-renderer-nine-patch'

resource.addResource([
  {
    name: 'nine',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://img.alicdn.com/tfs/TB17uSKkQ9l0K4jSZFKXXXFjpXa-363-144.png'
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
      height: 1000,
      backgroundColor: 0xffffff
    }),
    new NinePatchSystem()
  ]
})

const patch = new GameObject('patch', {
  size: { width: 360, height: 145 },
  origin: { x: 0, y: 0 },
  position: {
    x: 10,
    y: 10
  },
  anchor: {
    x: 0,
    y: 0
  }
})
const ninePatch = patch.addComponent(
  new NinePatch({
    resource: 'nine',
    leftWidth: 100,
    topHeight: 40,
    rightWidth: 40,
    bottomHeight: 40
  })
)

const patch1 = new GameObject('patch1', {
  size: { width: 660, height: 345 },
  origin: { x: 0, y: 0 },
  position: {
    x: 10,
    y: 300
  },
  anchor: {
    x: 0,
    y: 0
  }
})

const ninePatch1 = patch1.addComponent(
  new NinePatch({
    resource: 'nine',
    leftWidth: 100,
    topHeight: 40,
    rightWidth: 40,
    bottomHeight: 40
  })
)

game.scene.addChild(patch)
game.scene.addChild(patch1)
```

## 参数

### resource `string` 

资源名称

### spriteName

如果资源类型是 Sprite 可设置此属性

### leftWidth

对应下图 A

### topHeight

对应下图 C

### rightWidth

对应下图 B

### bottomHeight

对应下图 D

![image.png](https://gw.alicdn.com/imgextra/i1/O1CN01IXEUZN1yYGjgwuahU_!!6000000006590-2-tps-932-612.png)

<br/>
<br/>
<br/>
<br/>
<br/>
