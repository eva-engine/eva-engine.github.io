# 九宫格

> 使用前需要安装渲染器

## Demo
[https://eva.alibaba-inc.com/playground/ninePatch](https://eva.alibaba-inc.com/playground/ninePatch)


## 介绍
在互动游戏开发中，我们经常会遇到一些尺寸不固定，但是周围或四遍样式不允许缩放变形的图片。
例如消息气泡，如果直接设置宽高会将整个气泡图片拉变形。
下图中，第二个是通过九宫格创建的气泡，最后一个是直接把图片拉伸创建的，前两个明显符合预期。


![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2020/png/65745/1604844479065-65a38e22-ec4d-47e1-9cf8-26f424fd161f.png#align=left&display=inline&height=597&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1194&originWidth=894&size=48023&status=done&style=none&width=447)


## Member
### resource `string` 
资源名称
### spriteName
如果资源类型是Sprite可设置此属性
### leftWidth
对应下图A
### topHeight
对应下图C
### rightWidth
对应下图B
### bottomHeight
对应下图D


![image.png](https://cdn.nlark.com/yuque/0/2020/png/107226/1585590941584-0ddb09bf-2e75-4fac-ab05-ae7311733ca7.png#align=left&display=inline&height=306&margin=%5Bobject%20Object%5D&name=image.png&originHeight=612&originWidth=932&size=91970&status=done&style=none&width=466)


