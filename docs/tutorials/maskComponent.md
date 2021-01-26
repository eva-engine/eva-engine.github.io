# 遮罩

> 使用前需要安装渲染器

## Demo
[https://eva.js.org/playground/#/mask](https://eva.js.org/playground/#/mask)



| 类型     | **Type**              | **属性**                          |
| -------- | --------------------- | --------------------------------- |
| 圆形     | MASK_TYPE.Circle      | {style: {x,y,radius}}             |
| 椭圆     | MASK_TYPE.Ellipse     | {style:{x,y,width,height}}        |
| 矩形     | MASK_TYPE.Rect        | {style:{x,y,width,height}}        |
| 圆角矩形 | MASK_TYPE.RoundedRect | {style:{x,y,width,height,radius}} |
| 多边形   | MASK_TYPE.Polygon     | {style: {paths: [x,y,x,y,x,y]}}   |
或
{style: {paths: [{x,y},{x,y},{x,y}]}} |
| 图片 | MASK_TYPE.Img | {resource,style:{x,y,width,height}} |
| 精灵图 | MASK_TYPE.Sprite | {resource,spriteName,style:{x,y,width,height}} |





## Member
### type: `MARK_TYPE` 
### style: `object` 




## 使用方法
```javascript
// 圆形
gameObject.addComponent(new Mask({
	type: MARK_TYPE.Circle,
  style: {
    x: 50,
    y: 50,
    radius: 50
  }
}))

// 多边形
gameObject.addComponent(new Mask({
	type: MARK_TYPE.Polygon,
  style: {
    paths: [{x: 0,y: 0}, {x: 200,y: 0},{x: 200,y: 200},{x: 0, y: 200}]
  }
}))

```
