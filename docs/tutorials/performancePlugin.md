# 性能监控

## 介绍
本插件使用了 [stat.js](https://github.com/mrdoob/stats.js/) 实现，会在制定位置显示性能信息
![image.png](https://cdn.nlark.com/yuque/0/2019/png/107226/1577548935329-5be71d61-eb4c-45e3-9397-9ff08722dd6a.png#align=left&display=inline&height=262&margin=%5Bobject%20Object%5D&name=image.png&originHeight=524&originWidth=424&size=355404&status=done&style=none&width=212)![image.png](https://cdn.nlark.com/yuque/0/2019/png/107226/1577548961565-38cea6de-b8c8-4216-a0ae-1779928db566.png#align=left&display=inline&height=211&margin=%5Bobject%20Object%5D&name=image.png&originHeight=422&originWidth=476&size=324266&status=done&style=none&width=238)![image.png](https://cdn.nlark.com/yuque/0/2019/png/107226/1577548985390-504463fd-a95d-4e36-92a3-e70e25486d86.png#align=left&display=inline&height=201&margin=%5Bobject%20Object%5D&name=image.png&originHeight=402&originWidth=470&size=307592&status=done&style=none&width=235)


## 使用


```javascript
import {StatsSystem} from '@eva/plugin-stats'

// 创建游戏，传入store
const game = new Game({
  autoStart: true, // 可选
  frameRate: 60,
})

game.addSystem(new StatsSystem({
  show: true // 这里设置是否显示，设为 false 不会运行。
  style: { // 这里到数值全部都是宽度到百分比 vw 单位
    x: 0,
    y: 50,
    width: 20;
    height: 12;
  }
}))



```


