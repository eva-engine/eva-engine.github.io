# Text

The Text component provides the gameObject with the ability to display text. After using the Text component, the width of the gameObject will set the width of the text area to the Transform in the next frame.

[Demo](https://eva.js.org/playground/#/text)

## Install

### With NPM
```bash
npm i @eva/plugin-renderer @eva/plugin-renderer-text
```

### In Browser
```html
<script src="https://g.alicdn.com/eva/jscdn/1.0.4/EVA.plugin.renderer.text.min.js"></script>

<script src="https://unpkg.com/@eva/plugin-renderer-text@1.0.4/dist/EVA.plugin.renderer.text.min.js"></script>
```

## Usage

```js
import {Game, GameObject} from '@eva/eva.js'
import {RendererSystem} from '@eva/plugin-renderer'
import {Text, TextSystem} from '@eva/plugin-renderer-text'

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1000
    }),
    new TextSystem()
  ]
})

// Here is still considering how to set the width and height of the default scene
game.scene.transform.size = {
  width: 750,
  height: 1000
}

const text = new GameObject('text', {
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
})

text.addComponent(
  new Text({
    text:'Welcome to use EVA interactive game development system! ',
    style: {
      fontFamily:'Arial',
      fontSize: 36,
      fontStyle:'italic',
      fontWeight:'bold',
      fill: ['#b35d9e','#84c35f','#ebe44f'], // gradient
      fillGradientType: 1,
      fillGradientStops: [0.1, 0.4],
      stroke:'#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor:'#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI/6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 400,
      breakWords: true
    }
  })
)
```

## Options

### text: `string`

Displayed text

### style

| Name                 | Type                         | Default           | Description                                                                                                                                                                                                                                              |
| -------------------- | ---------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `align`              | string                       | 'left'            | optional For multi-line text ('left','center' or'right'), single-line text does not take effect                                                                                                                                                          |
| `breakWords`         | boolean                      | false             | optional Whether to break in the middle of a word                                                                                                                                                                                                        |
| `dropShadow`         | boolean                      | false             | optional Set text shadow                                                                                                                                                                                                                                 |
| `dropShadowAlpha`    | number                       | 1                 | optional The transparency of the text shadow                                                                                                                                                                                                             |
| `dropShadowAngle`    | number                       | Math.PI/6         | optional Text shadow angle                                                                                                                                                                                                                               |
| `dropShadowBlur`     | number                       | 0                 | optional Text shadow blur degree                                                                                                                                                                                                                         |
| `dropShadowColor`    | string &#124; number         | 'black'           | optional Text shadow color, such as'red','#00FF00'                                                                                                                                                                                                       |
| `dropShadowDistance` | number                       | 5                 | optional Text shadow distance                                                                                                                                                                                                                            |
| `fill`               | string                       | 'black'           | optional Text color, can be gradient'red','#00FF00'. Passing in a color array will display the gradient color ['#000000','#FFFFFF']                                                                                                                      |
| `fillGradientType`   | number                       | 'LINEAR_VERTICAL' | optional If the text color is a gradient, you can set a horizontal or vertical gradient, horizontal gradient: LINEAR_VERTICAL vertical gradient: LINEAR_HORIZONTAL                                                                                       |
| `fillGradientStops`  | Array.<number>               |                   | optional If the text color is gradient, you can set the anchor point of each color, if not set, it will be divided equally                                                                                                                               |
| `fontFamily`         | string &#124; Array.<string> | 'Arial'           | optional font                                                                                                                                                                                                                                            |
| `fontSize`           | number &#124; string         | 26                | optional Font size (if it is a number, it will be converted to pixels, you can use a string: '26px','20pt','160%' or '1.6em')                                                                                                                            |
| `fontStyle`          | string                       | 'normal'          | optional font style ('normal','italic' or'oblique')                                                                                                                                                                                                      |
| `fontVariant`        | string                       | 'normal'          | optional font change ('normal' or'small-caps')                                                                                                                                                                                                           |
| `fontWeight`         | string                       | 'normal'          | optional font bold ('normal','bold','bolder','lighter' and '100', '200', '300', '400', '500 ', '600', '700', 800' or '900')                                                                                                                              |
| `leading`            | number                       | 0                 | optional Line spacing                                                                                                                                                                                                                                    |
| `letterSpacing`      | number                       | 0                 | optional The distance before the paragraph                                                                                                                                                                                                               |
| `lineHeight`         | number                       |                   | optional line height                                                                                                                                                                                                                                     |
| `lineJoin`           | string                       | 'miter'           | optional Corner style type values ​​"miter" (creates a sharp corner), "round" (creates a round corner) or "bevel" (creates a squared corner).                                                                                                            |
| `miterLimit`         | number                       | 10                | When optionallineJoin is miter, using this attribute can reduce the sharpness of rendered text                                                                                                                                                           |
| `padding`            | number                       | 0                 | optional Some fonts will be cropped, add padding to solve this problem                                                                                                                                                                                   |
| `stroke`             | string &#124; number         | 'black'           | optional Stroke'blue','#FCFF00'                                                                                                                                                                                                                          |
| `strokeThickness`    | number                       | 0                 | optional Stroke thickness                                                                                                                                                                                                                                |
| `trim`               | boolean                      | false             | optional Remove transparent border                                                                                                                                                                                                                       |
| `textBaseline`       | string                       | 'alphabetic'      | optional Text Baseline                                                                                                                                                                                                                                   |
| `whiteSpace`         | string                       | 'pre'             | optional Set the logic of line breaks, "normal" normal logical line breaks, "pre" retains blank character sequences, but normal line breaks, "pre-line" merges blank character sequences, but keeps them Newline character. Requires wordWrap to be true |
| `wordWrap`           | boolean                      | false             | optional Need to wrap                                                                                                                                                                                                                                    |
| `wordWrapWidth`      | number                       | 100               | optional Wrap beyond the change width                                                                                                                                                                                                                    |

<br/>
<br/>
<br/>
<br/>
<br/>