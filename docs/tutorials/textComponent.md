# 文本 Text

Text 组件为 gameObject 提供了展示文字的能力，使用了 Text 组件后，gameObject 的宽度会在下一帧设置文字所占区域的宽度给 Transform。

[Demo](https://eva.js.org/playground/#/text)

## 安装

```bash 
npm i @eva/plugin-renderer-text 
```
## 使用

```js
import { Game, GameObject } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { Text, TextSystem } from '@eva/plugin-renderer-text';

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000,
    }),
    new TextSystem()
  ],
});

// 此处还在考虑如何设置默认场景的宽高
game.scene.transform.size = {
    width: 750,
    height: 1000
}

const text = new GameObject("text", {
  position: {
    x: 0,
    y: 0
  },
  origin: {
    x: 0.5,
    y: 0.5
  },
  anchor: {
    x: 0.5,
    y: 0.5
  }
});

text.addComponent(new Text({
  text: "欢迎使用EVA互动游戏开发体系！",
  style: {
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: ["#b35d9e", "#84c35f", "#ebe44f"], // gradient
    fillGradientType: 1,
    fillGradientStops: [0.1, 0.4],
    stroke: "#4a1850",
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 400,
    breakWords: true
  }
}));
```

## 参数
### text: `string` 

显示的文本
### style

| `align`              | string                                                                                                      | 'left'            | optional作用于多行文本('left', 'center' or 'right'), 单行文本不生效                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakWords`         | boolean                                                                                                     | false             | optional是否在词语中间换行                                                                                                                                                                                  |
| `dropShadow`         | boolean                                                                                                     | false             | optional设置文字阴影                                                                                                                                                                                        |
| `dropShadowAlpha`    | number                                                                                                      | 1                 | optional文字阴影的透明度                                                                                                                                                                                    |
| `dropShadowAngle`    | number                                                                                                      | Math.PI/6         | optional文字阴影角度                                                                                                                                                                                        |
| `dropShadowBlur`     | number                                                                                                      | 0                 | optional文字阴影模糊度                                                                                                                                                                                      |
| `dropShadowColor`    | string &#124; number                                                                                        | 'black'           | optional文字阴影颜色 例如 'red', '#00FF00'                                                                                                                                                                  |
| `dropShadowDistance` | number                                                                                                      | 5                 | optional文字阴影距离                                                                                                                                                                                        |
| `fill`               | string &#124; Array.<string> &#124; number &#124; Array.<number> &#124; CanvasGradient &#124; CanvasPattern | 'black'           | optional文字颜色，可以是渐变 e.g 'red', '#00FF00'. Can be an array to create a gradient eg ['#000000','#FFFFFF'] [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) |
| `fillGradientType`   | number                                                                                                      | 'LINEAR_VERTICAL' | optional如果文字颜色为渐变，可以设置水平或者垂直渐变                                                                                                                                                        |
水平渐变：LINEAR_VERTICAL
垂直渐变：LINEAR_HORIZONTAL |
| `fillGradientStops` | Array.<number> |  | optional如果文字颜色为渐变，可以设置各个颜色的定位点，如果不设置是均分的 |
| `fontFamily` | string &#124; Array.<string> | 'Arial' | optional字体 |
| `fontSize` | number &#124; string | 26 | optional字号(如果是数字的话会被转成像素，可以用字符串：'26px','20pt','160%' or '1.6em') |
| `fontStyle` | string | 'normal' | optional字体样式 ('normal', 'italic' or 'oblique') |
| `fontVariant` | string | 'normal' | optional字体变化 ('normal' or 'small-caps') |
| `fontWeight` | string | 'normal' | optional字体加粗 ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900') |
| `leading` | number | 0 | optional行间距 |
| `letterSpacing` | number | 0 | optional段落前空的距离 |
| `lineHeight` | number |  | optional行高 |
| `lineJoin` | string | 'miter' | optional边角样式类型 values "miter" (creates a sharp corner), "round" (creates a round corner) or "bevel" (creates a squared corner). |
| `miterLimit` | number | 10 | optionallineJoin为miter的时候，使用此属性，可以减少渲染文字的尖锐性 |
| `padding` | number | 0 | optional有些字体会被裁剪，添加padding解决此问题 |
| `stroke` | string &#124; number | 'black' | optional描边 'blue', '#FCFF00' |
| `strokeThickness` | number | 0 | optional描边厚度 |
| `trim` | boolean | false | optional去除透明边框 |
| `textBaseline` | string | 'alphabetic' | optional文字基线 |
| `whiteSpace` | string | 'pre' | optional设置换行的逻辑 
"normal" 正常逻辑换行, 
"pre"  保留空白符序列，但是正常地进行换行
"pre-line" 合并空白符序列，但是保留换行符. 
需要wordWrap为true |
| `wordWrap` | boolean | false | optional是否需要换行 |
| `wordWrapWidth` | number | 100 | optional超出改宽度换行 |


<br/>
<br/>
<br/>
<br/>
<br/>