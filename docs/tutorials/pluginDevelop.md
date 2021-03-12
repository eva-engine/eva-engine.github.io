# 插件开发

一般通过脚本组件的方式就可以实现大部分逻辑，涉及引擎级别或者业务级别的通用能力，可以使用插件的形式进行开发，插件主要是由 Component 和 System 组成。

Eva.js 的渲染是基于 [PixiJS](http://pixijs.io/) 的，一般 Img/Sprite/Spine 等插件实际上是创建了 Pixi 的渲染对象，像 Stats/EvaX/Transition 等插件不依赖 Pixi。不管是哪种插件都是输出 Component 和 System 给引擎使用，但是开发方案有一些不同，接下来我会先讲解最简单的插件开发方法。


我们提供了一个[插件模板](https://github.com/eva-engine/plugin-template)，可以点击 `Use this Template` 直接使用模版进行开发，里面带了必要的脚手架。

## 基础

### 开发

读到这里，相信大家已经对 Eva.js 有所了解并且知道如何在项目中使用了，下面是一个插件的简单的使用方法。

```js
import { Demo, DemoSystem } from './tutorials/lib'
const game = new Game({
  systems: [new DemoSystem()]
})
const go = new GameObject()
go.addComponent(new Demo())
game.scene.addChild(go)
```

我们可以看到，插件是由 Component 和 System 组成的，并且一个插件中不一定只包含一个 Component。

所以，开发插件需要实现暴露给用户使用的 Component 和 System。


### 插件运行逻辑

组件（Component）可以赋予游戏对象能力，我们将一些配置和属性记录在组件上。
系统（System）用来读取组件上面的数据，实现组件对应的能力。

当系统被添加到游戏实例上后，系统在它所需关心的组件在添加、移除、属性变化时，做一系列对应的操作，即可实现一些功能。

例如在 Img 插件中，当 Img 被添加到游戏对象上时，System 内会创建一个 Pixi 的 Sprite 对象，挂在到 GameObject 对应的 Pixi Container上，当 Img 组件的 resource 发生变化时，System 会去修改对应 Sprite 上面的 texture。

接下来，我会讲解如何设计一个组件，以及 System 是如何监听组件变化的。

### 构建与发布规范

## 开发实践

下面以 [@eva/plugin-a11y](/tutorials/a11yPlugin) 插件为例，对 EVA 插件开发做一个详细的介绍。

> @eva/plugin-a11y 用于为游戏对象添加无障碍的能力。在 DOM 开发中，无障碍阅读器是可以阅读到 HTML 元素内容的，目前在 Canvas 里的绘制元素无法实现无障碍化的能力，@eva/plugin-a11y 插件通过定位游戏对象的位置，自动化地添加辅助 DOM，使得游戏对象能被无障碍阅读器聚焦，让游戏拥有无障碍功能。

首先设计 Component，既需要赋予游戏对象的能力。

### 使用案例
```js
import { A11y, A11ySystem } from '@eva/plugin-a11y'

const game = new Game({
  systems: [new A11ySystem()]
})

const go = new GameObject()

go.addComponent(new A11y({
  hint: '所需朗读的内容'
}))

game.scene.addChild(go)

```

### Component 设计
- 确定组件名称: `A11y` 
- 设计组件参数:
  - hint 需要朗读的内容

```js
import { Component } from '@eva/eva.js'
export default class A11y extends Component {
  static componentName: string = 'A11y' // 这里是Component的名称，用于 System 监听变化

  /**
   * 无障碍标签朗读内容
   */
  public hint: string

  /**
   * 初始化方法，构造函数的参数会传递到这里
   */
  init(param = {hint: ''}) {
    const { hint } = param
    this.hint = hint
  }
}
```


### System 设计
- 确定要监听的组件，以及需要监听哪些参数的变化
- 确定系统名字
- 根据组件变化实现逻辑

#### Step1 确定要监听的组件以及参数

```js
import { System, decorators } from '@eva/eva.js'

@decorators.componentObserver({
  A11y: ['hint'] // 监听 A11y 组件的 hint 属性变化
})
class A11ySystem extends System {

}
```

在上面的代码中，我们将需要监听变化的组件名称和监听属性传入 `@decorators.componentObserver` 中，以便创建监听。

如果只需要监听组件添加移除可以不填写具体的属性，例如
```js
@decorators.componentObserver({
  A11y: [] // 监听 A11y 组件的 hint 属性变化
})
```
如果监听的属性不是直接挂在到组件对象上的，还有一级嵌套

例如监听组件 A 的 style 属性下的 size 属性

可以这样写：
```js
@decorators.componentObserver({
  A: [{
    prop: ['style', 'size']
  }]
})
```

如果想要想要深度监听 style 属性，可以这样写

```js
@decorators.componentObserver({
  A: [{
    prop: ['style'],
    deep: true
  }]
})
```

如果像监听多个组件变化，可以这样写


```js
@decorators.componentObserver({
  A: [{
    prop: ['style'],
    deep: true
  }]
  B: ['props']
})
```

#### Step2 设置系统名字

给 System 设置名字

```js
import { System, decorators } from '@eva/eva.js'

@decorators.componentObserver({
  A11y: ['hint'] // 监听 A11y 组件的 hint 属性变化
})
class A11ySystem extends System {
  static systemName = 'A11ySystem';
}
```

#### Step3 根据组件变化实现逻辑

在此之前，我们做了一些监听配置，那么我们如何拿到对应的变化呢？

我们知道 System 有 `update` 生命周期，我们在生命周期中可以获取到当前帧 Component 的变化。

```js
import { System, decorators, ComponentChanged } from '@eva/eva.js'

@decorators.componentObserver({
  A11y: ['hint'] // 监听 A11y 组件的 hint 属性变化
})
class A11ySystem extends System {
  static systemName = 'A11ySystem';
  private elemMap = new Map()
  update () {
    const changes: ComponentChanged[] = this.componentObserver.clear() // 获取当前帧所有需要监听的组件大变化，并且进行清理
    for (const changed of changes) {
        switch (changed.type) {
          case OBSERVER_TYPE.ADD:
            this.add(changed);
            break;
          case OBSERVER_TYPE.CHANGE:
            this.change(changed)
            break;
          case OBSERVER_TYPE.REMOVE:
            this.remove(changed);
            break;
        }
      }
  }
  add(changed) {
    if (changed.componentName === 'A11y') { // 如果有多个Component的话需要分开处理
      const component = changed.component as A11y
      const elem = document.createElement('div')
      elem.setAttribute('aria-label', component.hint);
      this.elemMap.set(component, elem)
      document.body.append(elem) // 添加到body上
    }
  }
  remove(changed) {
    if (changed.componentName === 'A11y') { // 如果有多个Component的话需要分开处理
      const component = changed.component as A11y
      const elem = this.elemMap.get(component)
      elem.remove() // 移除elem
    }
  }
  change(changed) {
    if (changed.componentName === 'A11y') { // 如果有多个Component的话需要分开处理
      if (changed.prop?.prop[0] === 'hint'){ //如果有多个监听属性需要分开处理
        const component = changed.component as A11y
        elem.setAttribute('aria-label', component.hint);
      }
    }
  }
}
```

ComponentChanged 对应的类型是这样的，可以参考，不需要在代码里实现

```js
export interface PureObserverProp {
  deep: boolean;
  prop: string[];
}

export enum ObserverType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  CHANGE = 'CHANGE',
}

export interface ComponentChanged {
  type: ObserverType;
  component: Component;
  componentName: string;
  prop?: PureObserverProp;
  gameObject?: GameObject;
  systemName?: string;
}

```

现在我们把DOM创建好，并且放到了 body 上面，按照能力来讲，我们已经完成了具体的功能，因为屏幕阅读器已经可以阅读游戏中的元素了，但是看起来目前欠缺一些内容，例如：无法通过触发 DOM 点击事件来触发游戏里面的点击，DOM 的没有宽高和定位。

如果像实现这些功能，就要去在当前组件下拿到别的组件去实现功能了，例如如果像触发点击事件，需要判断 [Event 组件](/tutorials/interactionEvent)是否安装，如果安装的话，可以根据 Event 上绑定的事件，触发对应的事件。如果想获取宽高位置的话，可以获取游戏对象的 [Transform 组件](/tutorials/transformComponent)


增加 Event 组件的监听，在上述 add remove 等方法里做对应操作即可。
```js
@decorators.componentObserver({
  A11y: ['hint'] // 监听 A11y 组件的 hint 属性变化
  Event: [] // Event 增加删除监听
})
class A11ySystem extends System {
}
```

对于位置和宽高，可以在 A11y 组件被添加时拿到对应 GameObject 的 Transform，这里仅举个例子

```js
add(changed) {
   if (changed.componentName === 'A11y') { // 如果有多个Component的话需要分开处理
      const component = changed.component as A11y
      const elem = document.createElement('div')
      elem.setAttribute('aria-label', component.hint);
      this.elemMap.set(component, elem)
      document.body.append(elem) // 添加到body上


      const transform = changed.gameObject.transform
      elem.style.width = transform.size.width + 'px'
      elem.style.height = transform.size.width + 'px'
      elem.style.x = transform.position.x + 'px'
      elem.style.y = transform.position.y + 'px'
    }
}
```

## 基于 PixiJS 的插件

以图片组件举例：

```js
  import {
    GameObject,
    decorators,
    resource,
    ComponentChanged,
    RESOURCE_TYPE,
    OBSERVER_TYPE,
  } from '@eva/eva.js';
  import {
    RendererManager,
    ContainerManager,
    RendererSystem,
    Renderer,
  } from '@eva/plugin-renderer';

  @decorators.componentObserver({
    Img: [{prop: ['resource'], deep: false}],
  })
  export default class Img extends Renderer { // 基于 PixiJS 渲染的插件，我们的 System 需要继承于统一的一个 Renderer 类
  renderSystem: RendererSystem;
  init() { // 在init中去获取 renderSystem 以便后续添加 Pixi 对象，并且需要将当前系统注册到rendererManager中。
    this.renderSystem = this.game.getSystem(RendererSystem) as RendererSystem;
    this.renderSystem.rendererManager.register(this);
  }
  rendererUpdate(gameObject: GameObject) { // rendererUpdate 代替 Update 方法，因为update在 Renderer 类中已经实现
    const {width, height} = gameObject.transform.size;
    if (this.imgs[gameObject.id]) {
      this.imgs[gameObject.id].sprite.width = width;
      this.imgs[gameObject.id].sprite.height = height;
    }
  }

  async componentChanged(changed: ComponentChanged) { // 在 Renderer 类中实现了 update 方法，并且将 Img 对应的组件变化传递给 componentChanged
  if (changed.componentName === 'Img') {
      const component: ImgComponent = changed.component as ImgComponent;
      if (changed.type === OBSERVER_TYPE.ADD) {
        const sprite = new Sprite(null);
        resource.getResource(component.resource).then(({instance}) => {
          if (!instance) {
            console.error(
              `GameObject:${changed.gameObject.name}'s Img resource load error`,
            );
          }
          sprite.image = instance;
        });
        this.imgs[changed.gameObject.id] = sprite;
        this.containerManager
          .getContainer(changed.gameObject.id)
          .addChildAt(sprite.sprite, 0); // 将创建的 Pixi 渲染对象放进 GameObject 对应的 Pixi 容器中
      } else if (changed.type === OBSERVER_TYPE.CHANGE) {
        const {instance} = await resource.getResource(component.resource);
        if (!instance) {
          console.error(
            `GameObject:${changed.gameObject.name}'s Img resource load error`,
          );
        }
        this.imgs[changed.gameObject.id].image = instance;
      } else if (changed.type === OBSERVER_TYPE.REMOVE) {
        const sprite = this.imgs[changed.gameObject.id];
        this.containerManager
          .getContainer(changed.gameObject.id)
          .removeChild(sprite.sprite);
        delete this.imgs[changed.gameObject.id];
      }
    }
  }

```
## 生命周期
![image.png](https://img.alicdn.com/imgextra/i2/O1CN01gEgYOz1T8qevGDloU_!!6000000002338-2-tps-1448-906.png)

## 总结

通过 Component 和 System 的结合，我们可以实现各种各样的通用插件，在日常开发中，我们仅需要 [CustomComponent](/tutorials/customComponent) 提供的能力开发游戏逻辑即可。
