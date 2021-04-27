# 精灵图 Sprite

精灵图是将多张图片打包的一张图片，可以减少 HTTP 请求次数，节省内存空间，使用前需要安装渲染器。

[Demo](https://eva.js.org/playground/#/sprite)

## 安装

### 使用 NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-sprite
```

### 在浏览器中
```html
<script src="https://g.alicdn.com/eva/jscdn/1.0.4/EVA.plugin.renderer.sprite.min.js"></script>

<script src="https://unpkg.com/@eva/plugin-renderer-sprite@1.0.4/dist/EVA.plugin.renderer.sprite.min.js"></script>
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Sprite, SpriteSystem } from '@eva/plugin-renderer-sprite'

resource.addResource([
  {
    name: 'spriteName',
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB1ONLxOAL0gK0jSZFAXXcA9pXa-900-730.png'
      },
      json: {
        type: 'json',
        url: 'https://pages.tmall.com/wow/eva/ad317f6aea149d9a8b34a517e5df2caf.json'
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
      height: 1000,
      backgroundColor: 0x101010
    }),
    new SpriteSystem()
  ]
})

const gameObj1 = new GameObject('gameObject1', {
  size: { width: 200, height: 244 },
  position: {
    x: 0,
    y: 0
  }
})

const spriteCom1 = new Sprite({
  resource: 'spriteName',
  spriteName: 'symbol_1'
})

gameObj1.addComponent(spriteCom1)
```

## 参数

### resource: `String`

资源名称

### spriteName： `String` 

精灵图 id

<br/>
<br/>
<br/>
<br/>
<br/>
