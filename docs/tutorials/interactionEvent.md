# 交互事件

## Demo
[https://eva.js.org/playground/#/event](https://eva.js.org/playground/#/event)


## Member
### hitArea `object` `可选` 
点击热区，带有透明度的图片的响应区域是整个GameObject的矩形区域，所以，可以通过hitArea属性设置响应区域。
hitArea区域的属性值相对于GameObject的矩形区域。
正常来说无需设置hitArea。



| 类型     | **Type**                  | **属性**                          |
| -------- | ------------------------- | --------------------------------- |
| 圆形     | HIT_AREA_TYPE.Circle      | {style: {x,y,radius}}             |
| 椭圆     | HIT_AREA_TYPE.Ellipse     | {style:{x,y,width,height}}        |
| 矩形     | HIT_AREA_TYPE.Rect        | {style:{x,y,width,height}}        |
| 圆角矩形 | HIT_AREA_TYPE.RoundedRect | {style:{x,y,width,height,radius}} |
| 多边形   | HIT_AREA_TYPE.Polygon     | {style: {paths: [x,y,x,y,x,y]}}   |
或
{style: {paths: [{x,y},{x,y},{x,y}]}} |
|  |  |  |

```js
import {Event, HIT_AREA_TYPE} from '@eva/plugin-render'
const evt = image.addComponent(new Event({
    hitArea: {
        type: HIT_AREA_TYPE.Polygon,
        style: {
            paths: [107, 49, 148, 24, 172, 28, 198, 77, 189, 106, 123, 198, 71, 180, 10, 80, 34, 32, 90, 37]
        }
    }
}))
```


## Method
Event Component 用来支持 Entity 的事件绑定，事件有

| 事件名称        | 事件类型                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| tap             | 点击，如果touchstart和touchend都在当前gameObject上会被触发，如果不需要可按照一定条件在touchend上面添加e.stopPropagation() |
| touchstart      |                                                                                                                           |
| touchmove       | 不在当前物体上move 也会触发，很奇怪                                                                                       |
| touchend        |                                                                                                                           |
| touchendoutside | 当touchend的时候，touch已经不在物体上时，会触发                                                                           |







### on (eventName, listener)


监听事件


### off (eventName, listener)


移除监听


### emit (eventName, ...args)


触发事件


### once (eventName, listener)


监听一次性事件




## Instance Event's Arguments


listener 函数的参数


```js
{
    data:{
        pointerId: number,
    	position: {x, y}
    },
    stopPropagation: ()=>{},
	gameObject: gameObject
}
```


阻止事件冒泡


```js
event.stopPropagation()
```
