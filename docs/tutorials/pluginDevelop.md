# 插件开发

## 介绍
正常来说，我们通过脚本组件的方式就可以实现大多数的业务逻辑。
如果我们设计一些引擎级别或者业务级别的通用能力，可以使用插件的形式进行开发，插件主要是由Component和System组成。
## 环境

- node
- tnpm
- typescript
## 初始化
开发者可以使用 [eva-tools](https://npm.alibaba-inc.com/package/@eva/tools) 命令行工具，初始化一个 EVA Plugin 项目。
```bash
# 全局安装 eva-tools
tnpm install -g @eva/tools
# 初始化插件
eva create-plugin
```
## ![2020-07-21 15-39-23.2020-07-21 15_41_27.gif](https://cdn.nlark.com/yuque/0/2020/gif/305130/1597300860198-11bc0e61-3de4-40e9-9ec8-882f7a8f92fd.gif#align=left&display=inline&height=569&margin=%5Bobject%20Object%5D&name=2020-07-21%2015-39-23.2020-07-21%2015_41_27.gif&originHeight=569&originWidth=850&size=1037349&status=done&style=shadow&width=850)
通过 `create-plugin` 命令，自动生成一个工程，目录如下：
```bash
├── CHANGELOG.md
├── README.md
├── api-extractor.json
├── config
├── demo
├── jest.config.js
├── lib
├── node_modules
├── package.json
├── rollup.config.js
├── test
└── tsconfig.json
```
工程内置了一个 EVA 的简单 demo，使用 `npm run start` 命令启动项目。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/305130/1597300860187-9152e1e4-8f09-40f2-8ad3-f905d9a5b674.png#align=left&display=inline&height=174&margin=%5Bobject%20Object%5D&name=image.png&originHeight=174&originWidth=258&size=5331&status=done&style=none&width=258)
## 插件开发
在 `demo/index.ts` 中，代码初始化了一个游戏场景，并在游戏场景中添加了一个 Text 组件。 另外根据开发者输入插件名，自动引入了初始化的插件。
```javascript
// ...
// 引入插件
import { Demo, DemoSystem } from '../lib'
const game = new Game({
  systems: [
    // ...
    // 为游戏场景添加
    new DemoSystem()
  ],
});
// ...
// 为组件添加插件能力
text.addComponent(new Demo())
game.scene.addChild(text);
```
System 被安装时，会调用插件的 `init` 方法。运行项目后，可以看到在控制台输出了初始化成功的信息。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/305130/1597300860257-e5e29af8-6bd3-4173-8df3-dea3dfc44845.png#align=left&display=inline&height=144&margin=%5Bobject%20Object%5D&name=image.png&originHeight=144&originWidth=775&size=60728&status=done&style=none&width=775)


在 EVA 中，游戏的能力都是由 Component 和 System 提供的， Component 主要用来给 gameObject 标注一些能力和能力的属性。System 给 Component 的 gameObject 赋能，插件可以给引擎提供多个 System 和 Component。
### 参数配置
System 的构造函数可以传递参数，在 `init` 方法中可以获得这些参数并进行相关的配置
```javascript
// demo/index.ts
const game = new Game({
  systems: [
    // ...
    // 为游戏场景添加
    new DemoSystem({debug: true, name: 'demo'})
  ],
});

// lib/DemoSystem.ts
 init(param?: any) {
   console.log(`Demo插件初始化成功`)
   console.log(param)
}
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/305130/1597300860200-d432d552-7d4c-43b6-bc3d-5b2cd68be3af.png#align=left&display=inline&height=94&margin=%5Bobject%20Object%5D&name=image.png&originHeight=94&originWidth=774&size=41764&status=done&style=none&width=774)


### 监听更新
通过装饰器对 System 进行监听，如果 Component 被添加或者属性被修改，则会触发监听。
```javascript
@decorators.componentObserver({
  Demo: []
})
```
在 `update()` 方法中，调用 `componentObserver.clear()` 方法，可以获取到更新的内容。
```javascript
// ...
update() {
	const changed = this.componentObserver.clear()  
}
// ...
```
## 插件打包
```bash
npm run build
```
## 插件发布
```bash
tnpm login
tnpm publish
```
## 开发实践
下面以 [eva-plugin-a11y](https://npm.alibaba-inc.com/package/@eva/plugin-a11y) 插件为例，对 EVA 插件开发做一个详细的介绍。
> [eva-plugin-a11y](https://npm.alibaba-inc.com/package/@eva/plugin-a11y) 用于为游戏对象添加无障碍的能力。插件通过定位游戏对象的位置，自动化地添加辅助 DOM，使得游戏对象能被聚焦，让游戏拥有无障碍功能。



首先设计 Component，既需要赋予游戏对象的能力。
```javascript

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
```javascript
text.addComponent(new Accessibility({hint: '需要朗读的内容'}))
```


当游戏对象调用上面的代码时， System 通过监听，可以获取到 Component 的属性值。


```javascript
// ...
/**
   * 监听插件更新
   */
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

/**
 * 监听组件增加
 * @param changed 改变的组件
 */
add(changed: ComponentChanged) {
  const component = changed.component as Accessibility
  const { hint } = component
  console.log(hint)		// 需要朗读的内容
}
```
在上面的代码中，通过监听判断系统更新的类型，来获取到被添加的组件及其属性。


如果需要用到位置等相关信息，可以通过 gameObject 中的 `transform` 属性来获取。
```javascript

  /**
   * 监听组件增加
   * @param changed 改变的组件
   */
  add(changed: ComponentChanged) {
    const component = changed.component as Accessibility
    const { hint, gameObject } = component
    const { transform } = gameObject
  }
```


插件代码：[http://gitlab.alibaba-inc.com/eva/eva-plugin-a11y](http://gitlab.alibaba-inc.com/eva/eva-plugin-a11y)


## 需要依赖渲染的插件
需要依赖渲染相关的插件继承于 `@eva/plugin-renderer` 的 Render 类
参考Dragonbones骨骼动画插件的实现demo
## Refrences

- [eva-tools](https://npm.alibaba-inc.com/package/@eva/tools)
