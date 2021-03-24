# Game

Game is a runtime of game. Through the methods on the Game instance, the game is controlled to pause and continue. By adding the System to the Game, the game can support different abilities, which are displayed by adding components to the GameObject.

## Create a game

```html
<style>
  #canvas {
    width: 100%;
    height: auto;
  }
</style>
<canvas id="canvas"></canvas>
```

```js
import {Game} from'@eva/eva.js'
import {RendererSystem} from'@eva/plugin-renderer'

// Create a rendering system
const renderSystem = new RendererSystem({
  canvas: document.querySelector('#canvas'), // Optional, automatically generate canvas and hang on game.canvas
  width: 750, // required
  height: 1000, // required
  transparent: false, // optional
  resolution: window.devicePixelRatio / 2, // Optional, if it is 2 times the image design, it can be divided by 2
  preventScroll: false, // Prevent page scrolling
  renderType: 0 // 0: automatic judgment, 1: WebGL, 2: Canvas, it is recommended to use Canvas below android6.1 ios9, business judgment is required.
})

// Initialize the game
const game = new Game({
  frameRate: 60, // optional
  autoStart: true, // optional
  systems: [renderSystem]
})
```

## Add system

There are two ways to add a system. One is to pass in the `systems` parameter of the constructor when the Game is instantiated. For example, the `renderSystem` rendering capability is necessary and can be added in this way. The other is to call the `addSystem` method on the game instance after the game is created. Eva.js provides many systems. These systems are used as plug-ins in a package. For example, if we want to detect the frame rate, we can use the `@eva/plugin-stats` plug-in.

```js
import {StatsSystem} from'@eva/plugin-stats'

const statsSystem = new StatsSystem({
  show: true, // Set here whether to display the fps panel
  style: {
    x: 0, // The values ​​here are all percentages of the screen width, unit vw
    y: 50,
    width: 20,
    height: 12
  }
})

game.addSystem(statsSystem)
```

## Get system

```ts
import {StatsSystem} from'@eva/plugin-stats'

const stats = game.getSystem(StatsSystem) // Get system through class
// or
const stats = game.getSystem('StatsSystem') // Get system by system name
```

## Start the game

```js
game.start()
```

## Pause the game

It is recommended to pause the game when the app exits to the background and start after returning

```ts
game.pause()
```

## Multi-scene management

### Switch scene

```js
import {Scene} from'@eva/eva.js'

const scene = new Scene('bg')

game.loadScene({
  scene,
  type: LOAD_SCENE_MODE.SINGLE
})
```

### Render to multiple canvases

In the project, the game will be rendered on a default canvas by default. When we need to render on multiple canvases, we can render the scene on another canvas.

```js
import {Scene, LOAD_SCENE_MODE} from'@eva/eva.js'

const scene = new Scene('bg')

game.loadScene({
  scene,
  type: LOAD_SCENE_MODE.MULTI_CANVAS,
  params: {
    // This is the same as the RendererSystem parameter
    canvas: document.querySelector('#canvas'), //Optional, automatically generate canvas and hang on game.canvas
    width: 750, //Required
    height: 1000, // required
    transparent: false, // optional
    resolution: window.devicePixelRatio / 2, // Optional, if it is 2 times the image design, it can be divided by 2
    preventScroll: false, // Prevent page scrolling
    renderType: 0
    // 0: automatic judgment, 1: WebGL, 2: Canvas, it is recommended to use Canvas under android6.1 ios9, business judgment is required.
  }
})
```

<br/>
<br/>
<br/>
<br/>
<br/>