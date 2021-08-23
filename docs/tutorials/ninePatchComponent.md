# NinePatch

We often encounter some pictures that are not fixed in size, but the surrounding or four-pass style is not deformed, that is, the .9 picture, such as a message bubble. If you directly set the width and height, the entire bubble picture will be deformed.
In the picture below, the second one is a bubble created by Jiugongge, and the last one is created by directly stretching the picture. The first two are clearly in line with expectations. [Demo](https://eva.js.org/playground/#/ninePatch)

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01lDIcS31chVAZjBu7q_!!6000000003632-2-tps-894-1194.png)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-nine-patch
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-renderer-nine-patch@1.1.x/dist/EVA.plugin.renderer.ninePatch.min.js"></script>
```

## Usage

```js
import {Game, GameObject, resource, RESOURCE_TYPE} from '@eva/eva.js'
import {RendererSystem} from '@eva/plugin-renderer'
import {NinePatch, NinePatchSystem} from '@eva/plugin-renderer-nine-patch'

resource.addResource([
  {
    name:'nine',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type:'png',
        url:'https://img.alicdn.com/tfs/TB17uSKkQ9l0K4jSZFKXXXFjpXa-363-144.png'
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
  size: {width: 360, height: 145 },
  origin: {x: 0, y: 0 },
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
    resource:'nine',
    leftWidth: 100,
    topHeight: 40,
    rightWidth: 40,
    bottomHeight: 40
  })
)

const patch1 = new GameObject('patch1', {
  size: {width: 660, height: 345 },
  origin: {x: 0, y: 0 },
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
    resource:'nine',
    leftWidth: 100,
    topHeight: 40,
    rightWidth: 40,
    bottomHeight: 40
  })
)

game.scene.addChild(patch)
game.scene.addChild(patch1)
```

## Options

### resource `string`

Resource Name

### spriteName

This property can be set if the resource type is Sprite

### leftWidth

Correspond to Figure A below

### topHeight

Correspond to Figure C below

### rightWidth

Correspond to Figure B below

### bottomHeight

Corresponding to the figure D below

![image.png](https://gw.alicdn.com/imgextra/i1/O1CN01IXEUZN1yYGjgwuahU_!!6000000006590-2-tps-932-612.png)

<br/>
<br/>
<br/>
<br/>
<br/>