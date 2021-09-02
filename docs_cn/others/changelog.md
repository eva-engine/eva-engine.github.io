### 1.1.6
**Feature**
- 在console展示Eva.js版本

**Fixed**
- Mask 销毁错误 (#122)
- Sound 游戏暂停后开始不能继续 #119 (#123)
- 移除 Object.values
- Spine38 d.ts (#126)
- A11y 参数bug (#127)

### 1.1.4
**Feature**
- Add types for systems
**Fixed**
- Matter js time slow

### 1.1.3
**Fixed**
- 解决inspector-decorator 的cdn依赖问题

### 1.1.2
**Feature**
- 提供 DevTool 相关能力 (#88) 
- 优化 vite3 TS 提示 (#95)
**Fixed**  
- Event 类型提示 (#94)
- MatterJS mouse.open=true 报错 (#101)
- Transition play 方法类型定义 (#99)
- 解决编译时问题，跳过非当前仓库包的package版本设置 767e30
- MatterJS  isTest=false 报错 (#113)
- 修复spine38播放带有mesh动作异常 (#115) 
- spine 换皮肤bug(#97)


### 1.1.1
**Fixed**
- 设置 tsconfig 的 target 为 es5

### 1.1.0
**Feature**
- 给组件添加参数类型提示(#19)
- 在游戏过程中修改画布尺寸(#24)
- 使用 vite 运行开发时 example
**Fixed**
- touchmove 不在游戏对象内也会触发的问题(#10)

### 1.0.13
**Fixed**
- 解决游戏对象销毁导致texture被销毁问题

### 1.0.12
**Feature**
- 增加对 spine3.8 版本对支持

**Fix**
- 解决内存泄漏问题 (#82)

### 1.0.11
**Fixed**
- 停止游戏的时候 transition 动画没有停止

### 1.0.10
**Fixed**
- 销毁 Sound component 后仍然播放 (#60)

### 1.0.9
**Fixed**
- 物理引擎插件创建圆形包围盒时报错 (#65)


### 1.0.8
**Feature**
- 给物理引擎添加等边多边形 (#61)
- 给 SpriteAnimation 添加事件和播放次数 (#52)
- 新增中文Readme

**Fixed**
- 移动 PixiJS 的 ticker 到 LateUpdate #58 (#59)
- 修复丢帧的问题 #25 (#50)
- Try catch checkA11yOpen #48 (#55)
  
### 1.0.7
**Fixed**
* RendererSystem preventScroll 参数Bug [#31](https://github.com/eva-engine/eva.js/pull/31)

### 1.0.6
**Fixed**
* 系统销毁时报错 [#27](https://github.com/eva-engine/eva.js/pull/27)

### 1.0.5
**Fixed**
* Lottie 依赖引入问题 ([#23](https://github.com/eva-engine/eva.js/pull/23))
* Dragonbone 报错问题 ([#21](https://github.com/eva-engine/eva.js/pull/21))
* 更新 Demo 资源跨域问题([#18](https://github.com/eva-engine/eva.js/pull/18))

**Other**
* 更新 guidelines url

### 1.0.4

**新功能**
- 支持Game Object播放[音频](https://eva-engine.gitee.io/#/tutorials/sound) 


### 1.0.3

**新功能**
- resource loader 支持加载 audio arraybuffer
  
**其他**
- 更新 resource loader 测试用例

### 1.0.1

**修复了**
- 将 lodash 更换成 lodash-es 解决编译报错问题

### 1.0.0

**新功能**
- 增加 MatterJS 物理引擎
- 增加 Lottie 插件

### 1.0.0-alpha.10

**修复了**
 - 无障碍插件npm发布问题

### 1.0.0-alpha.9

**新功能**
 - 发布了A11y无障碍化插件 [@eva/plugin-a11y](https://eva.js.org/#/tutorials/a11yPlugin)


### 1.0.0-alpha.8
**修复了**
 - System的name无法设置问题

**新功能**
 - 给事件增加[pointerId](https://eva.js.org/#/tutorials/interactionEvent?id=instance-event39s-arguments)

### 1.0.0-alpha.7
**修复了**
 - System的name无法设置问题

### 1.0.0-alpha.6
**修复了**
 - 修改发布脚本

### 1.0.0-alpha.3
**新功能**
 - 多场景多canvas能力 [文档](https://eva.js.org/#/tutorials/game?id=%e6%b8%b2%e6%9f%93%e5%88%b0%e5%a4%9a%e4%b8%aa-canvas)


### 1.0.0-alpha 
changelog demo
**新功能**
 - 这是 changelog 的范例，每次发布版本按照这个格式网上堆叠；
 - 新增 Lottie 插件，可以在 Eva.js 中使用 Lottie 动画啦。

**改进了**
 - 粒子动画性能提升。

**修复了**
 - 修复了龙骨动画卡顿问题。