# Development based on CDN

Based on CDN development, we recommend using [start-demo-with-cdn](https://github.com/eva-engine/start-demo-with-cdn), this scaffolding uses the Externals capabilities of Webpack, and Eva. The js package is introduced by way of CDN.

## Introduce

If you want to import Eva.js in the form of CDN, you can use unpkg/jsdelivr to import it.

The following is the introduction plan of @eva/eva.js

unpkg:

```html
<script src="https://unpkg.com/browse/@eva/eva.js@1.x/dist/EVA.min.js"></script>
```

jsdelivr:
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/eva.js@1.x/dist/EVA.min.js"></script>
```

A compressed version and a debug version are provided in the dist directory. Remove the .min and use the debug version

unpkg:
```html
<script src="https://unpkg.com/browse/@eva/eva.js@1.x/dist/EVA.js"></script>
```
jsdelivr:
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/eva.js@1.x/dist/EVA.js"></script>
```


If you need to introduce different versions of Eva.js, please go to [unpkg official website](https://unpkg.com/) / [jsdelivr official website](https://www.jsdelivr.com/) to view the plan for details

## Use of plugins
Each plug-in of Eva.js is an npm package, so each plug-in needs to introduce a cdn file

For example: image plugin

unpkg:
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.js"></script>
```

jsdelivr:
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.js"></script>
```

## Render
The rendering of Eva.js v1.x version is provided by PixiJS, so you need to introduce PixiJS cdn first.
Currently using the version of pixi4.x
```html
<script src="https://unpkg.com/pixi.js@4.8.9/dist/pixi.min.js"></script>
```

The rendering of Eva.js v1.x requires a layer of adapter support, so it also needs to introduce renderer-adapter
```html
<script src="//unpkg.com/@eva/renderer-adapter@1.1.x/dist/EVA.rendererAdapter.min.js"></script>
```

So the cdn files needed to render a complete picture are:

```html
<script src="https://unpkg.com/browse/@eva/eva.js@1.x/dist/EVA.js"></script>
<script src="https:////unpkg.com/pixi.js@4.8.9/dist/pixi.min.js"></script>
<script src="//unpkg.com/@eva/renderer-adapter@1.x/dist/EVA.rendererAdapter.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.js"></script>
```

## Encoding

When developing with CDN, we hung the variables and classes of Eva.js on the window.
Let’s take a simple example. Let’s assume that the CDN files needed for the image have been introduced.

```js
const {Game, GameObject, resource, RESOURCE_TYPE} = EVA;
const {RendererSystem} = EVA.plugin.renderer;
const {Img, ImgSystem} = EVA.plugin.renderer.img;
resource.addResource([
  {
    name:'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type:'png',
        url:
          'https:////gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png',
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
    new ImgSystem(),
  ],
});

const image = new GameObject('image', {
  size: {width: 300, height: 300 },
  origin: {x: 0, y: 0 },
  position: {
    x: 100,
    y: 100,
  }
});

image.addComponent(
  new Img({
    resource:'imageName',
  }),
);

game.scene.addChild(image);
```

## rule

We can find that the rules for variable mounting are similar to those for npm package names, where @eva/eva.js corresponds to EVA
The rest of the plugins are also mounted on the EVA variable

For example:

@eva/plugin-transition -> EVA.plugin.transition

@eva/plugin-renderer -> EVA.plugin.renderer

@eva/plugin-renderer-img -> EVA.plugin.renderer.img

@eva/plugin-renderer-sprite -> EVA.plugin.renderer.sprite

As we can see, in fact, `-` has become `.`

There are hyphens in the component name, such as `nine-patch` / `sprite-animation` / `tiling-sprite` We write the component name in camel case

@eva/plugin-renderer-nine-patch -> EVA.plugin.renderer.ninePatch

@eva/plugin-renderer-sprite-animation -> EVA.plugin.renderer.spriteAnimation

@eva/plugin-renderer-tiling-sprite -> EVA.plugin.renderer.tilingSprite

EvaX components are the most special

@eva/plugin-evax -> EVA.plugin.EVAX

## Conversion method
Can be converted by the following methods

```js
function transform(pkgName) {
  if (pkgName ==='@eva/eva.js') {
      return'EVA';
  } else if (pkgName ==='@eva/plugin-evax') {
      return'EVA.plugin.EVAX'
  } else if (pkgName.indexOf('@eva/plugin') === 0) {
      let name = pkgName.substring(12);
      name = name.replace('-','.')
      const [a, b] = name.split('-')
      if (b) {
        name = a+b[0].toUpperCase()+b.substring(1)
      }
      return `EVA.plugin.${name}`;
  }
}

console.log(transform('@eva/eva.js'))
console.log(transform('@eva/plugin-transition'))
console.log(transform('@eva/plugin-renderer'))
console.log(transform('@eva/plugin-renderer-img'))
console.log(transform('@eva/plugin-renderer-sprite-animation'))
console.log(transform('@eva/plugin-renderer-tiling-sprite'))
console.log(transform('@eva/plugin-evax'))
```