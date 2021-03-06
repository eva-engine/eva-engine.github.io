<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](api/index.md) &gt; [@eva/eva.js](api/eva.js.md) &gt; [Component](api/eva.js.component.md)

## Component class

Component contain raw data apply to gameObject and how it interacts with the world

<b>Signature:</b>

```typescript
declare class Component extends EventEmitter 
```
<b>Extends:</b> EventEmitter

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(params)](api/eva.js.component._constructor_.md) |  | Constructs a new instance of the <code>Component</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_\_componentDefaultParams](api/eva.js.component.__componentdefaultparams.md) |  | string | Default paramaters for this component |
|  [componentName](api/eva.js.component.componentname.md) | <code>static</code> | string | Name of this component |
|  [gameObject](api/eva.js.component.gameobject.md) |  | GameObject | gameObject which this component had added on |
|  [name](api/eva.js.component.name.md) |  | string | Name of this component |
|  [started](api/eva.js.component.started.md) |  | boolean | Represents the status of the component, If component has started, the value is true |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [awake()?](api/eva.js.component.awake.md) |  | <i>(Optional)</i> Called when component is added to a gameObject |
|  [init(params)?](api/eva.js.component.init.md) |  | <i>(Optional)</i> Called during component construction |
|  [lateUpdate(frame)?](api/eva.js.component.lateupdate.md) |  | <i>(Optional)</i> Called after all gameObject's <code>update</code> method has been called |
|  [onDestroy()?](api/eva.js.component.ondestroy.md) |  | <i>(Optional)</i> Called while component be destroyed. |
|  [onPause()?](api/eva.js.component.onpause.md) |  | <i>(Optional)</i> Called while the game paused. |
|  [onResume()?](api/eva.js.component.onresume.md) |  | <i>(Optional)</i> Called before game runing or every time game paused |
|  [start()?](api/eva.js.component.start.md) |  | <i>(Optional)</i> Called after all component's <code>awake</code> method has been called |
|  [update(frame)?](api/eva.js.component.update.md) |  | <i>(Optional)</i> Called in every tick, change self property or other component property |

