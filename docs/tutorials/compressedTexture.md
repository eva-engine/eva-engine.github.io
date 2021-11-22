compressedTexture.md# Use of texture compression format

> Eva.js supports texture compression format starting from 1.2.0

## What is the texture compression format
Image file formats, such as PNG/JPG/Webp, are special encoding methods for storing image information. They can only be stored in the hard disk or memory, and cannot be directly recognized by the GPU.

The texture compression format is a format that the GPU can directly read and display, so that images can be rendered without decompression, saving a lot of memory.

Some examples of practical texture compression systems are S3 Texture Compression (S3TC), PVRTC, Ericsson Texture Compression (ETC) and Adaptive Scalable Texture Compression (ASTC); these may be supported by special function units in modern Graphics processing units.


## Usage
The texture compression format file will be used for the resources that need to be rendered, such as pictures, skeletal animation, frame animation, etc., when using, only need to add the corresponding url when loading the resource, **do not need to perform operations when adding components **.

For example, when we render an image in a texture compression format, we need to add a texture field to the original image attribute, and fill in the type and address of the texture compression resource.

Eva.js selects the texture compression format supported by the current device in order to use.

Original resource loading scheme
```js
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

Resource loading using compressed textures

```js
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

Because PVRTC requires that the height and width of the texture must be an integer power of 2, the minimum is 8, and it must be square, so the size of the picture usually changes when it is compressed.

In resources such as Spine/Dragonbone/Sprite/SpriteAnimation, files that use pixels to describe the location of the picture in the atlas are used on the changed picture size, causing rendering problems, so add pictures to the texture description information The original width and height solve this problem.

E.g:

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

## Compressed texture generation
You can use [Texture Compressor](https://www.npmjs.com/package/texture-compressor) to generate compressed textures.

In Eva.js, a compressed texture with premultiplied alpha is needed.

*Alibaba intranet users can use EVAStore to generate directly. *


<br/>