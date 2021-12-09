# 纹理压缩格式的使用

> Eva.js 从1.2.0开始支持纹理压缩格式

## 纹理压缩格式是什么
常见的图片文件格式，比如PNG/JPG/Webp等，是为了存储图像信息的特殊编码方式，只能存在硬盘中或内存中，无法被GPU直接识别。

纹理压缩格式，是一种GPU能直接读取并显示的格式，使得图像无需解压即可进行渲染，节约大量的内存。

常见的纹理压缩格式有S3TC/PVRTC/ETC/ASTC，它们在特定的GPU中被支持。所以不同的设备会支持不同的纹理压缩格式。


## 使用
纹理压缩格式文件将会被使用在需要渲染的资源上，例如图片、骨骼动画、帧动画等等，使用时只需要在加载资源的时候添加对应的url，**不需要在添加组件时做操作**。

例如我们渲染使用纹理压缩格式的一张图片，需要在原本的image属性里添加texture字段，里面填写纹理压缩资源的类型和地址。

Eva.js 按照顺序选择当前设备支持的纹理压缩格式使用。

原本的资源加载方案
```js
// 添加图片资源
resource.addResource([
  {
    name: 'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/imgextra/i1/O1CN01376pu91tylcmKqXIt_!!6000000005971-2-tps-658-1152.png',
      }
    },
    preload: true
  }
])
```

使用压缩纹理的资源加载

```js
// 添加图片资源
resource.addResource([
  {
    name: 'imageName',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/imgextra/i1/O1CN01376pu91tylcmKqXIt_!!6000000005971-2-tps-658-1152.png',
        texture: [{
          type: 'astc',
          url: 'https://g.alicdn.com/eva-assets/d56001c3aefd0d8b069b1f0c4f3d2aec/0.0.1/tmp/08056/image.astc.ktx'
        },
        {
          type: 'pvrtc',
          url: 'https://g.alicdn.com/eva-assets/7a2317b549332834a2bd491e9ce9324a/0.0.1/tmp/835e3/image.pvrtc.ktx'
        }, {
          type: 'etc',
          url: 'https://g.alicdn.com/eva-assets/910246f8f31588bca8199896272b0767/0.0.1/tmp/371ff/image.etc.ktx'
        }]
      }
    },
    preload: true
  }
])
```

因为 PVRTC 它要求纹理的高、宽必须都是2的整数次幂，最小为8，并且必须是正方形，所以在压缩时，通常会变化图片的尺寸。

在Spine/Dragonbone/Sprite/SpriteAnimation等资源中，里面使用了像素来描述图片所在图集中的位置的文件，在变化后的图片尺寸上使用，导致渲染出现问题，所以，在texture描述信息上添加图片原本的宽高来解决这个问题。

例如：

```js
resource.addResource([{
  name: 'fruit',
  type: RESOURCE_TYPE.SPRITE_ANIMATION,
  src: {
    image: {
      type: 'png',
      url: 'cut',
      texture: [
        {
          type: 'pvrtc',
          url: './cut.pvrtc.ktx',
          size: {
            width: 377,
            height: 1070
          }
        },
        {
          type: 'astc',
          url: './cut.astc.ktx'
        },
        {
          type: 'etc',
          url: './cut.etc.ktx'
        },
        {
          type: 's3tc',
          url: './cut.s3tc.ktx'
        }
      ]
    },
    json: {
      type: 'json',
      url: 'https://gw.alicdn.com/mt/TB1qCvumsyYBuNkSnfoXXcWgVXa.json',
    },
  },
  preload: false,
}])
```

## 压缩纹理生成

可以使用 [Texture Compressor](https://github.com/eva-engine/texture-compressor) 生成压缩纹理。

注意，如果自行生成压缩纹理，需要使用alpha预乘的压缩纹理。

*阿里巴巴内网用户可以使用EVAStore直接生成。*


<br/>