# Image

The Image component provides the GameObject with the ability to use Image. The Image loaded by resource can be added to the GameObject for display. [Renderer](prepareRender) needs to be installed before use

[Demo](https://eva.js.org/playground/#/image)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-img
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-renderer-img@1.1.x/dist/EVA.plugin.renderer.img.min.js"></script>
```

## Usage

```js
import {Game, GameObject, resource, RESOURCE_TYPE} from '@eva/eva.js'
import {RendererSystem} from '@eva/plugin-renderer'
import {Img, ImgSystem} from '@eva/plugin-renderer-img'

// Add image resources
resource.addResource([
  {
    name:'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/imgextra/i1/O1CN01376pu91tylcmKqXIt_!!6000000005971-2-tps-658-1152.png'
      }
    },
    preload: true
  }
])

// Create game, add renderer
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

// Create game object
const image = new GameObject('image', {
  size: {width: 750, height: 1319 },
  origin: {x: 0, y: 0 },
  position: {
    x: 0,
    y: -319
  },
  anchor: {
    x: 0,
    y: 0
  }
})

// Add Image Component to the game object
image.addComponent(
  new Img({
    resource:'imageName'
  })
)

game.scene.addChild(image)
```

## Options

### resource: `String`

Resource name. The resource name here corresponds to the resource name in the resource information passed in by calling `resource.addResource`.

