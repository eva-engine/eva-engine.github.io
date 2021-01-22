# 精灵图（雪碧图）

> 使用前需要安装渲染器

## Demo
[https://eva.alibaba-inc.com/playground/sprite](https://eva.alibaba-inc.com/playground/sprite)
## 介绍
精灵图是将多张图片打包到一张图片中，他可以实现纹理的合并，减少GPU和CPU通讯次数提升性能，也可以减少HTTP请求，提高加载速度。


EVAJS 对接的精灵图类型是用[EVA Store](https://eva.alibaba-inc.com/assets)进行制作的，请到EVAStore进行精灵图制作


## Member
### resource: `String`
资源名称
### spriteName： `String` 
对应的图片名称


## 注意
在手淘中使用精灵图需要给图片url添加 `?getAvatar` 属性，这样能够防止手淘图片库自动压缩图片导致图片与贴图描述文件无法对齐产生报错。
