# A11y 无障碍插件

# eva-plugin-a11y
gitlab: [http://gitlab.alibaba-inc.com/eva/eva-plugin-a11y](http://gitlab.alibaba-inc.com/eva/eva-plugin-a11y)
tnpm: [https://npm.alibaba-inc.com/package/@eva/plugin-a11y](https://npm.alibaba-inc.com/package/@eva/plugin-a11y)


## 介绍


EVA JS 无障碍插件，用于为游戏对象添加无障碍的能力。插件通过定位游戏对象的位置，自动化地添加辅助 DOM，使得游戏对象能被聚焦，游戏拥有无障碍能力。
## 安装


```bash
tnpm install @eva/plugin-a11y
```


## 引入


```js
import { A11ySystem, A11y, A11yActivate } from "@eva/plugin-a11y"
```


## 使用
先引入无障碍系统，然后为相应的游戏对象添加无障碍能力。


```js
// 为游戏场景添加无障碍能力
game.addSystem(new A11ySystem({
  debug: true, // 上线时关闭debug
  activate: A11yActivate.AUTO // 目前淘宝和支付宝可以自动判断
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
![image.png](https://cdn.nlark.com/yuque/0/2020/png/305130/1596713708115-eeea0f19-176f-4f8c-8a3b-847949e70e34.png#align=left&display=inline&height=367&margin=%5Bobject%20Object%5D&name=image.png&originHeight=734&originWidth=2098&size=1649126&status=done&style=none&width=1049)
插件的工作示意图如下：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/305130/1597806855045-756a3631-e929-47cd-b78d-a4cff699f7c8.png#align=left&display=inline&height=850&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1700&originWidth=3332&size=2346198&status=done&style=none&width=1666)
如果游戏对象没有添加至游戏场景中，或者游戏对象被移除出场景，辅助的 DOM 节点也会相应的删除。
```js
// 游戏对象被移除，辅助 DOM 也被移除
gameObject.addComponent(new A11y({hint: 'text'}))
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
| activate | A11yActivate | 是否激活无障碍，默认为根据用户系统设置自动激活 | AUTO   |



**2、A11y**
无障碍组件，游戏对象赋予无障碍能力

| 参数   | 类型   | 说明                           | 默认值 |
| ------ | ------ | ------------------------------ | ------ |
| hint   | string | 需要朗读的内容                 | -      |
| role   | string | 无障碍角色，例如 role="button" | -      |
| delay  | number | 延迟渲染的时间，单位毫秒       | 0      |
| aria-* | string | 无障碍属性                     |        |



**3、A11yActivate**

| 参数    | 说明                       |
| ------- | -------------------------- |
| AUTO    | 根据系统设置自动开启无障碍 |
| ENABLE  | 开启插件无障碍能力         |
| DISABLE | 关闭插件无障碍能力         |



## Tips
使用上一些需要注意的地方：

- 一些可拖动的游戏玩法需根据业务进行优化
- 龙骨动画的辅助 DOM 节点为 1px
- 插件对过渡动画（Transition）的处理，查看相关文章：[eva-plugin-a11y 动画处理](https://yuque.antfin-inc.com/docs/share/2b93b28e-2b15-4f9b-affa-a9a49ee8acb1)
- 点击事件将自动触发Event组件上面的touchstart/touchend/tip事件



## Demo
点击[链接](https://pre-wormhole.tmall.com/wow/z/hdwk/hdsolution2/a11y-test?wh_biz=tm&wh_showError=true)或者扫描二维码打开（预发环境）：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/305130/1597644781557-04fea778-5983-460d-990e-5429af637e97.png#align=left&display=inline&height=347&margin=%5Bobject%20Object%5D&name=image.png&originHeight=347&originWidth=346&size=46105&status=done&style=none&width=346)
demo 仓库：[http://gitlab.alibaba-inc.com/alimod/accessibility-test/tree/daily/0.0.1](http://gitlab.alibaba-inc.com/alimod/accessibility-test/tree/daily/0.0.1)

- 

