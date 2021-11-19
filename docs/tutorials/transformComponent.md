# Transform

Transform is a default component. Each GameObject creates a Transform component instance by default, which is used to control the size, position, scaling, bevel, rotation and other properties of the game object.

## Usage

```js
// The second parameter is the parameter of the Transform component
const gameObject = new GameObject('empty', {
  size: {width: 100, height: 100 }, // size
  position: {x: 0, y: 0 }, // displacement
  origin: {x: 0, y: 0 }, // the origin of the object (a point inside the object)
  anchor: {x: 0, y: 0 }, // anchor point, a point relative to the ratio of the parent's width to height, the origin of the object will be displaced relative to this point
  scale: {x: 1, y: 1 }, // zoom ratio
  skew: {x: 0, y: 0 }, // skew radians
  rotation: 0 // Rotate in radians
})
```

Because the transform object is very commonly used, we can get the component through `gameObject.transform`, for example, modify the width and height of the game object

```js
gameObject.transform.size.width = 200
gameObject.transform.size.height = 200
```

Origin and anchor can help us solve common positioning problems, such as game operation keys, which are a certain percentage of the distance from the lower right corner under various screen sizes. You can take a look at this [Demo](https://eva.js.org/playground/#/anchor), the green dots are the anchor points of origin and anchor.

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
  anchor: {
    // Set the anchor point to the position of 0.8 of the width and height of the parent element
    x: 0.8,
    y: 0.8
  },
  origin: {
    // Set the origin to the lower right corner, so that the lower right corner of the object will be aligned with the position of the parent element (0.8, 0.8)
    x: 1,
    y: 1
  }
})
```

