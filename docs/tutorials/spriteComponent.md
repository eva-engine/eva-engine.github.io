# Sprite

A sprite is a picture that packs multiple pictures, which can reduce the number of HTTP requests and save memory space. A renderer needs to be installed before use.

[Demo](https://eva.js.org/playground/#/sprite)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-sprite
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-renderer-sprite@1.0.x/dist/EVA.plugin.renderer.sprite.min.js"></script>
```

## Usage

```js
import {Game, GameObject, resource, RESOURCE_TYPE} from '@eva/eva.js'
import {RendererSystem} from '@eva/plugin-renderer'
import {Sprite, SpriteSystem} from '@eva/plugin-renderer-sprite'

resource.addResource([
  {
    name:'spriteName',
    type: RESOURCE_TYPE.SPRITE,
    src: {
      image: {
        type:'png',
        url:'https://gw.alicdn.com/tfs/TB1ONLxOAL0gK0jSZFAXXcA9pXa-900-730.png'
      },
      json: {
        type:'json',
        url:'https://pages.tmall.com/wow/eva/ad317f6aea149d9a8b34a517e5df2caf.json'
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
  size: {width: 200, height: 244 },
  position: {
    x: 0,
    y: 0
  }
})

const spriteCom1 = new Sprite({
  resource:'spriteName',
  spriteName:'symbol_1'
})

gameObj1.addComponent(spriteCom1)
```

## Options

### resource: `String`

Resource Name

### spriteName: `String`

Sprite id

<br/>
<br/>
<br/>
<br/>
<br/>