游戏中所用到的所有资源都会放在资源管理器中进行管理，在使用资源之前需要将资源添加到资源管理器中，并为资源设置一个资源名，在需要时直接使用资源名。这样做的好处：

- 统一资源入口管理，在 EVA 生态中有 EVA Store / EVA Workstation 等可直接输入指定资源列表，实现链路统一。
- 在 EVAJS 加载资源时，资源管理器可以对资源进行预处理，减少运行时处理资源产生卡顿等问题

### 添加资源

```js
import { RESOURCE_TYPE, resource } from '@eva/eva.js'
```

下面列举了最常使用的几种资源

**图片**

```js
{
  name: "image",
  type: RESOURCE_TYPE.IMAGE,
  src: {
    image: {
      type: "png",
      url: "//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png"
    }
  },
}
```

**龙骨动画**

```js
{
  name: "dragonBone",
  type: RESOURCE_TYPE.DRAGONBONE, 
  src: { 
    ske: {
      type: "json", 
      url: "//gw.alicdn.com/bao/uploaded/TB1SFUHVAzoK1RjSZFlXXai4VXa.json", 
    },
    tex: {
      type: "json",
      url: "//gw.alicdn.com/bao/uploaded/TB17n.IVrrpK1RjSZTEXXcWAVXa.json",
    },
    image: {
      type: "png",
      url: "//gw.alicdn.com/bao/uploaded/TB11W7FVyrpK1RjSZFhXXXSdXXa-489-886.png"
    },
  },
}
```

**spine动画**
```js
{
  name: "spineAnimation",
  type: RESOURCE_TYPE.SPINE,
  src: {
    ske: {
      type: "json",
      url: "//gw.alicdn.com/bao/uploaded/TB1SFUHVAzoK1RjSZFlXXai4VXa.json",
    },
    atlas: {
      type: "json",
      url: "//gw.alicdn.com/bao/uploaded/TB17n.IVrrpK1RjSZTEXXcWAVXa.atlas",
    },
    image: {
      type: "png",
      url: "//gw.alicdn.com/bao/uploaded/TB11W7FVyrpK1RjSZFhXXXSdXXa-489-886.png"
    },
  },
}
```

实际项目中可能需要一次性添加很多资源，可以通过 addResource 实现这一目的

```ts
import { RESOURCE_TYPE, resource } from '@eva/eva.js'

resource.addResource([
  {
    name: "img1",
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: "png",
        url: "//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png"
      }
    },
  },
  // other resources
]);
```

### 资源预加载

使用 `preload()` 方法将资源列表中 `preload` 为 true 的资源进行加载，可以通过监听 resource 上的事件来获取当前加载进度，适合在游戏初始化展示 loading，切换场景时请求资源时使用。


```javascript
resource.on(LOAD_EVENT.START, ()=>{})// 开始loader
resource.on(LOAD_EVENT.PROGRESS, ()=>{}) // 加载进度更新
resource.on(LOAD_EVENT.LOADED, ()=>{}) // 某文件加载成功
resource.on(LOAD_EVENT.COMPLETE, ()=>{}) // 加载完成
resource.on(LOAD_EVENT.ERROR, ()=>{}) // 某文件加载失败
resource.preload()
```

### 获取资源

#### getResource(resourceName)

使用 getResource 方法获取资源，该方法返回的是一个 promise。资源将会存在于 data 属性中，如果资源是 JSON 文件，则 data 的值是一个 js 对象；如果资源是图片，则 data 的值将会是 Image 实例。

```ts
resource.getResource('img1').then(res => {
  const name = res.name // 资源名称
  const data = res.data // 资源中文件对应的内容 json 或者 img 等
  const instance = res.instance // 处理后的实例
})
```

### loadSingle(resource)

使用 loadSingle 来加载单个资源，不需要将资源添加到 addResource 里面，该方法返回的是 promise。

```js
resource.loadSingle({
  name: "img1",
  type: RESOURCE_TYPE.IMAGE,
  src: {
    image: {
      type: "png",
      url: "//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png"
    }
  },
  preload: true
}).then(res => {})
```

### 资源处理

通过为某种类型的资源注册方法，可以在资源请求回来时对资源进行处理，在使用时可以直接获取到资源实例。

```javascript
resource.registerInstance(RESOURCE_TYPE.SPRITE, async ({name, data}) => {
	const instance = await instanceSth(data)
  return instance
})
```

### 资源销毁

资源可以主动销毁，需要要注意的是，在销毁资源前要确保游戏中没有使用该资源。

```javascript
resource.destory('img1')
```

如果为该类型资源注册了销毁方法，则会调用该方法销毁资源。

```javascript
resource.registerDestroy(RESOURCE_TYPE.SPRITE, async ({instance}) => {
	await instance.destory()
})
```

### 加载超时事件设置

```javascript
resource.timeout = 30000
```
<br/>
<br/>
<br/>
<br/>
<br/>
