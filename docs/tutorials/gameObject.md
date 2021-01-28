# 游戏对象 GameObject

游戏对象是游戏的**基本元素**，代表人物、物体、风景等，它本身没有任何能力，每一个游戏对象都默认包含一个 Transform 组件，这个组件用来定义游戏对象的位置、尺寸等信息，该组件无法被移除。

## 创建游戏对象


创建游戏对象， `new GameObject(name, transfrom)` ，第一个参数为对象的名称，第二个参数为对象的Transform组件的属性。


```js
import { GameObject } from '@eva/eva.js'
const gameObject = new GameObject('name', {
  size: { width: 100, height: 100 },
  position: { x: 50, y: 50 }
})
```

### 添加子对象

```js
const childGameObject = new GameObject('b', {})
gameObject.addChild(childGameObject)
```

### 移除子对象

```js
gameObject.removeChild(childGameObject)
```

### 添加组件

方法1:
```js
import { Img } from '@eva/plugn-render'
// 方法2：直接传入实例
const img = new Img({ // 这里可以设置默认参数
	resource: 'heart'
})

gameObject.addComponent(img)

```

### 移除组件

```js
import { Img } from '@eva/plugn-render'
gameObject.removeComponent(Img)
```

### 继续

游戏对象默认携带的 [Transform](/tutorials/transform) 组件是用来控制游戏对象的尺寸、位置、缩放、斜切、旋转等属性。


### 注意：

Img、Texture、Graphics、DragonBone、SpriteAnimation、NinePatch 有图形渲染功能的组件不要添加到同一个 GameObject 内。

<br/>
<br/>
<br/>
<br/>
<br/>