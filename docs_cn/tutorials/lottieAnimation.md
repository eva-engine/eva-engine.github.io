# Lottie 动画

[Lottie](https://airbnb.design/lottie/) 可以播放通过 [Bodymovin](https://aescripts.com/bodymovin/) 导出的 [Adobe After Effects](https://www.adobe.com/products/aftereffects.html) 动画。

Eva.js 的 Lottie 插件支持 [Lolita](https://design.alipay.com/lolita) 导出的动画。

## 安装

### 使用 NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-lottie -S
```

### 在浏览器中
```html
<script src="https://unpkg.com/@eva/plugin-renderer-lottie@1.0.x/dist/EVA.plugin.renderer.lottie.min.js"></script>
```

## 使用

```js
import { Game, GameObject, resource } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { LottieSystem, Lottie } from '@eva/plugin-renderer-lottie'

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1624
    }),
    new LottieSystem()
  ],
  autoStart: true,
  frameRate: 60
})

resource.addResource([
  {
    name: 'ResourceName',
    type: 'LOTTIE',
    src: {
      json: {
        type: 'json',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/61d9cc77-12de-47a7-b6e5-06c836ce7083.json'
      }
    }
  }
])

const LottieComponent = new Lottie({ resource: 'ResourceName' })
const LottieGameObject = new GameObject('ResourceName', {})

LottieGameObject.addComponent(LottieComponent)
game.scene.addChild(LottieGameObject)
```

## 参数

- resource 资源名称

## 方法

### LottieComponent.play

播放动画

```js
LottieComponent.play([], { repeats: Infinity })
LottieComponent.play([0, 10])
```

#### 参数

| **说明**                                       | **类型**              | **默认值**   |
| ---------------------------------------------- | --------------------- | ------------ |
| 播放动画帧率区间，默认从第一帧播放至最后一帧。 | Array<number, number> | [start, end] |
| repeate: 播放次数，Infinity 循环播放。         | number                | Infinity     |

slot:
- name: 插槽的名字。
- type: 插槽的类型，区分文字及图片。
- value: 插槽要填入的值，图片则为 CDN 链接。
- style：插槽的样式设置。

```typescript
interface options {
  repeats?: number
  slot?: Array<{
    name: string;
    type: 'TEXT' | 'IMAGE';
    value: string;
    style: IStyle;
  }>
}
```

#### IStyle

| **参数**  | **说明**                                                                    | **类型**                | **默认值**   |
| --------- | --------------------------------------------------------------------------- | ----------------------- | ------------ |
| x         | position.x                                                                  | number                  |              |
| y         | position.y                                                                  | number                  |              |
| width     | bounds.width                                                                | number                  |              |
| height    | bounds.height                                                               | number                  |              |
| anchor    | [文档](http://pixijs.download/release/docs/PIXI.AnimatedSprite.html#anchor) | {x: number, y: number } | {x: 0, y: 0} |
| pivot     | [文档](http://pixijs.download/release/docs/PIXI.AnimatedSprite.html#pivot)  | {x: number, y: number } | {x: 0, y: 0} |
| TextStyle | [文档](https://pixijs.io/examples-v4/#/text/text.js)                        | PIXI.TextStyle          |              |

### LottieComponent.onTap

为 Lottie 中的插槽元素绑定 `Tap` 事件

```js
LottieComponent.onTap('#btn', () => {
  console.log('btn click !')
})
```

#### 参数

| **说明**         | **类型**   | **默认值** |
| ---------------- | ---------- | ---------- |
| 插槽名称         | string     |            |
| 点击后的事件回调 | () => void |            |

## 事件

```js
LottieComponent.on('complete', () => {
  console.log('LottieComponent play complete !')
})
```

<br/>
<br/>
<br/>
<br/>
<br/>
