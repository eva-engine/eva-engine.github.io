# Spine 骨骼动画

Spine 是一款专门为软件和游戏开发者量身打造的 2D 动画软件。动画师、原画师和工程师共同为您的游戏赋予生命。使用 Spine 骨骼动画可以实现一些更加丰富的效果，相对于帧动画能够更好的减少内存占用。Spine 是收费软件，请购买后使用，Spine 官网：[http://zh.esotericsoftware.com/](http://zh.esotericsoftware.com/)

- [https://eva.js.org/playground/#/spine](https://eva.js.org/playground/#/spine)

## 安装

```bash
npm i @eva/plugin-renderer-spine
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

<br/>
<br/>
<br/>
<br/>
<br/>
