"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35482],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||p;return t?n.createElement(k,i(i({ref:r},u),{},{components:t})):n.createElement(k,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=c;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<p;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},41874:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=t(87462),a=t(63366),p=(t(67294),t(3905)),i=["components"],l={},o=void 0,s={unversionedId:"api/eva-plugin-renderer-mask.maskparams",id:"api/eva-plugin-renderer-mask.maskparams",isDocsHomePage:!1,title:"eva-plugin-renderer-mask.maskparams",description:"Home &gt; @ali/eva-plugin-renderer-mask &gt; MaskParams",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/eva-plugin-renderer-mask.maskparams.md",sourceDirName:"api",slug:"/api/eva-plugin-renderer-mask.maskparams",permalink:"/zh-cn/docs/api/eva-plugin-renderer-mask.maskparams",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/api/eva-plugin-renderer-mask.maskparams.md",tags:[],version:"current",frontMatter:{}},u=[{value:"MaskParams interface",id:"maskparams-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],m={toc:u};function c(e){var r=e.components,t=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/eva-plugin-renderer-mask"},"@ali/eva-plugin-renderer-mask")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/eva-plugin-renderer-mask.maskparams"},"MaskParams")),(0,p.kt)("h2",{id:"maskparams-interface"},"MaskParams interface"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MaskParams \n")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/eva-plugin-renderer-mask.maskparams.resource"},"resource?")),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("i",null,"(Optional)"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/eva-plugin-renderer-mask.maskparams.style"},"style?")),(0,p.kt)("td",{parentName:"tr",align:null},"{ x?: number; y?: number; radius?: number; width?: number; height?: number; paths?: number","[","]","; }"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("i",null,"(Optional)"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/eva-plugin-renderer-mask.maskparams.type"},"type")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/eva-plugin-renderer-mask.mask_type"},"MASK","_","TYPE")),(0,p.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);