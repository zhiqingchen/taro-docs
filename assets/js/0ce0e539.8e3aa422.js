"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46685],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),g=m(n),s=r,N=g["".concat(p,".").concat(s)]||g[s]||d[s]||i;return n?a.createElement(N,o(o({ref:e},c),{},{components:n})):a.createElement(N,o({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42803:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"NavigationBar",sidebar_label:"NavigationBar"},p=void 0,m={unversionedId:"components/navigation-bar",id:"version-3.x/components/navigation-bar",title:"NavigationBar",description:"\u5728 Taro \u4e2d\u4f7f\u7528\u6b64\u7ec4\u4ef6\uff0c\u9700\u8981\u914d\u5408 tarojs-plugin-platform-miniprogram \u63d2\u4ef6\u3002",source:"@site/versioned_docs/version-3.x/components/navigation-bar.md",sourceDirName:"components",slug:"/components/navigation-bar",permalink:"/taro/docs/components/navigation-bar",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/components/navigation-bar.md",tags:[],version:"3.x",frontMatter:{title:"NavigationBar",sidebar_label:"NavigationBar"},sidebar:"components",previous:{title:"\u5176\u4ed6",permalink:"/taro/docs/components/open/others"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"NavigationBarProps",id:"navigationbarprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3}],level:2}],d={toc:c};function g(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 Taro \u4e2d\u4f7f\u7528\u6b64\u7ec4\u4ef6\uff0c\u9700\u8981\u914d\u5408 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/baranwang/tarojs-plugin-platform-miniprogram"},"tarojs-plugin-platform-miniprogram \u63d2\u4ef6"),"\u3002\n\u76f8\u5173\u8ba8\u8bba\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/6092"},"#6092")))),(0,i.kt)("p",null,"\u9875\u9762\u5bfc\u822a\u6761\u914d\u7f6e\u8282\u70b9\uff0c\u7528\u4e8e\u6307\u5b9a\u5bfc\u822a\u680f\u7684\u4e00\u4e9b\u5c5e\u6027\u3002\u53ea\u80fd\u662f PageMeta \u7ec4\u4ef6\u5185\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0c\u9700\u8981\u914d\u5408\u5b83\u4e00\u540c\u4f7f\u7528\u3002\n\u901a\u8fc7\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u83b7\u5f97\u7c7b\u4f3c\u4e8e\u8c03\u7528 Taro.setNavigationBarTitle Taro.setNavigationBarColor \u7b49\u63a5\u53e3\u8c03\u7528\u7684\u6548\u679c\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<NavigationBarProps>\n")),(0,i.kt)("h2",{id:"navigationbarprops"},"NavigationBarProps"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bfc\u822a\u6761\u6807\u9898")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"loading"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u5bfc\u822a\u6761\u663e\u793a loading \u52a0\u8f7d\u63d0\u793a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"frontColor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bfc\u822a\u6761\u524d\u666f\u989c\u8272\u503c\uff0c\u5305\u62ec\u6309\u94ae\u3001\u6807\u9898\u3001\u72b6\u6001\u680f\u7684\u989c\u8272\uff0c\u4ec5\u652f\u6301 #ffffff \u548c #000000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bfc\u822a\u6761\u80cc\u666f\u989c\u8272\u503c\uff0c\u6709\u6548\u503c\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"colorAnimationDuration"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6539\u53d8\u5bfc\u822a\u680f\u989c\u8272\u65f6\u7684\u52a8\u753b\u65f6\u957f\uff0c\u9ed8\u8ba4\u4e3a 0 \uff08\u5373\u6ca1\u6709\u52a8\u753b\u6548\u679c\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"colorAnimationTimingFunc"),(0,i.kt)("td",{parentName:"tr",align:null},'"linear" or "easeIn" or "easeOut" or "easeInOut"'),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"linear"')),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6539\u53d8\u5bfc\u822a\u680f\u989c\u8272\u65f6\u7684\u52a8\u753b\u65b9\u5f0f\uff0c\u652f\u6301 linear \u3001 easeIn \u3001 easeOut \u548c easeInOut")))),(0,i.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.title"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.loading"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.frontColor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.backgroundColor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.colorAnimationDuration"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.colorAnimationTimingFunc"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}g.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);