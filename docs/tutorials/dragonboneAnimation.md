# Dragonbones 龙骨动画

DragonBones 是白鹭时代推出的面向设计师的 2D 游戏动画和富媒体内容创作平台，它提供了 2D 骨骼动画解决方案和动态漫画解决方案。使用 Dragonbones 骨骼动画可以实现更加丰富的效果，相对于帧动画能够更好的减少内存占用。

Dragonbone 龙骨动画官网：[http://dragonbones.com/cn/index.html](http://dragonbones.com/cn/index.html)

- [https://eva.js.org/playground/#/dragonBone](https://eva.js.org/playground/#/dragonBone)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-dragonbone
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-renderer-dragonbone@1.1.x/dist/EVA.plugin.renderer.dragonbone.min.js"></script>
```

## Usage

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'
import { Img, ImgSystem } from '@eva/plugin-renderer-img'
import { DragonBone, DragonBoneSystem } from '@eva/plugin-renderer-dragonbone'

resource.addResource([
  {
    name: 'dragonbone',
    type: RESOURCE_TYPE.DRAGONBONE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB1RIpUBhn1gK0jSZKPXXXvUXXa-1024-1024.png'
      },
      tex: {
        type: 'json',
        url: 'https://pages.tmall.com/wow/eva/fb18baf3a1af41a88f9d1a4426d47832.json'
      },
      ske: {
        type: 'json',
        url: 'https://pages.tmall.com/wow/eva/c904e6867062e21123e1a44d2be2a0bf.json'
      }
    },
    preload: true
  }
])

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000
    }),
    new DragonBoneSystem()
  ]
})

// 此处还在考虑如何设置默认场景的宽高
game.scene.transform.size = {
  width: 750,
  height: 1000
}

// dragonbone 的 origin 是失效的，将会按照 dragonbone 设计时的坐标重点定位
const dragonBone = new GameObject('db', {
  anchor: {
    x: 0.5,
    y: 0.5
  }
})

const db = dragonBone.addComponent(
  new DragonBone({
    resource: 'dragonbone',
    armatureName: 'armatureName'
  })
)

db.play('newAnimation')
game.scene.addChild(dragonBone)
```

## Options

### resource `string` 

龙骨动画的资源名称

### armatureName `string` 

导出龙骨动画的时候设置的骨骼名字，在整个项目中，多个资源不能使用同一个 armatureName，详见最后的注意。

### animationName `string` 

开始播放的动画名字

## Methods

### play(name?: string, times?: number)

播放动画，默认播放第一个

- name: 动画名
- times: 播放次数，默认无限次

### stop(name?: string)

停止播放

## Events

参考[龙骨动画官方事件](http://developer.egret.com/cn/apidoc/index/name/dragonBones.EventObject)，`Dragonbone` 组建实例的上能够监听这些事件。

```js
// 'start', 'loopComplete', 'complete', 'fadeIn', 'fadeInComplete', 'fadeOut', 'fadeOutComplete','frameEvent', 'soundEvent'
const db = gameObject.addComponent(new DragonBone({...}));
db.on('start', ()=>{})
db.on('complete', ()=>{})
```

## Note

多个骨骼动画 armatureName 不能相同，导出时项目名称要使用英文

![image.png](https://gw.alicdn.com/imgextra/i1/O1CN01MwG7Zi1xPHLbANb8E_!!6000000006435-2-tps-764-404.png)

![image.png](https://gw.alicdn.com/imgextra/i3/O1CN019co6ry1JQ7RaVAZFa_!!6000000001022-2-tps-2080-1480.png)

<br/>
<br/>
<br/>
<br/>
<br/>
