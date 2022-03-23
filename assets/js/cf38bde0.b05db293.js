"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24107],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),s=n,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4527:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),i=["components"],o={title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},d=void 0,u={unversionedId:"apis/media/audio/getAvailableAudioSources",id:"apis/media/audio/getAvailableAudioSources",title:"Taro.getAvailableAudioSources(option)",description:"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90",source:"@site/docs/apis/media/audio/getAvailableAudioSources.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/getAvailableAudioSources",permalink:"/taro/docs/next/apis/media/audio/getAvailableAudioSources",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/media/audio/getAvailableAudioSources.md",tags:[],version:"current",frontMatter:{title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},sidebar:"API",previous:{title:"pauseVoice",permalink:"/taro/docs/next/apis/media/audio/pauseVoice"},next:{title:"createWebAudioContext",permalink:"/taro/docs/next/apis/media/audio/createWebAudioContext"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"audioSources",id:"audiosources",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audioSources"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(keyof audioSources)[]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90\u5217\u8868\uff0c\u53ef\u5728 ",(0,l.kt)("a",{parentName:"td",href:"/docs/apis/media/recorder/RecorderManager#start"},"RecorderManager.start()"),"\u7528\u3002\u8fd4\u56de\u503c\u5b9a\u4e49\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource"},"https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h3",{id:"audiosources"},"audioSources"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auto"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4f7f\u7528\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u4e0a\u8033\u9ea6\u540e\u81ea\u52a8\u5207\u6362\u4f7f\u7528\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u6240\u6709\u5e73\u53f0\u9002\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buildInMic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headsetMic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ea6\u514b\u98ce\uff08\u6ca1\u63d2\u8033\u9ea6\u65f6\u662f\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u8033\u9ea6\u65f6\u662f\u8033\u673a\u9ea6\u514b\u98ce\uff09\uff0c\u4ec5\u9650 Android")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camcorder"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c mic\uff0c\u9002\u7528\u4e8e\u5f55\u5236\u97f3\u89c6\u9891\u5185\u5bb9\uff0c\u4ec5\u9650 Android")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"voice_communication"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c mic\uff0c\u9002\u7528\u4e8e\u5b9e\u65f6\u6c9f\u901a\uff0c\u4ec5\u9650 Android")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"voice_recognition"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c mic\uff0c\u9002\u7528\u4e8e\u8bed\u97f3\u8bc6\u522b\uff0c\u4ec5\u9650 Android")))))}m.isMDXComponent=!0},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);