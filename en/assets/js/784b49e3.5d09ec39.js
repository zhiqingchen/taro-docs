"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83385],{3905:function(t,l,n){n.d(l,{Zo:function(){return i},kt:function(){return m}});var e=n(67294);function u(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function k(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function r(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?k(Object(n),!0).forEach((function(l){u(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function d(t,l){if(null==t)return{};var n,e,u=function(t,l){if(null==t)return{};var n,e,u={},k=Object.keys(t);for(e=0;e<k.length;e++)n=k[e],l.indexOf(n)>=0||(u[n]=t[n]);return u}(t,l);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(t);for(e=0;e<k.length;e++)n=k[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var o=e.createContext({}),c=function(t){var l=e.useContext(o),n=l;return t&&(n="function"==typeof t?t(l):r(r({},l),t)),n},i=function(t){var l=c(t.components);return e.createElement(o.Provider,{value:l},t.children)},a={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},s=e.forwardRef((function(t,l){var n=t.components,u=t.mdxType,k=t.originalType,o=t.parentName,i=d(t,["components","mdxType","originalType","parentName"]),s=c(n),m=u,h=s["".concat(o,".").concat(m)]||s[m]||a[m]||k;return n?e.createElement(h,r(r({ref:l},i),{},{components:n})):e.createElement(h,r({ref:l},i))}));function m(t,l){var n=arguments,u=l&&l.mdxType;if("string"==typeof t||u){var k=n.length,r=new Array(k);r[0]=s;var d={};for(var o in l)hasOwnProperty.call(l,o)&&(d[o]=l[o]);d.originalType=t,d.mdxType="string"==typeof t?t:u,r[1]=d;for(var c=2;c<k;c++)r[c]=n[c];return e.createElement.apply(null,r)}return e.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22068:function(t,l,n){n.r(l),n.d(l,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return i},default:function(){return s}});var e=n(83117),u=n(80102),k=(n(67294),n(3905)),r=["components"],d={title:"common",sidebar_label:"common"},o=void 0,c={unversionedId:"components/common",id:"version-2.x/components/common",title:"common",description:"StandardProps",source:"@site/versioned_docs/version-2.x/components/common.md",sourceDirName:"components",slug:"/components/common",permalink:"/taro/en/docs/2.x/components/common",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/components/common.md",tags:[],version:"2.x",frontMatter:{title:"common",sidebar_label:"common"}},i=[{value:"StandardProps",id:"standardprops",children:[],level:2},{value:"FormItemProps",id:"formitemprops",children:[],level:2},{value:"EventProps",id:"eventprops",children:[],level:2},{value:"CommonEvent",id:"commonevent",children:[],level:2},{value:"BaseEventOrig",id:"baseeventorig",children:[],level:2},{value:"ITouchEvent",id:"itouchevent",children:[],level:2},{value:"CanvasTouch",id:"canvastouch",children:[],level:2},{value:"ITouch",id:"itouch",children:[],level:2},{value:"Target",id:"target",children:[],level:2},{value:"netStatus",id:"netstatus",children:[],level:2}],a={toc:i};function s(t){var l=t.components,n=(0,u.Z)(t,r);return(0,k.kt)("wrapper",(0,e.Z)({},a,n,{components:l,mdxType:"MDXLayout"}),(0,k.kt)("h2",{id:"standardprops"},"StandardProps"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"id"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u793a, \u4fdd\u6301\u6574\u4e2a\u9875\u9762\u552f\u4e00")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"className"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u540c ",(0,k.kt)("code",null,"class"),"\uff0c\u5728 React/Nerv \u91cc\u4e00\u822c\u4f7f\u7528 ",(0,k.kt)("code",null,"className")," \u4f5c\u4e3a ",(0,k.kt)("code",null,"class")," \u7684\u4ee3\u79f0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"style"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string | CSSProperties")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u7ec4\u4ef6\u7684\u5185\u8054\u6837\u5f0f, \u53ef\u4ee5\u52a8\u6001\u8bbe\u7f6e\u7684\u5185\u8054\u6837\u5f0f")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"key"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string | number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u5982\u679c\u5217\u8868\u4e2d\u9879\u76ee\u7684\u4f4d\u7f6e\u4f1a\u52a8\u6001\u6539\u53d8\u6216\u8005\u6709\u65b0\u7684\u9879\u76ee\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff0c",(0,k.kt)("br",null),"\u9700\u8981\u4f7f\u7528 ",(0,k.kt)("code",null,"wx:key")," \u6765\u6307\u5b9a\u5217\u8868\u4e2d\u9879\u76ee\u7684\u552f\u4e00\u7684\u6807\u8bc6\u7b26\u3002")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"hidden"),(0,k.kt)("td",null,(0,k.kt)("code",null,"boolean")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u7ec4\u4ef6\u662f\u5426\u663e\u793a, \u6240\u6709\u7ec4\u4ef6\u9ed8\u8ba4\u663e\u793a")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"animation"),(0,k.kt)("td",null,(0,k.kt)("code",null,"{ actions: object[]; }")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u52a8\u753b\u5c5e\u6027")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"ref"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string | ((node: any) => any)")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u5f15\u7528")))),(0,k.kt)("h2",{id:"formitemprops"},"FormItemProps"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"name"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u8868\u5355\u6570\u636e\u6807\u8bc6")))),(0,k.kt)("h2",{id:"eventprops"},"EventProps"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"onTouchStart"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: ITouchEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onTouchMove"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: ITouchEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onTouchCancel"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: ITouchEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onTouchEnd"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: ITouchEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onClick"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: ITouchEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u624b\u6307\u89e6\u6478\u540e\u9a6c\u4e0a\u79bb\u5f00")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onLongPress"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: CommonEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u624b\u6307\u89e6\u6478\u540e\uff0c\u8d85\u8fc7350ms\u518d\u79bb\u5f00\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u5e76\u89e6\u53d1\u4e86\u8fd9\u4e2a\u4e8b\u4ef6\uff0ctap\u4e8b\u4ef6\u5c06\u4e0d\u88ab\u89e6\u53d1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onLongClick"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: CommonEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u624b\u6307\u89e6\u6478\u540e\uff0c\u8d85\u8fc7350ms\u518d\u79bb\u5f00\uff08\u63a8\u8350\u4f7f\u7528longpress\u4e8b\u4ef6\u4ee3\u66ff\uff09")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onTransitionEnd"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: CommonEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u4f1a\u5728 WXSS transition \u6216 Taro.createAnimation \u52a8\u753b\u7ed3\u675f\u540e\u89e6\u53d1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onAnimationStart"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: CommonEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u4f1a\u5728\u4e00\u4e2a WXSS animation \u52a8\u753b\u5f00\u59cb\u65f6\u89e6\u53d1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onAnimationIteration"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: CommonEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u4f1a\u5728\u4e00\u4e2a WXSS animation \u4e00\u6b21\u8fed\u4ee3\u7ed3\u675f\u65f6\u89e6\u53d1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onAnimationEnd"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: CommonEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u4f1a\u5728\u4e00\u4e2a WXSS animation \u52a8\u753b\u5b8c\u6210\u65f6\u89e6\u53d1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"onTouchForceChange"),(0,k.kt)("td",null,(0,k.kt)("code",null,"(event: CommonEvent) => any")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,k.kt)("td",null,"\u5728\u652f\u6301 3D Touch \u7684 iPhone \u8bbe\u5907\uff0c\u91cd\u6309\u65f6\u4f1a\u89e6\u53d1")))),(0,k.kt)("h2",{id:"commonevent"},"CommonEvent"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"type"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string")),(0,k.kt)("td",null,"\u4e8b\u4ef6\u7c7b\u578b")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"timeStamp"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",null,"\u4e8b\u4ef6\u751f\u6210\u65f6\u7684\u65f6\u95f4\u6233")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"target"),(0,k.kt)("td",null,(0,k.kt)("code",null,"Target")),(0,k.kt)("td",null,"\u89e6\u53d1\u4e8b\u4ef6\u7684\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"currentTarget"),(0,k.kt)("td",null,(0,k.kt)("code",null,"currentTarget")),(0,k.kt)("td",null,"\u5f53\u524d\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"detail"),(0,k.kt)("td",null,(0,k.kt)("code",null,"T")),(0,k.kt)("td",null,"\u989d\u5916\u7684\u4fe1\u606f")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"preventDefault"),(0,k.kt)("td",null,(0,k.kt)("code",null,"() => void")),(0,k.kt)("td",null,"\u963b\u6b62\u5143\u7d20\u53d1\u751f\u9ed8\u8ba4\u7684\u884c\u4e3a")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"stopPropagation"),(0,k.kt)("td",null,(0,k.kt)("code",null,"() => void")),(0,k.kt)("td",null,"\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u5230\u7236\u5143\u7d20,\u963b\u6b62\u4efb\u4f55\u7236\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u88ab\u6267\u884c")))),(0,k.kt)("h2",{id:"baseeventorig"},"BaseEventOrig"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"type"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string")),(0,k.kt)("td",null,"\u4e8b\u4ef6\u7c7b\u578b")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"timeStamp"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",null,"\u4e8b\u4ef6\u751f\u6210\u65f6\u7684\u65f6\u95f4\u6233")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"target"),(0,k.kt)("td",null,(0,k.kt)("code",null,"Target")),(0,k.kt)("td",null,"\u89e6\u53d1\u4e8b\u4ef6\u7684\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"currentTarget"),(0,k.kt)("td",null,(0,k.kt)("code",null,"currentTarget")),(0,k.kt)("td",null,"\u5f53\u524d\u7ec4\u4ef6\u7684\u4e00\u4e9b\u5c5e\u6027\u503c\u96c6\u5408")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"detail"),(0,k.kt)("td",null,(0,k.kt)("code",null,"T")),(0,k.kt)("td",null,"\u989d\u5916\u7684\u4fe1\u606f")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"preventDefault"),(0,k.kt)("td",null,(0,k.kt)("code",null,"() => void")),(0,k.kt)("td",null,"\u963b\u6b62\u5143\u7d20\u53d1\u751f\u9ed8\u8ba4\u7684\u884c\u4e3a")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"stopPropagation"),(0,k.kt)("td",null,(0,k.kt)("code",null,"() => void")),(0,k.kt)("td",null,"\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u5230\u7236\u5143\u7d20,\u963b\u6b62\u4efb\u4f55\u7236\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u88ab\u6267\u884c")))),(0,k.kt)("h2",{id:"itouchevent"},"ITouchEvent"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"touches"),(0,k.kt)("td",null,(0,k.kt)("code",null,"ITouch[]")),(0,k.kt)("td",null,"\u89e6\u6478\u4e8b\u4ef6\uff0c\u5f53\u524d\u505c\u7559\u5728\u5c4f\u5e55\u4e2d\u7684\u89e6\u6478\u70b9\u4fe1\u606f\u7684\u6570\u7ec4")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"changedTouches"),(0,k.kt)("td",null,(0,k.kt)("code",null,"CanvasTouch[]")),(0,k.kt)("td",null,"\u89e6\u6478\u4e8b\u4ef6\uff0c\u5f53\u524d\u53d8\u5316\u7684\u89e6\u6478\u70b9\u4fe1\u606f\u7684\u6570\u7ec4")))),(0,k.kt)("h2",{id:"canvastouch"},"CanvasTouch"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"identifier"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number"))),(0,k.kt)("tr",null,(0,k.kt)("td",null,"x"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number"))),(0,k.kt)("tr",null,(0,k.kt)("td",null,"y"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number"))))),(0,k.kt)("h2",{id:"itouch"},"ITouch"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"identifier"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",null,"\u89e6\u6478\u70b9\u7684\u6807\u8bc6\u7b26")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"pageX"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",null,"\u8ddd\u79bb\u6587\u6863\u5de6\u4e0a\u89d2\u7684\u8ddd\u79bb\uff0c\u6587\u6863\u7684\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9 \uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"pageY"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",null,"\u8ddd\u79bb\u6587\u6863\u5de6\u4e0a\u89d2\u7684\u8ddd\u79bb\uff0c\u6587\u6863\u7684\u5de6\u4e0a\u89d2\u4e3a\u539f\u70b9 \uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"clientX"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",null,"\u8ddd\u79bb\u9875\u9762\u53ef\u663e\u793a\u533a\u57df\uff08\u5c4f\u5e55\u9664\u53bb\u5bfc\u822a\u6761\uff09\u5de6\u4e0a\u89d2\u8ddd\u79bb\uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"clientY"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",null,"\u8ddd\u79bb\u9875\u9762\u53ef\u663e\u793a\u533a\u57df\uff08\u5c4f\u5e55\u9664\u53bb\u5bfc\u822a\u6761\uff09\u5de6\u4e0a\u89d2\u8ddd\u79bb\uff0c\u6a2a\u5411\u4e3aX\u8f74\uff0c\u7eb5\u5411\u4e3aY\u8f74")))),(0,k.kt)("h2",{id:"target"},"Target"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",null,"\u8bf4\u660e"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"id"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string")),(0,k.kt)("td",null,"\u4e8b\u4ef6\u6e90\u7ec4\u4ef6\u7684id")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"tagName"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string")),(0,k.kt)("td",null,"\u5f53\u524d\u7ec4\u4ef6\u7684\u7c7b\u578b")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"dataset"),(0,k.kt)("td",null,(0,k.kt)("code",null," ","{ [key: string]: any; }")),(0,k.kt)("td",null,"\u4e8b\u4ef6\u6e90\u7ec4\u4ef6\u4e0a\u7531data-\u5f00\u5934\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u7ec4\u6210\u7684\u96c6\u5408")))),(0,k.kt)("h2",{id:"netstatus"},"netStatus"),(0,k.kt)("p",null,"\u7f51\u7edc\u72b6\u6001\u6570\u636e"),(0,k.kt)("table",null,(0,k.kt)("thead",null,(0,k.kt)("tr",null,(0,k.kt)("th",null,"\u53c2\u6570"),(0,k.kt)("th",null,"\u7c7b\u578b"),(0,k.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"))),(0,k.kt)("tbody",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"videoBitrate"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"audioBitrate"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"videoFPS"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string | number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"videoGOP"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"netSpeed"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"netJitter"),(0,k.kt)("td",null,(0,k.kt)("code",null,"number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"videoWidth"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string | number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"videoHeight"),(0,k.kt)("td",null,(0,k.kt)("code",null,"string | number")),(0,k.kt)("td",{style:{textAlign:"center"}},"\u5426")))))}s.isMDXComponent=!0}}]);