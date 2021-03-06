<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](api/index.md) &gt; [@eva/plugin-renderer](api/eva-plugin-renderer.md) &gt; [Renderer](api/eva-plugin-renderer.renderer.md)

## Renderer class

<b>Signature:</b>

```typescript
export default class Renderer extends System 
```
<b>Extends:</b> System

## Constructors

| Constructor                                                          | Modifiers | Description                                                  |
| -------------------------------------------------------------------- | --------- | ------------------------------------------------------------ |
| [(constructor)()](api/eva-plugin-renderer.renderer._constructor_.md) |           | Constructs a new instance of the <code>Renderer</code> class |

## Properties

| Property                                                                 | Modifiers           | Type             | Description                   |
| ------------------------------------------------------------------------ | ------------------- | ---------------- | ----------------------------- |
| [containerManager](api/eva-plugin-renderer.renderer.containermanager.md) |                     | ContainerManager | containerManager              |
| [game](api/eva-plugin-renderer.renderer.game.md)                         |                     | Game             | currentGame                   |
| [name](api/eva-plugin-renderer.renderer.name.md)                         |                     | string           | Renderer name                 |
| [observerInfo](api/eva-plugin-renderer.renderer.observerinfo.md)         |                     | PureObserverInfo | observer component props info |
| [observerInfo](api/eva-plugin-renderer.renderer.observerinfo.md)         | <code>static</code> | PureObserverInfo | observer component props info |
| [rendererManager](api/eva-plugin-renderer.renderer.renderermanager.md)   |                     | RendererManager  |                               |

## Methods

| Method                                                                             | Modifiers | Description                                                                                         |
| ---------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| [componentChanged(changed)?](api/eva-plugin-renderer.renderer.componentchanged.md) |           | <i>(Optional)</i> 当监听的属性变化时候调用<!-- -->called while the observed component props change. |
| [init(arg)?](api/eva-plugin-renderer.renderer.init.md)                             |           | <i>(Optional)</i>                                                                                   |
| [rendererUpdate(gameObject)?](api/eva-plugin-renderer.renderer.rendererupdate.md)  |           | <i>(Optional)</i> 每帧调用<!-- -->called by every loop                                              |
| [update()](api/eva-plugin-renderer.renderer.update.md)                             |           |                                                                                                     |

