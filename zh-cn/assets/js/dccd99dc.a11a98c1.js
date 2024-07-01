"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8136],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67136:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s="Transform",u={unversionedId:"tutorials/transformComponent",id:"tutorials/transformComponent",isDocsHomePage:!1,title:"Transform",description:"Transform \u662f\u4e00\u4e2a\u9ed8\u8ba4\u7ec4\u4ef6\uff0c\u6bcf\u4e2a GameObject \u9ed8\u8ba4\u521b\u5efa Transform \u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u7528\u6765\u63a7\u5236\u6e38\u620f\u5bf9\u8c61\u7684\u5c3a\u5bf8\u3001\u4f4d\u7f6e\u3001\u7f29\u653e\u3001\u659c\u5207\u3001\u65cb\u8f6c\u7b49\u5c5e\u6027\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/transformComponent.md",sourceDirName:"tutorials",slug:"/tutorials/transformComponent",permalink:"/zh-cn/docs/tutorials/transformComponent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/transformComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6e38\u620f\u5bf9\u8c61 GameObject",permalink:"/zh-cn/docs/tutorials/gameObject"},next:{title:"\u7eb9\u7406\u538b\u7f29\u683c\u5f0f\u7684\u4f7f\u7528",permalink:"/zh-cn/docs/tutorials/compressedTexture"}},l=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2}],p={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transform"},"Transform"),(0,a.kt)("p",null,"Transform \u662f\u4e00\u4e2a\u9ed8\u8ba4\u7ec4\u4ef6\uff0c\u6bcf\u4e2a GameObject \u9ed8\u8ba4\u521b\u5efa Transform \u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u7528\u6765\u63a7\u5236\u6e38\u620f\u5bf9\u8c61\u7684\u5c3a\u5bf8\u3001\u4f4d\u7f6e\u3001\u7f29\u653e\u3001\u659c\u5207\u3001\u65cb\u8f6c\u7b49\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a Transform \u7ec4\u4ef6\u7684\u53c2\u6570\nconst gameObject = new GameObject('empty', {\n  size: { width: 100, height: 100 }, // \u5c3a\u5bf8\n  position: { x: 0, y: 0 }, // \u4f4d\u79fb\n  origin: { x: 0, y: 0 }, // \u7269\u4f53\u539f\u70b9\uff08\u7269\u4f53\u5185\u90e8\u7684\u4e00\u4e2a\u70b9\uff09\n  anchor: { x: 0, y: 0 }, // \u951a\u70b9\uff0c\u76f8\u5bf9\u4e8e\u7236\u7ea7\u7684\u5bbd\u9ad8\u7684\u6bd4\u7387\u7684\u4e00\u4e2a\u70b9\uff0c\u7269\u4f53\u7684\u539f\u70b9\u4f1a\u76f8\u5bf9\u4e8e\u8fd9\u4e2a\u70b9\u8fdb\u884c\u4f4d\u79fb\n  scale: { x: 1, y: 1 }, // \u7f29\u653e\u6bd4\u4f8b\n  skew: { x: 0, y: 0 }, // \u659c\u5207\u5f27\u5ea6\n  rotation: 0 // \u65cb\u8f6c\u5f27\u5ea6\n})\n")),(0,a.kt)("p",null,"\u56e0\u4e3a transform \u5bf9\u8c61\u975e\u5e38\u5e38\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"gameObject.transform"),"\xa0 \u62ff\u5230\u8be5\u7ec4\u4ef6\uff0c\u4f8b\u5982\u4fee\u6539\u6e38\u620f\u5bf9\u8c61\u5bbd\u9ad8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gameObject.transform.size.width = 200\ngameObject.transform.size.height = 200\n")),(0,a.kt)("p",null,"origin \u548c anchor \u80fd\u591f\u5e2e\u6211\u4eec\u89e3\u51b3\u5e38\u89c1\u7684\u5b9a\u4f4d\u95ee\u9898\uff0c\u6bd4\u5982\u6e38\u620f\u7684\u64cd\u4f5c\u952e\uff0c\u5728\u5404\u79cd\u5c4f\u5e55\u5c3a\u5bf8\u4e0b\u8ddd\u79bb\u53f3\u4e0b\u89d2\u4e00\u5b9a\u767e\u5206\u6bd4\u7684\u8ddd\u79bb\u3002\u53ef\u4ee5\u770b\u4e00\u4e0b\u8fd9\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://eva.js.org/playground/#/anchor"},"Demo"),"\uff0c\u7eff\u8272\u7684\u70b9\u662f origin \u548c anchor \u7684\u5b9a\u4f4d\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const outter = new GameObject('out', {\n  size: {\n    width: 750,\n    height: 1000\n  }\n})\n\nconst inner = new GameObject('inner', {\n  size: {\n    width: 100,\n    height: 100\n  },\n  anchor: {\n    // \u8bbe\u7f6e\u951a\u70b9\u4e3a\u7236\u5143\u7d20\u5bbd\u9ad8\u76840.8\u7684\u4f4d\u7f6e\n    x: 0.8,\n    y: 0.8\n  },\n  origin: {\n    // \u8bbe\u7f6e\u539f\u70b9\u4e3a\u53f3\u4e0b\u89d2\uff0c\u8fd9\u6837\u7269\u4f53\u7684\u53f3\u4e0b\u89d2\u5c31\u4f1a\u5bf9\u9f50\u7236\u5143\u7d20\u7684(0.8,0.8)\u7684\u4f4d\u7f6e\u4e86\n    x: 1,\n    y: 1\n  }\n})\n")))}m.isMDXComponent=!0}}]);