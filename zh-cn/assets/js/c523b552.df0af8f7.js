"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80759],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),i=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},p=function(t){var e=i(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=i(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,u(u({ref:e},p),{},{components:n})):a.createElement(c,u({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,u=new Array(l);u[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8997:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),u=["components"],o={},d="Sound \u97f3\u9891\u7cfb\u7edf",i={unversionedId:"tutorials/sound",id:"tutorials/sound",isDocsHomePage:!1,title:"Sound \u97f3\u9891\u7cfb\u7edf",description:"\u4e3a Game Object \u6dfb\u52a0\u97f3\u9891\u63a7\u5236\u7684\u80fd\u529b\uff0c\u4f7f\u7528 Web Audio API \u64ad\u653e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/sound.md",sourceDirName:"tutorials",slug:"/tutorials/sound",permalink:"/zh-cn/docs/tutorials/sound",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/sound.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u811a\u672c\u7ec4\u4ef6",permalink:"/zh-cn/docs/tutorials/customComponent"},next:{title:"MatterJS",permalink:"/zh-cn/docs/tutorials/matterJS"}},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"API",id:"api",children:[{value:"Sound",id:"sound",children:[{value:"Constructor",id:"constructor",children:[],level:4},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[],level:4}],level:3},{value:"SoundSystem",id:"soundsystem",children:[{value:"Constructor",id:"constructor-1",children:[],level:4},{value:"\u5c5e\u6027",id:"\u5c5e\u6027-1",children:[],level:4}],level:3},{value:"\u63d0\u793a",id:"\u63d0\u793a",children:[],level:3}],level:2}],m={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sound-\u97f3\u9891\u7cfb\u7edf"},"Sound \u97f3\u9891\u7cfb\u7edf"),(0,l.kt)("p",null,"\u4e3a Game Object \u6dfb\u52a0\u97f3\u9891\u63a7\u5236\u7684\u80fd\u529b\uff0c\u4f7f\u7528 Web Audio API \u64ad\u653e\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @eva/plugin-sound\n")),(0,l.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-sound@1.2.x/dist/EVA.plugin.sound.min.js"><\/script>\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js';\nimport { RendererSystem } from '@eva/plugin-renderer';\nimport { Sound, SoundSystem } from '@eva/plugin-sound';\n\n// \u6dfb\u52a0\u97f3\u9891\u8d44\u6e90\nresource.addResource([\n  {\n    name: 'bgSound',\n    type: RESOURCE_TYPE.AUDIO,\n    src: {\n      audio: {\n        type: 'audio',\n        url: 'https://g.alicdn.com/ltao-fe/duck_assets/0.0.1/assets/duckBg.mp3',\n      },\n    },\n    preload: true,\n  },\n  {\n    name: 'successSound',\n    src: {\n      audio: {\n        type: 'audio',\n        url:\n          'https://g.alicdn.com/ltao-fe/factory/1.1.3/assets/game/sound/success.mp3',\n      },\n    },\n    preload: true,\n  },\n]);\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000,\n    }),\n    new SoundSystem();\n  ],\n  autoStart: true,\n  frameRate: 60,\n});\n\nconst bgSoundObj = new GameObject('sound');\nconst bgSound = bgSoundObj.addComponent(\n  new Sound({ resource: 'bgSound', loop: true, autoplay: true, volume: 0.5 })\n);\n\nbgSound.play();\n")),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u64ad\u653e\u4e00\u90e8\u5206\u97f3\u9891\uff0c\u53ef\u4ee5\u901a\u8fc7 seek \u5c5e\u6027\u548c duration \u5c5e\u6027\u6765\u63a7\u5236\uff0c\u5177\u4f53\u53c2\u8003\u5c5e\u6027\u8868\u683c\uff0c\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u8868\u793a\u8be5 Component \u4ece 1.2 \u79d2\u5f00\u59cb\u64ad\u653e\uff0c\u64ad\u653e 3 \u79d2\u540e\u505c\u6b62\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const bgSound = bgSoundObj.addComponent(\n  new Sound({ resource: 'bgSound', autoplay: true, volume: 0.5, seek: 1.2, duration: 3 })\n);\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"sound"},"Sound"),(0,l.kt)("h4",{id:"constructor"},"Constructor"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"''"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 resource \u6ce8\u518c\u7684\u97f3\u9891\u8d44\u6e90\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u64ad\u653e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"muted"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u88ab\u9759\u97f3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loop"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u64ad\u653e\u7ed3\u675f\u65f6\u662f\u5426\u91cd\u65b0\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volume"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u64ad\u653e\u65f6\u7684\u97f3\u91cf(\u6574\u4f53\u97f3\u91cf) \uff0c\u53d6\u503c\u8303\u56f40-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seek"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"ArrayBufferSourceNode.start(when, seek, duration) ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start"},"MDN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ArrayBufferSourceNode.start(when, seek, duration) ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start"},"MDN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u64ad\u653e\u7ed3\u675f\u65f6\u89e6\u53d1")))),(0,l.kt)("h4",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"muted"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bbe\u7f6e\u662f\u5426\u88ab\u9759\u97f3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volume"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bbe\u7f6e\u64ad\u653e\u65f6\u7684\u97f3\u91cf\uff0c\u53d6\u503c\u8303\u56f40-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"play"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c1d\u8bd5\u64ad\u653e\u97f3\u9891")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pause"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u6682\u505c\u97f3\u9891\u7684\u64ad\u653e\uff0c\u5982\u679c\u97f3\u9891\u5df2\u7ecf\u5904\u4e8e\u6682\u505c\u72b6\u6001\uff0c\u8be5\u65b9\u6cd5\u6ca1\u6709\u6548\u679c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u64ad\u653e\u97f3\u9891")))),(0,l.kt)("h3",{id:"soundsystem"},"SoundSystem"),(0,l.kt)("h4",{id:"constructor-1"},"Constructor"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoPauseAndStart"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u548ceva game\u540c\u6b65\u6682\u505c\u548c\u542f\u52a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"(error) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u5904\u7406\u4e8b\u4ef6")))),(0,l.kt)("h4",{id:"\u5c5e\u6027-1"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"muted"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bbe\u7f6e\u662f\u5426\u88ab\u9759\u97f3(\u6240\u6709\u97f3\u9891)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volume"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bbe\u7f6e\u64ad\u653e\u65f6\u7684\u97f3\u91cf(\u6574\u4f53\u97f3\u91cf) \uff0c\u53d6\u503c\u8303\u56f40-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resumeAll"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6062\u590d\u64ad\u653e\u6240\u6709\u88ab\u6682\u505c\u7684\u97f3\u9891")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pauseAll"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6682\u505c\u6240\u6709\u6b63\u5728\u64ad\u653e\u7684\u97f3\u9891")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stopAll"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u64ad\u653e\u6240\u6709\u6b63\u5728\u64ad\u653e\u7684\u97f3\u9891")))),(0,l.kt)("h3",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,l.kt)("p",null,"\u5982\u679c\u6d4f\u89c8\u5668\u9650\u5236\u9700\u8981\u8fdb\u884c\u4ea4\u4e92\u624d\u53ef\u4ee5\u5f00\u59cb\u64ad\u653e\u97f3\u9891\uff0c\u63d2\u4ef6\u4f1a\u81ea\u52a8\u5c1d\u8bd5\u5728\u9875\u9762\u8fdb\u884c\u4ea4\u4e92\u540e\u542f\u7528\u97f3\u9891\u3002"))}s.isMDXComponent=!0}}]);