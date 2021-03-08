# A11y 无障碍插件

## Demo

//TODO

## 介绍

EVA JS 无障碍插件，用于为游戏对象添加无障碍的能力。插件通过定位游戏对象的位置，自动化地添加辅助 DOM，使得游戏对象能被聚焦，游戏拥有无障碍能力。

## 安装

```bash
tnpm install @eva/plugin-a11y
```

## 引入

```js
import { A11ySystem, A11y, A11yActivate } from '@eva/plugin-a11y'
```

## 使用

先引入无障碍系统，然后为相应的游戏对象添加无障碍能力。

```js
// 为游戏场景添加无障碍能力
game.addSystem(new A11ySystem({
  debug: true, // 上线时关闭debug
  activate: A11yActivate.CHECK // 目前淘宝和支付宝可以自动判断
  checkA11yOpen: () => {
    // 根据不通客户端提供的接口判断是否打开了无障碍
    return new Promise(resolve => {
      resolve(true) // 打开
      resolve(false) //未打开
    })
  }
}))
// 为游戏对象添加无障碍能力
gameObject.addComponent(new A11y({
  hint: '按钮',
  role: 'button',
  "aria-value": "0"
  "aira-hidden": "true"
}))
```

上面的代码会自动在相应的游戏对象区域上方添加一个如下图所示的辅助 DOM：
![image.png](https://gw.alicdn.com/imgextra/i4/O1CN01I2uBms1Lvq6GBg6Bo_!!6000000001362-2-tps-2098-734.png)
插件的工作示意图如下：
![image.png](https://gw.alicdn.com/imgextra/i2/O1CN01gGe3CS1i5Ntv1ztfE_!!6000000004361-2-tps-3332-1700.png)
如果游戏对象没有添加至游戏场景中，或者游戏对象被移除出场景，辅助的 DOM 节点也会相应的删除。

```js
// 游戏对象被移除，辅助 DOM 也被移除
gameObject.addComponent(new A11y({ hint: 'text' }))
game.scene.removeChild(gameObject)

// 游戏对象直接移除无障碍 DOM
gameObject.removeComponent('A11y')
```

## API

**1、A11ySystem**

游戏场景无障碍能力

| 参数     | 类型         | 说明                                           | 默认值 |
| -------- | ------------ | ---------------------------------------------- | ------ |
| debug    | boolean      | 是否开启调试，开启后会出现红色遮罩             | false  |
| activate | A11yActivate | 是否激活无障碍，默认为根据用户系统设置自动激活 | CHECK  |

**2、A11y**
无障碍组件，游戏对象赋予无障碍能力

| 参数    | 类型   | 说明                           | 默认值 |
| ------- | ------ | ------------------------------ | ------ |
| hint    | string | 需要朗读的内容                 | -      |
| role    | string | 无障碍角色，例如 role="button" | -      |
| delay   | number | 延迟渲染的时间，单位毫秒       | 0      |
| aria-\* | string | 无障碍属性                     |        |

**3、A11yActivate**

| 参数    | 说明                         |
| ------- | ---------------------------- |
| CHECK   | 根据传入的方法检查开启无障碍 |
| ENABLE  | 开启插件无障碍能力           |
| DISABLE | 关闭插件无障碍能力           |

## Tips

使用上一些需要注意的地方：

- 一些可拖动的游戏玩法需根据业务进行优化
- 龙骨动画的辅助 DOM 节点为 1px
- 点击事件将自动触发 Event 组件上面的 touchstart/touchend/tip 事件

## EVA 无障碍插件动画

普通的 Transition

对于普通的过渡动画，无障碍的 DOM

层需要等到动画结束后才能知道游戏对象的位置。

eva-plugin-a11y 选择这样对过渡动画进行处理。

### Option1

监听动画的 finish 事件，在动画完成后再为游戏对象添加无障碍能力。

```
animation.on('finish', name => {
  image.addComponent(new A11y({ hint: '填入需要朗读的内容' }))
});
```

如果有多个动画，只需要监听最后一个动画的 finish 事件

```
// move 动画
// idle 动画
animation.on('finish', name => {
  name === 'idle' && image.addComponent(new A11y({ hint: '填入需要朗读的内容' }))
});
```

不推荐在 Infinity 的移动动画中使用无障碍能力，例如这样的动画。

这类的动画无障碍用户根本无法使用，建议从业务层面进行优化。

### Option2

eva-plugin-a11y 无障碍组件的构造还提供一个 delay 的参数，开发者可以选择在任意时刻将游戏对象的无障碍 DOM 渲染出来。

```
image.addComponent(new A11y({ hint: '填入需要朗读的内容', delay: 1000})
```

<br/>
<br/>
<br/>
<br/>
<br/>
