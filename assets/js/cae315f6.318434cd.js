"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59528],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,l(l({ref:e},s),{},{components:a})):n.createElement(g,l({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6121:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={title:"Taro.setNavigationBarTitle(option)",sidebar_label:"setNavigationBarTitle"},p=void 0,c={unversionedId:"apis/ui/navigation-bar/setNavigationBarTitle",id:"version-3.x/apis/ui/navigation-bar/setNavigationBarTitle",title:"Taro.setNavigationBarTitle(option)",description:"\u52a8\u6001\u8bbe\u7f6e\u5f53\u524d\u9875\u9762\u7684\u6807\u9898",source:"@site/versioned_docs/version-3.x/apis/ui/navigation-bar/setNavigationBarTitle.md",sourceDirName:"apis/ui/navigation-bar",slug:"/apis/ui/navigation-bar/setNavigationBarTitle",permalink:"/taro/docs/apis/ui/navigation-bar/setNavigationBarTitle",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/ui/navigation-bar/setNavigationBarTitle.md",tags:[],version:"3.x",frontMatter:{title:"Taro.setNavigationBarTitle(option)",sidebar_label:"setNavigationBarTitle"},sidebar:"API",previous:{title:"showNavigationBarLoading",permalink:"/taro/docs/apis/ui/navigation-bar/showNavigationBarLoading"},next:{title:"setNavigationBarColor",permalink:"/taro/docs/apis/ui/navigation-bar/setNavigationBarColor"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:s};function d(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u52a8\u6001\u8bbe\u7f6e\u5f53\u524d\u9875\u9762\u7684\u6807\u9898"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"option"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6807\u9898")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"complete"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fail"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"success"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.setNavigationBarTitle({\n  title: '\u5f53\u524d\u9875\u9762'\n})\n")))}d.isMDXComponent=!0},5030:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);