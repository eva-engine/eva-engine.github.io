# Interactive event

## Demo

[https://eva.js.org/playground/#/event](https://eva.js.org/playground/#/event)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-event
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-renderer-event@1.2.x/dist/EVA.plugin.renderer.event.min.js"></script>
```
## System
```js
import { EventSystem } from '@eva/plugin-renderer-event'
```
### moveWhenInside `boolean` `optional`
Touchmove will also be triggered if it is not inside the gameObject, default is false.

## Options

### hitArea `object` `optional`

Click the hot zone, the response area of ​​the picture with transparency is the rectangular area of ​​the entire GameObject, so the response area can be set through the hitArea property.
The attribute value of the hitArea area is relative to the rectangular area of ​​the GameObject.
Normally, there is no need to set hitArea.

| Type              | **Type**                  | **Attribute**                                                             |
| ----------------- | ------------------------- | ------------------------------------------------------------------------- |
| Circle            | HIT_AREA_TYPE.Circle      | {style: {x,y,radius}}                                                     |
| Ellipse           | HIT_AREA_TYPE.Ellipse     | {style:{x,y,width,height}}                                                |
| Rectangle         | HIT_AREA_TYPE.Rect        | {style:{x,y,width,height}}                                                |
| Rounded rectangle | HIT_AREA_TYPE.RoundedRect | {style:{x,y,width,height,radius}}                                         |
| Polygon           | HIT_AREA_TYPE.Polygon     | {style: {paths: [x,y,x,y,x,y]}} or {style: {paths: [{x,y},{x,y},{x ,y}]}} |

```js

import {Event, EventSystem, HIT_AREA_TYPE} from '@eva/plugin-renderer-event'

game.addSystem(new EventSystem({
  moveWhenInside: true // default is false
}))

const evt = image.addComponent(
  new Event({
    hitArea: {
      type: HIT_AREA_TYPE.Polygon,
      style: {
        paths: [107, 49, 148, 24, 172, 28, 198, 77, 189, 106, 123, 198, 71, 180, 10, 80, 34, 32, 90, 37]
      }
    }
  })
)
```

## Method

Event Component is used to support the event binding of Entity, the events are

| Event name      | Event type                                                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tap             | Click, if touchstart and touchend are both on the current gameObject, it will be triggered, if you don’t need it, you can add e.stopPropagation() to touchend according to certain conditions |
| touchstart      |                                                                                                                                                                                               |
| touchmove       | Move will also trigger if it is not on the current object, very strange                                                                                                                       |
| touchend        |                                                                                                                                                                                               |
| touchendoutside | When touchend, when touch is no longer on the object, it will trigger                                                                                                                         |

### on (eventName, listener)

Listen for events

### off (eventName, listener)

Remove monitor

### emit (eventName, ...args)

trigger event

### once (eventName, listener)

Listen for one-time events

## Instance Event's Arguments

Parameters of the listener function

```js
{
  data:{
    pointerId: number,
    position: {x, y}
  },
  stopPropagation: ()=>{},
  gameObject: gameObject
}
```

Prevent events from bubbling up

```js
event.stopPropagation()
```

