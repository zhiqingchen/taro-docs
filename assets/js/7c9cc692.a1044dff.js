"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[11900],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,l(l({ref:e},s),{},{components:r})):n.createElement(k,l({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23384:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],i={title:"Taro.startGyroscope(option)",sidebar_label:"startGyroscope"},p=void 0,c={unversionedId:"apis/device/gyroscope/startGyroscope",id:"apis/device/gyroscope/startGyroscope",title:"Taro.startGyroscope(option)",description:"\u5f00\u59cb\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002",source:"@site/docs/apis/device/gyroscope/startGyroscope.md",sourceDirName:"apis/device/gyroscope",slug:"/apis/device/gyroscope/startGyroscope",permalink:"/taro/docs/next/apis/device/gyroscope/startGyroscope",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/device/gyroscope/startGyroscope.md",tags:[],version:"current",frontMatter:{title:"Taro.startGyroscope(option)",sidebar_label:"startGyroscope"},sidebar:"API",previous:{title:"stopGyroscope",permalink:"/taro/docs/next/apis/device/gyroscope/stopGyroscope"},next:{title:"onGyroscopeChange",permalink:"/taro/docs/next/apis/device/gyroscope/onGyroscopeChange"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"Interval",id:"interval",children:[],level:3}],level:2}],d={toc:s};function u(t){var e=t.components,i=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f00\u59cb\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"option"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"complete"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fail"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"interval"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"keyof Interval")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"success"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h3",{id:"interval"},"Interval"),(0,o.kt)("p",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"game"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9002\u7528\u4e8e\u66f4\u65b0\u6e38\u620f\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 20ms/\u6b21 \u5de6\u53f3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ui"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9002\u7528\u4e8e\u66f4\u65b0 UI \u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 60ms/\u6b21 \u5de6\u53f3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"normal"),(0,o.kt)("td",{parentName:"tr",align:null},"\u666e\u901a\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 200ms/\u6b21 \u5de6\u53f3")))))}u.isMDXComponent=!0},5030:function(t,e,r){e.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,r){e.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,r){e.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);