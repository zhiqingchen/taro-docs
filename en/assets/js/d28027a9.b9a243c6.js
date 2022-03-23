"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23790],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14668:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},u=void 0,p={unversionedId:"apis/ui/animation/createAnimation",id:"version-3.x/apis/ui/animation/createAnimation",title:"Taro.createAnimation(option)",description:"Create an animation instance animation. Describe the animation by calling the instance. Use the method of exporting the animation instance to export the animation data and pass it to the animation property of the component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/animation/createAnimation.md",sourceDirName:"apis/ui/animation",slug:"/apis/ui/animation/createAnimation",permalink:"/taro/en/docs/apis/ui/animation/createAnimation",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/ui/animation/createAnimation.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},sidebar:"API",previous:{title:"ScrollViewContext",permalink:"/taro/en/docs/apis/ui/scroll/ScrollViewContext"},next:{title:"Animation",permalink:"/taro/en/docs/apis/ui/animation/"}},c=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"timingFunction",id:"timingfunction",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:c};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create an ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," instance animation. Describe the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," by calling the instance. Use the method of exporting the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," instance to export the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," data and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," property of the component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/animation/wx.createAnimation.html"},"Reference"))),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Animation\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"option"},"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"delay"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation delay time (in ms)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation duration (in ms)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"timingFunction"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation effect")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"transformOrigin"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null)))),(0,r.kt)("h3",{id:"timingfunction"},"timingFunction"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"linear"),(0,r.kt)("td",null,"The animation keeps the same speed from start to end")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease"),(0,r.kt)("td",null,"The animation starts slow, then speeds up, and then slows down before ending.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease-in"),(0,r.kt)("td",null,"The animation starts at low speed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease-in-out"),(0,r.kt)("td",null,"The animation starts and ends at low speed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease-out"),(0,r.kt)("td",null,"The animation ends at low speed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"step-start"),(0,r.kt)("td",null,"The first frame of the animation jumps to the end state until the animation ends")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"step-end"),(0,r.kt)("td",null,"The animation remains the start state until the final frame jumps to the end state")))),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'var animation = Taro.createAnimation({\n  transformOrigin: "50% 50%",\n  duration: 1000,\n  timingFunction: "ease",\n  delay: 0\n})\n')),(0,r.kt)("h2",{id:"api-support"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Taro.createAnimation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);