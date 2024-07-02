# 帧动画

帧动画是由多张连续的图片按照一定的时间间隔播放的动画，通常会将图片合并到一张图片里面，然后通过 JSON 来描述图片的位置以及播放的顺序。

Eva.js 的帧动画底层是 pixi.js spriteAnimation 实现的，因此在 Eva.js 中可以使用 spriteAnimation 支持的雪碧图生成工具导出的素材，比如 [TexturePacker](https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-and-animations-with-pixijs5)。

- [https://eva.js.org/playground/#/spriteAnimation](https://eva.js.org/playground/#/spriteAnimation)

## 安装

### 使用 NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-sprite-animation
```

### 在浏览器中
```html
<script src="https://unpkg.com/@eva/plugin-renderer-sprite-animation@1.2.x/dist/EVA.plugin.renderer.spriteAnimation.min.js"></script>
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { SpriteAnimation, SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation'

resource.addResource([
  {
    name: 'fruit',
    type: RESOURCE_TYPE.SPRITE_ANIMATION,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/bao/uploaded/TB15pMkkrsTMeJjSszhXXcGCFXa-377-1070.png'
      },
      json: {
        type: 'json',
        url: 'https://gw.alicdn.com/mt/TB1qCvumsyYBuNkSnfoXXcWgVXa.json'
      }
    },
    preload: false
  }
])

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000
    }),
    new SpriteAnimationSystem()
  ]
})

const cut = new GameObject('cut', {
  position: { x: 225, y: 400 },
  size: { width: 300, height: 200 },
  origin: { x: 0, y: 0 }
})

const frame = cut.addComponent(
  new SpriteAnimation({
    resource: 'fruit',
    speed: 100
  })
)

frame.play()

game.scene.addChild(cut)
```

## 参数

### resource `string` 

资源名，需要通过 `resource.addResource` 预加载。

### speed `number` 

每张图片播放的间隔时间，单位 ms。


### autoPlay `boolean`

是否在组件被添加时自动播放

### forwards `boolean`

播放完毕后停在最后一帧，需要在 `play` 方法设置 `times` 参数才会生效。

## 方法

### play(times)

播放动画，默认自动播放。times 参数为播放次数，默认是无限次

### stop()
停止播放。

### gotoAndPlay(frameNumber)
定位到某一帧，并且开始播放

### gotoAndStop(frameNumber)
定位到某一帧，并且停止播放

## 属性
### currentFrame `number`
当前播放到第几帧

### totalFrames `number`
总帧数


## 事件
### frameChange 每帧图片变换
### loop 每次循环
### complete 播放完成


