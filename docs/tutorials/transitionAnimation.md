# 过渡动画

## Demo:
[https://eva.js.org/playground/#/transition](https://eva.js.org/playground/#/transition)
[https://eva.js.org/playground/#/transition2](https://eva.js.org/playground/#/transition2)


## 介绍
可以对组件上面的值做线性变化。
## Member
### group: `Object`
属性变化的时间轴，是一个对象，每个属性将对应一个动画，在一个entity上可以配置多个动画。
需要先设置 group 再将 Animation 添加到 Entity 上。


##### component: `Component`
需要变化的component


##### name: `String`
需要变化的component内的属性，比如 component.position.x 写成 'position.x'


##### values: `Array`
时间轴列表，时间对应的位置，和到下一个时间点所用的缓动函数

- time: `Number`
变化所对应的时间
- value: `Number | String`
当前时间所对应的值
- tween: `String`
到下一个时间所用的缓动函数，最后一个不填，可选 `linear`,`ease`,`ease-in`,`ease-out`,`ease-in-out`,`bounce-in`,`bounce-out`,`bounce-in-out`。其中 'none' 代表没有补间动画。



## Method
### play (name, iteration)
开始播放某个动画，name参数可选，不填写播放第一个动画
iteration 循环次数，默认不循环
### stop (name)
停止动画某个播放  name参数可选，不填写name参数，停止所有动画


## Instance Events
### finish


动画结束触发


```js
transform.on('finish', animName => {})
```
