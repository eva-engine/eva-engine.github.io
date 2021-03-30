# Resource Management

All resources used in the game will be managed by the resource manager. Before using the resource, you need to add the resource to the resource manager, and set a resource name for the resource, and use the resource name directly when needed. The benefits of this:

-Unified resource entry management. In the EVA ecosystem, there are EVA Store / EVA Workstation, etc., which can be directly inputted to the specified resource list to achieve unification of links.
-When Eva.js loads resources, the resource manager can preprocess the resources to reduce the problem of lag in the processing of resources during runtime

## Add resource

```js
import {RESOURCE_TYPE, resource} from'@eva/eva.js'
```

Listed below are the most commonly used resources

**image**

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

**Keel Animation**

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

**spine animation**

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

In actual projects, you may need to add a lot of resources at one time, which can be achieved through the `addResource` method.

```js
import {RESOURCE_TYPE, resource} from'@eva/eva.js'

resource.addResource([
  {
    name:'img1',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type:'png',
        url:'//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'
      }
    }
  }
  // other resources
])
```

## Resource preload

Use the `preload()` method to load the resources whose `preload` is true in the resource list. You can obtain the current loading progress by listening to events on the resource, which is suitable for the initial display of the game, loading and requesting resources when switching scenes.

```js
resource.on(LOAD_EVENT.START, () => ()) // start loader
resource.on(LOAD_EVENT.PROGRESS, () => ()) // Load progress update
resource.on(LOAD_EVENT.LOADED, () => ()) // A file is successfully loaded
resource.on(LOAD_EVENT.COMPLETE, () => ()) // Load completed
resource.on(LOAD_EVENT.ERROR, () => ()) // A file failed to load
resource.preload()
```

## Access to resources

### getResource(resourceName)

Use the getResource method to get the resource, which returns a promise. The resource will exist in the data attribute. If the resource is a JSON file, the value of data is a js object; if the resource is an image, the value of data will be an Image instance.

```ts
resource.getResource('img1').then(res => {
  const name = res.name // resource name
  const data = res.data // The corresponding content of the file in the resource json or img, etc.
  const instance = res.instance // processed instance
})
```

### loadSingle(resource)

Use loadSingle to load a single resource, you don't need to add the resource to the `addResource` method, this method returns a promise.

```js
resource
  .loadSingle({
    name:'img1',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type:'png',
        url:'//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'
      }
    },
    preload: true
  })
  .then(res => {})
```

### Resource processing

By registering a method for a certain type of resource, the resource can be processed when the resource request comes back, and the resource instance can be directly obtained when it is used.

```js
resource.registerInstance(RESOURCE_TYPE.SPRITE, async ({ name, data }) => {
  const instance = await instanceSth(data)
  return instance
})
```

### Resource destruction

Resources can be actively destroyed. It should be noted that before destroying resources, make sure that the resources are not used in the game.

```js
resource.destory('img1')
```

If a destruction method is registered for this type of resource, this method will be called to destroy the resource.

```js
resource.registerDestroy(RESOURCE_TYPE.SPRITE, async ({ instance }) => {
  await instance.destory()
})
```

### Load timeout event settings

```js
resource.timeout = 30000
```

<br/>
<br/>
<br/>
<br/>
<br/>