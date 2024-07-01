"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66191],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=o(n),k=r,g=c["".concat(u,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38569:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={},u="A11y \u65e0\u969c\u788d\u63d2\u4ef6",o={unversionedId:"tutorials/a11yPlugin",id:"tutorials/a11yPlugin",isDocsHomePage:!1,title:"A11y \u65e0\u969c\u788d\u63d2\u4ef6",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/a11yPlugin.md",sourceDirName:"tutorials",slug:"/tutorials/a11yPlugin",permalink:"/zh-cn/docs/tutorials/a11yPlugin",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/a11yPlugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MatterJS",permalink:"/zh-cn/docs/tutorials/matterJS"},next:{title:"\u6570\u636e\u7ba1\u7406",permalink:"/zh-cn/docs/tutorials/evaxPlugin"}},m=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"API",id:"api",children:[],level:2},{value:"Tips",id:"tips",children:[],level:2},{value:"Eva.js \u65e0\u969c\u788d\u63d2\u4ef6\u52a8\u753b",id:"evajs-\u65e0\u969c\u788d\u63d2\u4ef6\u52a8\u753b",children:[{value:"Option1",id:"option1",children:[],level:3},{value:"Option2",id:"option2",children:[],level:3}],level:2}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"a11y-\u65e0\u969c\u788d\u63d2\u4ef6"},"A11y \u65e0\u969c\u788d\u63d2\u4ef6"),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"Eva.js \u65e0\u969c\u788d\u63d2\u4ef6\uff0c\u7528\u4e8e\u4e3a\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u65e0\u969c\u788d\u7684\u80fd\u529b\u3002\u63d2\u4ef6\u901a\u8fc7\u5b9a\u4f4d\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\uff0c\u81ea\u52a8\u5316\u5730\u6dfb\u52a0\u8f85\u52a9 DOM\uff0c\u4f7f\u5f97\u6e38\u620f\u5bf9\u8c61\u80fd\u88ab\u805a\u7126\uff0c\u6e38\u620f\u62e5\u6709\u65e0\u969c\u788d\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @eva/plugin-a11y\n")),(0,l.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-a11y@1.2.x/dist/EVA.plugin.a11y.min.js"><\/script>\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"\u5148\u5f15\u5165\u65e0\u969c\u788d\u7cfb\u7edf\uff0c\u7136\u540e\u4e3a\u76f8\u5e94\u7684\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u65e0\u969c\u788d\u80fd\u529b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { A11ySystem, A11y, A11yActivate } from \'@eva/plugin-a11y\'\n// \u4e3a\u6e38\u620f\u573a\u666f\u6dfb\u52a0\u65e0\u969c\u788d\u80fd\u529b\ngame.addSystem(new A11ySystem({\n  debug: true, // \u4e0a\u7ebf\u65f6\u5173\u95eddebug\n  activate: A11yActivate.CHECK // \u76ee\u524d\u6dd8\u5b9d\u548c\u652f\u4ed8\u5b9d\u53ef\u4ee5\u81ea\u52a8\u5224\u65ad\n  checkA11yOpen: () => {\n    // \u6839\u636e\u4e0d\u901a\u5ba2\u6237\u7aef\u63d0\u4f9b\u7684\u63a5\u53e3\u5224\u65ad\u662f\u5426\u6253\u5f00\u4e86\u65e0\u969c\u788d\n    return new Promise(resolve => {\n      resolve(true) // \u6253\u5f00\n      resolve(false) //\u672a\u6253\u5f00\n    })\n  }\n}))\n// \u4e3a\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u65e0\u969c\u788d\u80fd\u529b\ngameObject.addComponent(new A11y({\n  hint: \'\u6309\u94ae\',\n  role: \'button\',\n  "aria-value": "0"\n  "aira-hidden": "true"\n}))\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4f1a\u81ea\u52a8\u5728\u76f8\u5e94\u7684\u6e38\u620f\u5bf9\u8c61\u533a\u57df\u4e0a\u65b9\u6dfb\u52a0\u4e00\u4e2a\u5982\u4e0b\u56fe\u6240\u793a\u7684\u8f85\u52a9 DOM\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN01I2uBms1Lvq6GBg6Bo_!!6000000001362-2-tps-2098-734.png",alt:"image.png"}),"\n\u63d2\u4ef6\u7684\u5de5\u4f5c\u793a\u610f\u56fe\u5982\u4e0b\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i2/O1CN01gGe3CS1i5Ntv1ztfE_!!6000000004361-2-tps-3332-1700.png",alt:"image.png"}),"\n\u5982\u679c\u6e38\u620f\u5bf9\u8c61\u6ca1\u6709\u6dfb\u52a0\u81f3\u6e38\u620f\u573a\u666f\u4e2d\uff0c\u6216\u8005\u6e38\u620f\u5bf9\u8c61\u88ab\u79fb\u9664\u51fa\u573a\u666f\uff0c\u8f85\u52a9\u7684 DOM \u8282\u70b9\u4e5f\u4f1a\u76f8\u5e94\u7684\u5220\u9664\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6e38\u620f\u5bf9\u8c61\u88ab\u79fb\u9664\uff0c\u8f85\u52a9 DOM \u4e5f\u88ab\u79fb\u9664\ngameObject.addComponent(new A11y({ hint: 'text' }))\ngame.scene.removeChild(gameObject)\n\n// \u6e38\u620f\u5bf9\u8c61\u76f4\u63a5\u79fb\u9664\u65e0\u969c\u788d DOM\ngameObject.removeComponent('A11y')\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1\u3001A11ySystem")),(0,l.kt)("p",null,"\u6e38\u620f\u573a\u666f\u65e0\u969c\u788d\u80fd\u529b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debug"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u8c03\u8bd5\uff0c\u5f00\u542f\u540e\u4f1a\u51fa\u73b0\u7ea2\u8272\u906e\u7f69"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activate"),(0,l.kt)("td",{parentName:"tr",align:null},"A11yActivate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6fc0\u6d3b\u65e0\u969c\u788d\uff0c\u9ed8\u8ba4\u4e3a\u6839\u636e\u7528\u6237\u7cfb\u7edf\u8bbe\u7f6e\u81ea\u52a8\u6fc0\u6d3b"),(0,l.kt)("td",{parentName:"tr",align:null},"CHECK")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2\u3001A11y"),"\n\u65e0\u969c\u788d\u7ec4\u4ef6\uff0c\u6e38\u620f\u5bf9\u8c61\u8d4b\u4e88\u65e0\u969c\u788d\u80fd\u529b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hint"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u6717\u8bfb\u7684\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'\u65e0\u969c\u788d\u89d2\u8272\uff0c\u4f8b\u5982 role="button"'),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delay"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u6e32\u67d3\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aria-","*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u969c\u788d\u5c5e\u6027"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3\u3001A11yActivate")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHECK"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u4f20\u5165\u7684\u65b9\u6cd5\u68c0\u67e5\u5f00\u542f\u65e0\u969c\u788d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u63d2\u4ef6\u65e0\u969c\u788d\u80fd\u529b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DISABLE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u95ed\u63d2\u4ef6\u65e0\u969c\u788d\u80fd\u529b")))),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0a\u4e00\u4e9b\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u53ef\u62d6\u52a8\u7684\u6e38\u620f\u73a9\u6cd5\u9700\u6839\u636e\u4e1a\u52a1\u8fdb\u884c\u4f18\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u9f99\u9aa8\u52a8\u753b\u7684\u8f85\u52a9 DOM \u8282\u70b9\u4e3a 1px"),(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e8b\u4ef6\u5c06\u81ea\u52a8\u89e6\u53d1 Event \u7ec4\u4ef6\u4e0a\u9762\u7684 touchstart/touchend/tip \u4e8b\u4ef6")),(0,l.kt)("h2",{id:"evajs-\u65e0\u969c\u788d\u63d2\u4ef6\u52a8\u753b"},"Eva.js \u65e0\u969c\u788d\u63d2\u4ef6\u52a8\u753b"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u666e\u901a\u7684\u8fc7\u6e21\u52a8\u753b\uff0c\u65e0\u969c\u788d\u7684 DOM \u5c42\u9700\u8981\u7b49\u5230\u52a8\u753b\u7ed3\u675f\u540e\u624d\u80fd\u77e5\u9053\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"eva-plugin-a11y \u9009\u62e9\u8fd9\u6837\u5bf9\u8fc7\u6e21\u52a8\u753b\u8fdb\u884c\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"option1"},"Option1"),(0,l.kt)("p",null,"\u76d1\u542c\u52a8\u753b\u7684 finish \u4e8b\u4ef6\uff0c\u5728\u52a8\u753b\u5b8c\u6210\u540e\u518d\u4e3a\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u65e0\u969c\u788d\u80fd\u529b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"animation.on('finish', name => {\n  image.addComponent(new A11y({ hint: '\u586b\u5165\u9700\u8981\u6717\u8bfb\u7684\u5185\u5bb9' }))\n});\n")),(0,l.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u52a8\u753b\uff0c\u53ea\u9700\u8981\u76d1\u542c\u6700\u540e\u4e00\u4e2a\u52a8\u753b\u7684 finish \u4e8b\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// move \u52a8\u753b\n// idle \u52a8\u753b\nanimation.on('finish', name => {\n  name === 'idle' && image.addComponent(new A11y({ hint: '\u586b\u5165\u9700\u8981\u6717\u8bfb\u7684\u5185\u5bb9' }))\n});\n")),(0,l.kt)("p",null,"\u4e0d\u63a8\u8350\u5728 Infinity \u7684\u79fb\u52a8\u52a8\u753b\u4e2d\u4f7f\u7528\u65e0\u969c\u788d\u80fd\u529b\uff0c\u4f8b\u5982\u8fd9\u6837\u7684\u52a8\u753b\u3002"),(0,l.kt)("p",null,"\u8fd9\u7c7b\u7684\u52a8\u753b\u65e0\u969c\u788d\u7528\u6237\u6839\u672c\u65e0\u6cd5\u4f7f\u7528\uff0c\u5efa\u8bae\u4ece\u4e1a\u52a1\u5c42\u9762\u8fdb\u884c\u4f18\u5316\u3002"),(0,l.kt)("h3",{id:"option2"},"Option2"),(0,l.kt)("p",null,"eva-plugin-a11y \u65e0\u969c\u788d\u7ec4\u4ef6\u7684\u6784\u9020\u8fd8\u63d0\u4f9b\u4e00\u4e2a delay \u7684\u53c2\u6570\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u5728\u4efb\u610f\u65f6\u523b\u5c06\u6e38\u620f\u5bf9\u8c61\u7684\u65e0\u969c\u788d DOM \u6e32\u67d3\u51fa\u6765\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"image.addComponent(new A11y({ hint: '\u586b\u5165\u9700\u8981\u6717\u8bfb\u7684\u5185\u5bb9', delay: 1000})\n")))}c.isMDXComponent=!0}}]);