# Preparation

All rendering-related operations depend on the renderer, which is provided in the form of the system, so we need to install the renderer on the game when initializing the game. Currently Eva.js provides a 2D renderer, which needs to be installed in advance when using rendering related components.

## Install

```bash
npm i @eva/plugin-renderer
```

## Usage

```js
import {Game, GameObject} from'@eva/eva.js'
import {RendererSystem, RENDERER_TYPE} from'@eva/plugin-renderer'

new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'), //Optional, automatically generate canvas and mount it on game.canvas
      width: 750, //Required
      height: 1000, // required
      transparent: false, // optional
      resolution: window.devicePixelRatio / 2, // Optional, if it is 2 times the image design, it can be divided by 2
      preventScroll: false, // Prevent page scrolling
      renderType: RENDERER_TYPE.UNKNOWN, // RENDERER_TYPE.UNKNOWN: automatic judgment, RENDERER_TYPE.WEBGL/RENDERER_TYPE.CANVAS, it is recommended to use Canvas below android6.1.
      backgroundColor: 0xff0000
    })
  ]
})
```

## Options

### canvas

Canvas needed for rendering

### width

The width of the rendering canvas, the width of the design draft,

### height

The height of the rendering canvas, the height of the design draft

### transparent

Whether the background is transparent, the default is false

### resolution

Resolution, if the design draft is 2 times (750\*1334), you can use window.devicePixelRatio / 2

### preventScroll

Whether to prevent page scrolling, the default is false

### renderType

Use WebGL or Canvas to render by default to automatically determine whether to support WebGL

### backgroundColor

background color

<br/>
<br/>
<br/>
<br/>
<br/>