"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23963],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38270:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),l=["components"],o={title:"\u539f\u751f\u9879\u76ee\u4f7f\u7528 Taro"},p=void 0,s={unversionedId:"taro-in-miniapp",id:"version-3.x/taro-in-miniapp",title:"\u539f\u751f\u9879\u76ee\u4f7f\u7528 Taro",description:"Taro v3.0.25 \u5f00\u59cb\u652f\u6301",source:"@site/versioned_docs/version-3.x/taro-in-miniapp.md",sourceDirName:".",slug:"/taro-in-miniapp",permalink:"/taro/docs/taro-in-miniapp",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/taro-in-miniapp.md",tags:[],version:"3.x",frontMatter:{title:"\u539f\u751f\u9879\u76ee\u4f7f\u7528 Taro"},sidebar:"docs",previous:{title:"Taro \u4f7f\u7528\u539f\u751f\u6a21\u5757",permalink:"/taro/docs/hybrid"},next:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro",permalink:"/taro/docs/taroize"}},c=[{value:"\u57fa\u7840\u6df7\u5408\u7528\u6cd5",id:"\u57fa\u7840\u6df7\u5408\u7528\u6cd5",children:[{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee",children:[],level:3},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[{value:"1. \u5f00\u53d1\u73af\u5883",id:"1-\u5f00\u53d1\u73af\u5883",children:[],level:4},{value:"2. \u751f\u4ea7\u73af\u5883",id:"2-\u751f\u4ea7\u73af\u5883",children:[],level:4}],level:3},{value:"Taro \u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684 JS \u6587\u4ef6",id:"taro-\u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684-js-\u6587\u4ef6",children:[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[],level:4},{value:"\u6548\u679c",id:"\u6548\u679c",children:[],level:4}],level:3},{value:"Taro \u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684\u539f\u751f\u7ec4\u4ef6",id:"taro-\u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684\u539f\u751f\u7ec4\u4ef6",children:[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-1",children:[],level:4}],level:3},{value:"\u5bf9 Taro \u9879\u76ee\u7684\u90e8\u5206\u9875\u9762\u5206\u5305",id:"\u5bf9-taro-\u9879\u76ee\u7684\u90e8\u5206\u9875\u9762\u5206\u5305",children:[{value:"\u4f9d\u8d56\u7ec6\u5206",id:"\u4f9d\u8d56\u7ec6\u5206",children:[],level:4},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-2",children:[],level:4}],level:3}],level:2},{value:"\u628a Taro \u9879\u76ee\u4f5c\u4e3a\u4e00\u4e2a\u5b8c\u6574\u5206\u5305",id:"\u628a-taro-\u9879\u76ee\u4f5c\u4e3a\u4e00\u4e2a\u5b8c\u6574\u5206\u5305",children:[{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee-1",children:[],level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[{value:"1. \u5b89\u88c5\u4f7f\u7528\u63d2\u4ef6",id:"1-\u5b89\u88c5\u4f7f\u7528\u63d2\u4ef6",children:[],level:4},{value:"2. \u5f00\u53d1\u73af\u5883",id:"2-\u5f00\u53d1\u73af\u5883",children:[],level:4},{value:"3. \u751f\u4ea7\u73af\u5883",id:"3-\u751f\u4ea7\u73af\u5883",children:[],level:4}],level:3},{value:"\u628a Taro \u9879\u76ee\u62c6\u5206\u5230\u591a\u4e2a\u5206\u5305",id:"\u628a-taro-\u9879\u76ee\u62c6\u5206\u5230\u591a\u4e2a\u5206\u5305",children:[],level:3}],level:2},{value:"\u628a Taro \u7ec4\u4ef6\u7f16\u8bd1\u4e3a\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u628a-taro-\u7ec4\u4ef6\u7f16\u8bd1\u4e3a\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee-2",children:[],level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5-1",children:[{value:"1. \u914d\u7f6e\u7ec4\u4ef6\u8def\u5f84",id:"1-\u914d\u7f6e\u7ec4\u4ef6\u8def\u5f84",children:[],level:4},{value:"2. \u5f00\u59cb\u7f16\u8bd1",id:"2-\u5f00\u59cb\u7f16\u8bd1",children:[],level:4}],level:3},{value:"props \u4f20\u9012",id:"props-\u4f20\u9012",children:[],level:3},{value:"\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\u5b9e\u4f8b",id:"\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\u5b9e\u4f8b",children:[],level:3},{value:"\u7ec4\u4ef6\u95f4\u901a\u4fe1\u4e0e\u4e8b\u4ef6",id:"\u7ec4\u4ef6\u95f4\u901a\u4fe1\u4e0e\u4e8b\u4ef6",children:[{value:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684 triggerEvent",id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684-triggerevent",children:[],level:4},{value:"\u901a\u8fc7 props \u4f20\u9012\u4e8b\u4ef6\u56de\u8c03",id:"\u901a\u8fc7-props-\u4f20\u9012\u4e8b\u4ef6\u56de\u8c03",children:[],level:4}],level:3},{value:"\u7ec4\u4ef6\u914d\u7f6e",id:"\u7ec4\u4ef6\u914d\u7f6e",children:[],level:3}],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Taro v3.0.25 \u5f00\u59cb\u652f\u6301"))),(0,i.kt)("h2",{id:"\u57fa\u7840\u6df7\u5408\u7528\u6cd5"},"\u57fa\u7840\u6df7\u5408\u7528\u6cd5"),(0,i.kt)("h3",{id:"\u793a\u4f8b\u9879\u76ee"},"\u793a\u4f8b\u9879\u76ee"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/tree/next/examples/blended-basic"},"blended-basic")),(0,i.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,i.kt)("h4",{id:"1-\u5f00\u53d1\u73af\u5883"},"1. \u5f00\u53d1\u73af\u5883"),(0,i.kt)("p",null,"1.1 \u63a8\u8350\u5728 Taro \u9879\u76ee\u4e2d\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u518d\u628a\u4ea7\u7269\u79fb\u52a8\u5230\u539f\u751f\u5c0f\u7a0b\u5e8f\u4e2d\u8fdb\u884c\u9884\u89c8\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u548c\u7f16\u8bd1\u666e\u901a Taro \u9879\u76ee\u4e00\u6837\n$ taro build --type [platform] --watch\n")),(0,i.kt)("p",null,"1.2 \u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u5bfc\u5165 ",(0,i.kt)("strong",{parentName:"p"},"Taro \u9879\u76ee"),"\u8fdb\u884c\u9884\u89c8\u3002"),(0,i.kt)("h4",{id:"2-\u751f\u4ea7\u73af\u5883"},"2. \u751f\u4ea7\u73af\u5883"),(0,i.kt)("p",null,"1.1 \u7f16\u8bd1\u9879\u76ee\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--blended")," \u53c2\u6570\u4ee5\u8f93\u51fa\u6df7\u5408\u6a21\u5f0f\u7684\u4ee3\u7801\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5\u6df7\u5408\u6a21\u5f0f\u8fdb\u884c\u6253\u5305\n$ taro build --type [platform] --blended\n")),(0,i.kt)("p",null,"1.2 \u79fb\u52a8 Taro \u9879\u76ee\u7684\u8f93\u51fa\u76ee\u5f55\u5230\u539f\u751f\u9879\u76ee\u5185"),(0,i.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"Taro \u63d2\u4ef6"),"\u81ea\u52a8\u79fb\u52a8\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/next/examples/blended-basic/taro-project/plugin-mv/index.js"},"plugin-mv"),"\u3002"),(0,i.kt)("p",null,"1.3 \u539f\u751f\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u5f15\u7528 Taro \u5165\u53e3\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.config.js" {2,7,12}',title:'"app.config.js"',"{2,7,12}":!0},"// \u5fc5\u987b\u5f15\u7528 Taro \u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\nconst taroApp = require('./taro/app.js').taroApp\n\nApp({\n  onShow () {\n    // \u53ef\u9009\uff0c\u8c03\u7528 Taro \u9879\u76ee app \u7684 onShow \u751f\u547d\u5468\u671f\n    taroApp.onShow()\n  },\n\n  onHide () {\n    // \u53ef\u9009\uff0c\u8c03\u7528 Taro \u9879\u76ee app \u7684 onHide \u751f\u547d\u5468\u671f\n    taroApp.onHide()\n  }\n})\n")),(0,i.kt)("h3",{id:"taro-\u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684-js-\u6587\u4ef6"},"Taro \u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684 JS \u6587\u4ef6"),(0,i.kt)("p",null,"\u6709\u65f6\u6211\u4eec\u9700\u8981\u5728 Taro \u9879\u76ee\u4e2d\u5f15\u7528\u539f\u751f\u9879\u76ee\u4e2d\u7684\u516c\u5171 JS \u6a21\u5757\uff08\u5982\u4e0a\u62a5 sdk\uff09\u3002\u4f46\u662f Webpack \u4f1a\u628a\u8fd9\u4e9b\u516c\u5171\u6a21\u5757\u4e00\u5e76\u6253\u5305\uff0c\u5bfc\u81f4\u516c\u5171\u6a21\u5757\u5b58\u5728\u4e24\u4efd\uff08Taro \u4ea7\u7269\u4e2d\u4e00\u4efd\uff0c\u539f\u751f\u9879\u76ee\u4e2d\u4e00\u4efd\uff09\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f18\u5316\u5305\u4f53\u79ef\u5927\u5c0f\uff0c\u6211\u4eec\u5e0c\u671b\u4e0d\u8981\u6253\u5305\u5230 Taro \u4ea7\u7269\u4e2d\uff0c\u800c\u662f\u76f4\u63a5\u5f15\u7528\u539f\u751f\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u4f7f\u7528 Webpack \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals/"},"externals")," \u914d\u7f6e\u53bb\u5b9e\u73b0\u3002"),(0,i.kt)("h4",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)("p",null,"\u5047\u8bbe\u4ee5\u4e0b\u9879\u76ee\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 miniapp           \u539f\u751f\u9879\u76ee\n|   \u2514\u2500\u2500 utils\n|       \u2514\u2500\u2500 util.js\n\u2514\u2500\u2500 taro-project      Taro \u9879\u76ee\n    \u251c\u2500\u2500 config\n    |   \u2514\u2500\u2500 index.js \n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 pages\n            \u2514\u2500\u2500 index \u6b64\u9875\u9762\u4e2d\u5e0c\u671b\u5f15\u7528 miniapp/utils/util.js\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"alias"),"\uff0c\u76ee\u7684\u662f\u8ba9 ",(0,i.kt)("inlineCode",{parentName:"li"},"externals")," \u66f4\u65b9\u4fbf\u5730\u7b5b\u9009\u51fa\u4e0d\u9700\u8981\u6253\u5305\u7684\u4f9d\u8d56\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e Webpack ",(0,i.kt)("inlineCode",{parentName:"li"},"externals"),"\uff0c\u9009\u62e9\u51fa\u4e0d\u9700\u8981\u6253\u5305\u7684\u4f9d\u8d56\uff0c\u5e76\u8ba1\u7b97\u597d\u76f8\u5bf9\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," \u65f6\uff0cexternals \u751f\u6548\u3002\uff08\u5f53\u6ca1\u6709\u624b\u52a8\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u65f6\uff0c\u9ed8\u8ba4\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"watch")," \u6a21\u5f0f\u65f6\u73af\u5883\u53d8\u91cf\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"development"),"\uff0c\u5426\u5219\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"production"),"\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js" {3,8,10,15-29}',title:'"config/index.js"',"{3,8,10,15-29}":!0},"const config = {\n  alias: {\n    '@/utils': process.env.NODE_ENV === 'production'\n      // \u751f\u4ea7\u73af\u5883\u8def\u5f84\u8ba1\u7b97\uff1a\n      // Webpack \u7f16\u8bd1\u53d1\u751f\u5728 taro-project \u4e0b\uff0c\u5047\u8bbe\u7f16\u8bd1\u540e\u7684 taro-project/dist \u4f1a\u88ab\u79fb\u5230\u5230 miniapp/taro\u3002\n      // path.resolve(__dirname, '..') \u4e3a taro-project\u3002taro-project/dist \u4e4b\u4e8e taro-project\uff0c\u76f8\u5f53\u4e8e miniapp/taro \u4e4b\u4e8e miniapp\u3002\n      // \u518d\u6839\u636e miniapp/utils \u4e0e miniapp \u7684\u76f8\u5bf9\u8def\u5f84\uff0c\u5f97\u51fa path.resolve(__dirname, '../utils')\n      ? path.resolve(__dirname, '../utils')\n      // \u5f00\u53d1\u73af\u5883\u76f4\u63a5\u5f15\u7528\u539f\u751f\u9879\u76ee\u4e0b\u7684\u4f9d\u8d56\uff0c\u65b9\u4fbf\u5f00\u53d1\n      : path.resolve(__dirname, '../../miniapp/utils')\n  },\n  mini: {\n    webpackChain (chain) {\n      chain.merge({\n        externals: [\n          (context, request, callback) => {\n            const externalDirs = ['@/utils']\n            const externalDir = externalDirs.find(dir => request.startsWith(dir))\n\n            if (process.env.NODE_ENV === 'production' && externalDir) {\n              const externalDirPath = config.alias[externalDir]\n              const res = request.replace('@/utils', path.relative(context, externalDirPath))\n\n              return callback(null, `commonjs ${res}`)\n            }\n\n            callback()\n          },\n        ]\n      })\n    }\n  }\n}\n")),(0,i.kt)("h4",{id:"\u6548\u679c"},"\u6548\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="taro-project/src/pages/index/index.js"',title:'"taro-project/src/pages/index/index.js"'},"import { logSomething } from '@/utils/util'\nlogSomething()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack \u6253\u5305\u7ed3\u679c"',title:'"webpack','\u6253\u5305\u7ed3\u679c"':!0},'{\n  "./src/pages/index/index.jsx": (function(m, e, __webpack_require__) {\n    var _utils_util = __webpack_require__("@/utils/util");\n    // ...\n  }),\n  "@/utils/util": (function(module, exports) {\n    // \u6210\u529f external\n    module.exports = require("../../../utils/util");\n  })\n}\n')),(0,i.kt)("h3",{id:"taro-\u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684\u539f\u751f\u7ec4\u4ef6"},"Taro \u9879\u76ee\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684\u539f\u751f\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u6709\u65f6\u6211\u4eec\u9700\u8981\u5728 Taro \u9879\u76ee\u4e2d\u5f15\u7528\u539f\u751f\u9879\u76ee\u4e2d\u7684\u516c\u5171\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"\u548c",(0,i.kt)("a",{parentName:"p",href:"./taro-in-miniapp#%E5%BC%95%E7%94%A8%E5%8E%9F%E7%94%9F%E9%A1%B9%E7%9B%AE%E7%9A%84-js-%E6%96%87%E4%BB%B6"},"\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684 js \u6587\u4ef6"),"\u4e00\u6837\uff0c\u6211\u4eec\u5e0c\u671b\u5728\u5f00\u53d1\u73af\u5883\u80fd\u6b63\u786e\u89e3\u6790\u7ec4\u4ef6\u8def\u5f84\uff0c\u5728\u751f\u4ea7\u73af\u5883\u5219\u76f4\u63a5\u5f15\u7528\u539f\u751f\u9879\u76ee\u7684\u7ec4\u4ef6\u800c\u4e0d\u662f\u91cd\u590d\u6253\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528 Taro \u7684 ",(0,i.kt)("a",{parentName:"p",href:"./config-detail#alias"},"alias")," \u914d\u7f6e\u53bb\u5b9e\u73b0\u3002"),(0,i.kt)("h4",{id:"\u4f8b\u5b50-1"},"\u4f8b\u5b50"),(0,i.kt)("p",null,"\u5047\u8bbe\u4ee5\u4e0b\u9879\u76ee\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 miniapp                \u539f\u751f\u9879\u76ee\n|   \u2514\u2500\u2500 components\n|       \u2514\u2500\u2500 title\n|           \u251c\u2500\u2500 index.js\n|           \u251c\u2500\u2500 index.wxml\n|           \u251c\u2500\u2500 index.wxss\n|           \u2514\u2500\u2500 index.json\n\u2514\u2500\u2500 taro-project           Taro \u9879\u76ee\n    \u251c\u2500\u2500 config\n    |   \u2514\u2500\u2500 index.js \n    \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 components     \u5c0f\u7a0b\u5e8f\u4e0d\u652f\u6301\u5f15\u7528\u6839\u76ee\u5f55\u4e4b\u5916\u7684\u7ec4\u4ef6\uff0c\u56e0\u6b64\u53ea\u80fd\u628a\u539f\u751f\u9879\u76ee\u7684\u7ec4\u4ef6\u62f7\u8d1d\u8fc7\u6765\uff0c\u8ba9\u5f00\u53d1\u73af\u5883\u80fd\u6b63\u786e\u89e3\u6790\u7ec4\u4ef6\n        |   \u2514\u2500\u2500 title      \n        \u2514\u2500\u2500 pages\n            \u2514\u2500\u2500 index      \u6b64\u9875\u9762\u4e2d\u5e0c\u671b\u5f15\u7528 miniapp/components/title\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u628a\u539f\u751f\u9879\u76ee\u7684\u7ec4\u4ef6\u62f7\u8d1d\u5230 Taro \u9879\u76ee\uff0c\u8ba9\u5f00\u53d1\u73af\u5883\u80fd\u6b63\u786e\u89e3\u6790\u7ec4\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6839\u636e\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\uff0c\u6b63\u786e\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"alias"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js" {3,8,10}',title:'"config/index.js"',"{3,8,10}":!0},"const config = {\n  alias: {\n    '@/components': process.env.NODE_ENV === 'production'\n      // \u751f\u4ea7\u73af\u5883\u8def\u5f84\u8ba1\u7b97\uff1a\n      // Webpack \u7f16\u8bd1\u53d1\u751f\u5728 taro-project \u4e0b\uff0c\u5047\u8bbe\u7f16\u8bd1\u540e\u7684 taro-project/dist \u4f1a\u88ab\u79fb\u5230\u5230 miniapp/taro\u3002\n      // path.resolve(__dirname, '..') \u4e3a taro-project\u3002taro-project/dist \u4e4b\u4e8e taro-project\uff0c\u76f8\u5f53\u4e8e miniapp/taro \u4e4b\u4e8e miniapp\u3002\n      // \u518d\u6839\u636e miniapp/components \u4e0e miniapp \u7684\u76f8\u5bf9\u8def\u5f84\uff0c\u5f97\u51fa path.resolve(__dirname, '../components')\n      ? path.resolve(__dirname, '../components')\n      // \u5f00\u53d1\u73af\u5883\u5f15\u7528 taro-project/src \u4e0b\u7684\u7ec4\u4ef6\n      : path.resolve(__dirname, '../src/components')\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="taro-project/src/pages/index/index.config.js" {3}',title:'"taro-project/src/pages/index/index.config.js"',"{3}":!0},"export default {\n  usingComponents: {\n    title: '@/components/title/index'\n  }\n}\n")),(0,i.kt)("h3",{id:"\u5bf9-taro-\u9879\u76ee\u7684\u90e8\u5206\u9875\u9762\u5206\u5305"},"\u5bf9 Taro \u9879\u76ee\u7684\u90e8\u5206\u9875\u9762\u5206\u5305"),(0,i.kt)("p",null,"\u5728\u539f\u751f\u9879\u76ee\u4e2d\u76f4\u63a5\u914d\u7f6e subPackages \u6307\u5411 Taro \u7f16\u8bd1\u540e\u7684\u9875\u9762\u5373\u53ef\u3002"),(0,i.kt)("h4",{id:"\u4f9d\u8d56\u7ec6\u5206"},"\u4f9d\u8d56\u7ec6\u5206"),(0,i.kt)("p",null,"Taro \u9ed8\u8ba4\u4f1a\u628a\u9875\u9762\u5171\u7528\u7684\u666e\u901a\u4f9d\u8d56\u6253\u5305\u4e3a\u4e3b\u5305\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"common.js"),"\uff0cnode_modules \u4f9d\u8d56\u6253\u5305\u4e3a\u4e3b\u5305\u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor.js"),"\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u5728\u5206\u5305\u65f6\uff0c\u6211\u4eec\u4f1a\u5e0c\u671b\u628a",(0,i.kt)("strong",{parentName:"p"},"\u53ea\u6709\u5728\u5206\u5305\u4e2d\u5171\u7528\u7684\u4f9d\u8d56"),"\u6253\u5305\u5230\u5206\u5305\u4e2d\uff0c\u800c\u4e0d\u662f\u6253\u5728\u4e3b\u5305\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"common.js")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor.js")," \u4e2d\u3002\u8fd9\u5c31\u9700\u8981\u6211\u4eec\u5bf9\u4f9d\u8d56\u8fdb\u884c\u7ec6\u5206\u3002\u53ef\u4ee5\u501f\u52a9 Webpack \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/split-chunks-plugin/"},"splitChunk")," \u548c Taro \u7684 ",(0,i.kt)("a",{parentName:"p",href:"./config-detail#miniaddchunkpages"},"addChunkPages")," \u914d\u7f6e\u53bb\u5b9e\u73b0\u3002"),(0,i.kt)("h4",{id:"\u4f8b\u5b50-2"},"\u4f8b\u5b50"),(0,i.kt)("p",null,"\u5047\u8bbe\u4ee5\u4e0b\u9879\u76ee\u7ed3\u6784\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 dist\n|   |\u2500\u2500 common.js     \u516c\u5171\u4f9d\u8d56\n|   |\u2500\u2500 vendors.js    node_modules \u4f9d\u8d56\n|   \u2514\u2500\u2500 subPackages\n|       \u251c\u2500\u2500 foo\n|       \u251c\u2500\u2500 bar\n|       \u2514\u2500\u2500 common.js \u53ea\u6709 subPackages \u5b50\u5305\u4e2d\u4f7f\u7528\u7684\u516c\u5171\u4f9d\u8d56\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 subPackages\n        \u251c\u2500\u2500 foo\n        \u2514\u2500\u2500 bar\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"li"},"Webpack splitChunks")," \u628a\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"subpackages")," \u5b50\u5305\u72ec\u6709\u7684\u4f9d\u8d56\u6253\u5305\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"subpackages/common.js")," \u4e2d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"li"},"Taro addChunkPages")," \u914d\u7f6e\uff0c\u5728\u5b50\u5305\u4e2d\u6240\u6709\u9875\u9762\u7684\u5934\u90e8\u6dfb\u52a0\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"li"},"subpackages/common.js")," \u7684\u5f15\u7528\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js" {3-6,12-20}',title:'"config/index.js"',"{3-6,12-20}":!0},"const config = {\n  mini: {\n    addChunkPages (pages) {\n      pages.set('subpackages/bar/index', ['subpackages/common']),\n      pages.set('subpackages/foo/index', ['subpackages/common'])\n    },\n    webpackChain (chain) {\n      chain.merge({\n        optimization: {\n          splitChunks: {\n            cacheGroups: {\n              subpackagesCommon: {\n                name: 'subpackages/common',\n                minChunks: 2,\n                test: (module, chunks) => {\n                  const isNoOnlySubpackRequired = chunks.find(chunk => !(/\\bsubpackages\\b/.test(chunk.name)))\n                  return !isNoOnlySubpackRequired\n                },\n                priority: 200\n              }\n            }\n          }\n        }\n      })\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"\u628a-taro-\u9879\u76ee\u4f5c\u4e3a\u4e00\u4e2a\u5b8c\u6574\u5206\u5305"},"\u628a Taro \u9879\u76ee\u4f5c\u4e3a\u4e00\u4e2a\u5b8c\u6574\u5206\u5305"),(0,i.kt)("h3",{id:"\u793a\u4f8b\u9879\u76ee-1"},"\u793a\u4f8b\u9879\u76ee"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/tree/next/examples/blended-apart"},"blended-apart")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h4",{id:"1-\u5b89\u88c5\u4f7f\u7528\u63d2\u4ef6"},"1. \u5b89\u88c5\u4f7f\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-plugin-indie"},"@tarojs/plugin-indie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @tarojs/plugin-indie --save-dev\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  plugins: [\n    '@tarojs/plugin-indie'\n  ]\n}\n")),(0,i.kt)("h4",{id:"2-\u5f00\u53d1\u73af\u5883"},"2. \u5f00\u53d1\u73af\u5883"),(0,i.kt)("p",null,"2.1 \u63a8\u8350\u5728 Taro \u9879\u76ee\u4e2d\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u518d\u628a\u4ea7\u7269\u79fb\u52a8\u5230\u539f\u751f\u5c0f\u7a0b\u5e8f\u4e2d\u8fdb\u884c\u9884\u89c8\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u548c\u7f16\u8bd1\u666e\u901a Taro \u9879\u76ee\u4e00\u6837\n$ taro build --type [platform] --watch\n")),(0,i.kt)("p",null,"2.2 \u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u5bfc\u5165 ",(0,i.kt)("strong",{parentName:"p"},"Taro \u9879\u76ee"),"\u8fdb\u884c\u9884\u89c8\u3002"),(0,i.kt)("h4",{id:"3-\u751f\u4ea7\u73af\u5883"},"3. \u751f\u4ea7\u73af\u5883"),(0,i.kt)("p",null,"3.1 \u7f16\u8bd1\u9879\u76ee\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--blended")," \u53c2\u6570\u4ee5\u8f93\u51fa\u6df7\u5408\u6a21\u5f0f\u7684\u4ee3\u7801\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5\u6df7\u5408\u6a21\u5f0f\u8fdb\u884c\u6253\u5305\n$ taro build --type [platform] --blended\n")),(0,i.kt)("p",null,"3.2 \u79fb\u52a8 Taro \u9879\u76ee\u7684\u8f93\u51fa\u76ee\u5f55\u5230\u539f\u751f\u9879\u76ee\u5185"),(0,i.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a ",(0,i.kt)("strong",{parentName:"p"},"Taro \u63d2\u4ef6"),"\u81ea\u52a8\u79fb\u52a8\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/next/examples/blended-basic/taro-project/plugin-mv/index.js"},"plugin-mv"),"\u3002"),(0,i.kt)("p",null,"3.3 \u8bbe\u7f6e\u539f\u751f\u9879\u76ee\u7684\u5206\u5305\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u628a-taro-\u9879\u76ee\u62c6\u5206\u5230\u591a\u4e2a\u5206\u5305"},"\u628a Taro \u9879\u76ee\u62c6\u5206\u5230\u591a\u4e2a\u5206\u5305"),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a Taro \u9879\u76ee\uff0c\u5b83\u542b\u6709\u9875\u9762 A \u548c\u9875\u9762 B\u3002\u6211\u4eec\u9700\u8981\u628a\u9875\u9762 A \u52a0\u5165\u539f\u751f\u9879\u76ee\u7684\u5176\u4e2d\u4e00\u4e2a\u5206\u5305 M\uff0c\u628a\u9875\u9762 B \u52a0\u5165\u5230\u53e6\u4e00\u4e2a\u5206\u5305 N\u3002"),(0,i.kt)("p",null,"\u4e3a\u6b64\uff0c\u548c\u666e\u901a\u6253\u51fa",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u5206\u5305"),"\u4e0d\u540c\u7684\u662f\uff0c\u9996\u5148\u9700\u8981\u914d\u7f6e Webpack \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"output.jsonpFunction")," \u914d\u7f6e\uff0c\u907f\u514d ",(0,i.kt)("inlineCode",{parentName:"p"},"chunkid")," \u7684\u51b2\u7a81\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js" {7}',title:'"config/index.js"',"{7}":!0},'config = {\n  mini: {\n    webpackChain (chain) {\n      chain.merge({\n        output: {\n          // \u53ef\u4ee5\u914d\u5408 npm script \u548c\u73af\u5883\u53d8\u91cf\u6765\u52a8\u6001\u4fee\u6539\n          jsonpFunction: process.env.JSONP_NAME || "webpackJsonp"\n        }\n      })\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u5206\u522b\u5bf9 A\u3001B \u9875\u9762\u4f7f\u7528\u6df7\u5408\u6a21\u5f0f\u6253\u5305\uff0c\u6b65\u9aa4\u548c",(0,i.kt)("a",{parentName:"p",href:"./taro-in-miniapp#%E6%8A%8A-taro-%E9%A1%B9%E7%9B%AE%E4%BD%9C%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E5%88%86%E5%8C%85"},"\u628a Taro \u9879\u76ee\u4f5c\u4e3a\u4e00\u4e2a\u5b8c\u6574\u5206\u5305"),"\u4e00\u81f4\u3002"),(0,i.kt)("h2",{id:"\u628a-taro-\u7ec4\u4ef6\u7f16\u8bd1\u4e3a\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u628a Taro \u7ec4\u4ef6\u7f16\u8bd1\u4e3a\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Taro v3.1.2 \u5f00\u59cb\u652f\u6301\uff0c\u4e14\u6682\u65f6\u53ea\u652f\u6301 React"))),(0,i.kt)("p",null,"Taro \u652f\u6301\u628a\u7ec4\u4ef6\u7f16\u8bd1\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u539f\u751f\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),"\uff0c\u4f9b\u539f\u751f\u9879\u76ee\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"\u793a\u4f8b\u9879\u76ee-2"},"\u793a\u4f8b\u9879\u76ee"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/tree/next/examples/blended-taro-component"},"blended-taro-component")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5-1"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h4",{id:"1-\u914d\u7f6e\u7ec4\u4ef6\u8def\u5f84"},"1. \u914d\u7f6e\u7ec4\u4ef6\u8def\u5f84"),(0,i.kt)("p",null,"\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"app.config.js"),"\uff0c\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," \u914d\u7f6e\uff0c\u6307\u5411\u7ec4\u4ef6\u5165\u53e3\u6587\u4ef6\u7684\u8def\u5f84\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'},"export default {\n  // ...\n  components: [\n    'pages/index/index',\n    'components/picker/index'\n  ]\n}\n")),(0,i.kt)("h4",{id:"2-\u5f00\u59cb\u7f16\u8bd1"},"2. \u5f00\u59cb\u7f16\u8bd1"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"taro build native-components")," \u547d\u4ee4\uff0c\u914d\u5408\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\uff0c\u5373\u53ef\u7f16\u8bd1\u51fa\u5bf9\u5e94\u5e73\u53f0\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"taro build native-components --type [platform] [--watch]\n")),(0,i.kt)("h3",{id:"props-\u4f20\u9012"},"props \u4f20\u9012"),(0,i.kt)("p",null,"\u4f20\u9012 props \u7ed9 Taro \u7f16\u8bd1\u51fa\u6765\u7684\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u9700\u8981\u7edf\u4e00\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u53c2\u6570\u6765\u4f20\u9012\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="page/index/index.js"',title:'"page/index/index.js"'},"Page({\n  data: {\n    pickerProps: {\n      mode: 'format',\n      value: [0, 0, 0],\n      onInitial (value, index) {\n        console.log('onInitial')\n      }\n    }\n  }\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="page/index/index.wxml"',title:'"page/index/index.wxml"'},'\x3c!--index.wxml--\x3e\n<view>\n  <picker props="{{pickerProps}}"></picker>\n</view>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Taro \u7ec4\u4ef6 - Picker"',title:'"Taro',"\u7ec4\u4ef6":!0,"-":!0,'Picker"':!0},"function Picker ({ mode, value, onInitial }) {\n  return (\n    // ...\n  )\n}\n")),(0,i.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\u5b9e\u4f8b"},"\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"props.$scope")," \u83b7\u53d6\u5230\u5c0f\u7a0b\u5e8f\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\u5b9e\u4f8b\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u67d0\u4e9b\u5c0f\u7a0b\u5e8f API \u65f6\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u6b64\u5b9e\u4f8b\uff0c\u5982\u83b7\u53d6\u89c6\u56fe\u5c42 DOM\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Taro.createSelectorQuery().in(props.$scope)")),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u95f4\u901a\u4fe1\u4e0e\u4e8b\u4ef6"},"\u7ec4\u4ef6\u95f4\u901a\u4fe1\u4e0e\u4e8b\u4ef6"),(0,i.kt)("p",null,"\u652f\u6301\u4f7f\u7528\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u7ec4\u4ef6\u95f4\u901a\u4fe1\u3002"),(0,i.kt)("h4",{id:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684-triggerevent"},"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684 triggerEvent"),(0,i.kt)("p",null,"\u548c\u5c0f\u7a0b\u5e8f\u539f\u751f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html"},"\u7ec4\u4ef6\u95f4\u901a\u4fe1\u4e0e\u4e8b\u4ef6"),"\u4e00\u6837\uff0c\u5b50\u7ec4\u4ef6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"triggerEvent")," \u53d1\u9001\u4e8b\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u5b50\u7ec4\u4ef6"',title:'"\u5b50\u7ec4\u4ef6"'},"props.$scope.triggerEvent('myevent', myEventDetail, myEventOption)\n")),(0,i.kt)("h4",{id:"\u901a\u8fc7-props-\u4f20\u9012\u4e8b\u4ef6\u56de\u8c03"},"\u901a\u8fc7 props \u4f20\u9012\u4e8b\u4ef6\u56de\u8c03"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u7236\u7ec4\u4ef6"',title:'"\u7236\u7ec4\u4ef6"'},'Page({\n  data: {\n    childProps: {\n      // props \u91cc\u53ef\u4ee5\u4f20\u9012\u51fd\u6570\n      onMyEvent (value, index) {\n        console.log(value, index)\n      }\n    }\n  }\n})\n// \u548c\u666e\u901a props \u4f20\u9012\u4e00\u6837\n<child props="{{childProps}}">\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u5b50\u7ec4\u4ef6"',title:'"\u5b50\u7ec4\u4ef6"'},"props.onMyEvent(value, index)\n")),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u914d\u7f6e"},"\u7ec4\u4ef6\u914d\u7f6e"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Taro v3.3.20 \u5f00\u59cb\u652f\u6301"))),(0,i.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u652f\u6301\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB"},"styleIsolation"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E8%99%9A%E6%8B%9F%E5%8C%96%E7%BB%84%E4%BB%B6%E8%8A%82%E7%82%B9"},"virtualHost")," \u7b49\u7279\u6027\u3002\u5728 Taro \u4e2d\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u7ec4\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u8bbe\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.config.js"',title:'"index.config.js"'},"export default {\n  styleIsolation: 'isolated',\n  virtualHost: true\n}\n")))}m.isMDXComponent=!0}}]);