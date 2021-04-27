# MatterJS

## Introduction

Eva physics engine

## Install

### With NPM
```bash
tnpm install @eva/plugin-matterjs
```

### In Browser
```html
<script src="https://g.alicdn.com/eva/jscdn/1.0.4/EVA.plugin.renderer.matterjs.min.js"></script>

<script src="https://unpkg.com/@eva/plugin-matterjs@1.0.4/dist/EVA.plugin.renderer.matterjs.min.js"></script>
```

## Usage

```javascript
// 1. Introduced after installing the physics engine
import {PhysicsSystem, Physics, PhysicsType} from '@eva/plugin-matterjs';

// 2. Register the plugin in EVA
const game = new Game({
  autoStart: true,
  frameRate: 70, // Compatible with Eva's own bug, the frame rate must be greater than 60
  systems: [
    new RendererSystem({
      transparent: true,
      canvas: canvasNode,
      backgroundColor: 0xfee79d,
      width: 750,
      height: 1624,
      resolution: 2,
    }),
    new GraphicsSystem(),
    new PhysicsSystem({
      resolution: 2, // Keep the resolution of the RendererSystem consistent
      // isTest: true, // Whether to enable debugging mode
      // element: document.getElementById('game-container'), // Mount point of canvas node in debug mode
      world: {
        gravity: {
          y: 2, // gravity
        },
      },
      mouse: {
        open: true,
      },
    }),
    new TextSystem(),
    new ImgSystem(),
    new EventSystem(),
  ],
});

// 3. New game entity object
const box = new GameObject('box', {
  size: {
    width: 75,
    height: 75,
  },
  position: {
    x: 75 + Math.random() * 300,
    y: 75,
  },
  // Origin will be mapped to the center of mass of the physical system, which is the geometric center of the physics in a two-dimensional environment. It must be fixed here as {x:0.5,y:0.5}
  origin: {
    x: 0.5,
    y: 0.5,
  },
});
// 4. Add Componet to the game object
const physics = box.addComponent(
  new Physics({
    type: PhysicsType.RECTANGLE,
    // body:{
    // options:{

    //}
    //}
    bodyOptions: {
        isStatic: false, // Whether the object is still, any force acting on the object in a static state will not produce any effect
        restitution: 0.8,
        frictionAir: 0.1,
        friction: 0,
        frictionStatic: 0,
        force: {
          x: 0,
          y: 0,
        },
        stopRotation: true, // default false, usually do not need to be set
    },
  }),
);
//Currently supported collision events collisionStart collisionActive collisionEnd
//Rigid body events tick, beforeUpdate, afterUpdate, beforeRender, afterRender, afterTick usually use beforeUpdate and afterUpdate
physics.on('collisionStart', (body, gameObject1, gameObject2) => {});

console.log("physics",physics);
```

<br />
<br />
<br />
<br />
<br />