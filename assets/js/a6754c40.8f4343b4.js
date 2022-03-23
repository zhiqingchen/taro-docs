"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46140],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"Taro.canIUse(schema)",sidebar_label:"canIUse"},p=void 0,l={unversionedId:"apis/base/canIUse",id:"version-2.x/apis/base/canIUse",title:"Taro.canIUse(schema)",description:"\u5224\u65ad\u5c0f\u7a0b\u5e8f\u7684 API\uff0c\u56de\u8c03\uff0c\u53c2\u6570\uff0c\u7ec4\u4ef6\u7b49\u662f\u5426\u5728\u5f53\u524d\u7248\u672c\u53ef\u7528\u3002",source:"@site/versioned_docs/version-2.x/apis/base/canIUse.md",sourceDirName:"apis/base",slug:"/apis/base/canIUse",permalink:"/taro/docs/2.x/apis/base/canIUse",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/base/canIUse.md",tags:[],version:"2.x",frontMatter:{title:"Taro.canIUse(schema)",sidebar_label:"canIUse"},sidebar:"version-2.x/API",previous:{title:"General",permalink:"/taro/docs/2.x/apis/General"},next:{title:"base64ToArrayBuffer",permalink:"/taro/docs/2.x/apis/base/base64ToArrayBuffer"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5224\u65ad\u5c0f\u7a0b\u5e8f\u7684 API\uff0c\u56de\u8c03\uff0c\u53c2\u6570\uff0c\u7ec4\u4ef6\u7b49\u662f\u5426\u5728\u5f53\u524d\u7248\u672c\u53ef\u7528\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(schema: string) => boolean\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"${API}.${method}.${param}.${option}")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"${component}.${attribute}.${option}")," \u65b9\u5f0f\u6765\u8c03\u7528  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e"),"  "),(0,o.kt)("p",null,"-"," ",(0,o.kt)("inlineCode",{parentName:"p"},"${API}")," \u4ee3\u8868 API \u540d\u5b57",(0,o.kt)("br",{parentName:"p"}),"\n","-"," ",(0,o.kt)("inlineCode",{parentName:"p"},"${method}")," \u4ee3\u8868\u8c03\u7528\u65b9\u5f0f\uff0c\u6709\u6548\u503c\u4e3areturn, success, object, callback",(0,o.kt)("br",{parentName:"p"}),"\n","-"," ",(0,o.kt)("inlineCode",{parentName:"p"},"${param}")," \u4ee3\u8868\u53c2\u6570\u6216\u8005\u8fd4\u56de\u503c",(0,o.kt)("br",{parentName:"p"}),"\n","-"," ",(0,o.kt)("inlineCode",{parentName:"p"},"${option}")," \u4ee3\u8868\u53c2\u6570\u7684\u53ef\u9009\u503c\u6216\u8005\u8fd4\u56de\u503c\u7684\u5c5e\u6027",(0,o.kt)("br",{parentName:"p"}),"\n","-"," ",(0,o.kt)("inlineCode",{parentName:"p"},"${component}")," \u4ee3\u8868\u7ec4\u4ef6\u540d\u5b57",(0,o.kt)("br",{parentName:"p"}),"\n","-"," ",(0,o.kt)("inlineCode",{parentName:"p"},"${attribute}")," \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027",(0,o.kt)("br",{parentName:"p"}),"\n","-"," ",(0,o.kt)("inlineCode",{parentName:"p"},"${option}")," \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027\u7684\u53ef\u9009\u503c"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.canIUse('openBluetoothAdapter')\nTaro.canIUse('getSystemInfoSync.return.screenWidth')\nTaro.canIUse('getSystemInfo.success.screenWidth')\nTaro.canIUse('showToast.object.image')\nTaro.canIUse('onCompassChange.callback.direction')\nTaro.canIUse('request.object.method.GET')\nTaro.canIUse('live-player')\nTaro.canIUse('text.selectable')\nTaro.canIUse('button.open-type.contact')\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.canIUse"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);