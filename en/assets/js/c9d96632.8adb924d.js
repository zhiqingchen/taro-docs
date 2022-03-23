"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50169],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=m(a),d=n,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return a?r.createElement(k,l(l({ref:e},c),{},{components:a})):r.createElement(k,l({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62820:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),l=["components"],o={title:"VKFrame",sidebar_label:"VKFrame"},p=void 0,m={unversionedId:"apis/ai/visionkit/VKFrame",id:"apis/ai/visionkit/VKFrame",title:"VKFrame",description:"vision kit \u4f1a\u8bdd\u5bf9\u8c61",source:"@site/docs/apis/ai/visionkit/VKFrame.md",sourceDirName:"apis/ai/visionkit",slug:"/apis/ai/visionkit/VKFrame",permalink:"/taro/en/docs/next/apis/ai/visionkit/VKFrame",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/ai/visionkit/VKFrame.md",tags:[],version:"current",frontMatter:{title:"VKFrame",sidebar_label:"VKFrame"},sidebar:"API",previous:{title:"VKCamera",permalink:"/taro/en/docs/next/apis/ai/visionkit/VKCamera"},next:{title:"VKSession",permalink:"/taro/en/docs/next/apis/ai/visionkit/VKSession"}},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"getCameraTexture",id:"getcameratexture",children:[],level:3},{value:"getDisplayTransform",id:"getdisplaytransform",children:[],level:3}],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"getCameraTextureResult",id:"getcameratextureresult",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:c};function u(t){var e=t.components,o=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"vision kit \u4f1a\u8bdd\u5bf9\u8c61"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u65f6\u95f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camera"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"VKCamera")),(0,i.kt)("td",{parentName:"tr",align:null},"\u76f8\u673a\u5bf9\u8c61")))),(0,i.kt)("h3",{id:"getcameratexture"},"getCameraTexture"),(0,i.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u5e27\u7eb9\u7406\uff0c\u76ee\u524d\u53ea\u652f\u6301 YUV \u7eb9\u7406"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getCameraTexture.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(ctx: WebGLRenderingContext) => getCameraTextureResult\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ctx"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WebGLRenderingContext"))))),(0,i.kt)("h3",{id:"getdisplaytransform"},"getDisplayTransform"),(0,i.kt)("p",null,"\u83b7\u53d6\u7eb9\u7406\u8c03\u6574\u77e9\u9635\u3002\u9ed8\u8ba4\u83b7\u53d6\u5230\u7684\u7eb9\u7406\u662f\u672a\u7ecf\u88c1\u526a\u8c03\u6574\u7684\u7eb9\u7406\uff0c\u6b64\u77e9\u9635\u53ef\u7528\u4e8e\u5728\u7740\u8272\u5668\u4e2d\u6839\u636e\u5e27\u5bf9\u8c61\u5c3a\u5bf8\u5bf9\u7eb9\u7406\u8fdb\u884c\u88c1\u526a"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getDisplayTransform.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Float32Array\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"getcameratextureresult"},"getCameraTextureResult"),(0,i.kt)("p",null,"\u5e27\u7eb9\u7406\u5bf9\u8c61"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"yTexture"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WebGLTexture")),(0,i.kt)("td",{parentName:"tr",align:null},"Y \u5206\u91cf\u7eb9\u7406")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uvTexture"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WebGLTexture")),(0,i.kt)("td",{parentName:"tr",align:null},"UV \u5206\u91cf\u7eb9\u7406")))),(0,i.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"VKFrame"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"VKFrame.getCameraTexture"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"VKFrame.getDisplayTransform"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0},5030:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);