# Lottie Animation

[Lottie](https://airbnb.design/lottie/) is a mobile library for Web, and iOS that parses [Adobe After Effects](https://www.adobe.com/products/aftereffects.html) animations exported as json with [Bodymovin](https://aescripts.com/bodymovin/) and renders them natively on mobile!

This plugin suport animation exported with [Lolita](https://design.alipay.com/lolita).

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-lottie -S
```

### In Browser
```html
<script src="https://g.alicdn.com/eva/jscdn/1.0.4/EVA.plugin.renderer.lottie.min.js"></script>

<script src="https://unpkg.com/@eva/plugin-renderer-lottie@1.0.4/dist/EVA.plugin.renderer.lottie.min.js"></script>
```

## Usage

```js
import {Game, GameObject, resource} from '@eva/eva.js'
import {LottieSystem, Lottie} from '@eva/plugin-renderer-lottie'

const game = new Game({
  systems: [
    new RenderSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1624
    }),
    new LottieSystem()
  ],
  autoStart: true,
  frameRate: 60
})

resource.addResource([
  {
    name:'ResourceName',
    type:'LOTTIE',
    src: {
      json: {
        type:'json',
        url:'https://gw.alipayobjects.com/os/bmw-prod/61d9cc77-12de-47a7-b6e5-06c836ce7083.json'
      }
    }
  }
])

const LottieComponent = new Lottie({ resource:'ResourceName' })
const LottieGameObject = new GameObject('ResourceName', {})

LottieGameObject.addComponent(LottieComponent)
game.scene.addChild(LottieGameObject)
```

## Options

- resource resource name

## Methods

### LottieComponent.play

Play animation

```js
LottieComponent.play([], {repeats: Infinity })
LottieComponent.play([0, 10])
```

#### Options

| **Description**                                                                            | **Type**              | **Default Value** |
| ------------------------------------------------------------------------------------------ | --------------------- | ----------------- |
| Play animation frame rate interval, the default is from the first frame to the last frame. | Array<number, number> | [start, end]      |
| repeate: play times, Infinity loop play.                                                   | number                | Infinity          |

slot:
-name: The name of the slot.
-type: The type of the slot, distinguish between text and pictures.
-value: The value to be filled in the slot, and the picture is a CDN link.
-style: The style setting of the slot.

```typescript
interface options {
Repeats?: number
Slot?: Array<{
Name: string;
Type:'TEXT' |'IMAGE';
Value: string;
Style: IStyle;
}>
}
```

#### IStyle

| **Parameter** | **Description**                                                                 | **Type**               | **Default Value** |
| ------------- | ------------------------------------------------------------------------------- | ---------------------- | ----------------- |
| x             | position.x                                                                      | number                 |                   |
| y             | position.y                                                                      | number                 |                   |
| width         | bounds.width                                                                    | number                 |                   |
| height        | bounds.height                                                                   | number                 |                   |
| anchor        | [document](http://pixijs.download/release/docs/PIXI.AnimatedSprite.html#anchor) | {x: number, y: number} | {x: 0, y: 0}      |
| pivot         | [document](http://pixijs.download/release/docs/PIXI.AnimatedSprite.html#pivot)  | {x: number, y: number} | {x: 0, y: 0}      |
| TextStyle     | [Document](https://pixijs.io/examples-v4/#/text/text.js)                        | PIXI.TextStyle         |                   |

### LottieComponent.onTap

Bind the Tap event to the slot element in Lottie

```js
LottieComponent.onTap('#btn', () => {
  console.log('btn click !')
})
```

#### Options

| **Description**            | **Type**   | **Default Value** |
| -------------------------- | ---------- | ----------------- |
| Slot name                  | string     |                   |
| Event callback after click | () => void |                   |

## Events

```js
LottieComponent.on('complete', () => {
  console.log('LottieComponent play complete !')
})
```

<br/>
<br/>
<br/>
<br/>
<br/>