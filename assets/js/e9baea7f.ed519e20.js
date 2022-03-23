"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[69713],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,s=c["".concat(p,".").concat(u)]||c[u]||k[u]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Troubleshooting"},p=void 0,d={unversionedId:"taroize-troubleshooting",id:"version-3.x/taroize-troubleshooting",title:"Troubleshooting",description:"\u4e0d\u652f\u6301\u7684\u5c0f\u7a0b\u5e8f\u7279\u6027",source:"@site/versioned_docs/version-3.x/taroize-troubleshooting.md",sourceDirName:".",slug:"/taroize-troubleshooting",permalink:"/taro/docs/taroize-troubleshooting",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/taroize-troubleshooting.md",tags:[],version:"3.x",frontMatter:{title:"Troubleshooting"},sidebar:"docs",previous:{title:"\u8f6c\u6362\u6210 React",permalink:"/taro/docs/convert-to-react"},next:{title:"\u6982\u8ff0",permalink:"/taro/docs/platform-plugin"}},m=[{value:"\u4e0d\u652f\u6301\u7684\u5c0f\u7a0b\u5e8f\u7279\u6027",id:"\u4e0d\u652f\u6301\u7684\u5c0f\u7a0b\u5e8f\u7279\u6027",children:[{value:"\u5165\u53e3 App \u5bf9\u8c61",id:"\u5165\u53e3-app-\u5bf9\u8c61",children:[],level:3},{value:"\u9875\u9762 Page \u5bf9\u8c61",id:"\u9875\u9762-page-\u5bf9\u8c61",children:[],level:3},{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[],level:3},{value:"wxml \u8bed\u6cd5",id:"wxml-\u8bed\u6cd5",children:[],level:3}],level:2},{value:"\u5173\u952e\u95ee\u9898",id:"\u5173\u952e\u95ee\u9898",children:[{value:"1. \u6ca1\u6709\u5904\u7406\u57fa\u7c7b",id:"1-\u6ca1\u6709\u5904\u7406\u57fa\u7c7b",children:[],level:3},{value:"2. \u6837\u5f0f\u4f5c\u7528\u57df",id:"2-\u6837\u5f0f\u4f5c\u7528\u57df",children:[{value:"\u89e3\u51b3\u529e\u6cd5\uff1a",id:"\u89e3\u51b3\u529e\u6cd5",children:[],level:4}],level:3}],level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"1. wxml \u8bed\u6cd5\u8f6c\u6362\u95ee\u9898",id:"1-wxml-\u8bed\u6cd5\u8f6c\u6362\u95ee\u9898",children:[{value:"1.1 \u7ec4\u4ef6\u540c\u65f6\u4f7f\u7528 <code>wx:for</code> \u548c <code>wx:if</code> \u8bed\u53e5\u65f6\u8f6c\u6362\u9519\u8bef",id:"11-\u7ec4\u4ef6\u540c\u65f6\u4f7f\u7528-wxfor-\u548c-wxif-\u8bed\u53e5\u65f6\u8f6c\u6362\u9519\u8bef",children:[],level:4},{value:"1.2 \u6839\u5143\u7d20\u4e0d\u80fd\u542b\u6709 <code>hidden</code> \u5c5e\u6027\u3002",id:"12-\u6839\u5143\u7d20\u4e0d\u80fd\u542b\u6709-hidden-\u5c5e\u6027",children:[],level:4},{value:"1.3 \u7f16\u8bd1\u65f6\u62a5\u9519\uff1aSyntaxError: Unexpected token",id:"13-\u7f16\u8bd1\u65f6\u62a5\u9519syntaxerror-unexpected-token",children:[{value:"\u89e3\u51b3\u529e\u6cd5\uff1a",id:"\u89e3\u51b3\u529e\u6cd5-1",children:[],level:5}],level:4},{value:"1.4 \u8fd0\u884c\u65f6\u62a5\u9519\uff1aReferenceError: item is not defined",id:"14-\u8fd0\u884c\u65f6\u62a5\u9519referenceerror-item-is-not-defined",children:[{value:"\u89e3\u51b3\u529e\u6cd5\uff1a",id:"\u89e3\u51b3\u529e\u6cd5-2",children:[],level:5}],level:4},{value:"1.5 \u4e0d\u652f\u6301 WXS \u91cc\u7684 GetRegExp \u65b9\u6cd5",id:"15-\u4e0d\u652f\u6301-wxs-\u91cc\u7684-getregexp-\u65b9\u6cd5",children:[],level:4},{value:"1.6 <code>&lt;include&gt;</code> \u91cc\u4e0d\u652f\u6301\u4f7f\u7528 <code>&lt;template&gt;</code>",id:"16-include-\u91cc\u4e0d\u652f\u6301\u4f7f\u7528-template",children:[],level:4},{value:"1.7 template \u91cc\u6682\u4e0d\u652f\u6301\u4f7f\u7528 catch \u4e8b\u4ef6",id:"17-template-\u91cc\u6682\u4e0d\u652f\u6301\u4f7f\u7528-catch-\u4e8b\u4ef6",children:[],level:4}],level:3},{value:"2. \u4e8b\u4ef6",id:"2-\u4e8b\u4ef6",children:[],level:3},{value:"3. CommonJS \u548c ES \u6a21\u5757\u5316\u8bed\u6cd5\u4e0d\u80fd\u6df7\u7528",id:"3-commonjs-\u548c-es-\u6a21\u5757\u5316\u8bed\u6cd5\u4e0d\u80fd\u6df7\u7528",children:[],level:3},{value:"4. selectorQuery API \u83b7\u53d6\u4e0d\u5230 DOM",id:"4-selectorquery-api-\u83b7\u53d6\u4e0d\u5230-dom",children:[],level:3},{value:"5. Image \u6ca1\u6709\u5904\u7406\u52a8\u6001\u62fc\u63a5\u7684 src",id:"5-image-\u6ca1\u6709\u5904\u7406\u52a8\u6001\u62fc\u63a5\u7684-src",children:[],level:3},{value:"6. require \u7684\u53c2\u6570\u4e0d\u80fd\u662f\u53d8\u91cf",id:"6-require-\u7684\u53c2\u6570\u4e0d\u80fd\u662f\u53d8\u91cf",children:[],level:3},{value:"7. \u6ca1\u6709\u5904\u7406 export from \u8bed\u6cd5",id:"7-\u6ca1\u6709\u5904\u7406-export-from-\u8bed\u6cd5",children:[],level:3},{value:"8. Issues",id:"8-issues",children:[],level:3}],level:2}],k={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e0d\u652f\u6301\u7684\u5c0f\u7a0b\u5e8f\u7279\u6027"},"\u4e0d\u652f\u6301\u7684\u5c0f\u7a0b\u5e8f\u7279\u6027"),(0,l.kt)("h3",{id:"\u5165\u53e3-app-\u5bf9\u8c61"},"\u5165\u53e3 App \u5bf9\u8c61"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onError"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onPageNotFound"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onUnhandledRejection"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onThemeChange"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"\u9875\u9762-page-\u5bf9\u8c61"},"\u9875\u9762 Page \u5bf9\u8c61"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectComponent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5efa\u8bae\u4f7f\u7528 React ref \u91cd\u6784")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectAllComponents"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5efa\u8bae\u4f7f\u7528 React ref \u91cd\u6784")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectOwnerComponent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5efa\u8bae\u4f7f\u7528 React ref \u91cd\u6784")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"groupSetData"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"moved"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"externalClasses"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Taro 3 \u4e0d\u5b58\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5efa\u8bae\u89c4\u8303\u7c7b\u540d\u6216\u4f7f\u7528 CSS Module \u4ee3\u66ff")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"relations"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"options"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"definitionFilter"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"wxml-\u8bed\u6cd5"},"wxml \u8bed\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5faa\u73af"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[\u90e8\u5206\u8bed\u6cd5\u6709\u9650\u5236]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"./taroize-troubleshooting#2-%E4%BA%8B%E4%BB%B6"},"\u90e8\u5206\u8bed\u6cd5\u6709\u9650\u5236"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u7528"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"./taroize-troubleshooting#16-include-%E9%87%8C%E4%B8%8D%E6%94%AF%E6%8C%81%E4%BD%BF%E7%94%A8-template"},"\u90e8\u5206\u8bed\u6cd5\u6709\u9650\u5236"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"wxs"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"./taroize-troubleshooting#15-%E4%B8%8D%E6%94%AF%E6%8C%81-wxs-%E9%87%8C%E7%9A%84-getregexp-%E6%96%B9%E6%B3%95"},"\u90e8\u5206\u8bed\u6cd5\u6709\u9650\u5236"))))),(0,l.kt)("h2",{id:"\u5173\u952e\u95ee\u9898"},"\u5173\u952e\u95ee\u9898"),(0,l.kt)("h3",{id:"1-\u6ca1\u6709\u5904\u7406\u57fa\u7c7b"},"1. \u6ca1\u6709\u5904\u7406\u57fa\u7c7b"),(0,l.kt)("p",null,"\u539f\u751f\u5f00\u53d1\u4e2d\uff0c\u5e38\u5e38\u4f1a\u628a App\u3001Page\u3001Component \u6784\u9020\u5bf9\u8c61\u7684\u516c\u5171\u903b\u8f91\u6574\u5408\u5230\u57fa\u7c7b\u4e2d\u3002"),(0,l.kt)("p",null,"\u5982 ",(0,l.kt)("strong",{parentName:"p"},"Vant-weapp")," \u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u7ec4\u4ef6\nVantComponent({\n  data: {}\n})\n// \u57fa\u7c7b\nfunction VantComponent(vantOptions = {}) {\n  // \u6574\u5408\u7ec4\u4ef6\u72ec\u6709\u914d\u7f6e vantOptions \u548c\u516c\u5171\u914d\u7f6e\u5230\u6700\u7ec8\u7684\u914d\u7f6e\u5bf9\u8c61 options \u4e2d\n  // ...\n\n  // \u8c03\u7528\u5c0f\u7a0b\u5e8f\u7684 Component \u65b9\u6cd5\u6784\u9020\u81ea\u5b9a\u4e49\u7ec4\u4ef6\n  Component(options);\n}\n")),(0,l.kt)("p",null,"Taro \u5728\u7f16\u8bd1\u65f6\u53ea\u80fd\u8bc6\u522b\u51fa\u5165\u53e3\u3001\u9875\u9762\u3001\u7ec4\u4ef6\u6587\u4ef6\u4e2d\u5b58\u5728\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"App()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Page()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Component()")," \u8c03\u7528\uff0c\u4f7f\u7528\u57fa\u7c7b\u5bf9\u914d\u7f6e\u5c01\u88c5\u540e\u5c31\u4e0d\u5b58\u5728\u8fd9\u4e9b\u8c03\u7528\u3002\u56e0\u6b64\u7f16\u8bd1\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"withWeapp")," \u83b7\u5f97\u7684\u53c2\u6570\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"VantComponent({\n  data: {}\n})\n// withWeapp \u4e2d\u5e94\u8be5\u4f20\u5165\u5c0f\u7a0b\u5e8f\u914d\u7f6e\u5bf9\u8c61\n@withWeapp({})\nclass _C extends React.Component {}\n")),(0,l.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u9700\u8981\u624b\u52a8\u4fee\u6539\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u57fa\u7c7b\nfunction VantComponent(vantOptions = {}) {\n  // \u6574\u5408\u7ec4\u4ef6\u72ec\u6709\u914d\u7f6e vantOptions \u548c\u516c\u5171\u914d\u7f6e\u5230\u6700\u7ec8\u7684\u914d\u7f6e\u5bf9\u8c61 options \u4e2d\n  // ...\n\n  // \u8c03\u7528\u5c0f\u7a0b\u5e8f\u7684 Component \u65b9\u6cd5\u6784\u9020\u81ea\u5b9a\u4e49\u7ec4\u4ef6\n  // Component(options);\n  \n  // 1. \u57fa\u7c7b\u76f4\u63a5\u8fd4\u56de\u6574\u5408\u540e\u7684 options\n  return options\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// 2. \u628a\u57fa\u7c7b\u521b\u5efa\u7684\u914d\u7f6e\u4f20\u5165 withWeapp\uff1a\nconst options = VantComponent({\n  data: {}\n})\n@withWeapp(options)\nclass _C extends React.Component {}\n")),(0,l.kt)("h3",{id:"2-\u6837\u5f0f\u4f5c\u7528\u57df"},"2. \u6837\u5f0f\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u8f6c\u6362\u540e\u4f1a\u751f\u6210\u4e00\u4e2a Taro \u4e2d\u7684 React/Vue \u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f46\u662f Taro \u4e2d\u4f7f\u7528 React/Vue \u5f00\u53d1\u7684\u7ec4\u4ef6\uff0c\u7f16\u8bd1\u5230\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u65f6\uff0c\u5e76\u4e0d\u4f1a\u751f\u6210\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56e0\u6b64\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u6837\u5f0f\u9694\u79bb\u7279\u6027\uff0c\u5728\u8f6c\u6362\u4e3a Taro \u540e\u5c31\u4f1a\u4e22\u5931\u3002")),(0,l.kt)("h4",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u51b2\u7a81\u7684\u9009\u62e9\u5668\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 CSS Modules \u8fdb\u884c\u6539\u5199\u3002")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h3",{id:"1-wxml-\u8bed\u6cd5\u8f6c\u6362\u95ee\u9898"},"1. wxml \u8bed\u6cd5\u8f6c\u6362\u95ee\u9898"),(0,l.kt)("p",null,"\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"wxml")," \u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSX")," \u662f\u901a\u8fc7\u64cd\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"AST")," \u5b9e\u73b0\u7684\uff0c\u6709\u4e00\u4e9b\u5199\u6cd5\u53ef\u80fd\u6ca1\u6709\u8003\u8651\u5230\uff0c\u6216\u96be\u4ee5\u9002\u914d\uff0c\u4ece\u800c\u5bfc\u81f4\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5df2\u77e5\u95ee\u9898\uff0c\u9700\u8981\u624b\u52a8\u4fee\u590d\uff1a"),(0,l.kt)("h4",{id:"11-\u7ec4\u4ef6\u540c\u65f6\u4f7f\u7528-wxfor-\u548c-wxif-\u8bed\u53e5\u65f6\u8f6c\u6362\u9519\u8bef"},"1.1 \u7ec4\u4ef6\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h4"},"wx:for")," \u548c ",(0,l.kt)("inlineCode",{parentName:"h4"},"wx:if")," \u8bed\u53e5\u65f6\u8f6c\u6362\u9519\u8bef"),(0,l.kt)("p",null,"\u5f53\u7ec4\u4ef6\u4e0a\u540c\u65f6\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"wx:for")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"wx:if")," \u8bed\u53e5\uff0c\u5e76\u4e14\u4f7f\u7528\u4e86\u5f53\u524d",(0,l.kt)("strong",{parentName:"p"},"\u5faa\u73af\u5143\u7d20 item")," \u6216",(0,l.kt)("strong",{parentName:"p"},"\u5faa\u73af\u4e0b\u6807 index")," \u505a\u5224\u65ad\u6761\u4ef6\u65f6\uff0c\u8f6c\u6362\u540e\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u8f6c\u6362\u524d\uff08\u6ce8\u610f\u5224\u65ad\u6761\u4ef6\u4f7f\u7528\u4e86\u5faa\u73af\u4e0b\u6807 index\uff09\uff1a\n<block wx:for="{{objectArray}}" wx:if="{{index % 2 !== 0}}">\n  <view>objectArray item: {{item.id}}</view>\n</block>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8f6c\u6362\u540e\uff1a\n{index % 2 !== 0 && (\n  <Block>\n    {objectArray.map((item, index) => {\n      return (\n        <Block>\n          <View>{'objectArray item: ' + item.id}</View>\n        </Block>\n      )\n    })}\n  </Block>\n)}\n")),(0,l.kt)("p",null,"\u4e0a\u4f8b\u53ef\u89c1\uff0c\u5bf9\u4e8e\u6761\u4ef6\u8bed\u53e5\u7684\u8f6c\u6362\uff0c\u76ee\u524d\u7684\u5904\u7406\u4f1a\u628a\u6761\u4ef6\u63d0\u53d6\u5230\u7ec4\u4ef6\u5916\u90e8\u3002\u4f46\u662f\u5982\u679c\u6761\u4ef6\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"item")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," \u65f6\uff0c\u8fd9\u6837\u7684\u63d0\u53d6\u903b\u8f91\u4f1a\u5bfc\u81f4",(0,l.kt)("strong",{parentName:"p"},"\u53d8\u91cf\u672a\u5b9a\u4e49"),"\u7684\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u6682\u65f6\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u4fee\u590d\u89e3\u51b3\uff1a"),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e00\uff0c\u4fee\u6539",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u524d"),"\u7684\u4ee3\u7801\uff0c\u628a\u5faa\u73af\u548c\u6761\u4ef6\u8bed\u53e5\u62c6\u5f00\u5230\u4e24\u4e2a\u7ec4\u4ef6\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<block wx:for="{{objectArray}}">\n  <block wx:if="{{index % 2 !== 0}}">\n    <view>objectArray item: {{item.id}}</view>\n  </block>\n</block>\n')),(0,l.kt)("p",null,"\u65b9\u6cd5\u4e8c\uff0c\u4fee\u6539",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u540e"),"\u7684\u4ee3\u7801,\u628a\u6761\u4ef6\u5224\u65ad\u653e\u8fdb\u5faa\u73af\u4f53\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Block>\n  {objectArray.map((item, index) => {\n    return (\n      <Block>\n        {index % 2 !== 0 && <View>{'objectArray item: ' + item.id}</View>}\n      </Block>\n    )\n  })}\n</Block>\n")),(0,l.kt)("h4",{id:"12-\u6839\u5143\u7d20\u4e0d\u80fd\u542b\u6709-hidden-\u5c5e\u6027"},"1.2 \u6839\u5143\u7d20\u4e0d\u80fd\u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"h4"},"hidden")," \u5c5e\u6027\u3002"),(0,l.kt)("h4",{id:"13-\u7f16\u8bd1\u65f6\u62a5\u9519syntaxerror-unexpected-token"},"1.3 \u7f16\u8bd1\u65f6\u62a5\u9519\uff1aSyntaxError: Unexpected token"),(0,l.kt)("p",null,"\u5c16\u62ec\u53f7 \u201c<\u201d \u53f3\u4fa7\u9700\u8981\u7559\u4e00\u4e2a\u7a7a\u683c\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/4243"},"#4243")),(0,l.kt)("h5",{id:"\u89e3\u51b3\u529e\u6cd5-1"},"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,l.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u5b58\u5728\u4ee5\u4e0b\u5199\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<view>{{a <4? "1": "2"}}</view>\n')),(0,l.kt)("p",null,"\u6539\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<view>{{a < 4? "1": "2"}}</view>\n')),(0,l.kt)("h4",{id:"14-\u8fd0\u884c\u65f6\u62a5\u9519referenceerror-item-is-not-defined"},"1.4 \u8fd0\u884c\u65f6\u62a5\u9519\uff1aReferenceError: item is not defined"),(0,l.kt)("p",null,"\u67e5\u770b\u7f16\u8bd1\u540e\u7684 JSX\uff0c\u662f\u5426\u56e0\u4e3a\u6f0f\u4e86\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"this.data")," \u4e2d\u53d6\u51fa\u53d8\u91cf\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u4e0b\u9762\u7684\u4ee3\u7801\u6ca1\u6709\u5f15\u7528 item\nconst { a, b, c } = this.data\n")),(0,l.kt)("h5",{id:"\u89e3\u51b3\u529e\u6cd5-2"},"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"this.data")," \u4e2d\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u8981\u548c\u7528\u4e8e\u6307\u5b9a\u6570\u7ec4\u5f53\u524d\u4e0b\u6807\u7684\u53d8\u91cf\u540d\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"item"),"\uff0c\u6216\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"wx:for-index")," \u5177\u4f53\u6307\u5b9a\u7684\u53d8\u91cf\u540d\u76f8\u540c\u3002"),(0,l.kt)("h4",{id:"15-\u4e0d\u652f\u6301-wxs-\u91cc\u7684-getregexp-\u65b9\u6cd5"},"1.5 \u4e0d\u652f\u6301 WXS \u91cc\u7684 GetRegExp \u65b9\u6cd5"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"RegExp")," \u6784\u9020\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,l.kt)("h4",{id:"16-include-\u91cc\u4e0d\u652f\u6301\u4f7f\u7528-template"},"1.6 ",(0,l.kt)("inlineCode",{parentName:"h4"},"<include>")," \u91cc\u4e0d\u652f\u6301\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h4"},"<template>")),(0,l.kt)("h4",{id:"17-template-\u91cc\u6682\u4e0d\u652f\u6301\u4f7f\u7528-catch-\u4e8b\u4ef6"},"1.7 template \u91cc\u6682\u4e0d\u652f\u6301\u4f7f\u7528 catch \u4e8b\u4ef6"),(0,l.kt)("h3",{id:"2-\u4e8b\u4ef6"},"2. \u4e8b\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u4e0d\u652f\u6301\u7ed1\u5b9a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"catchtouchmove")," \u8f6c\u6362\u540e\u53ea\u80fd\u505c\u6b62\u56de\u8c03\u51fd\u6570\u7684\u5192\u6ce1\uff0c\u4e0d\u80fd\u963b\u6b62\u6eda\u52a8\u7a7f\u900f\u3002\u5982\u8981\u963b\u6b62\u6eda\u52a8\u7a7f\u900f\uff0c\u53ef\u4ee5\u624b\u52a8\u7ed9\u7f16\u8bd1\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"View")," \u7ec4\u4ef6\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"li"},"catchMove")," \u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4f7f\u7528 WXS \u51fd\u6570\u54cd\u5e94\u4e8b\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e92\u65a5\u4e8b\u4ef6\u7ed1\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"mut-bind"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"mark")," \u6765\u8bc6\u522b\u5177\u4f53\u89e6\u53d1\u4e8b\u4ef6\u7684 target \u8282\u70b9\u3002")),(0,l.kt)("h3",{id:"3-commonjs-\u548c-es-\u6a21\u5757\u5316\u8bed\u6cd5\u4e0d\u80fd\u6df7\u7528"},"3. CommonJS \u548c ES \u6a21\u5757\u5316\u8bed\u6cd5\u4e0d\u80fd\u6df7\u7528"),(0,l.kt)("p",null,"\u53ef\u80fd\u9047\u5230\u7684\u62a5\u9519\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cannot assign to read only property 'exports' of object"),(0,l.kt)("li",{parentName:"ul"},"export '","[something]","' (imported as '","[name]","') was not found in '","[somePath]","'")),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u5230\u5c0f\u7a0b\u5e8f API \u7684\u5730\u65b9\uff0cTaro \u4f1a\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"wx.api()")," \u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.api()"),"\uff0c\u540c\u65f6\u5728\u6587\u4ef6\u7684\u5934\u90e8\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"import Taro from '@tarjs/taro"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6b64\u6587\u4ef6\u539f\u672c\u662f\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"CommonJS")," \u7ec4\u7ec7\u6a21\u5757\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\uff0c\u9700\u8981\u624b\u52a8\u4fee\u590d\u3002"),(0,l.kt)("h3",{id:"4-selectorquery-api-\u83b7\u53d6\u4e0d\u5230-dom"},"4. selectorQuery API \u83b7\u53d6\u4e0d\u5230 DOM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e00\u5b9a\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"onReady"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"ready")," \u751f\u547d\u5468\u671f\u4e2d\u624d\u80fd\u8c03\u7528\u5c0f\u7a0b\u5e8f API \u83b7\u53d6 DOM\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},".in(this)")," \u65b9\u6cd5\u3002")),(0,l.kt)("h3",{id:"5-image-\u6ca1\u6709\u5904\u7406\u52a8\u6001\u62fc\u63a5\u7684-src"},"5. Image \u6ca1\u6709\u5904\u7406\u52a8\u6001\u62fc\u63a5\u7684 src"),(0,l.kt)("p",null,"Taro \u4f1a\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7ec4\u4ef6\u7684 src \u8fdb\u884c\u5904\u7406\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8f6c\u6362\u524d\uff1a\n<Image src='../../img/icons/0.png' />\n// \u8f6c\u6362\u540e\uff1a\n<Image src={require('../../img/icons/0.png')} />\n")),(0,l.kt)("p",null,"\u4f46\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," \u662f\u52a8\u6001\u62fc\u63a5\u7684\u5b57\u7b26\u4e32\uff0c\u5219\u9700\u8981\u624b\u52a8\u4fee\u6539\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8f6c\u6362\u524d\uff1a\n<Image src='../../img/icons/' + chart.id + '.png' />\n// \u8f6c\u6362\u540e\uff1a\n<Image src='../../img/icons/' + chart.id + '.png' />\n// \u624b\u52a8\u4fee\u6539\uff0c\u56fe\u7247\u4e5f\u9700\u8981\u624b\u52a8\u62f7\u8d1d\u5230 taroConert/src \u5bf9\u5e94\u76ee\u5f55\u4e0b\uff1a\n<Image src={require('../../img/icons/' + chart.id + '.png')} />\n")),(0,l.kt)("h3",{id:"6-require-\u7684\u53c2\u6570\u4e0d\u80fd\u662f\u53d8\u91cf"},"6. require \u7684\u53c2\u6570\u4e0d\u80fd\u662f\u53d8\u91cf"),(0,l.kt)("p",null,"\u53ef\u80fd\u9047\u5230\u7684\u62a5\u9519\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "path" argument must be of type string. Received type undefined')),(0,l.kt)("p",null,"\u4e0d\u652f\u6301\u8f6c\u6362\u4ee5\u4e0b\u5199\u6cd5\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/4749"},"#4749"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var pathTest = './test.js'\nvar test = require(pathTest)\n")),(0,l.kt)("p",null,"Taro \u76ee\u524d\u53ea\u80fd\u8f6c\u6362 ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," \u5b57\u7b26\u4e32\u7684\u5199\u6cd5\u3002"),(0,l.kt)("h3",{id:"7-\u6ca1\u6709\u5904\u7406-export-from-\u8bed\u6cd5"},"7. \u6ca1\u6709\u5904\u7406 export from \u8bed\u6cd5"),(0,l.kt)("p",null,"\u6682\u65f6\u624b\u52a8\u5904\u7406\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/5131"},"#5131"),"\u3002"),(0,l.kt)("h3",{id:"8-issues"},"8. Issues"),(0,l.kt)("p",null,"\u53cd\u5411\u8f6c\u6362\u7684\u66f4\u591a\u95ee\u9898\uff0c\u8bf7\u67e5\u9605 Taroize \u76f8\u5173 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues?q=is%3Aopen+is%3Aissue+label%3AA-taroize"},"Issues"),"\u3002"))}c.isMDXComponent=!0}}]);