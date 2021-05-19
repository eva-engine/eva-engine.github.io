# Sound 音频系统

为 Game Object 添加音频控制的能力，使用 Web Audio API 播放。

## 安装

### 使用 NPM
```bash
npm install @eva/plugin-sound
```

### 在浏览器中
```html
<script src="https://unpkg.com/@eva/plugin-sound@1.0.x/dist/EVA.plugin.sound.min.js"></script>
```

## 使用

```js
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { Sound, SoundSystem } from '@eva/plugin-sound';

// 添加音频资源
resource.addResource([
  {
    name: 'bgSound',
    type: RESOURCE_TYPE.AUDIO,
    src: {
      audio: {
        type: 'audio',
        url: 'https://g.alicdn.com/ltao-fe/duck_assets/0.0.1/assets/duckBg.mp3',
      },
    },
    preload: true,
  },
  {
    name: 'successSound',
    src: {
      audio: {
        type: 'audio',
        url:
          'https://g.alicdn.com/ltao-fe/factory/1.1.3/assets/game/sound/success.mp3',
      },
    },
    preload: true,
  },
]);

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000,
    }),
    new SoundSystem();
  ],
  autoStart: true,
  frameRate: 60,
});

const bgSoundObj = new GameObject('sound');
const bgSound = bgSoundObj.addComponent(
  new Sound({ resource: 'bgSound', loop: true, autoplay: true, volume: 0.5 })
);

bgSound.play();
```

## API

### Sound

#### Constructor

| 参数     | 类型       | 默认值 | 说明                                 |
| -------- | ---------- | ------ | ------------------------------------ |
| resource | string     | ''     | 在 resource 注册的音频资源名称       |
| autoplay | boolean    | false  | 是否自动播放                         |
| muted    | boolean    | false  | 是否被静音                           |
| loop     | boolean    | false  | 播放结束时是否重新开始               |
| volume   | number     | 1      | 播放时的音量(整体音量) ，取值范围0-1 |
| onEnd    | () => void | -      | 播放结束时触发                       |

#### 属性

| 参数   | 类型       | 默认值 | 说明                                                           |
| ------ | ---------- | ------ | -------------------------------------------------------------- |
| muted  | boolean    | false  | 可设置是否被静音                                               |
| volume | number     | 1      | 可设置播放时的音量，取值范围0-1                                |
| play   | () => void | -      | 尝试播放音频                                                   |
| pause  | () => void | -      | 用来暂停音频的播放，如果音频已经处于暂停状态，该方法没有效果。 |
| stop   | () => void | -      | 停止播放音频                                                   |

### SoundSystem

#### Constructor

| 参数              | 类型            | 默认值 | 说明                         |
| ----------------- | --------------- | ------ | ---------------------------- |
| autoPauseAndStart | boolean         | true   | 是否和eva game同步暂停和启动 |
| onError           | (error) => void | -      | 错误处理事件                 |

#### 属性

| 参数      | 类型       | 默认值 | 说明                                       |
| --------- | ---------- | ------ | ------------------------------------------ |
| muted     | boolean    | false  | 可设置是否被静音(所有音频)                 |
| volume    | number     | 1      | 可设置播放时的音量(整体音量) ，取值范围0-1 |
| resumeAll | () => void | -      | 恢复播放所有被暂停的音频                   |
| pauseAll  | () => void | -      | 暂停所有正在播放的音频                     |
| stopAll   | () => void | -      | 停止播放所有正在播放的音频                 |

### 提示

如果浏览器限制需要进行交互才可以开始播放音频，插件会自动尝试在页面进行交互后启用音频。

<br/>
<br/>
<br/>
<br/>
<br/>