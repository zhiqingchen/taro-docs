"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[88313],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44967:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={title:"Taro.onBLECharacteristicValueChange(callback)",sidebar_label:"onBLECharacteristicValueChange"},c=void 0,u={unversionedId:"apis/device/bluetooth-ble/onBLECharacteristicValueChange",id:"apis/device/bluetooth-ble/onBLECharacteristicValueChange",title:"Taro.onBLECharacteristicValueChange(callback)",description:"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u3002\u5fc5\u987b\u5148\u542f\u7528 notifyBLECharacteristicValueChange \u63a5\u53e3\u624d\u80fd\u63a5\u6536\u5230\u8bbe\u5907\u63a8\u9001\u7684 notification\u3002",source:"@site/docs/apis/device/bluetooth-ble/onBLECharacteristicValueChange.md",sourceDirName:"apis/device/bluetooth-ble",slug:"/apis/device/bluetooth-ble/onBLECharacteristicValueChange",permalink:"/taro/en/docs/next/apis/device/bluetooth-ble/onBLECharacteristicValueChange",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/apis/device/bluetooth-ble/onBLECharacteristicValueChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onBLECharacteristicValueChange(callback)",sidebar_label:"onBLECharacteristicValueChange"},sidebar:"API",previous:{title:"onBLEConnectionStateChange",permalink:"/taro/en/docs/next/apis/device/bluetooth-ble/onBLEConnectionStateChange"},next:{title:"offBLEMTUChange",permalink:"/taro/en/docs/next/apis/device/bluetooth-ble/offBLEMTUChange"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],s={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u3002\u5fc5\u987b\u5148\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"notifyBLECharacteristicValueChange")," \u63a5\u53e3\u624d\u80fd\u63a5\u6536\u5230\u8bbe\u5907\u63a8\u9001\u7684 notification\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Callback")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CallbackResult"))))),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"characteristicId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u84dd\u7259\u8bbe\u5907 id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serviceId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u5f81\u503c\u6700\u65b0\u7684\u503c")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// ArrayBuffer\u8f6c16\u8fdb\u5236\u5b57\u7b26\u4e32\u793a\u4f8b\nfunction ab2hex(buffer) {\n  let hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.onBLECharacteristicValueChange(function (res) {\n  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)\n  console.log(ab2hex(res.value))\n})\n")))}d.isMDXComponent=!0},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);