# Tiled Wizard TilingSprite

In some games with infinite backgrounds, tile sprites can be used to achieve seamless background connection, similar to the `background-repeat: repeat;` function in css, and a renderer needs to be installed before use.

[Demo](https://eva.js.org/playground/#/tilingSprite)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-tiling-sprite
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-renderer-tiling-sprite@1.2.x/dist/EVA.plugin.renderer.tilingSprite.min.js"></script>
```

## Usage

```js
import {Game, GameObject, resource, RESOURCE_TYPE} from '@eva/eva.js'
import {RendererSystem} from '@eva/plugin-renderer'
import {TilingSprite, TilingSpriteSystem} from '@eva/plugin-renderer-tiling-sprite'

resource.addResource([
  {
    name:'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type:'png',
        url:'https://gw.alicdn.com/tfs/TB1t7vtOvb2gK0jSZK9XXaEgFXa-300-431.png'
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
  size: {width: 750, height: 1000}
})

tilingSprite.addComponent(
  new TilingSprite({
    resource:'imageName',
    tileScale: {x: 0.7, y: 0.7 },
    tilePosition: {x: 10, y: 40}
  })
)

game.scene.addChild(tilingSprite)
```

## Options

### resource: `String`

Resource name

### tileScale: `{x: float, y: float}`

Zoom

### tilePosition: `{x: number, y: number}`

Displacement

