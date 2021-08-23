# Sound 

Eva.js audio plugin, the ability to add audio control to the game object, use the Web Audio API to play by default.

## Install

### With NPM
```bash
tnpm install @eva/plugin-sound
```

### In Browser
```html
<script src="https://unpkg.com/@eva/plugin-sound@1.1.x/dist/EVA.plugin.sound.min.js"></script>
```

## Usage

```javascript
import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { Sound, SoundSystem } from '@eva/plugin-sound';

// add audio resource
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

If you want to play a part of the audio, you can control it through the seek property and the duration property. Refer to the property table for details. The following example indicates that the Component starts playing at 1.2 seconds and stops after playing for 3 seconds.

```js
const bgSound = bgSoundObj.addComponent(
  new Sound({ resource: 'bgSound', autoplay: true, volume: 0.5, seek: 1.2, duration: 3 })
);
```

## API

### Sound

#### Constructor

| param    | type       | default | description                                                                                                                           |
| -------- | ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| resource | string     | ''      | The name of the audio resource registered in the resource                                                                             |
| autoplay | boolean    | false   |                                                                                                                                       |
| muted    | boolean    | false   |                                                                                                                                       |
| loop     | boolean    | false   |                                                                                                                                       |
| volume   | number     | 1       | \[0-1\]                                                                                                                               |
| seek     | number     | 0       | ArrayBufferSourceNode.start(when, seek, duration) [MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start) |
| duration | number     |         | ArrayBufferSourceNode.start(when, seek, duration) [MDN](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start) |
| onEnd    | () => void | -       | Triggered at the end of playback                                                                                                      |

#### 属性

| param  | type       | default | description |
| ------ | ---------- | ------- | ----------- |
| muted  | boolean    | false   |             |
| volume | number     | 1       | \[0-1\]     |
| play   | () => void | -       |             |
| pause  | () => void | -       |             |
| stop   | () => void | -       |             |

### SoundSystem

#### 初始化param

| param             | type            | default | description                                            |
| ----------------- | --------------- | ------- | ------------------------------------------------------ |
| autoPauseAndStart | boolean         | true    | whether to pause and start synchronously with eva game |
| onError           | (error) => void | -       | error handling event                                   |

#### 属性
| param     | type       | default | description |
| --------- | ---------- | ------- | ----------- |
| muted     | boolean    | false   |             |
| volume    | number     | 1       | \[0-1\]     |
| resumeAll | () => void | -       |             |
| pauseAll  | () => void | -       |             |
| stopAll   | () => void | -       |             |

### Tips

If the browser restricts the need for interaction to start playing audio, the plug-in will automatically try to enable audio after the page interacts.

<br/>
<br/>
<br/>
<br/>
<br/>