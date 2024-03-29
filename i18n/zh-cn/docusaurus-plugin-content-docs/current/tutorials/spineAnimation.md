# Spine 骨骼动画

Spine 是一款专门为软件和游戏开发者量身打造的 2D 动画软件。动画师、原画师和工程师共同为您的游戏赋予生命。使用 Spine 骨骼动画可以实现一些更加丰富的效果，相对于帧动画能够更好的减少内存占用。Spine 是收费软件，请购买后使用，Spine 官网：[http://zh.esotericsoftware.com/](http://zh.esotericsoftware.com/)。目前支持 Spine 版本为：3.6 / 3.8 / 4.0，版本之间资源不兼容，可以在这里[查看如何设置](http://zh.esotericsoftware.com/spine-settings#Version)

- [https://eva.js.org/playground/#/spine](https://eva.js.org/playground/#/spine)

## 安装

当前支持 spine 的 3.6 / 3.8 / 4.0 版本，可以根据版本选择不同npm包。

- 3.6 `@eva/plugin-renderer-spine`
- 3.8 `@eva/plugin-renderer-spine38`
- 4.0 `@eva/plugin-renderer-spine40`


### 使用 NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-spine
```

### 在浏览器中
```html
<script src="https://unpkg.com/@eva/plugin-renderer-spine@1.2.x/dist/EVA.plugin.renderer.spine.min.js"></script>
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Spine, SpineSystem } from '@eva/plugin-renderer-spine'

resource.addResource([
  {
    name: 'anim',
    type: 'SPINE',
    src: {
      ske: {
        type: 'json',
        url: 'https://pages.tmall.com/wow/eva/b5fdf74313d5ff2609ab82f6b6fd83e6.json'
      },
      atlas: {
        type: 'atlas',
        url: 'https://pages.tmall.com/wow/eva/b8597f298a5d6fe47095d43ef03210d4.atlas'
      },
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB1YHC8Vxz1gK0jSZSgXXavwpXa-711-711.png'
      }
    }
  }
])

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000
    }),
    new SpineSystem()
  ],
  autoStart: true,
  frameRate: 60
})

game.scene.transform.size = {
  width: 750,
  height: 1000
}
const gameObject = new GameObject('spine', {
  anchor: {
    x: 0.5,
    y: 0.5
  },
  scale: {
    x: 0.5,
    y: 0.5
  }
})

const spine = new Spine({ resource: 'anim', animationName: 'idle' })

gameObject.addComponent(spine)
spine.on('complete', e => {
  console.log('动画播放结束', e.name)
})

spine.play('idle')
game.scene.addChild(gameObject)
```

## 参数

### resource `string` 

资源名称

### animationName `string` 

动画名

## 方法

### play(name?: string, loop?: boolean)

播放动画

- name 动作名
- loop 是否循环播放

### stop()

停止播放


