"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49573],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,i(i({ref:r},c),{},{components:t})):o.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59947:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=t(83117),n=t(80102),a=(t(67294),t(3905)),i=["components"],l={title:"Taro Release Notes"},s=void 0,p={unversionedId:"version",id:"version-3.x/version",title:"Taro Release Notes",description:"Compared to Taro 1/2 compile-time architecture, Taro 3 a primarily runtime based architecture, allowing developers to get the full development experience of React / Vue frameworks. For details, please refer to \u300aExploration and practice of cross-framework development for mini program\u300b\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/version.md",sourceDirName:".",slug:"/version",permalink:"/taro/en/docs/version",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/version.md",tags:[],version:"3.x",frontMatter:{title:"Taro Release Notes"},sidebar:"docs",previous:{title:"Taro Introduction",permalink:"/taro/en/docs/"},next:{title:"Taro Team",permalink:"/taro/en/docs/team"}},c=[{value:"Latest Version",id:"latest-version",children:[],level:3},{value:"Taro 3.1",id:"taro-31",children:[],level:3},{value:"Taro 3.2",id:"taro-32",children:[],level:3},{value:"Version Information",id:"version-information",children:[],level:3},{value:"Development Plan",id:"development-plan",children:[],level:3},{value:"Upgrade Guide",id:"upgrade-guide",children:[],level:3}],u={toc:c};function d(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Compared to Taro 1/2 compile-time architecture, Taro 3 a primarily runtime based architecture, allowing developers to get the full development experience of React / Vue frameworks. For details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247483770&idx=1&sn=ba2cdea5256e1c4e7bb513aa4c837834"},"\u300aExploration and practice of cross-framework development for mini program\u300b"),"\u3002"),(0,a.kt)("h3",{id:"latest-version"},"Latest Version"),(0,a.kt)("p",null,"Available in the latest version ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/releases"},"Taro Release"),"\u3002"),(0,a.kt)("p",null,"It can also be viewed at the command line by entering the command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm info @tarojs/cli\n")),(0,a.kt)("h3",{id:"taro-31"},"Taro 3.1"),(0,a.kt)("p",null,"The main change in Taro 3.1 is to create an open architecture that supports compiling to any mini program platform in the form of a plugin."),(0,a.kt)("p",null,"For more information, please refer to",(0,a.kt)("a",{parentName:"p",href:"https://docs.taro.zone/blog/2021-03-10-taro-3-1-lts"},"\u300aTaro officially released version 3.1\u300b")),(0,a.kt)("h3",{id:"taro-32"},"Taro 3.2"),(0,a.kt)("p",null,"Taro 3.2 adds support for ReactNative."),(0,a.kt)("p",null,"For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.taro.zone/blog/2021-04-08-taro-3.2"},"\u300aTaro version 3.2 officially released: React Native support, the return of the king\u300b"),"\u3002"),(0,a.kt)("p",null,"If you want to use Taro 1/2, you can visit ",(0,a.kt)("a",{parentName:"p",href:"/versions"},"document version")," for help."),(0,a.kt)("h3",{id:"version-information"},"Version Information"),(0,a.kt)("p",null,"Detailed information about each release of Taro is available in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/releases"},"Taro Release"),"\u3002"),(0,a.kt)("h3",{id:"development-plan"},"Development Plan"),(0,a.kt)("p",null,"The Taro team is currently focusing its iterations on Taro 3. Taro 1 / 2 will only fix major issues and will not add new features."),(0,a.kt)("p",null,"Taro will release weekly ",(0,a.kt)("strong",{parentName:"p"},"patch releases")," for minor feature additions and issue fixes."),(0,a.kt)("p",null,"Major features are first publicized and comments are collected through ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-rfcs"},"Taro-RFC")," and then the final ",(0,a.kt)("strong",{parentName:"p"},"minor")," version is released after development testing\u3002"),(0,a.kt)("h3",{id:"upgrade-guide"},"Upgrade Guide"),(0,a.kt)("p",null,"How to upgrade from Taro 1 / 2 to Taro 3 please refer to\uff1a",(0,a.kt)("a",{parentName:"p",href:"./migration"},"Migrate from old version to Taro Next"),"\u3002"),(0,a.kt)("p",null,"For a more detailed guide on migration between versions, please refer to\uff1a",(0,a.kt)("a",{parentName:"p",href:"/blog/2020-09-01-taro-versions"},"\u300aThe definitive guide to Taro version upgrades\u300b"),"\u3002"),(0,a.kt)("p",null,"Community-contributed one-click upgrade tool: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SyMind/taro2-to-3"},"taro2-to-3"),", by @SyMind."))}d.isMDXComponent=!0}}]);