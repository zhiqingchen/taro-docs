"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[82393],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(n),s=r,k=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56842:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Taro.openEmbeddedMiniProgram(option)",sidebar_label:"openEmbeddedMiniProgram"},p=void 0,d={unversionedId:"apis/navigate/openEmbeddedMiniProgram",id:"apis/navigate/openEmbeddedMiniProgram",title:"Taro.openEmbeddedMiniProgram(option)",description:"\u6253\u5f00\u534a\u5c4f\u5c0f\u7a0b\u5e8f\u3002\u63a5\u5165\u6307\u5f15\u8bf7\u53c2\u8003 \u534a\u5c4f\u5c0f\u7a0b\u5e8f\u80fd\u529b\u3002",source:"@site/docs/apis/navigate/openEmbeddedMiniProgram.md",sourceDirName:"apis/navigate",slug:"/apis/navigate/openEmbeddedMiniProgram",permalink:"/taro/docs/next/apis/navigate/openEmbeddedMiniProgram",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/navigate/openEmbeddedMiniProgram.md",tags:[],version:"current",frontMatter:{title:"Taro.openEmbeddedMiniProgram(option)",sidebar_label:"openEmbeddedMiniProgram"},sidebar:"API",previous:{title:"EventChannel",permalink:"/taro/docs/next/apis/route/EventChannel"},next:{title:"navigateToMiniProgram",permalink:"/taro/docs/next/apis/navigate/navigateToMiniProgram"}},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"EnvVersion",id:"envversion",children:[],level:3}],level:2}],c={toc:m};function u(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6253\u5f00\u534a\u5c4f\u5c0f\u7a0b\u5e8f\u3002\u63a5\u5165\u6307\u5f15\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html"},"\u534a\u5c4f\u5c0f\u7a0b\u5e8f\u80fd\u529b"),"\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f appId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u7684\u9875\u9762\u8def\u5f84\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u6253\u5f00\u9996\u9875\u3002path \u4e2d ? \u540e\u9762\u7684\u90e8\u5206\u4f1a\u6210\u4e3a query\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"App.onLaunch"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"App.onShow")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"Page.onLoad")," \u7684\u56de\u8c03\u51fd\u6570\u6216\u5c0f\u6e38\u620f\u7684 ",(0,l.kt)("a",{parentName:"td",href:"#"},"Taro.onShow")," \u56de\u8c03\u51fd\u6570\u3001",(0,l.kt)("a",{parentName:"td",href:"/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"},"Taro.getLaunchOptionsSync"),' \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230 query \u6570\u636e\u3002\u5bf9\u4e8e\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u53ea\u4f20\u5165 query \u90e8\u5206\uff0c\u6765\u5b9e\u73b0\u4f20\u53c2\u6548\u679c\uff0c\u5982\uff1a\u4f20\u5165 "?foo=bar"\u3002')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extraData"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u4f20\u9012\u7ed9\u76ee\u6807\u5c0f\u7a0b\u5e8f\u7684\u6570\u636e\uff0c\u76ee\u6807\u5c0f\u7a0b\u5e8f\u53ef\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"App.onLaunch"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"App.onShow")," \u4e2d\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u3002\u5982\u679c\u8df3\u8f6c\u7684\u662f\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"td",href:"#"},"Taro.onShow"),"\u3001",(0,l.kt)("a",{parentName:"td",href:"/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"},"Taro.getLaunchOptionsSync")," \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u6570\u636e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"envVersion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof EnvVersion")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u7248\u672c\u3002\u4ec5\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e3a\u5f00\u53d1\u7248\u6216\u4f53\u9a8c\u7248\u65f6\u6b64\u53c2\u6570\u6709\u6548\u3002\u5982\u679c\u5f53\u524d\u5c0f\u7a0b\u5e8f\u662f\u6b63\u5f0f\u7248\uff0c\u5219\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u5fc5\u5b9a\u662f\u6b63\u5f0f\u7248\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shortLink"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u94fe\u63a5\uff0c\u5f53\u4f20\u9012\u8be5\u53c2\u6570\u540e\uff0c\u53ef\u4ee5\u4e0d\u4f20 appId \u548c path\u3002\u94fe\u63a5\u53ef\u4ee5\u901a\u8fc7\u3010\u5c0f\u7a0b\u5e8f\u83dc\u5355\u3011->\u3010\u590d\u5236\u94fe\u63a5\u3011\u83b7\u53d6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,l.kt)("h3",{id:"envversion"},"EnvVersion"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"develop"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u7248")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trial"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f53\u9a8c\u7248")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u5f0f\u7248")))))}u.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);