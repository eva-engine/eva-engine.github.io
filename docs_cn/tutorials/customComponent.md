# 脚本组件

## 介绍

在日常业务开发中，我们需要自定义一些业务逻辑，每个游戏对象可能需要单独的逻辑或者“数据驱动器”，我们通过脚本组件的形式进行业务开发。

Demo：[https://eva.js.org/playground/#/component](https://eva.js.org/playground/#/component)

### 举例说明：

芭芭农场的植物中作物生产的经验会实时变化，

Step1: 我们创建一个生产组件
Step2: 在组件上设置描述经验生产的速度，当前经验的属性
Step3: 通过生命周期方法，实时根据生产速度对经验值进行修改，然后修改文字组件上面的文字来展示经验值
Step4: 提供收取作物经验的自定义事件出来，当用户点击植物时调用

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01wuCCfA1cXsquhQJ06_!!6000000003611-2-tps-452-492.png)

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01HjkghN1ztAQ93DPan_!!6000000006771-2-tps-1164-512.png)

## 初始化

通过继承 Component 的方式创建脚本组件

```js
import { Component } from '@eva/eva.js'
class Move extends Component {
  static componentName = 'Move' // 设置组件的名字
}
```

## 属性

给组件设置属性，在整个组件里面可以使用/修改。

```js
class Move extends Component {
  static componentName = 'Move'
  speed = {
    // 设置属性
    // 移动速度
    x: 100,
    y: 200
  }
}
```

## 生命周期

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01gEgYOz1T8qevGDloU_!!6000000002338-2-tps-1448-906.png)

### 初始化

#### Init

创建一个脚本组件，实现 init 方法进行初始化，通常都是将参数设置给组件上面的属性。
实例化组件的时候传入的参数，会在组件被添加到游戏对象的时候传入到 init 方法中。
一般来讲，我们传入的参数对应到组件上面的属性。
该方法将会在 `addComponent` 的时候执行。

```js
interface MoveParams {
  speed: {
    x: number,
    y: number
  };
}

class Move extends Component {
  //...
  init(params: MoveParams) {
    this.speed = params.speed || { x: 0, y: 0 }
  }
}

const go = new GameObject('name')
go.addComponent(new Move({
  speed: {
    x: 100,
    y: 100
  }
}))
```

#### Awake

游戏对象被安装到游戏对象后执行。
如果游戏场景以及所有游戏对象已经准备好了，可以拿到已经在游戏对象树上面的节点了。
正常编码开发我们不会这么做，但是在编辑器开发中就可以派上用场了。

```js
class Move extends Component {
  // ...
  awake() {}
}
```

#### Start

跟 Awake 一样，Start 也在生命周期最开始的时候被调用，但是它将在这个组件第一次被 update 之前调用。
我们可以在 Start 回调函数里面去获取对象上绑定其他组件。

```js
class Move extends Component {
  // ...
  private img: Img = null
	start() {
  	this.img = this.gameObject.getComponent(Img)
  }
}
```

### 游戏事件

#### onPause

在 `game.pause()`  的时候执行

#### onResume

在 `game.resume()`  的时候执行

### 游戏循环

#### Update

每一帧执行

```js
class Move extends Component {
  // ...
  update(e) {
    // 让物体按照一定速度移动 位移 = 速度 * 时间
    const position = this.gameObject.transform.position
    this.gameObject.transform.position.x += this.speed.x * (e.deltaTime / 1000)
    this.gameObject.transform.position.y += this.speed.y * (e.deltaTime / 1000)
  }
}
```

#### LateUpdate

每帧最后执行，将会在所有组件的 update 执行以后执行。有些组件依赖另外的组件的运行结果，例如位置跟随，需要在动画组件修改位置后，跟随的组件才去读取 Transform 组件上面的 position 属性。

### 停用

#### Destory

销毁时调用

## 自定义事件

可以在组件上自定义事件进行一些操作，比如以下例子，添加了加速方法和减速方法。

```js
class Move extends Component {
  //...
  speedUp(value = 20) {
    this.speed.x += value
    this.speed.y += value
  }
  speedDown(value = 20) {
    this.speed.x -= value
    this.speed.y -= value
  }
}
```

<br/>
<br/>
<br/>
<br/>
<br/>
