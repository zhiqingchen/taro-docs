"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68097],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(n),k=l,h=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return n?r.createElement(h,a(a({ref:e},c),{},{components:n})):r.createElement(h,a({ref:e},c))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,a[1]=u;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63740:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(83117),l=n(80102),o=(n(67294),n(3905)),a=["components"],u={title:"Taro.openBluetoothAdapter(option)",sidebar_label:"openBluetoothAdapter"},i=void 0,p={unversionedId:"apis/device/bluetooth/openBluetoothAdapter",id:"version-2.x/apis/device/bluetooth/openBluetoothAdapter",title:"Taro.openBluetoothAdapter(option)",description:"\u521d\u59cb\u5316\u84dd\u7259\u6a21\u5757",source:"@site/versioned_docs/version-2.x/apis/device/bluetooth/openBluetoothAdapter.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/openBluetoothAdapter",permalink:"/taro/en/docs/2.x/apis/device/bluetooth/openBluetoothAdapter",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/device/bluetooth/openBluetoothAdapter.md",tags:[],version:"2.x",frontMatter:{title:"Taro.openBluetoothAdapter(option)",sidebar_label:"openBluetoothAdapter"},sidebar:"version-2.x/API",previous:{title:"startBluetoothDevicesDiscovery",permalink:"/taro/en/docs/2.x/apis/device/bluetooth/startBluetoothDevicesDiscovery"},next:{title:"onBluetoothDeviceFound",permalink:"/taro/en/docs/2.x/apis/device/bluetooth/onBluetoothDeviceFound"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"state",id:"state",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],d={toc:c};function s(t){var e=t.components,n=(0,l.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u84dd\u7259\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u84dd\u7259\u76f8\u5173 API \u5fc5\u987b\u5728 Taro.openBluetoothAdapter \u8c03\u7528\u4e4b\u540e\u4f7f\u7528\u3002\u5426\u5219 API \u4f1a\u8fd4\u56de\u9519\u8bef\uff08errCode=10000\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u7528\u6237\u84dd\u7259\u5f00\u5173\u672a\u5f00\u542f\u6216\u8005\u624b\u673a\u4e0d\u652f\u6301\u84dd\u7259\u529f\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u8c03\u7528 Taro.openBluetoothAdapter \u76d1\u542c\u624b\u673a\u84dd\u7259\u72b6\u6001\u7684\u6539\u53d8\uff0c\u4e5f\u53ef\u4ee5\u8c03\u7528\u84dd\u7259\u6a21\u5757\u7684\u6240\u6709API\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: BluetoothError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: BluetoothError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: BluetoothError) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h3",{id:"state"},"state"),(0,o.kt)("p",null,"object.fail \u56de\u8c03\u51fd\u6570\u8fd4\u56de\u7684 state \u53c2\u6570\uff08\u4ec5 iOS\uff09"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,"\u672a\u77e5")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"\u91cd\u7f6e\u4e2d")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"2"),(0,o.kt)("td",null,"\u4e0d\u652f\u6301")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"\u672a\u6388\u6743")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"4"),(0,o.kt)("td",null,"\u672a\u5f00\u542f")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.openBluetoothAdapter({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.openBluetoothAdapter"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);