"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[73222],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=l.createContext({}),i=function(t){var e=l.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=i(t.components);return l.createElement(k.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,k=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=i(n),p=r,s=m["".concat(k,".").concat(p)]||m[p]||c[p]||a;return n?l.createElement(s,o(o({ref:e},u),{},{components:n})):l.createElement(s,o({ref:e},u))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var d={};for(var k in e)hasOwnProperty.call(e,k)&&(d[k]=e[k]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var i=2;i<a;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41806:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],d={title:"Camera",sidebar_label:"Camera"},k=void 0,i={unversionedId:"components/media/camera",id:"version-2.x/components/media/camera",title:"Camera",description:"\u7cfb\u7edf\u76f8\u673a",source:"@site/versioned_docs/version-2.x/components/media/camera.md",sourceDirName:"components/media",slug:"/components/media/camera",permalink:"/taro/en/docs/2.x/components/media/camera",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/components/media/camera.md",tags:[],version:"2.x",frontMatter:{title:"Camera",sidebar_label:"Camera"},sidebar:"version-2.x/components",previous:{title:"Video",permalink:"/taro/en/docs/2.x/components/media/video"},next:{title:"Map",permalink:"/taro/en/docs/2.x/components/maps/map"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"CameraProps",id:"cameraprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"mode",id:"mode",children:[],level:3},{value:"resolution",id:"resolution",children:[],level:3},{value:"devicePosition",id:"deviceposition",children:[],level:3},{value:"flash",id:"flash",children:[],level:3},{value:"frameSize",id:"framesize",children:[],level:3},{value:"onInitDoneEventDetail",id:"oninitdoneeventdetail",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],c={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7cfb\u7edf\u76f8\u673a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<CameraProps>\n")),(0,a.kt)("h2",{id:"cameraprops"},"CameraProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"normal" | "scanCode"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"normal"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6a21\u5f0f\uff0c\u6709\u6548\u503c\u4e3anormal, scanCode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"resolution"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"low" | "medium" | "high"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"medium"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5206\u8fa8\u7387\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"devicePosition"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"front" | "back"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"back"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6444\u50cf\u5934\u671d\u5411")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"flash"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"auto" | "on" | "off" | "torch"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"auto"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u95ea\u5149\u706f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"frameSize"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"medium" | "small" | "large"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"medium"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a\u671f\u671b\u7684\u76f8\u673a\u5e27\u6570\u636e\u5c3a\u5bf8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scanArea"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number[]")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u626b\u7801\u8bc6\u522b\u533a\u57df\uff0c\u683c\u5f0f\u4e3a[x, y, w, h]\uff0c",(0,a.kt)("br",null),"x,y\u662f\u76f8\u5bf9\u4e8ecamera\u663e\u793a\u533a\u57df\u7684\u5de6\u4e0a\u89d2\uff0c",(0,a.kt)("br",null),'w,h\u4e3a\u533a\u57df\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\uff0c\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onStop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6444\u50cf\u5934\u5728\u975e\u6b63\u5e38\u7ec8\u6b62\u65f6\u89e6\u53d1\uff0c",(0,a.kt)("br",null),"\u5982\u9000\u51fa\u540e\u53f0\u7b49\u60c5\u51b5")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7528\u6237\u4e0d\u5141\u8bb8\u4f7f\u7528\u6444\u50cf\u5934\u65f6\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onInitDone"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onInitDoneEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u76f8\u673a\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScanCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5728\u6210\u529f\u8bc6\u522b\u5230\u4e00\u7ef4\u7801\u65f6\u89e6\u53d1\uff0c",(0,a.kt)("br",null),'\u4ec5\u5728 mode="scanCode" \u65f6\u751f\u6548')))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.mode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.resolution"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.devicePosition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.flash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.frameSize"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.scanArea"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onStop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onInitDone"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onScanCode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("p",null,"mode \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"normal"),(0,a.kt)("td",null,"\u76f8\u673a\u6a21\u5f0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scanCode"),(0,a.kt)("td",null,"\u626b\u7801\u6a21\u5f0f")))),(0,a.kt)("h3",{id:"resolution"},"resolution"),(0,a.kt)("p",null,"resolution \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"low"),(0,a.kt)("td",null,"\u4f4e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"medium"),(0,a.kt)("td",null,"\u4e2d")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"high"),(0,a.kt)("td",null,"\u9ad8")))),(0,a.kt)("h3",{id:"deviceposition"},"devicePosition"),(0,a.kt)("p",null,"device-position \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"front"),(0,a.kt)("td",null,"\u524d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"back"),(0,a.kt)("td",null,"\u540e\u7f6e")))),(0,a.kt)("h3",{id:"flash"},"flash"),(0,a.kt)("p",null,"flash \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"auto"),(0,a.kt)("td",null,"\u81ea\u52a8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"on"),(0,a.kt)("td",null,"\u6253\u5f00")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"off"),(0,a.kt)("td",null,"\u5173\u95ed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"torch"),(0,a.kt)("td",null,"\u5e38\u4eae")))),(0,a.kt)("h3",{id:"framesize"},"frameSize"),(0,a.kt)("p",null,"frame-size \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"small"),(0,a.kt)("td",null,"\u5c0f\u5c3a\u5bf8\u5e27\u6570\u636e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"medium"),(0,a.kt)("td",null,"\u4e2d\u5c3a\u5bf8\u5e27\u6570\u636e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"large"),(0,a.kt)("td",null,"\u5927\u5c3a\u5bf8\u5e27\u6570\u636e")))),(0,a.kt)("h3",{id:"oninitdoneeventdetail"},"onInitDoneEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxZoom"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u6700\u5927\u53d8\u7126")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Camera"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);