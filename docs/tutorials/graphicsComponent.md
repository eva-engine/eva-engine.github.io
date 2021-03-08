# 图形 Graphics

Graphics 组件为 GameObject 提供了绘制图形的能力。

[Demo](https://eva.js.org/playground/#/graphics)

## 安装

```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-graphics
```

## 使用

无需参数，将会返回一个 graphics 挂载 component 实例上，调用 graphics 属性上的方法即可绘制图形

```js
import { Game, GameObject } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Graphics, GraphicsSystem } from '@eva/plugin-renderer-graphics'

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
  if (progress > 100) return
  const width = Math.max(12, (296 * progress) / 100)
  progressGraphics.graphics.clear()
  progressGraphics.graphics.beginFill(0x000000, 1)
  progressGraphics.graphics.drawRoundedRect(0, 0, width, 18, 9)
  progressGraphics.graphics.endFill()
}
```

### 绘制方法

#### beginFill (color, alpha)

指定一个简单的单色填充，随后调用其他 Graphics 方法 （例如：`lineTo()`或`drawCircle()`）在绘制时使用。

| Name    | Type   | Default | Description           |
| :------ | :----- | :------ | :-------------------- |
| `color` | number | 0       | optional 填充的颜色   |
| `alpha` | number | 1       | optional 填充的 Alpha |

#### endFill ()

对自上一次调用 beginFill() 方法以来添加的线条和形状应用填充。

#### lineStyle (options)

指定用于随后调用 Graphics 方法的线样式，例如：`lineTo()`方法 或 `drawCircle()`方法

| Name        | Type    | Description         |
| :---------- | :------ | :------------------ | ------------------------------------------------------------------- |
| `options`   | object  | optional 线样式选项 |
| Name        | Type    | Default             | Description                                                         |
| :---        | :---    | :---                | :---                                                                |
| `width`     | number  | 0                   | optional 画线的宽度，将更新对象存储的样式                           |
| `color`     | number  | 0x0                 | optional 绘制线条的颜色，将更新对象存储的样式                       |
| `alpha`     | number  | 1                   | optional 绘制线条的 Alpha，将更新对象存储的样式                     |
| `alignment` | number  | 0.5                 | optional 绘制线的对齐方式（0 = 内部，0.5 = 居中，1 = 外部）         |
| `native`    | boolean | false               | optional 如果为 true，则将使用 LINES 来代替 TRIANGLE_STRIP 绘制线条 |

#### lineStyle (width, color, alpha, alignment, native)

指定用于随后调用 Graphics 方法的线样式，例如：`lineTo()`方法或 `drawCircle()`方法

| Name        | Type    | Default | Description                                                         |
| :---------- | :------ | :------ | :------------------------------------------------------------------ |
| `width`     | number  | 0       | optional 画线的宽度，将更新对象存储的样式                           |
| `color`     | number  | 0x0     | optional 绘制线条的颜色，将更新对象存储的样式                       |
| `alpha`     | number  | 1       | optional 绘制线条的 Alpha，将更新对象存储的样式                     |
| `alignment` | number  | 0.5     | optional 绘制线的对齐方式（0 = 内部，0.5 = 居中，1 = 外部）         |
| `native`    | boolean | false   | optional 如果为 true，则将使用 LINES 来代替 TRIANGLE_STRIP 绘制线条 |

#### lineTo (x, y)

使用当前线样式从当前绘图位置到 (x, y )绘制一条线； 然后将当前图形位置设置为 (x, y)。

| Name | Type   | Description       |
| :--- | :----- | :---------------- |
| `x`  | number | 要绘制到的 X 坐标 |
| `y`  | number | 要绘制到的 Y 坐标 |

#### moveTo (x, y)

将当前图形位置移动到 x,y。

| Name | Type   | Description       |
| :--- | :----- | :---------------- |
| `x`  | number | 要移动到的 X 坐标 |
| `y`  | number | 要移动到的 Y 坐标 |

#### quadraticCurveTo (cpX, cpY, toX, toY)

计算二次贝塞尔曲线的点，然后绘制它。 基于: [https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c](https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c)

| Name  | Type   | Description |
| :---- | :----- | :---------- |
| `cpX` | number | 控制点 x    |
| `cpY` | number | 控制点 y    |
| `toX` | number | 目的点 x    |
| `toY` | number | 目的点 y    |

#### clear ()

清除绘制到此 Graphics 对象的图形，并重置填充和线条样式设置。

#### closePath ()

关闭当前路径。

### 预设图形

#### arc (cx, cy, radius, startAngle, endAngle, anticlockwise)

圆弧方法创建圆弧/曲线（用于创建圆或圆的一部分）。

| Name            | Type    | Default | Description                                                                              |
| :-------------- | :------ | :------ | :--------------------------------------------------------------------------------------- |
| `cx`            | number  |         | 圆心的 x 坐标                                                                            |
| `cy`            | number  |         | 圆心的 y 坐标                                                                            |
| `radius`        | number  |         | 圆的半径                                                                                 |
| `startAngle`    | number  |         | 起始角度，以弧度为单位（0 是圆弧的 3 点位置）                                            |
| `endAngle`      | number  |         | 终止角度，以弧度为单位                                                                   |
| `anticlockwise` | boolean | false   | optional 指定图形是逆时针还是顺时针。 `false` 是默认值，表示顺时针，而`true`表示逆时针。 |

#### arcTo (x1, y1, x2, y2, radius)

arcTo()方法在画布上的两个切线之间创建弧/曲线。

| Name     | Type   | Description               |
| :------- | :----- | :------------------------ |
| `x1`     | number | 圆弧的第一个切点的 x 坐标 |
| `y1`     | number | 圆弧的第一个切点的 y 坐标 |
| `x2`     | number | 圆弧末端的 x 坐标         |
| `y2`     | number | 圆弧末端的 y 坐标         |
| `radius` | number | 圆弧半径                  |

#### bezierCurveTo (cpX, cpY, cpX2, cpY2, toX, toY)

计算贝塞尔曲线的点，然后绘制它。

| Name   | Type   | Description  |
| :----- | :----- | :----------- |
| `cpX`  | number | 控制点 x     |
| `cpY`  | number | 控制点 y     |
| `cpX2` | number | 第二控制点 x |
| `cpY2` | number | 第二控制点 y |
| `toX`  | number | 目的点 x     |
| `toY`  | number | 目的点 y     |

#### drawCircle (x, y, radius)

绘制一个圆。

| Name     | Type   | Description   |
| :------- | :----- | :------------ |
| `x`      | number | 圆心的 X 坐标 |
| `y`      | number | 圆心的 Y 坐标 |
| `radius` | number | 圆的半径      |

#### drawEllipse (x, y, width, height)

绘制一个椭圆。

| Name     | Type   | Description       |
| :------- | :----- | :---------------- |
| `x`      | number | 椭圆中心的 X 坐标 |
| `y`      | number | 椭圆中心的 Y 坐标 |
| `width`  | number | 椭圆的半宽        |
| `height` | number | 椭圆的半高        |

#### drawPolygon (path)

使用指定的路径绘制多边形。

| Name   | Type                                | Description                |
| :----- | :---------------------------------- | :------------------------- |
| `path` | Array.<number> &#124; Array.<{x,y}> | 用于构造多边形的路径数据。 |

#### drawRect (x, y, width, height)

绘制一个矩形。

| Name     | Type   | Description         |
| :------- | :----- | :------------------ |
| `x`      | number | 矩形左上角的 X 坐标 |
| `y`      | number | 矩形左上角的 Y 坐标 |
| `width`  | number | 矩形的宽度          |
| `height` | number | 矩形的高度          |

#### drawRoundedRect (x, y, width, height, radius)

绘制一个带有圆角/斜角的矩形。

| Name     | Type   | Description         |
| :------- | :----- | :------------------ |
| `x`      | number | 矩形左上角的 X 坐标 |
| `y`      | number | 矩形左上角的 Y 坐标 |
| `width`  | number | 矩形的宽度          |
| `height` | number | 矩形的高度          |
| `radius` | number | 矩形角度的半径      |

#### drawStar (x, y, points, radius, innerRadius, rotation)

用任意数量的点画一个星形。

| Name          | Type   | Default | Description                                   |
| :------------ | :----- | :------ | :-------------------------------------------- |
| `x`           | number |         | 星的中心 X 位置                               |
| `y`           | number |         | 星的中心 Y 位置                               |
| `points`      | number |         | 星星的点数必须 > 1                            |
| `radius`      | number |         | 星星的外半径                                  |
| `innerRadius` | number |         | optional 点之间的内半径，默认为`radius`的一半 |
| `rotation`    | number | 0       | optional 星星自转的弧度，其中 0 为垂直        |

<br />
<br />
<br />
<br />
<br />
