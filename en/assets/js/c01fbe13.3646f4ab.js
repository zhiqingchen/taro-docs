"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[30108],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44147:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=["components"],c={title:"Taro.removeStorageSync(key)",sidebar_label:"removeStorageSync"},i=void 0,s={unversionedId:"apis/storage/removeStorageSync",id:"version-2.x/apis/storage/removeStorageSync",title:"Taro.removeStorageSync(key)",description:"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u540c\u6b65\u79fb\u9664\u6307\u5b9a key \u3002",source:"@site/versioned_docs/version-2.x/apis/storage/removeStorageSync.md",sourceDirName:"apis/storage",slug:"/apis/storage/removeStorageSync",permalink:"/taro/en/docs/2.x/apis/storage/removeStorageSync",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/storage/removeStorageSync.md",tags:[],version:"2.x",frontMatter:{title:"Taro.removeStorageSync(key)",sidebar_label:"removeStorageSync"},sidebar:"version-2.x/API",previous:{title:"setStorage",permalink:"/taro/en/docs/2.x/apis/storage/setStorage"},next:{title:"removeStorage",permalink:"/taro/en/docs/2.x/apis/storage/removeStorage"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[],level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u540c\u6b65\u79fb\u9664\u6307\u5b9a key \u3002\nTaro.removeStorage \u7684\u540c\u6b65\u7248\u672c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"{ (key: string): void; (key: string): void; }\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"key"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  Taro.removeStorageSync('key')\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.removeStorage({\n  key: 'key',\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  Taro.removeStorageSync('key')\n} catch (e) {\n  // Do something when catch error\n}\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.removeStorageSync"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);