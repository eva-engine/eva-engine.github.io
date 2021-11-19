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
<script src="https://unpkg.com/@eva/plugin-renderer-lottie@1.1.x/dist/EVA.plugin.renderer.lottie.min.js"></script>
```

## Usage

```js
import { Game, GameObject, resource } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { LottieSystem, Lottie } from '@eva/plugin-renderer-lottie'


resource.addResource([
  {
    name: 'Halo',
    // @ts-ignore
    type: 'LOTTIE',
    src: {
      json: {
        type: 'json',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/61d9cc77-12de-47a7-b6e5-06c836ce7083.json',
      },
    },
  },
  {
    name: 'Red',
    // @ts-ignore
    type: 'LOTTIE',
    src: {
      json: {
        type: 'json',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/e327ad5b-80d6-4d3f-8ffc-a7dd15350648.json',
      },
    },
  },
]);

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1624,
      transparent: true,
    }),
    new LottieSystem(),
  ],
  autoStart: true,
  frameRate: 60,
});

game.scene.transform.size = {
  width: 750,
  height: 1624,
};

const halo = new Lottie({resource: 'Halo'});
const red = new Lottie({resource: 'Red'});

halo.on('complete', () => {
  console.log('halo play complete !');
});
red.on('complete', () => {
  console.log('Red play complete !');
});

halo.play([], {repeats: 0});


red.play([], {
  repeats: 0,
  slot: [
    {
      name: '#number',
      type: 'TEXT',
      value: '10',
      style: {
        fontSize: 64,
      },
    },
    {
      name: '#unit',
      type: 'TEXT',
      value: '元',
      style: {
        fontSize: 22,
      },
    },
    {
      name: '#title',
      type: 'TEXT',
      value: '我是主标题',
      style: {
        fontSize: 32,
      },
    },
    {
      name: '#subtitle',
      type: 'TEXT',
      value: '我是副标题',
      style: {
        fontSize: 24,
      },
    },
  ],
});

red.onTap('#btn', () => {
  console.log('btn click !');
});

const haloGameObj = new GameObject('Halo', {
  anchor: {
    x: 0,
    y: 0,
  },
});
const redGameObj = new GameObject('Red', {
  anchor: {x: 0.5, y: 0.3},
  size: {width: 660, height: 757},
  origin: {x: 0.5, y: 0.5},
});

haloGameObj.addComponent(halo);
redGameObj.addComponent(red);

game.scene.addChild(haloGameObj);
game.scene.addChild(redGameObj);
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

