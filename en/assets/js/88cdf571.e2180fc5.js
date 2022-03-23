"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7962],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5533:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Debug \u6307\u5357"},p=void 0,s={unversionedId:"debug",id:"version-2.x/debug",title:"Debug \u6307\u5357",description:"\u548c\u6240\u6709\u6846\u67b6\u4e00\u6837\uff0cTaro \u4e5f\u53ef\u80fd\u5b58\u5728 bug\u3002\u5f53\u4f60\u8ba4\u4e3a\u4f60\u7684\u4ee3\u7801\u6ca1\u6709\u95ee\u9898\uff0c\u95ee\u9898\u51fa\u5728 Taro \u65f6\uff0c\u53ef\u4ee5\u6309\u7167\u672c\u7ae0\u5185\u5bb9\u8fdb\u884c\u8c03\u8bd5\u3002",source:"@site/versioned_docs/version-2.x/debug.md",sourceDirName:".",slug:"/debug",permalink:"/taro/en/docs/2.x/debug",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/debug.md",tags:[],version:"2.x",frontMatter:{title:"Debug \u6307\u5357"},sidebar:"version-2.x/docs",previous:{title:"React Native \u7aef\u5f00\u53d1\u6d41\u7a0b",permalink:"/taro/en/docs/2.x/react-native"},next:{title:"\u7f16\u8bd1\u914d\u7f6e",permalink:"/taro/en/docs/2.x/config"}},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 yarn \u5b89\u88c5\u5b8c CLI \u62a5\u9519",id:"\u4f7f\u7528-yarn-\u5b89\u88c5\u5b8c-cli-\u62a5\u9519",children:[],level:3},{value:"\u9879\u76ee\u4f9d\u8d56\u4e00\u76f4\u5b89\u88c5\u4e0d\u4e0b\u6765",id:"\u9879\u76ee\u4f9d\u8d56\u4e00\u76f4\u5b89\u88c5\u4e0d\u4e0b\u6765",children:[],level:3}],level:2},{value:"\u5c0f\u7a0b\u5e8f",id:"\u5c0f\u7a0b\u5e8f",children:[{value:"\u6ca1\u6709\u4efb\u4f55\u62a5\u9519\uff0c\u4f46\u663e\u793a\u7684\u7ed3\u679c\u4e0d\u5982\u9884\u671f",id:"\u6ca1\u6709\u4efb\u4f55\u62a5\u9519\u4f46\u663e\u793a\u7684\u7ed3\u679c\u4e0d\u5982\u9884\u671f",children:[{value:"\u88ab diff \u903b\u8f91\u8fc7\u6ee4",id:"\u88ab-diff-\u903b\u8f91\u8fc7\u6ee4",children:[{value:"debug diff",id:"debug-diff",children:[],level:5},{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u589e\u52a0\u6570\u7ec4\u5143\u7d20\u65e0\u6cd5\u6b63\u786e\u66f4\u65b0\u6570\u7ec4 length",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u589e\u52a0\u6570\u7ec4\u5143\u7d20\u65e0\u6cd5\u6b63\u786e\u66f4\u65b0\u6570\u7ec4-length",children:[],level:5}],level:4},{value:"\u7f16\u8bd1\u6a21\u677f\u51fa\u9519",id:"\u7f16\u8bd1\u6a21\u677f\u51fa\u9519",children:[],level:4}],level:3},{value:"\u8fd0\u884c\u65f6\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u62a5\u9519",id:"\u8fd0\u884c\u65f6\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u62a5\u9519",children:[],level:3},{value:"\u751f\u547d\u5468\u671f/\u8def\u7531/setState \u51fa\u9519",id:"\u751f\u547d\u5468\u671f\u8def\u7531setstate-\u51fa\u9519",children:[],level:3},{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8868\u5355\u7ec4\u4ef6\u95ee\u9898",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8868\u5355\u7ec4\u4ef6\u95ee\u9898",children:[],level:3},{value:"API \u95ee\u9898",id:"api-\u95ee\u9898",children:[{value:"API \u8c03\u7528\u7ed3\u679c\u4e0d\u7b26\u5408\u9884\u671f",id:"api-\u8c03\u7528\u7ed3\u679c\u4e0d\u7b26\u5408\u9884\u671f",children:[],level:4},{value:"API \u8c03\u7528\u62a5\u9519",id:"api-\u8c03\u7528\u62a5\u9519",children:[],level:4}],level:3}],level:2},{value:"H5",id:"h5",children:[{value:"\u8fd0\u884c\u65f6\u62a5 DOM \u76f8\u5173\u9519\u8bef",id:"\u8fd0\u884c\u65f6\u62a5-dom-\u76f8\u5173\u9519\u8bef",children:[],level:3}],level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[{value:"jsEnginScriptError",id:"jsenginscripterror",children:[],level:3}],level:2},{value:"\u5176\u5b83\u8d44\u6e90",id:"\u5176\u5b83\u8d44\u6e90",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u548c\u6240\u6709\u6846\u67b6\u4e00\u6837\uff0cTaro \u4e5f\u53ef\u80fd\u5b58\u5728 bug\u3002\u5f53\u4f60\u8ba4\u4e3a\u4f60\u7684\u4ee3\u7801\u6ca1\u6709\u95ee\u9898\uff0c\u95ee\u9898\u51fa\u5728 Taro \u65f6\uff0c\u53ef\u4ee5\u6309\u7167\u672c\u7ae0\u5185\u5bb9\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,i.kt)("p",null,"\u5f53\u4f60\u5728 Taro \u8fdb\u884c debug \u65f6\uff0c\u8bf7\u5148\u786e\u8ba4\u4e00\u4e0b\u6d41\u7a0b\u5747\u5df2\u5b8c\u6210\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ESLint \u5df2\u7ecf\u5f00\u542f\u5e76\u4e14\u6ca1\u6709\u62a5\u9519\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5927\u81f4\u8fc7\u4e86\u4e00\u904d\u5305\u62ec",(0,i.kt)("a",{parentName:"li",href:"/taro/en/docs/2.x/best-practice"},"\u6700\u4f73\u5b9e\u8df5"),"\u5728\u5185\u7684\u6587\u6863\uff0c\u6587\u6863\u91cc\u6ca1\u6709\u5bf9\u5e94\u95ee\u9898\u7684\u63cf\u8ff0\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u641c\u7d22\u8fc7\u76f8\u5173\u7684 issue\uff0cissue \u6ca1\u6709\u63d0\u5230\u76f8\u5173\u89e3\u51b3\u65b9\u6848\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u6309\u9879\u76ee\u4f7f\u7528\u7684 Taro \u7248\u672c\u5f80\u4e0a\u67e5\u770b ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/blob/master/CHANGELOG.md"},"changelog"),"\uff0cchangelog \u4e2d\u6ca1\u6709\u610f\u89c1\u4fee\u590d\u76f8\u5173\u95ee\u9898\u7684\u63d0\u4ea4\uff1b")),(0,i.kt)("p",null,"\u5f88\u591a\u65f6\u5019\u53ea\u8981\u4f60\u628a\u4ee5\u4e0a\u56db\u4e2a\u6d41\u7a0b\u90fd\u8d70\u4e00\u904d\uff0c\u9047\u5230\u7684\u95ee\u9898\u5c31\u4f1a\u8fce\u5203\u800c\u89e3\u3002\u800c\u4f5c\u4e3a\u4e00\u4e2a\u591a\u7aef\u6846\u67b6\uff0cTaro \u6709\u975e\u5e38\u591a\u7684\u6a21\u5757\uff0c\u5f53\u51fa\u73b0\u95ee\u9898\u65f6 Taro \u4e5f\u9700\u8981\u5206\u6a21\u5757\u8fdb\u884c\u8c03\u8bd5\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u4e3e\u4e00\u4e9b\u5df2\u7ecf\u89e3\u51b3\u4e86\u7684 bug \u6837\u4f8b\uff0c\u9610\u8ff0\u6211\u4eec\u8c03\u8bd5 bug \u7684\u601d\u8def\uff1a"),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("h3",{id:"\u4f7f\u7528-yarn-\u5b89\u88c5\u5b8c-cli-\u62a5\u9519"},"\u4f7f\u7528 yarn \u5b89\u88c5\u5b8c CLI \u62a5\u9519"),(0,i.kt)("p",null,"\u7531\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tj/commander.js"},"commander.js")," \u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tj/commander.js/issues/786"},"\u7f18\u6545"),"\uff0c\u5728 Mac \u4e0b\u4f7f\u7528 yarn \u5b89\u88c5 CLI\uff0c\u5076\u5c14\u4f1a\u51fa\u73b0\u6267\u884c\u547d\u4ee4\u62a5\u9519\u7684\u60c5\u51b5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"taro-init(1) does not exist, try --help\n")),(0,i.kt)("p",null,"\u8fd9\u65f6\u5019\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 npm \u6216\u8005 cnpm \u91cd\u65b0\u5b89\u88c5 CLI\uff0c\u6216\u8005\u5c06 CLI ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/2034"},"\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u4e2d\u6765\u89e3\u51b3"),"\u3002"),(0,i.kt)("h3",{id:"\u9879\u76ee\u4f9d\u8d56\u4e00\u76f4\u5b89\u88c5\u4e0d\u4e0b\u6765"},"\u9879\u76ee\u4f9d\u8d56\u4e00\u76f4\u5b89\u88c5\u4e0d\u4e0b\u6765"),(0,i.kt)("p",null,"\u7531\u4e8e Taro \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," \u5305\u9ed8\u8ba4\u4f9d\u8d56\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"node-sass"),"\uff0c\u5012\u662f\u6709\u4e9b\u65f6\u5019\u4f9d\u8d56\u4e00\u76f4\u5b89\u88c5\u4e0d\u4e86\uff0c\u5728\u6b64\uff0c\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\u6dd8\u5b9d\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://npm.taobao.org/"},"cnpm")," \u8fdb\u884c\u5b89\u88c5\u4f9d\u8d56\uff0c\u6216\u8005\u5c1d\u8bd5\u4e00\u4e0b",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gucong3000/mirror-config-china"},"\u8fd9\u4e2a\u5305")),(0,i.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f"},"\u5c0f\u7a0b\u5e8f"),(0,i.kt)("h3",{id:"\u6ca1\u6709\u4efb\u4f55\u62a5\u9519\u4f46\u663e\u793a\u7684\u7ed3\u679c\u4e0d\u5982\u9884\u671f"},"\u6ca1\u6709\u4efb\u4f55\u62a5\u9519\uff0c\u4f46\u663e\u793a\u7684\u7ed3\u679c\u4e0d\u5982\u9884\u671f"),(0,i.kt)("h4",{id:"\u88ab-diff-\u903b\u8f91\u8fc7\u6ee4"},"\u88ab diff \u903b\u8f91\u8fc7\u6ee4"),(0,i.kt)("p",null,"\u6b64\u95ee\u9898\u53d1\u751f\u5728\u9875\u9762\u6216\u7ec4\u4ef6",(0,i.kt)("strong",{parentName:"p"},"\u66f4\u65b0"),"\u65f6\u3002"),(0,i.kt)("p",null,"\u5728\u8c03\u7528\u5c0f\u7a0b\u5e8f\u7684 setData \u65b9\u6cd5\u524d\uff0cTaro \u4f1a\u628a state \u4e0e data \u505a\u4e00\u6b21 ",(0,i.kt)("a",{parentName:"p",href:"https://nervjs.github.io/taro/docs/best-practice.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%95%B0%E6%8D%AE-diff"},"diff"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c state \u4e0e data \u7684\u67d0\u4e2a\u5c5e\u6027\u503c\u6ca1\u6709\u53d8\u5316\uff0c\u5f88\u6709\u53ef\u80fd\u5c31\u4e0d\u4f1a\u91cd\u65b0 setData \u8be5\u5c5e\u6027\uff0c\u5bfc\u81f4\u9875\u9762\u6216\u7ec4\u4ef6\u6ca1\u6709\u6b63\u786e\u66f4\u65b0\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u95ee\u9898\u591a\u51fa\u73b0\u5728\u5c0f\u7a0b\u5e8f\u7684\u8868\u5355\u7ec4\u4ef6\u4e2d\uff0c\u4f8b\u5982\u4ee5\u4e0b\u4e24\u4e2a issue\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/1981"},"#1981"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/2257"},"#2257"),"\u3002\u56e0\u4e3a\u5c0f\u7a0b\u5e8f\u4e00\u4e9b\u8868\u5355\u7ec4\u4ef6\u4e3a\u975e\u53d7\u63a7\u7ec4\u4ef6\uff0c\u8868\u5355\u66f4\u65b0\u65f6\uff0c\u5bf9\u5e94 value \u503c\u7684 data \u5e76\u4e0d\u4f1a\u66f4\u65b0\uff0c\u5bfc\u81f4 data \u503c\u8fd8\u662f\u521d\u59cb\u503c\u3002\u5982\u679c\u518d setState \u6b64\u5c5e\u6027\u4e3a\u521d\u59cb\u503c\uff0c\u7531\u4e8e diff \u903b\u8f91\u5224\u65ad\u5c5e\u6027\u503c\u6ca1\u6709\u53d8\u5316\uff0c\u4e0d\u4f1a setData \u6b64\u5c5e\u6027\uff0c\u5bfc\u81f4\u89c6\u56fe\u6ca1\u6709\u66f4\u65b0\u3002\u6b63\u786e\u505a\u6cd5\u662f\u5728\u8868\u5355\u7ec4\u4ef6\u7684 update \u4e8b\u4ef6\u4e2d setData value \u4e3a\u5f53\u524d\u503c\uff0c\u4fdd\u8bc1 data \u4e0e\u8868\u5355\u663e\u793a\u503c\u4fdd\u6301\u4e00\u81f4\u3002"),(0,i.kt)("h5",{id:"debug-diff"},"debug diff"),(0,i.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u627e\u5230 taro \u8fd0\u884c\u65f6\u5e93\uff0c\u5728 diff \u65b9\u6cd5\u524d\u540e\u6253\u65ad\u70b9\u6216 log\uff0c\u89c2\u5bdf ",(0,i.kt)("strong",{parentName:"p"},"state"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u5c0f\u7a0b\u5e8f data")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"diff \u540e\u5c06\u8981\u88ab setData \u7684\u6570\u636e"),"\uff0c\u8fd9\u79cd\u6392\u67e5\u6709\u52a9\u5b9a\u4f4d\u5f88\u591a",(0,i.kt)("strong",{parentName:"p"},"\u89c6\u56fe\u66f4\u65b0"),"\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11807297/53787956-514bb280-3f5b-11e9-9faf-f73ccd005222.png",alt:"qq20190305-151951"})),(0,i.kt)("h5",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u589e\u52a0\u6570\u7ec4\u5143\u7d20\u65e0\u6cd5\u6b63\u786e\u66f4\u65b0\u6570\u7ec4-length"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u589e\u52a0\u6570\u7ec4\u5143\u7d20\u65e0\u6cd5\u6b63\u786e\u66f4\u65b0\u6570\u7ec4 length"),(0,i.kt)("p",null,"\u589e\u52a0\u6570\u7ec4\u5143\u7d20\u65f6\uff0c\u7ecf diff \u540e\u4f1a\u6309\u8def\u5f84\u66f4\u65b0\u3002\u4f46\u7531\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u8eab bug\uff0c\u6309\u8def\u5f84\u66f4\u65b0\u6570\u7ec4\u65f6\uff0c\u6570\u7ec4 length \u4e0d\u4f1a\u6b63\u786e\u66f4\u65b0\u3002\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/882"},"#882")),(0,i.kt)("p",null,"\u6b64\u95ee\u9898\u53ea\u51fa\u73b0\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/community/develop/doc/000c8a7eeb45e8b018b72f01356800"},"\u5fae\u4fe1\u5b98\u65b9\u8bf4\u6cd5\u662f\u6682\u4e0d\u4fee\u590d"),"\u3002"),(0,i.kt)("p",null,"\u63a8\u8350\u505a\u6cd5\u662f\u65b0\u5f00\u4e00\u4e2a state \u503c\u6765\u540c\u6b65 length \u53d8\u5316\u3002"),(0,i.kt)("h4",{id:"\u7f16\u8bd1\u6a21\u677f\u51fa\u9519"},"\u7f16\u8bd1\u6a21\u677f\u51fa\u9519"),(0,i.kt)("p",null,"\u8fd9\u65f6\u5019\u5f88\u53ef\u80fd\u662f\u7f16\u8bd1\u6a21\u677f\u51fa\u73b0\u4e86\u9519\u8bef\u3002\u4f8b\u5982\u4e2d ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/2258"},"#2285")," \u4e2d\uff0c\u9898\u4e3b\u5199\u4e86\u4e24\u4e2a\u5d4c\u5957\u5faa\u73af\uff0c\u5728\u7b2c\u4e8c\u4e2a\u5faa\u73af\u4e2d\u65e0\u6cd5\u6b63\u786e\u5730\u8bbf\u95ee\u5230\u7b2c\u4e00\u4e2a\u5faa\u73af\u58f0\u660e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u53d8\u91cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u5047\u8bbe\u6e90\u7801\u5728 src/pages/index/index.js \u4e2d\nrooms.map((room, index) => (\n  <View key={room.id}>\n    <View>\u623f\u95f4</View>\n    <View className="men">\n      {room.checkInMen.map(man => (\n        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>\n          {man.name}\n        </View>\n      ))}\n    </View>\n  </View>\n);\n')),(0,i.kt)("p",null,"\u800c\u7f16\u8bd1\u51fa\u6765\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"wxml")," \u5c06\u4f1a\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u7f16\u8bd1\u540e\u4ee3\u7801\u4ee3\u7801\u81f3\u5c11\u4f1a\u751f\u6210\u4e09\u4e2a\u6587\u4ef6\uff0c\u5206\u522b\u662f: --\x3e\n\x3c!-- dist/pages/index/index.js\uff0cdist/pages/index/index.wxml\uff0cdist/pages/index/index.json --\x3e\n<view wx:for="{{loopArray0}}" wx:for-item="room" wx:for-index="index">\n  <view>\u623f\u95f4</view>\n    <view class="men">\n      <view  data-e-tap-a-b="{{index}}" bindtap="handleRemoveMan" wx:for="{{room.$anonymousCallee__0}}" wx:for-item="man" data-e-tap-so="this" data-e-tap-a-a="{{man.$original.id}}">{{man.$original.name}}\n      </view>\n    </view>\n  </view>\n</view>\n')),(0,i.kt)("p",null,"\u89c2\u5bdf\u7f16\u8bd1\u524d\u540e\u6587\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff1a\u7531\u4e8e\u7b2c\u4e8c\u4e2a\u5faa\u73af\u6ca1\u6709\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u53d8\u91cf\u540d\uff0cTaro \u7f16\u8bd1\u7684\u5faa\u73af\u4e5f\u6ca1\u6709\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u53d8\u91cf\u540d\u3002\u4f46\u95ee\u9898\u5728\u4e8e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f53\u4e0d\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u65f6\uff0c\u4f1a\u9690\u5f0f\u5730\u6ce8\u5165\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," \u7684\u53d8\u91cf\u540d\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"\u3002\u56e0\u6b64\u8fd9\u6bb5\u4ee3\u7801\u5728\u7b2c\u4e8c\u4e2a\u5faa\u73af\u4e2d\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"\uff0c\u5b9e\u9645\u4e0a\u662f\u5f53\u524d\u5faa\u73af\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"\uff0c\u800c\u4e0d\u662f\u4e0a\u7ea7\u5faa\u73af\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"\u3002"),(0,i.kt)("p",null,"\u5f53\u6211\u4eec\u4e86\u89e3\u5230\u95ee\u9898\u6240\u5728\u4e4b\u540e\uff0c\u89e3\u51b3\u95ee\u9898\u4e5f\u5f88\u5bb9\u6613\uff0c\u53ea\u8981\u5728\u7b2c\u4e8c\u4e2a\u5faa\u73af\u663e\u5f0f\u5730\u66b4\u9732\u5faa\u73af\u7684\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u5373\u53ef\uff0c\u6e90\u4ee3\u7801\u53ef\u4ee5\u4fee\u6539\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'rooms.map((room, index) => (\n  <View key={room.id}>\n    <View>\u623f\u95f4</View>\n    <View className="men">\n      {room.checkInMen.map((man, _) => (\n        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>\n          {man.name}\n        </View>\n      ))}\n    </View>\n  </View>\n);\n')),(0,i.kt)("h3",{id:"\u8fd0\u884c\u65f6\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u62a5\u9519"},"\u8fd0\u884c\u65f6\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u62a5\u9519"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u4f1a\u5728\u8fd0\u884c\u65f6\u9047\u5230\u8fd9\u6837\u9519\u8bef\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.loli.net/2019/02/27/5c765b5bc1915.png",alt:"debug.png"})),(0,i.kt)("p",null,"\u8c03\u8bd5\u8fd9\u6837\u7684\u95ee\u9898\u4e5f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u70b9\u51fb\u8c03\u7528\u6808\u4ece\u8c03\u7528\u6808\u6700\u4e0a\u5c42\u7684\u94fe\u63a5\uff0c\u70b9\u8fdb\u53bb\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u662f\u8fd9\u6837\u7684\u4ee3\u7801\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.loli.net/2019/02/28/5c77517c622e3.png",alt:"debug2.png"})),(0,i.kt)("p",null,"\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u8fd9\u4e2a\u9519\u8bef\u7684\u539f\u56e0\u5728\u4e8e\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," \u5728\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," \u51fd\u6570\u65f6\u627e\u4e0d\u5230\u53d8\u91cf\uff0c\u6211\u4eec\u53ef\u4ee5\u518d\u770b\u4e00\u4e0b\u6e90\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5982\u679c\u8fd0\u884c\u65f6\u62a5\u9519\u6587\u4ef6\u8def\u5f84\u662f\uff1adist/pages/test/test.js\n// \u90a3\u4e48\u5c31\u53ef\u4ee5\u63a8\u7b97\u51fa\u6e90\u7801\u5728\uff1asrc/pages/test/test.js\n// \u7f16\u8bd1\u540e\u7684 js \u6587\u4ef6\u5df2\u7ecf\u7ecf\u8fc7 Babel \u7f16\u8bd1\u8fc7\uff0c\u4f46\u51fd\u6570\u57fa\u672c\u4e0a\u8fd8\u662f\u80fd\u4e00\u4e00\u5bf9\u5e94\u7684\n// \u9664\u4e86 `render()` \u51fd\u6570\u4f1a\u5bf9\u5e94\u5230 `_createData()` \u51fd\u6570\uff0c\u5f62\u5982 `renderTest` \u51fd\u6570\u4f1a\u5bf9\u5e94\u5230 `createTestData` \u51fd\u6570\nrender () {\n  let dom = null\n  if (this.props.visable) {\n      const url = 'https://...'\n      dom = <Image src={url} />\n  }\n  \n  return <Container>\n    {dom}\n  </Container>\n}\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u89c2\u5bdf\u7f16\u8bd1\u524d\u540e\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u6e90\u7801\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u4f46 Taro \u5728\u6b64\u95ee\u9898\u51fa\u73b0\u7684\u7248\u672c\u6ca1\u6709\u5904\u7406\u597d if \u8868\u8fbe\u5f0f\u4f5c\u7528\u57df\u5185\u7684\u53d8\u91cf\uff0c\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," \u51fd\u6570\u65f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," \u53d8\u91cf\u5e76\u4e0d\u5b58\u5728\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u7684\u4f5c\u7528\u57df\u4e2d\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u6e90\u7801\uff0c\u624b\u52a8\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," \u53d8\u91cf\u4e5f\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u4f5c\u7528\u57df\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"render () {\n  let dom = null\n  let url = ''\n  if (this.props.visable) {\n      url = 'https://...'\n      dom = <Image src={url} />\n  }\n  \n  return <Container>\n    {dom}\n  </Container>\n}\n")),(0,i.kt)("p",null,"\u5927\u90e8\u5206\u8fd0\u884c\u65f6\u9519\u8bef\u90fd\u53ef\u4ee5\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u5185\u7f6e\u7684 Chrome DevTools \u627e\u5230\u62a5\u9519\u7684\u7f18\u7531\uff0c\u5982\u679c\u5f53\u524d\u8c03\u7528\u6808\u6ca1\u6709\u627e\u5230\u95ee\u9898\u6240\u5728\uff0c\u53ef\u4ee5\u5f80\u4e0a\u9010\u5c42\u5730\u53bb\u8c03\u8bd5\u5404\u4e2a\u8c03\u7528\u6808\u3002Chrome DevTools \u76f8\u5173\u6587\u6863\u8bf7\u67e5\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/"},"Chrome \u5f00\u53d1\u8005\u5de5\u5177")),(0,i.kt)("h3",{id:"\u751f\u547d\u5468\u671f\u8def\u7531setstate-\u51fa\u9519"},"\u751f\u547d\u5468\u671f/\u8def\u7531/setState \u51fa\u9519"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/1814"},"#1814")," \u4e2d\u63d0\u5230\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.$router.path")," (\u5f53\u524d\u9875\u9762\u8def\u7531\u7684\u8def\u5f84) \u6709\u65f6\u65e0\u6cd5\u8bbf\u95ee\u3002\u7ecf\u8fc7\u8c03\u7814\u53d1\u73b0\u539f\u56e0\u5728\u4e8e Taro \u628a\u83b7\u53d6\u8def\u5f84\u7684\u51fd\u6570\u653e\u5728\u4e86\u5c0f\u7a0b\u5e8f\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"onLoad")," \u51fd\u6570\u4e0a\uff0c\u800c\u4e0d\u662f\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u80fd\u8c03\u7528\u5230\u8fd9\u4e2a\u51fd\u6570\u3002\u800c\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u4e5f\u5f88\u7b80\u5355\uff0c\u5982\u679c\u5f53\u524d\u9875\u9762\u662f\u7ec4\u4ef6\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.$scope.route")," \u8bbf\u95ee\uff0c\u66f4\u666e\u9002\u7684\u65b9\u6cd5\u5219\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"getCurrentPages")," \u51fd\u6570\u8bbf\u95ee\u5230\u5f53\u524d\u9875\u9762\u7684\u793a\u4f8b\uff0c\u7136\u540e\u8bbf\u95ee\u5b9e\u4f8b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"__route__")," \u8bbf\u95ee\u5230\u5f53\u524d\u9875\u9762\u8def\u7531\u7684\u8def\u5f84\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u4e0d\u96be\u53d1\u73b0 Taro \u7684\u751f\u547d\u5468\u671f/\u8def\u7531 \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," \u5728\u5c0f\u7a0b\u5e8f\u7aef\u5176\u5b9e\u662f\u5305\u88c5\u6210 React API \u7684\u4e00\u5c42\u8bed\u6cd5\u7cd6\uff0c\u6211\u4eec\u628a\u8fd9\u5c42\u5305\u88c5\u79f0\u4e4b\u4e3a Taro \u8fd0\u884c\u65f6\u6846\u67b6\u3002\u51e0\u4e4e\u6240\u6709 Taro \u63d0\u4f9b\u7684 API \u548c\u8bed\u6cd5\u7cd6\u6700\u7ec8\u90fd\u662f\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u672c\u8eab\u63d0\u4f9b\u7684 API \u5b9e\u73b0\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u5f53 Taro \u8fd0\u884c\u65f6\u6846\u67b6\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u4f60\u57fa\u672c\u90fd\u80fd\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u672c\u8eab\u63d0\u4f9b\u7684 API \u8fbe\u5230\u540c\u7b49\u7684\u9700\u6c42\uff0c\u5176\u4e2d\u5c31\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"this.$scope.triggerEvent")," \u8c03\u7528\u901a\u8fc7 props \u4f20\u9012\u7684\u51fd\u6570;"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"this.$scope.selectComponent")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"wx.createSelectorQuery")," \u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"ref"),";"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentPages")," \u7b49\u76f8\u5173\u65b9\u6cd5\u8bbf\u95ee\u8def\u7531\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u4fee\u6539\u7f16\u8bd1\u540e\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},"createComponent")," \u51fd\u6570\u521b\u5efa\u7684\u5bf9\u8c61")),(0,i.kt)("p",null,"\u867d\u7136\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u65b9\u6cd5\u4e5f\u80fd\u505a\u5f88\u591a\u540c\u6837\u7684\u4e8b\uff0c\u4f46\u5f53 Taro \u8fd0\u884c\u65f6\u6846\u67b6\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u6211\u4eec\u8fd8\u662f\u5f3a\u70c8\u5efa\u8bae\u5f00\u53d1\u8005\u5411 Taro \u5b98\u65b9 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/new/choose"},"\u63d0\u4ea4 issue"),"\uff0c\u6709\u80fd\u529b\u7684\u5f00\u53d1\u8005\u670b\u53cb\u4e5f\u53ef\u4ee5 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/pulls"},"\u63d0\u4ea4 PR"),"\u3002\u4e00\u65b9\u9762\u4f7f\u7528 Taro API \u5b9e\u73b0\u53ef\u4ee5\u5e2e\u52a9\u4f60\u62b9\u5e73\u591a\u7aef\u5dee\u5f02\uff0c\u53e6\u4e00\u65b9\u9762\u5bfb\u627e\u751a\u81f3\u662f\u4fee\u590d bug \u4e5f\u6709\u52a9\u4e8e\u52a0\u5f3a\u4f60\u5bf9 Taro \u548c\u5c0f\u7a0b\u5e8f\u5e95\u5c42\u7684\u7406\u89e3\u3002"),(0,i.kt)("h3",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8868\u5355\u7ec4\u4ef6\u95ee\u9898"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8868\u5355\u7ec4\u4ef6\u95ee\u9898"),(0,i.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8868\u5355\u7ec4\u4ef6\u4e0d\u662f\u53d7\u63a7\u7ec4\u4ef6\uff0c\u5f53\u7528\u6237\u64cd\u4f5c\u8868\u5355\u65f6\u89c6\u56fe\u4f1a",(0,i.kt)("strong",{parentName:"p"},"\u7acb\u5373\u6539\u53d8"),"\uff0c\u4f46\u8868\u5355\u7684 value \u503c\u8fd8\u662f\u6ca1\u6709\u53d8\u5316\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u8868\u5355 ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"onInput")," \u6b64\u7c7b\u503c\u6539\u53d8\u56de\u8c03\u4e2d setState value \u4e3a\u7528\u6237\u64cd\u4f5c\u6539\u53d8\u8868\u5355\u4e4b\u524d\u7684\u503c\u65f6\uff0cTaro \u7684 diff \u903b\u8f91\u4f1a\u5224\u65ad setState \u7684 value \u503c\u548c\u5f53\u524d data.value \u4e00\u81f4\uff0c\u5219",(0,i.kt)("strong",{parentName:"p"},"\u653e\u5f03 setData"),"\uff0c\u5bfc\u81f4\u89c6\u56fe\u6ca1\u6709\u6b63\u786e\u66f4\u65b0\u3002"),(0,i.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,i.kt)("p",null,"Input \u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5728\u56de\u8c03\u4e2d return \u9700\u8981\u6539\u53d8\u7684\u503c\u6765\u66f4\u65b0\u89c6\u56fe\u3002\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/2642"},"#2642")),(0,i.kt)("p",null,"\u5c0f\u7a0b\u5e8f Input \u7ec4\u4ef6\u6587\u6863\u622a\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11807297/55405139-fcb44b00-558b-11e9-845f-afbc73863b48.png",alt:"inputdoc"})),(0,i.kt)("p",null,"\u5176\u5b83\u7ec4\u4ef6\u9700\u8981\u7acb\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"setState({ value: e.detail.value })")," \u4ee5\u7acb\u5373\u66f4\u65b0\u540c\u6b65 data.value \u503c\uff0c\u7136\u540e\u518d setState \u771f\u6b63\u9700\u8981\u8868\u5355\u6539\u53d8\u7684\u503c\u3002\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/1981"},"#1981"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/2257"},"#2257")),(0,i.kt)("h3",{id:"api-\u95ee\u9898"},"API \u95ee\u9898"),(0,i.kt)("h4",{id:"api-\u8c03\u7528\u7ed3\u679c\u4e0d\u7b26\u5408\u9884\u671f"},"API \u8c03\u7528\u7ed3\u679c\u4e0d\u7b26\u5408\u9884\u671f"),(0,i.kt)("p",null,"Taro \u5c0f\u7a0b\u5e8f\u7aef\u7684 API \u53ea\u662f\u5bf9\u5c0f\u7a0b\u5e8f\u539f\u751f API \u7b80\u5355\u5730\u8fdb\u884c\u4e86 promise \u5316\uff0c\u5e76\u6ca1\u6709\u505a\u4ec0\u4e48\u989d\u5916\u64cd\u4f5c\u3002\u56e0\u6b64\u5f00\u53d1\u8005\u5728\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u65f6\u53ef\u4ee5\u8bd5\u8bd5\u76f4\u63a5\u4f7f\u7528\u5c0f\u7a0b\u5e8f API\uff0c\u5982\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"wx.xxx"),"\u3002\u5982\u679c\u6709\u540c\u6837\u7684\u62a5\u9519\uff0c\u8bc1\u660e\u662f\u5c0f\u7a0b\u5e8f\u65b9\u9762\u7684\u95ee\u9898\u3002\u5426\u5219\u5219\u53ef\u80fd\u662f Taro \u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u7ed9\u6211\u4eec\u63d0\u76f8\u5173 issue\u3002"),(0,i.kt)("h4",{id:"api-\u8c03\u7528\u62a5\u9519"},"API \u8c03\u7528\u62a5\u9519"),(0,i.kt)("p",null,"\u5047\u8bbe\u5f00\u53d1\u8005\u5728\u8c03\u7528\u67d0\u4e2a API ",(0,i.kt)("inlineCode",{parentName:"p"},"Taro.xxx"),"\uff0c\u51fa\u73b0\u7c7b\u4f3c\u4ee5\u4e0b\u62a5\u9519\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11807297/59170450-45324b00-8b71-11e9-8e25-1169b425040c.png",alt:"image"})),(0,i.kt)("p",null,"\u8bc1\u660e Taro \u8fd8\u6ca1\u517c\u5bb9\u6b64 API\uff0c\u6bd4\u5982\u4e00\u4e9b\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u6700\u65b0\u66f4\u65b0\u7684 API\u3002\u8fd9\u65f6\u53ef\u4ee5\u7ed9\u6211\u4eec\u63d0 issue \u8981\u6c42\u6dfb\u52a0\uff0c\u6216\u8005\u4fee\u6539\u6b64\u6587\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/master/packages/taro/src/native-apis.js"},"native-apis.js")," \u540e\uff0c\u7ed9\u6211\u4eec\u63d0 PR\u3002"),(0,i.kt)("h2",{id:"h5"},"H5"),(0,i.kt)("h3",{id:"\u8fd0\u884c\u65f6\u62a5-dom-\u76f8\u5173\u9519\u8bef"},"\u8fd0\u884c\u65f6\u62a5 DOM \u76f8\u5173\u9519\u8bef"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/1804"},"#1804")," \u4e2d\u63d0\u5230\uff0c\u53ea\u8981\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," \u7ec4\u4ef6\u5e76\u4e14\u6709\u4e00\u4e2a\u53d8\u91cf\u63a7\u5236\u5b83\u7684\u663e\u5f0f\u65f6\uff0c\u5c31\u5fc5\u5b9a\u4f1a\u62a5\u9519\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"export default class Index extends Component {\n  config = {\n    navigationBarTitleText: '\u9996\u9875'\n  };\n\n  state = {\n    num: 1\n  };\n\n  componentDidMount() {\n    console.log('did');\n    setTimeout(() => {\n      this.setState({\n        num: 0\n      });\n    }, 2000);\n  }\n\n  render() {\n    const { num } = this.state;\n    return (\n      <View className=\"container\">\n        {num === 0 && <View>\u5df2\u5356\u5b8c</View>}\n        {num > 0 && (\n          <Block>\n            <View>\u6b63\u5728\u9500\u552e</View>\n            <View>\u7acb\u5373\u8d2d\u4e70</View>\n          </Block>\n        )}\n        {/* {num > 0 && <View>\u6b63\u5728\u9500\u552e</View>} */}\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u628a\u95ee\u9898\u5b9a\u4f4d\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," \u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," \u7ec4\u4ef6\u6e90\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const Block = (props) =>  props.children\nexport default Block\n")),(0,i.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\u5f53\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"num > 0")," \u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," \u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," \u4f1a\u663e\u793a\uff0c\u800c\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," \u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," \u662f\u4e00\u4e2a\u6570\u7ec4\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"View.container")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," \u5c31\u53d8\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"[\u4e00\u4e2a View \u7ec4\u4ef6, [\u4e00\u4e2a\u6570\u7ec4]]"),"\uff0c\u6e32\u67d3\u8fd9\u6837\u7684\u6570\u636e\u7ed3\u6784\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"React.Fragment")," \u7684\u5305\u88f9\u624d\u80fd\u6e32\u67d3\u3002\u800c Taro \u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"React.Fragment")," \u8bed\u6cd5\uff0c\u6240\u4ee5\u8fd9\u6837\u7684\u5199\u6cd5\u5c31\u62a5\u9519\u4e86\u3002\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u4e5f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"Block")," \u7ec4\u4ef6\uff0c\u7528\u4e00\u4e2a\u5143\u7d20\u5305\u88f9\u4f4f ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," \u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const Block = (props) => <div>{props.children}</div>\n")),(0,i.kt)("p",null,"\u5f53\u4f60\u9047\u5230\u4e86\u76f8\u5173\u95ee\u9898\u65f6\uff0c\u6211\u4eec\u51c6\u5907\u4e86\u4e00\u4e2a\u5feb\u901f\u8d77\u6b65\u7684\u6c99\u76d2\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u4e2a\u5de5\u5177\u91cc\u7f16\u8f91\u3001\u8c03\u8bd5\u3001\u590d\u73b0\u95ee\u9898\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/50nzv622z4?fontsize=14"},(0,i.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit Taro sandbox"}))),(0,i.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,i.kt)("h3",{id:"jsenginscripterror"},"jsEnginScriptError"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Component is not found in path "xxx/xxx/xxx"')," \u89e3\u51b3\u529e\u6cd5\uff1a"),(0,i.kt)("p",null,"1\u3001\u68c0\u67e5\u6709\u6ca1\u6709\u7f16\u8bd1\u62a5\u9519"),(0,i.kt)("p",null,"2\u3001\u68c0\u67e5\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u662f\u5426\u6b63\u786e"),(0,i.kt)("p",null,"3\u3001\u6b65\u9aa4 1 \u548c \u6b65\u9aa4 2 \u5982\u679c\u68c0\u67e5\u6ca1\u6709\u95ee\u9898\uff0c\u91cd\u542f\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u5426\u5219\u8df3\u5230\u6b65\u9aa4 4 "),(0,i.kt)("p",null,"4\u3001\u63d0\u4f9b\u5177\u4f53\u7f16\u8bd1\u62a5\u9519\u4fe1\u606f\u4e0e\u7f16\u8bd1\u540e\u6587\u4ef6\u4fe1\u606f\u7684\u622a\u56fe"),(0,i.kt)("h2",{id:"\u5176\u5b83\u8d44\u6e90"},"\u5176\u5b83\u8d44\u6e90"),(0,i.kt)("p",null,"\u672c\u6587\u5217\u4e3e\u4e86\u4e00\u4e9b Taro \u7684\u5df2\u89e3\u51b3 bug \u4f8b\u5b50\uff0c\u9610\u8ff0\u4e86\u5728 Taro \u4e2d debug \u7684\u601d\u8def\uff0c\u4f46\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u5982\u679c\u4f60\u80fd\u66f4\u6df1\u5165\u5730\u4e86\u89e3 Taro \u7684\u5b9e\u73b0\u539f\u7406\uff0c\u90a3\u65e0\u8bba\u662f\u5bf9\u4f7f\u7528 Taro \u6216\u662f debug \u90fd\u4f1a\u6709\u5f88\u5927\u7684\u5e2e\u52a9\u3002\u4ee5\u4e0b\u8d44\u6e90\u4ece\u5404\u4e2a\u65b9\u9762\u90fd\u4ecb\u7ecd\u4e86 Taro \u7684\u5b9e\u73b0\u539f\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6398\u91d1\u5c0f\u518c\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d"},"Taro \u591a\u7aef\u5f00\u53d1\u5b9e\u73b0\u539f\u7406\u4e0e\u5b9e\u6218")),(0,i.kt)("li",{parentName:"ul"},"\u535a\u6587\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://aotu.io/notes/2018/06/25/the-birth-of-taro/"},"Taro \u8bde\u751f\u8bb0")),(0,i.kt)("li",{parentName:"ul"},"\u516c\u5f00\u6f14\u8bb2: ",(0,i.kt)("a",{parentName:"li",href:"https://share.weiyun.com/5nUKYfy"},"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u591a\u7aef\u9879\u76ee")),(0,i.kt)("li",{parentName:"ul"},"\u516c\u5f00\u6f14\u8bb2\uff1a ",(0,i.kt)("a",{parentName:"li",href:"https://share.weiyun.com/5lZXV1G"},"\u57fa\u4e8e Taro \u7684\u591a\u7aef\u9879\u2f6c\u76ee\u5b9e\u8df5"))))}m.isMDXComponent=!0}}]);