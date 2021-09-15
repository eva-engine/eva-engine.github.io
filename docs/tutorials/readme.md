# Eva.js common problems and solutions

> Everyone is welcome to contribute FAQs and tips

## Notice
- When using Eva.js, make sure that all the plugins in the official repository are consistent with the npm package version number of @eva/eva.js.
- The general picture size is recommended to be within 1024*2048, otherwise the picture cannot be rendered due to low performance.
- After a general component is created, it will take effect on the second frame. For example, after a picture component is added to a game object, the rendering object of the picture will be created in the second frame. The property modification of all components generally takes effect on the second frame .
- Currently does not support multiple Game instances, if you want to render to multiple Canvas, you can eat `Game.prototype.loadScene`

## common problem
- eva.js.esm.js:1431 can only add System
- Uncaught Error: addComponent recieve Component and Component Constructor

The above two problems may be caused by multiple versions of eva.js. Ensure that the npm package version numbers in the eva warehouse in package.json are consistent.
Generally, if you encounter this kind of problem, keep the package.json version number the same, and then reinstall all the npm packages to solve it.

- Texture Error: frame does not fit inside the base Texture dimensions

This problem is caused by the inconsistency between the width and height of the image of the frame animation and the width and height in the json description file. The general picture size is recommended to be within 1024*2048.

- ios10 The following pictures/frame animations are not displayed

The picture size is too large, which can cause video memory problems. It can be solved by reducing the picture size. Generally, the picture size is recommended to be within 1024*2048.

- Lottie animation does not support image masking

You can change the picture into a vector shape

- lottie animation does not support text layer

Can be solved with pictures.