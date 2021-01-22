# 图形

## Demo
[https://eva.alibaba-inc.com/playground/graphics](https://eva.alibaba-inc.com/playground/graphics)
## 介绍
因为EVAJS底层渲染引擎依赖的Graphics，目前直接将PIXI的接口对外开放了，所以，目前的使用方法和属性还是依赖PIXI的。
## 使用方法
无需参数，将会返回一个graphics挂载component实例上，调用graphics属性上的方法即可绘制图形

```typescript
const outterGraphics = outter.addComponent(new Graphics());
outterGraphics.graphics.beginFill(0xde3249, 1);
outterGraphics.graphics.drawRoundedRect(0, 0, 300, 24, 12);
outterGraphics.graphics.endFill();
```
### 绘制方法
#### beginFill (color, alpha)
指定一个简单的单色填充，随后调用其他Graphics方法 （例如：`lineTo()`或`drawCircle()`）在绘制时使用。

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | number | 0 | optional填充的颜色 |
| `alpha` | number | 1 | optional填充的Alpha |

#### endFill ()
对自上一次调用beginFill()方法以来添加的线条和形状应用填充。


#### lineStyle (options)
指定用于随后调用Graphics方法的线样式，例如：`lineTo()`方法 或 `drawCircle()`方法

| Name | Type | Description |
| :--- | :--- | :--- |
| `options` | object | optional线样式选项
| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `width` | number | 0 | optional画线的宽度，将更新对象存储的样式 |
| `color` | number | 0x0 | optional绘制线条的颜色，将更新对象存储的样式 |
| `alpha` | number | 1 | optional绘制线条的Alpha，将更新对象存储的样式 |
| `alignment` | number | 0.5 | optional绘制线的对齐方式（0 = 内部，0.5 = 居中，1 = 外部） |
| `native` | boolean | false | optional如果为true，则将使用LINES来代替TRIANGLE_STRIP绘制线条 |

 |





#### lineStyle (width, color, alpha, alignment, native)
指定用于随后调用Graphics方法的线样式，例如：`lineTo()`方法 或 `drawCircle()`方法

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `width` | number | 0 | optional画线的宽度，将更新对象存储的样式 |
| `color` | number | 0x0 | optional绘制线条的颜色，将更新对象存储的样式 |
| `alpha` | number | 1 | optional绘制线条的Alpha，将更新对象存储的样式 |
| `alignment` | number | 0.5 | optional绘制线的对齐方式（0 = 内部，0.5 = 居中，1 = 外部） |
| `native` | boolean | false | optional如果为true，则将使用LINES来代替TRIANGLE_STRIP绘制线条 |



#### lineTo (x, y)
使用当前线样式从当前绘图位置到 (x, y )绘制一条线； 然后将当前图形位置设置为 (x, y)。

| Name | Type | Description |
| :--- | :--- | :--- |
| `x` | number | 要绘制到的X坐标 |
| `y` | number | 要绘制到的Y坐标 |



#### moveTo (x, y)
将当前图形位置移动到x,y。

| Name | Type | Description |
| :--- | :--- | :--- |
| `x` | number | 要移动到的X坐标 |
| `y` | number | 要移动到的Y坐标 |



#### quadraticCurveTo (cpX, cpY, toX, toY)
计算二次贝塞尔曲线的点，然后绘制它。 基于: [https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c](https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c)

| Name | Type | Description |
| :--- | :--- | :--- |
| `cpX` | number | 控制点x |
| `cpY` | number | 控制点y |
| `toX` | number | 目的点x |
| `toY` | number | 目的点y |



#### clear ()
清除绘制到此Graphics对象的图形，并重置填充和线条样式设置。
##### 
##### closePath ()
关闭当前路径。
### 预设图形
#### arc (cx, cy, radius, startAngle, endAngle, anticlockwise)
圆弧方法创建圆弧/曲线（用于创建圆或圆的一部分）。

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cx` | number |  | 圆心的x坐标 |
| `cy` | number |  | 圆心的y坐标 |
| `radius` | number |  | 圆的半径 |
| `startAngle` | number |  | 起始角度，以弧度为单位（0是圆弧的3点位置） |
| `endAngle` | number |  | 终止角度，以弧度为单位 |
| `anticlockwise` | boolean | false | optional指定图形是逆时针还是顺时针。 `false` 是默认值，表示顺时针，而`true`表示逆时针。 |



#### arcTo (x1, y1, x2, y2, radius)
arcTo()方法在画布上的两个切线之间创建弧/曲线。

| Name | Type | Description |
| :--- | :--- | :--- |
| `x1` | number | 圆弧的第一个切点的x坐标 |
| `y1` | number | 圆弧的第一个切点的y坐标 |
| `x2` | number | 圆弧末端的x坐标 |
| `y2` | number | 圆弧末端的y坐标 |
| `radius` | number | 圆弧半径 |



#### 

#### 
##### bezierCurveTo (cpX, cpY, cpX2, cpY2, toX, toY)
计算贝塞尔曲线的点，然后绘制它。

| Name | Type | Description |
| :--- | :--- | :--- |
| `cpX` | number | 控制点x |
| `cpY` | number | 控制点y |
| `cpX2` | number | 第二控制点x |
| `cpY2` | number | 第二控制点y |
| `toX` | number | 目的点x |
| `toY` | number | 目的点y |

##### 
#### 
#### drawCircle (x, y, radius)
绘制一个圆。

| Name | Type | Description |
| :--- | :--- | :--- |
| `x` | number | 圆心的X坐标 |
| `y` | number | 圆心的Y坐标 |
| `radius` | number | 圆的半径 |

##### 
#### drawEllipse (x, y, width, height)
绘制一个椭圆。

| Name | Type | Description |
| :--- | :--- | :--- |
| `x` | number | 椭圆中心的X坐标 |
| `y` | number | 椭圆中心的Y坐标 |
| `width` | number | 椭圆的半宽 |
| `height` | number | 椭圆的半高 |



##### drawPolygon (path)
使用指定的路径绘制多边形。

| Name | Type | Description |
| :--- | :--- | :--- |
| `path` | Array.<number> &#124; Array.<{x,y}>  | 用于构造多边形的路径数据。 |



#### drawRect (x, y, width, height)
绘制一个矩形。

| Name | Type | Description |
| :--- | :--- | :--- |
| `x` | number | 矩形左上角的X坐标 |
| `y` | number | 矩形左上角的Y坐标 |
| `width` | number | 矩形的宽度 |
| `height` | number | 矩形的高度 |



#### drawRoundedRect (x, y, width, height, radius)
绘制一个带有圆角/斜角的矩形。

| Name | Type | Description |
| :--- | :--- | :--- |
| `x` | number | 矩形左上角的X坐标 |
| `y` | number | 矩形左上角的Y坐标 |
| `width` | number | 矩形的宽度 |
| `height` | number | 矩形的高度 |
| `radius` | number | 矩形角度的半径 |



#### drawStar (x, y, points, radius, innerRadius, rotation)
用任意数量的点画一个星形。

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `x` | number |  | 星的中心X位置 |
| `y` | number |  | 星的中心Y位置 |
| `points` | number |  | 星星的点数必须 > 1 |
| `radius` | number |  | 星星的外半径 |
| `innerRadius` | number |  | optional点之间的内半径，默认为`radius`的一半 |
| `rotation` | number | 0 | optional星星自转的弧度，其中0为垂直 |

##### 
#### 

