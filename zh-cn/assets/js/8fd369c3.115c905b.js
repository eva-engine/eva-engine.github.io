"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42519],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,l(l({ref:n},o),{},{components:t})):r.createElement(g,l({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33695:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return o},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],p={},s="\u57fa\u4e8e CDN \u5f00\u53d1",c={unversionedId:"tutorials/cdnIntro",id:"tutorials/cdnIntro",isDocsHomePage:!1,title:"\u57fa\u4e8e CDN \u5f00\u53d1",description:"\u57fa\u4e8e CDN \u5f00\u53d1\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 start-demo-with-cdn\uff0c\u8fd9\u4e2a\u811a\u624b\u67b6\u4f7f\u7528\u4e86 Webpack \u7684 Externals \u80fd\u529b\uff0c\u5c06 Eva.js \u5305\u7528 CDN \u7684\u65b9\u5f0f\u5f15\u5165\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/cdnIntro.md",sourceDirName:"tutorials",slug:"/tutorials/cdnIntro",permalink:"/zh-cn/docs/tutorials/cdnIntro",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/cdnIntro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u5f00\u53d1",permalink:"/zh-cn/docs/tutorials/pluginDevelop"}},o=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2},{value:"\u63d2\u4ef6\u7684\u4f7f\u7528",id:"\u63d2\u4ef6\u7684\u4f7f\u7528",children:[],level:2},{value:"\u6e32\u67d3",id:"\u6e32\u67d3",children:[],level:2},{value:"\u7f16\u7801",id:"\u7f16\u7801",children:[],level:2},{value:"\u89c4\u5219",id:"\u89c4\u5219",children:[],level:2},{value:"\u8f6c\u6362\u65b9\u6cd5",id:"\u8f6c\u6362\u65b9\u6cd5",children:[],level:2}],u={toc:o};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u57fa\u4e8e-cdn-\u5f00\u53d1"},"\u57fa\u4e8e CDN \u5f00\u53d1"),(0,i.kt)("p",null,"\u57fa\u4e8e CDN \u5f00\u53d1\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eva-engine/start-demo-with-cdn"},"start-demo-with-cdn"),"\uff0c\u8fd9\u4e2a\u811a\u624b\u67b6\u4f7f\u7528\u4e86 Webpack \u7684 Externals \u80fd\u529b\uff0c\u5c06 Eva.js \u5305\u7528 CDN \u7684\u65b9\u5f0f\u5f15\u5165\u3002"),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u901a\u8fc7 CDN \u7684\u5f62\u5f0f\u5f15\u5165 Eva.js\uff0c\u53ef\u4ee5\u4f7f\u7528 unpkg/jsdelivr \u8fdb\u884c\u5f15\u5165\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f @eva/eva.js \u7684\u5f15\u5165\u65b9\u6848"),(0,i.kt)("p",null,"unpkg\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/browse/@eva/eva.js@1.x/dist/EVA.min.js"><\/script>\n')),(0,i.kt)("p",null,"jsdelivr\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@eva/eva.js@1.x/dist/EVA.min.js"><\/script>\n')),(0,i.kt)("p",null,"dist\u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86\u538b\u7f29\u7248\u672c\u548c\u8c03\u8bd5\u7248\u672c\u3002\u53bb\u6389.min\u4f7f\u7528\u8c03\u8bd5\u7248\u672c"),(0,i.kt)("p",null,"unpkg\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/browse/@eva/eva.js@1.x/dist/EVA.js"><\/script>\n')),(0,i.kt)("p",null,"jsdelivr\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@eva/eva.js@1.x/dist/EVA.js"><\/script>\n')),(0,i.kt)("p",null,"\u5982\u9700\u5f15\u5165\u4e0d\u540c\u7248\u672c\u7684Eva.js\uff0c\u8be6\u60c5\u8bf7\u8fdb\u5165",(0,i.kt)("a",{parentName:"p",href:"https://unpkg.com/"},"unpkg \u5b98\u7f51")," / ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/"},"jsdelivr \u5b98\u7f51"),"\u67e5\u770b\u65b9\u6848"),(0,i.kt)("h2",{id:"\u63d2\u4ef6\u7684\u4f7f\u7528"},"\u63d2\u4ef6\u7684\u4f7f\u7528"),(0,i.kt)("p",null,"Eva.js \u7684\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u662f\u4e00\u4e2a npm \u5305\uff0c\u6240\u4ee5\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u9700\u8981\u5f15\u5165\u4e00\u4e2acdn\u6587\u4ef6"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a\u56fe\u7247\u63d2\u4ef6"),(0,i.kt)("p",null,"unpkg\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.js"><\/script>\n')),(0,i.kt)("p",null,"jsdelivr\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.js"><\/script>\n')),(0,i.kt)("h2",{id:"\u6e32\u67d3"},"\u6e32\u67d3"),(0,i.kt)("p",null,"Eva.js v1.x \u7248\u672c\u7684\u6e32\u67d3\u662f\u7531 PixiJS \u63d0\u4f9b\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5148\u5f15\u5165 PixiJS cdn\u3002\n\u76ee\u524d\u4f7f\u7528\u7684\u662fpixi4.x\u7684\u7248\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/pixi.js@4.8.9/dist/pixi.min.js"><\/script>\n')),(0,i.kt)("p",null,"Eva.js v1.x \u7684\u6e32\u67d3\u9700\u8981\u4e00\u5c42adapter\u652f\u6301\uff0c\u6240\u4ee5\u4e5f\u9700\u8981\u5f15\u5165renderer-adapter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="//unpkg.com/@eva/renderer-adapter@1.1.x/dist/EVA.rendererAdapter.min.js"><\/script>\n')),(0,i.kt)("p",null,"\u6240\u4ee5\u6e32\u67d3\u4e00\u5f20\u56fe\u7247\u5b8c\u6574\u6240\u9700\u8981\u7684cdn\u6587\u4ef6\u6709\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<canvas id="canvas" style="width: 100%;height: auto"></canvas>\n\n<script src="https://unpkg.com/@eva/eva.js@1.x/dist/EVA.min.js"><\/script>\n<script src="https://unpkg.com/pixi.js@4.8.9/dist/pixi.min.js"><\/script>\n<script src="https://unpkg.com/@eva/renderer-adapter@1.x/dist/EVA.rendererAdapter.min.js"><\/script>\n<script src="https://unpkg.com/@eva/plugin-renderer@1.x/dist/EVA.plugin.renderer.min.js"><\/script>\n<script src="https://unpkg.com/@eva/plugin-renderer-img@1.x/dist/EVA.plugin.renderer.img.min.js"><\/script></head>\n')),(0,i.kt)("h2",{id:"\u7f16\u7801"},"\u7f16\u7801"),(0,i.kt)("p",null,"\u4f7f\u7528 CDN \u5f00\u53d1\u65f6\uff0c\u6211\u4eec\u628a Eva.js \u7684\u5404\u4e2a\u53d8\u91cf\u548c\u7c7b\u6302\u5728\u4e86window\u4e0a\u9762\u3002\n\u5148\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u5047\u8bbe\u5df2\u7ecf\u5f15\u5165\u4e86\u56fe\u7247\u6240\u9700\u8981\u7684 CDN \u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { Game, GameObject, resource, RESOURCE_TYPE } = EVA;\nconst { RendererSystem } = EVA.plugin.renderer;\nconst { Img, ImgSystem } = EVA.plugin.renderer.img;\nresource.addResource([\n  {\n    name: 'imageName',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url:\n          'https:////gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png',\n      },\n    },\n    preload: true,\n  },\n]);\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000,\n    }),\n    new ImgSystem(),\n  ],\n});\n\nconst image = new GameObject('image', {\n  size: { width: 300, height: 300 },\n  origin: { x: 0, y: 0 },\n  position: {\n    x: 100,\n    y: 100,\n  }\n});\n\nimage.addComponent(\n  new Img({\n    resource: 'imageName',\n  }),\n);\n\ngame.scene.addChild(image);\n")),(0,i.kt)("h2",{id:"\u89c4\u5219"},"\u89c4\u5219"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff0c\u53d8\u91cf\u6302\u8f7d\u7684\u89c4\u5219\u548cnpm\u5305\u540d\u7684\u89c4\u5219\u7c7b\u4f3c\uff0c\u5176\u4e2d @eva/eva.js \u5bf9\u5e94\u7684\u662f EVA\n\u5176\u4f59\u63d2\u4ef6\u4e5f\u7684\u90fd\u6302\u8f7d\u5230\u4e86 EVA \u53d8\u91cf\u4e0a"),(0,i.kt)("p",null,"\u4f8b\u5982:"),(0,i.kt)("p",null,"@eva/plugin-transition -> EVA.plugin.transition"),(0,i.kt)("p",null,"@eva/plugin-renderer -> EVA.plugin.renderer"),(0,i.kt)("p",null,"@eva/plugin-renderer-img -> EVA.plugin.renderer.img"),(0,i.kt)("p",null,"@eva/plugin-renderer-sprite -> EVA.plugin.renderer.sprite"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5176\u5b9e\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," \u53d8\u6210\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},".")),(0,i.kt)("p",null,"\u7ec4\u4ef6\u540d\u5b57\u4e2d\u6709\u8fde\u5b57\u7b26\u7684\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"nine-patch")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"sprite-animation")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"tiling-sprite")," \u6211\u4eec\u628a\u7ec4\u4ef6\u540d\u5199\u6210\u4e86\u9a7c\u5cf0\u7684\u5f62\u5f0f"),(0,i.kt)("p",null,"@eva/plugin-renderer-nine-patch -> EVA.plugin.renderer.ninePatch"),(0,i.kt)("p",null,"@eva/plugin-renderer-sprite-animation -> EVA.plugin.renderer.spriteAnimation"),(0,i.kt)("p",null,"@eva/plugin-renderer-tiling-sprite -> EVA.plugin.renderer.tilingSprite"),(0,i.kt)("p",null,"EvaX \u7ec4\u4ef6\u6700\u4e3a\u7279\u6b8a"),(0,i.kt)("p",null,"@eva/plugin-evax -> EVA.plugin.EVAX"),(0,i.kt)("h2",{id:"\u8f6c\u6362\u65b9\u6cd5"},"\u8f6c\u6362\u65b9\u6cd5"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u8fdb\u884c\u8f6c\u6362"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function transform(pkgName) {\n  if (pkgName === '@eva/eva.js') {\n      return 'EVA';\n  } else if (pkgName === '@eva/plugin-evax') {\n      return 'EVA.plugin.EVAX'\n  } else if (pkgName.indexOf('@eva/plugin') === 0) {\n      let name = pkgName.substring(12);\n      name = name.replace('-', '.')\n      const [a, b] = name.split('-')\n      if (b) {\n        name = a+b[0].toUpperCase()+b.substring(1)\n      }\n      return `EVA.plugin.${name}`;\n  }\n}\n\nconsole.log(transform('@eva/eva.js'))\nconsole.log(transform('@eva/plugin-transition'))\nconsole.log(transform('@eva/plugin-renderer'))\nconsole.log(transform('@eva/plugin-renderer-img'))\nconsole.log(transform('@eva/plugin-renderer-sprite-animation'))\nconsole.log(transform('@eva/plugin-renderer-tiling-sprite'))\nconsole.log(transform('@eva/plugin-evax'))\n")))}d.isMDXComponent=!0}}]);