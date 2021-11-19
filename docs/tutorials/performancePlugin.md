# Performance monitoring

This plug-in is implemented using [stat.js](https://github.com/mrdoob/stats.js/) and will display performance information at the specified location
![image.png](https://gw.alicdn.com/imgextra/i4/O1CN01soAQoz1Q9MG2HLeZL_!!6000000001933-2-tps-424-524.png)
![image.png](https://gw.alicdn.com/imgextra/i4/O1CN01AHtNyp1Zi0lkTonZg_!!6000000003227-2-tps-476-422.png)
![image.png](https://gw.alicdn.com/imgextra/i3/O1CN01bgazxT1FteWFFpp72_!!6000000000545-2-tps-470-402.png)

## Install

### With NPM
```bash
npm i @eva/plugin-stats
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-stats@1.1.x/dist/EVA.plugin.stats.min.js"></script>
```

## Usage

```js
import {StatsSystem} from '@eva/plugin-stats'

const game = new Game({
   autoStart: true, // optional
   frameRate: 60,
})

game.addSystem(new StatsSystem({
   show: true // Whether to display or not is set here, it will not run if set to false.
   style: {// The values here are all width to percentage vw units
     x: 0,
     y: 50,
     width: 20,
     height: 12
   }
}))
```

