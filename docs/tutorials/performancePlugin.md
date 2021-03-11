# 性能监控

本插件使用了 [stat.js](https://github.com/mrdoob/stats.js/) 实现，会在指定位置显示性能信息
![image.png](https://gw.alicdn.com/imgextra/i4/O1CN01soAQoz1Q9MG2HLeZL_!!6000000001933-2-tps-424-524.png)
![image.png](https://gw.alicdn.com/imgextra/i4/O1CN01AHtNyp1Zi0lkTonZg_!!6000000003227-2-tps-476-422.png)
![image.png](https://gw.alicdn.com/imgextra/i3/O1CN01bgazxT1FteWFFpp72_!!6000000000545-2-tps-470-402.png)

## 使用

```js
import {StatsSystem} from '@eva/plugin-stats'

const game = new Game({
  autoStart: true, // 可选
  frameRate: 60,
})

game.addSystem(new StatsSystem({
  show: true // 这里设置是否显示，设为 false 不会运行。
  style: { // 这里到数值全部都是宽度到百分比 vw 单位
    x: 0,
    y: 50,
    width: 20,
    height: 12
  }
}))
```

<br/>
<br/>
<br/>
<br/>
<br/>
