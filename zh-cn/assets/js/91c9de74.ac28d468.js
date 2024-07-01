"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35511],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43053:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],a={},c="\u5e73\u94fa\u7cbe\u7075 TilingSprite",p={unversionedId:"tutorials/tilingSpriteComponent",id:"tutorials/tilingSpriteComponent",isDocsHomePage:!1,title:"\u5e73\u94fa\u7cbe\u7075 TilingSprite",description:"\u5728\u4e00\u4e9b\u65e0\u9650\u80cc\u666f\u7684\u6e38\u620f\u4e2d\u53ef\u4ee5\u901a\u8fc7\u5e73\u94fa\u7cbe\u7075\u6765\u5b9e\u73b0\u80cc\u666f\u7684\u65e0\u7f1d\u8854\u63a5\uff0c\u7c7b\u4f3c css \u4e2d\u7684 background-repeat: repeat; \u529f\u80fd\uff0c\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u6e32\u67d3\u5668\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/tilingSpriteComponent.md",sourceDirName:"tutorials",slug:"/tutorials/tilingSpriteComponent",permalink:"/zh-cn/docs/tutorials/tilingSpriteComponent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/tilingSpriteComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e5d\u5bab\u683c NinePatch",permalink:"/zh-cn/docs/tutorials/ninePatchComponent"},next:{title:"\u906e\u6321\u6392\u5e8f\u4e0e\u900f\u660e\u5ea6",permalink:"/zh-cn/docs/tutorials/orderAndTransparent"}},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"resource: <code>String</code>",id:"resource-string",children:[],level:3},{value:"tileScale\uff1a <code>{x: float, y: float}</code>\xa0",id:"tilescale-x-float-y-float",children:[],level:3},{value:"tilePosition\uff1a<code>{x: number, y: number}</code>",id:"tilepositionx-number-y-number",children:[],level:3}],level:2}],s={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e73\u94fa\u7cbe\u7075-tilingsprite"},"\u5e73\u94fa\u7cbe\u7075 TilingSprite"),(0,o.kt)("p",null,"\u5728\u4e00\u4e9b\u65e0\u9650\u80cc\u666f\u7684\u6e38\u620f\u4e2d\u53ef\u4ee5\u901a\u8fc7\u5e73\u94fa\u7cbe\u7075\u6765\u5b9e\u73b0\u80cc\u666f\u7684\u65e0\u7f1d\u8854\u63a5\uff0c\u7c7b\u4f3c css \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"background-repeat: repeat;")," \u529f\u80fd\uff0c\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u6e32\u67d3\u5668\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://eva.js.org/playground/#/tilingSprite"},"Demo")),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-renderer @eva/plugin-renderer-tiling-sprite\n")),(0,o.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-renderer-tiling-sprite@1.2.x/dist/EVA.plugin.renderer.tilingSprite.min.js"><\/script>\n')),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'\nimport { RendererSystem } from '@eva/plugin-renderer'\nimport { TilingSprite, TilingSpriteSystem } from '@eva/plugin-renderer-tiling-sprite'\n\nresource.addResource([\n  {\n    name: 'imageName',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url: 'https://gw.alicdn.com/tfs/TB1t7vtOvb2gK0jSZK9XXaEgFXa-300-431.png'\n      }\n    },\n    preload: true\n  }\n])\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new TilingSpriteSystem()\n  ]\n})\n\nconst tilingSprite = new GameObject('sprite', {\n  size: { width: 750, height: 1000 }\n})\n\ntilingSprite.addComponent(\n  new TilingSprite({\n    resource: 'imageName',\n    tileScale: { x: 0.7, y: 0.7 },\n    tilePosition: { x: 10, y: 40 }\n  })\n)\n\ngame.scene.addChild(tilingSprite)\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"resource-string"},"resource: ",(0,o.kt)("inlineCode",{parentName:"h3"},"String")),(0,o.kt)("p",null,"\u8d44\u6e90\u540d"),(0,o.kt)("h3",{id:"tilescale-x-float-y-float"},"tileScale\uff1a ",(0,o.kt)("inlineCode",{parentName:"h3"},"{x: float, y: float}"),"\xa0"),(0,o.kt)("p",null,"\u7f29\u653e"),(0,o.kt)("h3",{id:"tilepositionx-number-y-number"},"tilePosition\uff1a",(0,o.kt)("inlineCode",{parentName:"h3"},"{x: number, y: number}")),(0,o.kt)("p",null,"\u4f4d\u79fb"))}d.isMDXComponent=!0}}]);