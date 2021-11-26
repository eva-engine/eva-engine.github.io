"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84066],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),s=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?t.createElement(h,i(i({ref:n},p),{},{components:r})):t.createElement(h,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85911:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={},d="Order and Alpha",s={unversionedId:"tutorials/orderAndTransparent",id:"tutorials/orderAndTransparent",isDocsHomePage:!1,title:"Order and Alpha",description:"- alpha Demo",source:"@site/docs/tutorials/orderAndTransparent.md",sourceDirName:"tutorials",slug:"/tutorials/orderAndTransparent",permalink:"/docs/tutorials/orderAndTransparent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/orderAndTransparent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tiled Wizard TilingSprite",permalink:"/docs/tutorials/tilingSpriteComponent"},next:{title:"Transition animation",permalink:"/docs/tutorials/transitionAnimation"}},p=[{value:"Install",id:"install",children:[{value:"With NPM",id:"with-npm",children:[],level:3},{value:"In Browser",id:"in-browser",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[{value:"sortableChildren: <code>boolean</code>\xa0",id:"sortablechildren-boolean",children:[],level:3},{value:"zIndex: <code>number</code>\xa0",id:"zindex-number",children:[],level:3},{value:"alpha: <code>number</code>",id:"alpha-number",children:[],level:3}],level:2}],u={toc:p};function c(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"order-and-alpha"},"Order and Alpha"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eva.js.org/playground/#/render/alpha"},"alpha Demo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eva.js.org/playground/#/render/sort"},"order Demo"))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("h3",{id:"with-npm"},"With NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-renderer @eva/plugin-renderer-render\n")),(0,o.kt)("h3",{id:"in-browser"},"In Browser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-renderer-render@1.1.x/dist/EVA.plugin.renderer.render.min.js"><\/script>\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'\nimport { RendererSystem } from '@eva/plugin-renderer'\nimport { Img, ImgSystem } from '@eva/plugin-renderer-img'\nimport { Render, RenderSystem } from '@eva/plugin-renderer-render'\nimport { Transition, TransitionSystem } from '@eva/plugin-transition'\n\nresource.addResource([\n  {\n    name: 'heart',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url: 'https://gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    },\n    preload: false\n  }\n])\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new ImgSystem(),\n    new RenderSystem(),\n    new TransitionSystem()\n  ]\n})\n\nconst image = new GameObject('image', {\n  size: { width: 200, height: 200 },\n  origin: { x: 0, y: 0 },\n  position: {\n    x: 300,\n    y: 400\n  },\n  anchor: {\n    x: 0,\n    y: 0\n  }\n})\nconst img = image.addComponent(\n  new Img({\n    resource: 'heart'\n  })\n)\n\nconst render = image.addComponent(\n  new Render({\n    alpha: 0.5\n  })\n)\n\nconst animation = image.addComponent(new Transition())\nanimation.group = {\n  idle: [\n    {\n      name: 'alpha',\n      component: render,\n      values: [\n        {\n          time: 0,\n          value: 1,\n          tween: 'ease-out'\n        },\n        {\n          time: 1000,\n          value: 0,\n          tween: 'ease-in'\n        },\n        {\n          time: 2000,\n          value: 1\n        }\n      ]\n    }\n  ]\n}\n\nanimation.play('idle', Infinity)\n\ngame.scene.addChild(image)\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"sortablechildren-boolean"},"sortableChildren: ",(0,o.kt)("inlineCode",{parentName:"h3"},"boolean"),"\xa0"),(0,o.kt)("p",null,"If you need to use zIndex for sorting, you need to set sortableChildren on the parent's Render component"),(0,o.kt)("h3",{id:"zindex-number"},"zIndex: ",(0,o.kt)("inlineCode",{parentName:"h3"},"number"),"\xa0"),(0,o.kt)("p",null,"Rendering order, the larger the zIndex is on the top"),(0,o.kt)("h3",{id:"alpha-number"},"alpha: ",(0,o.kt)("inlineCode",{parentName:"h3"},"number")))}c.isMDXComponent=!0}}]);