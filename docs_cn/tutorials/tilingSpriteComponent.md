# 平铺精灵 TilingSprite

在一些无限背景的游戏中可以通过平铺精灵来实现背景的无缝衔接，类似 css 中的 `background-repeat: repeat;` 功能，使用前需要安装渲染器。

[Demo](https://eva.js.org/playground/#/tilingSprite)

## 安装

### 使用 NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-tiling-sprite
```

### 在浏览器中
```html
<script src="https://unpkg.com/@eva/plugin-renderer-tiling-sprite@1.0.x/dist/EVA.plugin.renderer.tilingSprite.min.js"></script>
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { TilingSprite, TilingSpriteSystem } from '@eva/plugin-renderer-tiling-sprite'

resource.addResource([
  {
    name: 'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB1t7vtOvb2gK0jSZK9XXaEgFXa-300-431.png'
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
    new TilingSpriteSystem()
  ]
})

const tilingSprite = new GameObject('sprite', {
  size: { width: 750, height: 1000 }
})

tilingSprite.addComponent(
  new TilingSprite({
    resource: 'imageName',
    tileScale: { x: 0.7, y: 0.7 },
    tilePosition: { x: 10, y: 40 }
  })
)

game.scene.addChild(tilingSprite)
```

## 参数

### resource: `String`

资源名

### tileScale： `{x: float, y: float}` 

缩放

### tilePosition：`{x: number, y: number}`

位移

<br/>
<br/>
<br/>
<br/>
<br/>
