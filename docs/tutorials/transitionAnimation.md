# Transition animation

Make linear changes to the properties on the Component to achieve transition animation.

-[https://eva.js.org/playground/#/transition](https://eva.js.org/playground/#/transition)
-[https://eva.js.org/playground/#/transition2](https://eva.js.org/playground/#/transition2)

## Install

### With NPM
```bash
npm i @eva/plugin-transition
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-transition@1.0.x/dist/EVA.plugin.transition.min.js"></script>
```

## Usage

```js
import {Game, GameObject, resource, RESOURCE_TYPE} from '@eva/eva.js'
import {RendererSystem} from '@eva/plugin-renderer'
import {Img, ImgSystem} from '@eva/plugin-renderer-img'
import {Transition, TransitionSystem} from '@eva/plugin-transition'

resource.addResource([
  {
    name:'heart',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type:'png',
        url:'//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'
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
      height: 1000
    }),
    new ImgSystem(),
    new TransitionSystem()
  ]
})

const image = new GameObject('image', {
  size: {width: 200, height: 200 },
  origin: {x: 0, y: 0 },
  position: {
    x: 0,
    y: 0
  },
  anchor: {x: 0.5, y: 0.5}
})
const img = image.addComponent(
  new Img({
    resource:'heart'
  })
)

const animation = image.addComponent(new Transition())
animation.group = {
  idle: [
    {
      name:'scale.x',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween:'ease-out'
        },
        {
          time: 300,
          value: 1.2,
          tween:'ease-in'
        },
        {
          time: 600,
          value: 1
        }
      ]
    },
    {
      name:'scale.y',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween:'ease-out'
        },
        {
          time: 300,
          value: 1.2,
          tween:'ease-in'
        },
        {
          time: 600,
          value: 1
        }
      ]
    }
  ],
  move: [
    {
      name:'position.x',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween:'ease-out'
        },
        {
          time: 300,
          value: 300,
          tween:'ease-in'
        }
      ]
    },
    {
      name:'position.y',
      component: image.transform,
      values: [
        {
          time: 0,
          value: 1,
          tween:'ease-in'
        },
        {
          time: 300,
          value: 300
        }
      ]
    }
  ]
}

animation.play('move', 1)
animation.on('finish', name => {
  name ==='move' && animation.play('idle', 5)
})

game.scene.addChild(image)
```

## Options

### group: `Object`

The timeline of property changes is an object, and each property corresponds to an animation. Multiple animations can be configured on a gameObject.

```js
const gameObject = new GameObject()
let transition = gameObject.addComponent(new Transition())
transition.group = {
  up: [
    {
      component: gameObject.transform,
      name:'position.y',
      values: [
        {
          time: 0,
          tween:'linear',
          value: 10
        }
      ]
    },
    {
      component: gameObject.transform,
      name:'position.y',
      values: [
        {
          time: 1,
          tween:'linear',
          value: 20
        }
      ]
    }
  ]
}
```

##### component

The component that needs to be changed

##### name: `String`

The attribute of the component that needs to be changed, for example, `component.position.x` is written as `'position.x'`

##### values: `Array`

Timeline list, the position corresponding to the time, and the easing function used to the next time point

-time: the time corresponding to the change of `number`
-value: `number | string` the value corresponding to the current time
-tween easing function, optional `linear`,`ease`,`ease-in`,`ease-out`,`ease-in-out`,`bounce-in`,`bounce-out`,`bounce -in-out`

## Methods

### play(name, iteration)

Play animation, `name` parameter is optional, do not fill in and play the first animation. `iteration` is the number of loops, the default is 1, which means to play once.

### stop(name)

Stop animation. The `name` parameter is optional. If `name` is not passed in, all animations will be stopped.

## Events

### finish

Triggered when the animation ends

```js
transition.on('finish', animationName => {})
```

<br/>
<br/>
<br/>
<br/>
<br/>