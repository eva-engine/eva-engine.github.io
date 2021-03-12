# 插件开发

一般通过脚本组件的方式就可以实现大部分逻辑，涉及引擎级别或者业务级别的通用能力，可以使用插件的形式进行开发，插件主要是由 Component 和 System 组成。

## 基础

### 开发

需要依赖渲染相关的插件继承于 `@eva/plugin-renderer`  的 Render 类
参考 Dragonbones 骨骼动画插件的实现 demo

在 `demo/index.ts` 中，代码初始化了一个游戏场景，并在游戏场景中添加了一个 Text 组件。 另外根据开发者输入插件名，自动引入了初始化的插件。

```js
import { Demo, DemoSystem } from './tutorials/lib'
const game = new Game({
  systems: [new DemoSystem()]
})
text.addComponent(new Demo())
game.scene.addChild(text)
```

System 被安装时，会调用插件的 `init` 方法。运行项目后，可以看到在控制台输出了初始化成功的信息。
![image.png](https://gw.alicdn.com/imgextra/i2/O1CN01qeHAYZ1mtXkL7yIxK_!!6000000005012-2-tps-775-144.png)

在 EVA 中，游戏的能力都是由 Component 和 System 提供的， Component 主要用来给 gameObject 标注一些能力和能力的属性。System 给 Component 的 gameObject 赋能，插件可以给引擎提供多个 System 和 Component。

### 插件运行逻辑

### 构建与发布规范

## 开发实践

下面以 [eva-plugin-a11y](https://npm.alibaba-inc.com/package/@eva/plugin-a11y) 插件为例，对 EVA 插件开发做一个详细的介绍。

> [eva-plugin-a11y](https://npm.alibaba-inc.com/package/@eva/plugin-a11y) 用于为游戏对象添加无障碍的能力。插件通过定位游戏对象的位置，自动化地添加辅助 DOM，使得游戏对象能被聚焦，让游戏拥有无障碍功能。

首先设计 Component，既需要赋予游戏对象的能力。

```js
export default class Accessibility extends Component {
  static componentName: string = 'Accessibility'

  /**
   * 无障碍标签朗读内容
   */
  @decorators.IDEProp hint: string

  /**
   * 无障碍组件构造函数
   * @example
   * // 为游戏对象提供朗读能力
   * new Accessiblity({hint: '这是一个div'})
   */
  constructor(param) {
    super()
    const { hint } = param
    this.hint = hint
  }
}
```

这里为组件定义了一个 hint 属性，用于传入需要朗读的内容。游戏对象可以通过 `addComponent()` 方法添加组件，赋予插件能力。

```js
text.addComponent(new Accessibility({ hint: '需要朗读的内容' }))
```

当游戏对象调用上面的代码时， System 通过监听，可以获取到 Component 的属性值。

```js
update() {
  const changes = this.componentObserver.clear()
  for (const changed of changes) {
    switch (changed.type) {
      case CONST.ObserverType.ADD:
        this.add(changed)
        break
    }
  }
}

add(changed: ComponentChanged) {
  const component = changed.component as Accessibility
  const { hint } = component
  console.log(hint)		// 需要朗读的内容
}
```

在上面的代码中，通过监听判断系统更新的类型，来获取到被添加的组件及其属性。

如果需要用到位置等相关信息，可以通过 gameObject 中的 `transform` 属性来获取。

```js
  add(changed: ComponentChanged) {
    const component = changed.component as Accessibility
    const { hint, gameObject } = component
    const { transform } = gameObject
  }
```


### 观察 component 变化

通过装饰器对 System 进行监听，如果 Component 被添加或者属性被修改，则会触发监听。

```js
@decorators.componentObserver({
  Demo: []
})
```

在 `update()` 方法中，调用 `componentObserver.clear()` 方法，可以获取到更新的内容。

```js
update() {
	const changed = this.componentObserver.clear()
}
```

<br/>
<br/>
<br/>
<br/>
<br/>
