# Eva.js 常见问题以及解决方案

> 欢迎大家贡献常见问题和小技巧

## 注意
- 在使用Eva.js的时候，要保证官方仓库里的所有的插件和@eva/eva.js的npm包版本号保持一致。
- 一般图片尺寸建议在 1024*2048 以内，不然低性能会出现图片无法渲染问题。
- 一般组件创建后，会在第二帧生效，例如图片组件添加到游戏对象后，会在第二帧才会真正的创建图片的渲染对象，所有组件的属性修改一般都要在第二帧生效。
- 目前不支持多个 Game 实例，如果想渲染到多个 Canvas 可食用`Game.prototype.loadScene`

## 常见问题
- eva.js.esm.js:1431 can only add System
- Uncaught Error: addComponent recieve Component and Component Constructor

以上两个问题可能是引用了多个版本的 eva.js 导致此问题，保证 package.json 里面 eva 仓库内的 npm 包版本号一致。
一般遇到这种问题，保持 package.json 版本号一致，然后重装一下所有的npm包即可解决。

- Texture Error: frame does not fit inside the base Texture dimensions

这个问题是因为帧动画的图片的宽高和 json 描述文件里面的宽高不一致导致的。一般图片尺寸建议在 1024*2048 以内。

- ios10 以下图片/帧动画不显示

图片尺寸过大，导致显存问题，降低图片尺寸可解决，一般图片尺寸建议在 1024*2048 以内。

- lottie动画不支持图片蒙层

可以将图片改成矢量形状

- lottie动画不支持文字图层

暂时可以使用图片解决