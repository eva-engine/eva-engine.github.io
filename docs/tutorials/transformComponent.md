# Transform

Transform 是一个默认组件，每个 GameObject 默认创建 Transform 组件实例，用来控制游戏对象的尺寸、位置、缩放、斜切、旋转等属性。
## 使用

```js
// 第二个参数为 Transform 组件的参数
const gameObject = new GameObject('empty', {
  size: { width: 100, height: 100 }, // 尺寸
  position: {x: 0, y: 0}, // 位移
  origin: {x: 0, y: 0}, // 物体原点（物体内部的一个点）
  anchor: {x: 0, y: 0}, // 锚点，相对于父级的宽高的比率的一个点，物体的原点会相对于这个点进行位移
  scale: {x: 1, y: 1}, // 缩放比例
  skew: {x: 0, y: 0}, // 斜切弧度
  rotation: 0, // 旋转弧度
})

```

因为 transform 对象非常常用，我们可以通过 `gameObject.transform` 拿到该组件，例如修改游戏对象宽高

```js
gameObject.transform.size.width = 200
gameObject.transform.size.height = 200
```

origin 和 anchor 能够帮我们解决常见的定位问题，比如游戏的操作键，在各种屏幕尺寸下距离右下角一定百分比的距离。可以看一下这个[Demo](https://eva.js.org/playground/#/anchor)，绿色的点是 origin 和 anchor 的定位点。

```js
const outter = new GameObject('out', {
	size: {
    width: 750,
    height: 1000
  }
})

const inner = new GameObject('inner', {
	size: {
  	width: 100,
    height: 100
  },
  anchor: { // 设置锚点为父元素宽高的0.8的位置
  	x: 0.8,
    y: 0.8
  },
  origin: { // 设置原点为右下角，这样物体的右下角就会对齐父元素的(0.8,0.8)的位置了
  	x: 1,
    y: 1
  }
})
```
<br/>
<br/>
<br/>
<br/>
<br/>