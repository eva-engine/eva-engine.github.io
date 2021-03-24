# A11y 无障碍插件

## Demo

//TODO

## Introduce

Eva.js accessibility plugin, used to add accessibility capabilities to game objects. The plugin automatically adds auxiliary DOM by locating the position of the game object, so that the game object can be focused, and the game has a11y.

## Install

```bash
tnpm install @eva/plugin-a11y
```

## Import

```js
import { A11ySystem, A11y, A11yActivate } from '@eva/plugin-a11y'
```

## Usage

First add system, and then add a11y component to the game objects.

```js
game.addSystem(new A11ySystem({
  debug: true,
  activate: A11yActivate.CHECK,
  checkA11yOpen: () => {
    return new Promise(resolve => {
      resolve(true) // opened
      resolve(false) // closed
    })
  }
}))
// add a11y
gameObject.addComponent(new A11y({
  hint: '按钮',
  role: 'button',
  "aria-value": "0"
  "aira-hidden": "true"
}))
```

The above code will automatically add an auxiliary DOM as shown in the following figure above the game object area:

![image.png](https://gw.alicdn.com/imgextra/i4/O1CN01I2uBms1Lvq6GBg6Bo_!!6000000001362-2-tps-2098-734.png)

Working diagram

![image.png](https://gw.alicdn.com/imgextra/i2/O1CN01mn5ubF1fLSyEMNBw0_!!6000000003990-2-tps-3332-1700.png)


```js
gameObject.addComponent(new A11y({ hint: 'text' }))
game.scene.removeChild(gameObject)

gameObject.removeComponent('A11y')
```

## API

**1、A11ySystem**

游戏场景无障碍能力

| 参数     | 类型         | 说明                                           | 默认值 |
| -------- | ------------ | ---------------------------------------------- | ------ |
| debug    | boolean      | Whether to turn on debugging, a red mask will appear after turning on             | false  |
| activate | A11yActivate | Whether to activate accessibility, the default is to automatically activate according to the user's system settings | CHECK  |

**2、A11y**
Accessibility components, game objects give accessibility capabilities

| 参数    | 类型   | 说明                           | 默认值 |
| ------- | ------ | ------------------------------ | ------ |
| hint    | string | What needs to be read                 | -      |
| role    | string | Accessibility roles, such as role="button" | -      |
| delay   | number | Delay div inner time, in milliseconds       | 0      |
| aria-\* | string | Accessibility attributes                     |        |

**3、A11yActivate**

| 参数    | 说明                         |
| ------- | ---------------------------- |
| CHECK   | Check the accessibility according to the incoming method |
| ENABLE  | Enable plugin accessibility           |
| DISABLE | Disable plugin accessibility           |

## Tips

Some points to note when using:

- Some draggable gameplay needs to be optimized according to the business
- The auxiliary DOM node of the DragonBones animation is 1px
- Click events will automatically trigger 'touchstart/touchend/tip' events on the Event component

## EVA 无障碍插件动画

For transition animations, the barrier-free DOM layer needs to wait until the animation ends to know the position of the game object.

eva-plugin-a11y chooses this to process the transition animation.

### Option1

Listen to the finish event of the animation, and add barrier-free capabilities to the game object after the animation is complete.

```
animation.on('finish', name => {
  image.addComponent(new A11y({ hint: 'What needs to be read' }))
});
```

If there are multiple animations, you only need to listen to the finish event of the last animation.

```
// move animation
// idle animation
animation.on('finish', name => {
  name === 'idle' && image.addComponent(new A11y({ hint: 'What needs to be read' }))
});
```

It is not recommended to use accessibility capabilities in Infinity's mobile animations, such as such animations.

This type of animation is not accessible to users at all, and it is recommended to optimize it from the product level.

### Option2

The construction of the barrier-free component also provides a delay parameter, and the developer can choose to render the barrier-free DOM of the game object at any time.

```
image.addComponent(new A11y({ hint: 'What needs to be read', delay: 1000})
```

<br/>
<br/>
<br/>
<br/>
<br/>
