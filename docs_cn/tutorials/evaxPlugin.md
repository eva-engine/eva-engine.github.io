# 数据管理

## 介绍

在 react/vue 中，我们经常使用 redux/vuex 来进行数据管理，维护一套统一的数据，在 Eva.js 体系下，我们设计了一套数据管理系统，叫做 EVAX，**通过 EVAX 我们可以维护一份共有数据，多个不同的对象上的组件可能会使用同一份数据进行逻辑运行。**

比如游戏中的生命值，不仅在人的头顶上会显示，游戏中的人物也会根据生命值的多少来展示不同的形态，我们将 EVAX 组件绑定到游戏对象上，可对某个数据进行监听，如果数据发生变化，可以操作当前游戏对象上其他组件上的数据或者事件。

Eva.js 开发游戏不是强依赖 EVAX 的，可以按照需要使用。

## 安装

### 使用 NPM
```bash
npm i @eva/plugin-evax
```

### 在浏览器中
```html
<script src="https://g.alicdn.com/eva/jscdn/1.0.4/EVA.plugin.EVAX.min.js"></script>

<script src="https://unpkg.com/@eva/plugin-evax@1.0.4/dist/EVA.plugin.EVAX.min.js"></script>
```

## 创建 store

所有数据需要事先定义好，如果没有定义好，将不会被监听

```js
// 创建 Store
const store = {
  user: {
    name: 'Mingfei',
    age: 18
  },
  items: [
    {
      id: 1,
      name: '20191111'
    }
  ]
}
```

## 初始化 EVAX

```js
// 引入 evax 插件
import { EvaXSystem, EvaX } from '@eva/plugin-evax'

// 创建游戏，传入store
const game = new Game({
  autoStart: true, // 可选
  frameRate: 60
})
const store = { a: 1 }
const evaxSystem = new EvaXSystem({
  store // 这里将定义的 store 传入
})
game.addSystem(evaxSystem)

const evaxManager = new GameObject('evaxManager')
evaxManager.addComponent(
  new EvaX({
    events: {
      'store.a': () => {}
    }
  })
)

game.scene.addChild(evaxMangager)
```

## 监听数据变化

```js
// 添加evax组件
go.addComponent(
  new EvaX({
    events: {
      'store.user': {
        deep: true, // store.user 下的属性变化也会触发
        handler(store, oldStore) {
          console.log(this) // 当前组件
        }
      },
      'store.user.age'(store, oldStore) {},
      'store.items.0'(store, oldStore) {
        // 0 下的属性变化不会触发，如需监听需设置deep
      },
      'store.items.0.name'(store, oldStore) {
        // name 变化会触发
      },
      popUp(arg1, arg2) {
        // 这是一个事件，参考后面事件触发
      }
    }
  })
)
```

###

## 更新数据

### 更新单个值

直接修改对象上面的值，如果值与之前相同也会触发监听此值改变的事件

```js
store.user.name = 'Cailun'
// 或者
evaxSystem.store.user.name = 'Cailun'
```

### evax.updateStore 更新所有值

**Tip**: updateStore 和 forceUpdateStore 只会触发最后一层属性的变化。

全覆盖模式更新，对比内容变化，变化的内容才会触发更新，

```js
const newStore = {
  user: {
    name: 'Cailun',
    age: 18
  }
}

evaxSystem.emit('evax.updateStore', newStore)
```

以上操作会触发 `store.user.name` 更新，因为 age 没有变化

### evax.forceUpdateStore 强制更新所有值

全覆盖模式更新，所有值都会被更新一次，触发所有属性的监听事件

```js
const newStore = {
  user: {
    name: 'Cailun',
    age: 18
  }
}
evaxSystem.emit('evax.forceUpdateStore', newStore)
```

以上操作会触发 `store.user.name` 和 `store.user.age` 数据变化事件，即便没有变化

### 事件触发

使用 emit 方法触发约定事件，事件 **不要** 使用 evax. 开头

```js
evaxSystem.emit('popUp', arg1, arg2, //...) // 事件约定，事件**不要**使用 evax. 开头
```

监听方法：

```js
// 添加evax组件
go.addComponent(
  new EvaX({
    events: {
      popUp(arg1, arg2) {}
    }
  })
)
```

## 使用案例

### 创建一个文字

这个案例介绍，如果 Store 上面的文字发生变化，我们修改对应组件上面文字的内容

```js
// 创建对象，文字组件使用store里面的名字
const go = new GameObject('go')
const txt = go.addComponent(new Text({ text: '' }))
```

1、一般来讲，我们的业务逻辑写在脚本组件中，在 EVAX 组件接收到时间或者数据更改的时候，调用脚本组件上面的方法。
2、将一些需要修改的组件，比如 Text 挂在到脚本组件的属性上，以便后续操作。

```js
// 创建一个自定义组件，将方法放到自定义组件中
class AScriptComponent extends Component{
  static componentName: 'AScriptComponent',
  start() {
    this.txt = this.gameObject.getComponent('Text')
    // 在组件中使用evax可先绑定evax组件，在evax组件上拿到evax对象，进行事件触发和修改
    const evax = this.gameObject.getComponent('EvaX')
    this.evax = evax.evax
  },
  setName(store, oldStore) {
    txt.text = store.user.name // 设置新的text内容
    setTimeout(()=>{
      this.evax.emit('animationDown') // 通知修改完毕，由其他的组件来承接变化，不在此案例中
      this.evax.store.age += 1 // 由其他的组件来承接变化，不在此案例中
    }, 1000)
  },
  popUp(store) {
    // 做事件对应操作
  }
})

// 添加自定义组件
const aScript = go.addComponent(new AScriptComponent)
```

创建 evax 组件，将需要绑定的事件写入，并且调用自定义组件上的事件

```js
// 添加evax组件
go.addComponent(
  new EvaX({
    events: {
      'store.user.name'(store, oldStore) {
        // 建议把触发的方法放在其他自定义组件内部，以便与后续场景编辑器使用
        go.getComponent(AScriptComponent).setName(store, oldStore)
      },
      'store.user.age'(store, oldStore) {
        // ...
      },
      popUp(...args) {
        go.getComponent(AScriptComponent).popUp(...args)
      }
    }
  })
)
```

<br/>
<br/>
<br/>
<br/>
<br/>
