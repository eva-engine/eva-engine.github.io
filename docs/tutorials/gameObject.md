# GameObject

GameObject are the **basic elements** of the game, representing characters, objects, landscapes, etc. It does not have any capabilities. Each game object contains a Transform component by default, which is used to define the position and size of the game object. , The component cannot be removed.

## Create GameObject

Create a game object, `new GameObject(name, transfrom)`, the first parameter is the name of the object, and the second parameter is the properties of the object's Transform component.

```js
import {GameObject} from '@eva/eva.js'
const gameObject = new GameObject('name', {
  size: {width: 100, height: 100 },
  position: {x: 50, y: 50}
})
```

### Add child objects

```js
const childGameObject = new GameObject('b', {})
gameObject.addChild(childGameObject)
```

### Remove child objects

```js
gameObject.removeChild(childGameObject)
```

### Add component

method 1:

```js
import {Img} from '@eva/plugn-renderer-img'
// Method 2: Pass in the instance directly
const img = new Img({
  // Here you can set the default parameters
  resource:'heart'
})

gameObject.addComponent(img)
```

### Remove components

```js
import {Img} from '@eva/plugn-renderer-img'
gameObject.removeComponent(Img)
```

### carry on

The [Transform](transformComponent) component that the game object carries by default is used to control the size, position, scaling, bevel, rotation and other properties of the game object.

### Note:

Img, Texture, Graphics, DragonBone, SpriteAnimation, NinePatch components with graphics rendering function should not be added to the same GameObject.

