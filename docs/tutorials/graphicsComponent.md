# Graphics Graphics

The Graphics component provides GameObject with the ability to draw graphics.

[Demo](https://eva.js.org/playground/#/graphics)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-graphics
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-renderer-graphics@1.0.4/dist/EVA.plugin.renderer.graphics.min.js"></script>
```

## Usage

No parameters are needed, a graphics mounted component instance will be returned, and the graphics can be drawn by calling the method on the graphics property

```js
import {Game, GameObject} from '@eva/eva.js'
import {RendererSystem} from '@eva/plugin-renderer'
import {Graphics, GraphicsSystem} from '@eva/plugin-renderer-graphics'

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000
    }),
    new GraphicsSystem()
  ]
})

const outter = new GameObject('container', {
  position: {
    x: 200,
    y: 500
  },
  size: {
    width: 300,
    height: 24
  }
})
const progress = new GameObject('container', {
  position: {
    x: 3,
    y: 3
  }
})

const outterGraphics = outter.addComponent(new Graphics())
outterGraphics.graphics.beginFill(0xde3249, 1)
outterGraphics.graphics.drawRoundedRect(0, 0, 300, 24, 12)
outterGraphics.graphics.endFill()

const progressGraphics = progress.addComponent(new Graphics())

let i = 0
setInterval(() => {
  setProgress(i++)
}, 100)

outter.addChild(progress)

game.scene.addChild(outter)

function setProgress(progress) {
  if (progress> 100) return
  const width = Math.max(12, (296 * progress) / 100)
  progressGraphics.graphics.clear()
  progressGraphics.graphics.beginFill(0x000000, 1)
  progressGraphics.graphics.drawRoundedRect(0, 0, width, 18, 9)
  progressGraphics.graphics.endFill()
}
```

### Drawing method

#### beginFill (color, alpha)

Specify a simple single-color fill, and then call other Graphics methods (for example: `lineTo()` or `drawCircle()`) to use when drawing.

| Name    | Type   | Default | Description           |
| :------ | :----- | :------ | :-------------------- |
| `color` | number | 0       | optional Fill color   |
| `alpha` | number | 1       | optional Filled Alpha |

#### endFill()

Filling is applied to the lines and shapes added since the last call to the beginFill() method.

#### lineStyle ({ width, color, alpha, alignment, native })

Specify the line style used for subsequent calls to the Graphics method, for example: `lineTo()` method or `drawCircle()` method

| Name        | Type    | Default | Description ｜                                                                        |
| :---------- | :------ | :------ | :------------------------------------------------------------------------------------ |
| `width`     | number  | 0       | optional The width of the line, the style of the object storage will be updated       |
| `color`     | number  | 0x0     | optional The color of the drawn line, the style of the object storage will be updated |
| `alpha`     | number  | 1       | optional Alpha of the drawn line, the style of the object storage will be updated     |
| `alignment` | number  | 0.5     | optional Alignment of the drawn line (0 = internal, 0.5 = center, 1 = external)       |
| `native`    | boolean | false   | optional If true, LINES will be used instead of TRIANGLE_STRIP to draw lines          |

#### lineStyle (width, color, alpha, alignment, native)

Specify the line style used for subsequent calls to the Graphics method, for example: `lineTo()` method or `drawCircle()` method

| Name        | Type    | Default | Description                                                                           |
| :---------- | :------ | :------ | :------------------------------------------------------------------------------------ |
| `width`     | number  | 0       | optional The width of the line, the style of the object storage will be updated       |
| `color`     | number  | 0x0     | optional The color of the drawn line, the style of the object storage will be updated |
| `alpha`     | number  | 1       | optional Alpha of the drawn line, the style of the object storage will be updated     |
| `alignment` | number  | 0.5     | optional Alignment of the drawn line (0 = internal, 0.5 = center, 1 = external)       |
| `native`    | boolean | false   | optional If true, LINES will be used instead of TRIANGLE_STRIP to draw lines          |

#### lineTo (x, y)

Use the current line style to draw a line from the current drawing position to (x, y); then set the current drawing position to (x, y).

| Name | Type   | Description              |
| :--- | :----- | :----------------------- |
| `x`  | number | X coordinate to be drawn |
| `y`  | number | Y coordinate to be drawn |

#### moveTo (x, y)

Move the current graphic position to x,y.

| Name | Type   | Description             |
| :--- | :----- | :---------------------- |
| `x`  | number | X coordinate to move to |
| `y`  | number | Y coordinate to move to |

#### quadraticCurveTo (cpX, cpY, toX, toY)

Calculate the points of the quadratic Bezier curve, and then draw it. Based on: [https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c](https://stackoverflow.com/questions/785097/how-do- i-implement-a-bezier-curve-in-c)

| Name  | Type   | Description         |
| :---- | :----- | :------------------ |
| `cpX` | number | Control point x     |
| `cpY` | number | Control point y     |
| `toX` | number | Destination point x |
| `toY` | number | Destination point y |

#### clear()

Clear the graphics drawn to this Graphics object, and reset the fill and line style settings.

#### closePath()

Close the current path.

### Preset graphics

#### arc (cx, cy, radius, startAngle, endAngle, anticlockwise)

The arc method creates an arc/curve (used to create a circle or part of a circle).

| Name            | Type    | Default | Description                                                                                                                                                    |
| :-------------- | :------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cx`            | number  |         | x coordinate of the center of the circle                                                                                                                       |
| `cy`            | number  |         | y coordinate of the center of the circle                                                                                                                       |
| `radius`        | number  |         | radius of the circle                                                                                                                                           |
| `startAngle`    | number  |         | Starting angle, in radians (0 is the 3 point position of the arc)                                                                                              |
| `endAngle`      | number  |         | End angle, in radians                                                                                                                                          |
| `anticlockwise` | boolean | false   | optional Specifies whether the graph is counterclockwise or clockwise. `false` is the default value, which means clockwise, and `true` means counterclockwise. |

#### arcTo (x1, y1, x2, y2, radius)

The arcTo() method creates an arc/curve between two tangents on the canvas.

| Name     | Type   | Description                                            |
| :------- | :----- | :----------------------------------------------------- |
| `x1`     | number | The x coordinate of the first tangent point of the arc |
| `y1`     | number | The y coordinate of the first tangent point of the arc |
| `x2`     | number | x coordinate of the end of the arc                     |
| `y2`     | number | y coordinate of the end of the arc                     |
| `radius` | number | Arc radius                                             |

#### bezierCurveTo (cpX, cpY, cpX2, cpY2, toX, toY)

Calculate the points of the Bezier curve, and then draw it.

| Name   | Type   | Description            |
| :----- | :----- | :--------------------- |
| `cpX`  | number | Control point x        |
| `cpY`  | number | Control point y        |
| `cpX2` | number | Second control point x |
| `cpY2` | number | Second control point y |
| `toX`  | number | Destination point x    |
| `toY`  | number | Destination point y    |

#### drawCircle (x, y, radius)

Draw a circle.

| Name     | Type   | Description                              |
| :------- | :----- | :--------------------------------------- |
| `x`      | number | X coordinate of the center of the circle |
| `y`      | number | Y coordinate of the center of the circle |
| `radius` | number | radius of the circle                     |

#### drawEllipse (x, y, width, height)

Draw an ellipse.

| Name     | Type   | Description                               |
| :------- | :----- | :---------------------------------------- |
| `x`      | number | X coordinate of the center of the ellipse |
| `y`      | number | Y coordinate of the center of the ellipse |
| `width`  | number | Half width of ellipse                     |
| `height` | number | Half height of ellipse                    |

#### drawPolygon (path)

Use the specified path to draw the polygon.

| Name   | Type                                | Description                           |
| :----- | :---------------------------------- | :------------------------------------ |
| `path` | Array.<number> &#124; Array.<{x,y}> | Path data used to construct polygons. |

#### drawRect(x, y, width, height)

Draw a rectangle.

| Name     | Type   | Description                                            |
| :------- | :----- | :----------------------------------------------------- |
| `x`      | number | X coordinate of the upper left corner of the rectangle |
| `y`      | number | Y coordinate of the upper left corner of the rectangle |
| `width`  | number | The width of the rectangle                             |
| `height` | number | The height of the rectangle                            |

#### drawRoundedRect(x, y, width, height, radius)

Draw a rectangle with rounded/beveled corners.

| Name     | Type   | Description                                            |
| :------- | :----- | :----------------------------------------------------- |
| `x`      | number | X coordinate of the upper left corner of the rectangle |
| `y`      | number | Y coordinate of the upper left corner of the rectangle |
| `width`  | number | The width of the rectangle                             |
| `height` | number | The height of the rectangle                            |
| `radius` | number | The radius of the rectangle angle                      |

#### drawStar (x, y, points, radius, innerRadius, rotation)

Draw a star with any number of points.

| Name          | Type   | Default | Description                                                               |
| :------------ | :----- | :------ | :------------------------------------------------------------------------ |
| `x`           | number |         | The center of the star X position                                         |
| `y`           | number |         | Center of the star Y position                                             |
| `points`      | number |         | The number of stars must be> 1                                            |
| `radius`      | number |         | The outer radius of the star                                              |
| `innerRadius` | number |         | optional The inner radius between points, the default is half of `radius` |
| `rotation`    | number | 0       | optional The radian of the star's rotation, where 0 is vertical           |

<br />
<br />
<br />
<br />
<br />