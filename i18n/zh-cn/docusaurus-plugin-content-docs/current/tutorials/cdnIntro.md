# 基于 CDN 开发

基于 CDN 开发，我们推荐使用 [start-demo-with-cdn](https://github.com/eva-engine/start-demo-with-cdn)，这个脚手架使用了 Webpack 的 Externals 能力，将 Eva.js 包用 CDN 的方式引入。

## 介绍

如果希望通过 CDN 的形式引入 Eva.js，可以使用 unpkg/jsdelivr 进行引入。

以下是 @eva/eva.js 的引入方案

unpkg：

```html
<script src="https://unpkg.com/browse/@eva/eva.js@1.x/dist/EVA.min.js"></script>
```

jsdelivr：
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/eva.js@1.x/dist/EVA.min.js"></script>
```

dist目录下提供了压缩版本和调试版本。去掉.min使用调试版本

unpkg：
```html
<script src="https://unpkg.com/browse/@eva/eva.js@1.x/dist/EVA.js"></script>
```
jsdelivr：
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/eva.js@1.x/dist/EVA.js"></script>
```


如需引入不同版本的Eva.js，详情请进入[unpkg 官网](https://unpkg.com/) / [jsdelivr 官网](https://www.jsdelivr.com/)查看方案

## 插件的使用
Eva.js 的每个插件都是一个 npm 包，所以每个插件都需要引入一个cdn文件

例如：图片插件

unpkg：
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.js"></script>
```

jsdelivr：
```html
<script src="https://cdn.jsdelivr.net/npm/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.js"></script>
```

## 渲染
Eva.js v1.x 版本的渲染是由 PixiJS 提供的，所以需要先引入 PixiJS cdn。
目前使用的是pixi4.x的版本
```html
<script src="https://unpkg.com/pixi.js@4.8.9/dist/pixi.min.js"></script>
```

Eva.js v1.x 的渲染需要一层adapter支持，所以也需要引入renderer-adapter
```html
<script src="//unpkg.com/@eva/renderer-adapter@1.1.x/dist/EVA.rendererAdapter.min.js"></script>
```

所以渲染一张图片完整所需要的cdn文件有：

```html
<canvas id="canvas" style="width: 100%;height: auto"></canvas>

<script src="https://unpkg.com/@eva/eva.js@1.x/dist/EVA.min.js"></script>
<script src="https://unpkg.com/pixi.js@4.8.9/dist/pixi.min.js"></script>
<script src="https://unpkg.com/@eva/renderer-adapter@1.x/dist/EVA.rendererAdapter.min.js"></script>
<script src="https://unpkg.com/@eva/plugin-renderer@1.x/dist/EVA.plugin.renderer.min.js"></script>
<script src="https://unpkg.com/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.min.js"></script></head>
```

## 编码

使用 CDN 开发时，我们把 Eva.js 的各个变量和类挂在了window上面。
先举个简单的例子，我们假设已经引入了图片所需要的 CDN 文件

```js
const { Game, GameObject, resource, RESOURCE_TYPE } = EVA;
const { RendererSystem } = EVA.plugin.renderer;
const { Img, ImgSystem } = EVA.plugin.renderer.img;
resource.addResource([
  {
    name: 'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
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
  size: { width: 300, height: 300 },
  origin: { x: 0, y: 0 },
  position: {
    x: 100,
    y: 100,
  }
});

image.addComponent(
  new Img({
    resource: 'imageName',
  }),
);

game.scene.addChild(image);
```

## 规则

我们可以发现，变量挂载的规则和npm包名的规则类似，其中 @eva/eva.js 对应的是 EVA
其余插件也的都挂载到了 EVA 变量上

例如:

@eva/plugin-transition -> EVA.plugin.transition

@eva/plugin-renderer -> EVA.plugin.renderer

@eva/plugin-renderer-img -> EVA.plugin.renderer.img

@eva/plugin-renderer-sprite -> EVA.plugin.renderer.sprite

我们可以看到，其实把 `-` 变成了 `.`

组件名字中有连字符的，例如 `nine-patch` / `sprite-animation` / `tiling-sprite` 我们把组件名写成了驼峰的形式

@eva/plugin-renderer-nine-patch -> EVA.plugin.renderer.ninePatch

@eva/plugin-renderer-sprite-animation -> EVA.plugin.renderer.spriteAnimation

@eva/plugin-renderer-tiling-sprite -> EVA.plugin.renderer.tilingSprite

EvaX 组件最为特殊

@eva/plugin-evax -> EVA.plugin.EVAX

## 转换方法
可以通过以下方法进行转换

```js
function transform(pkgName) {
  if (pkgName === '@eva/eva.js') {
      return 'EVA';
  } else if (pkgName === '@eva/plugin-evax') {
      return 'EVA.plugin.EVAX'
  } else if (pkgName.indexOf('@eva/plugin') === 0) {
      let name = pkgName.substring(12);
      name = name.replace('-', '.')
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