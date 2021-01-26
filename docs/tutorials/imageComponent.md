# 图片

使用前需要安装[渲染器](/tutorials/prepareRender)

[Demo](https://eva.js.org/playground/#/image)

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Img, ImgSystem } from '@eva/plugin-renderer-img'

// 添加图片资源
resource.addResource([
  {
    name: 'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp'
      }
    },
    preload: true
  }
])

// 创建 game，添加渲染器
const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000
    }),
    new ImgSystem()
  ]
})

// 创建 game object
const image = new GameObject('image', {
  size: { width: 750, height: 1319 },
  origin: { x: 0, y: 0 },
  position: {
    x: 0,
    y: -319
  },
  anchor: {
    x: 0,
    y: 0
  }
})

// 为 game object 添加 Image Component
image.addComponent(
  new Img({
    resource: 'imageName'
  })
)
```

## 参数
### resource: `String`

资源名，这里的资源名对应的是调用 `resource.addResource` 传入的资源信息中的资源名。

<br/>
<br/>
<br/>
<br/>
<br/>