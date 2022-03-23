"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16825],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65099:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],l={title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e"},p=void 0,d={unversionedId:"debug-config",id:"version-3.x/debug-config",title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e",description:"\u901a\u8fc7\u672c\u8eab VSCode \u63d0\u4f9b\u7684\u8de8\u5e73\u53f0\u4ee3\u7801\u5355\u6b65\u8c03\u6d4b\u80fd\u529b\uff0c\u80fd\u591f\u6781\u5927\u63d0\u5347\u57fa\u4e8e Taro \u5f00\u53d1\u6846\u67b6\u7684\u5e94\u7528\u5f00\u53d1\u901f\u5ea6\uff0c\u56e0\u5176\u4ed6\u5e73\u53f0\u5df2\u6709\u6bd4\u8f83\u6210\u719f\u7684\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\uff0c\u7740\u91cd\u964d\u4f4e Windows \u5e73\u53f0\u914d\u7f6e\u590d\u6742\u5ea6\u3002",source:"@site/versioned_docs/version-3.x/debug-config.md",sourceDirName:".",slug:"/debug-config",permalink:"/taro/docs/debug-config",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/debug-config.md",tags:[],version:"3.x",frontMatter:{title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e"},sidebar:"docs",previous:{title:"Taro \u4ed3\u5e93\u6982\u89c8",permalink:"/taro/docs/codebase-overview"},next:{title:"\u5b9e\u73b0\u7ec6\u8282",permalink:"/taro/docs/implement-note"}},s=[{value:"\u4e00\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"\u4e00\u5f00\u53d1\u73af\u5883\u642d\u5efa",children:[{value:"1. \u5b89\u88c5 Node.js",id:"1-\u5b89\u88c5-nodejs",children:[],level:4},{value:"2. \u5b89\u88c5 VSCode",id:"2-\u5b89\u88c5-vscode",children:[],level:4},{value:"3. Taro \u6e90\u7801\u4e0b\u8f7d",id:"3-taro-\u6e90\u7801\u4e0b\u8f7d",children:[],level:4},{value:"4. \u5168\u5c40\u5b89\u88c5 Node-sass \u3001Lerna \u548c Rollup",id:"4-\u5168\u5c40\u5b89\u88c5-node-sass-lerna-\u548c-rollup",children:[],level:4},{value:"5. \u6e90\u7801\u4f9d\u8d56\u5b89\u88c5",id:"5-\u6e90\u7801\u4f9d\u8d56\u5b89\u88c5",children:[],level:4}],level:2},{value:"\u4e8c\u3001\u5355\u6b65\u8c03\u8bd5",id:"\u4e8c\u5355\u6b65\u8c03\u8bd5",children:[{value:"1. \u914d\u7f6e VSCode \u8c03\u8bd5\u53c2\u6570",id:"1-\u914d\u7f6e-vscode-\u8c03\u8bd5\u53c2\u6570",children:[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[{value:"1) \u8c03\u8bd5 taro-build",id:"1-\u8c03\u8bd5-taro-build",children:[],level:5},{value:"2) \u8c03\u8bd5 taro-init",id:"2-\u8c03\u8bd5-taro-init",children:[],level:5}],level:4}],level:3},{value:"2. \u7f16\u8bd1\u5b50\u5305",id:"2-\u7f16\u8bd1\u5b50\u5305",children:[],level:3},{value:"3.\u94fe\u63a5\u672a\u53d1\u5e03\u7684\u5e93",id:"3\u94fe\u63a5\u672a\u53d1\u5e03\u7684\u5e93",children:[],level:3},{value:"4.\u542f\u52a8\u8c03\u8bd5",id:"4\u542f\u52a8\u8c03\u8bd5",children:[],level:3}],level:2}],c={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u672c\u8eab ",(0,o.kt)("inlineCode",{parentName:"p"},"VSCode")," \u63d0\u4f9b\u7684\u8de8\u5e73\u53f0\u4ee3\u7801\u5355\u6b65\u8c03\u6d4b\u80fd\u529b\uff0c\u80fd\u591f\u6781\u5927\u63d0\u5347\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro")," \u5f00\u53d1\u6846\u67b6\u7684\u5e94\u7528\u5f00\u53d1\u901f\u5ea6\uff0c\u56e0\u5176\u4ed6\u5e73\u53f0\u5df2\u6709\u6bd4\u8f83\u6210\u719f\u7684\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\uff0c\u7740\u91cd\u964d\u4f4e Windows \u5e73\u53f0\u914d\u7f6e\u590d\u6742\u5ea6\u3002")),(0,o.kt)("h2",{id:"\u4e00\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"\u4e00\u3001\u5f00\u53d1\u73af\u5883\u642d\u5efa"),(0,o.kt)("p",null,"\u9996\u5148\u51c6\u5907 ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro")," \u5728 Windows \u4e0b\u7684\u57fa\u7840\u5f00\u53d1\u73af\u5883\uff0c\u8be6\u60c5\u5982\u4e0b(\u5df2\u6709\u5f00\u53d1\u73af\u5883\u53ef\u7565\u8fc7\uff09\uff1a"),(0,o.kt)("h4",{id:"1-\u5b89\u88c5-nodejs"},"1. \u5b89\u88c5 Node.js"),(0,o.kt)("p",null,"\u5efa\u8bae\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"10.15")," \u4ee5\u4e0a\u7248\u672c\uff0c\u5b98\u65b9\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi",title:" node.js"},"Node.js")),(0,o.kt)("h4",{id:"2-\u5b89\u88c5-vscode"},"2. \u5b89\u88c5 VSCode"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c\u6700\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"VSCode")," \u540e\uff0c\u5efa\u8bae\u5b89\u88c5\u5982\u4e0b\u63d2\u4ef6:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ESlint")," \u2014 \u4ee3\u7801\u89c4\u8303"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TSlint")," \u2014 \u8bed\u6cd5\u68c0\u67e5")),(0,o.kt)("h4",{id:"3-taro-\u6e90\u7801\u4e0b\u8f7d"},"3. Taro \u6e90\u7801\u4e0b\u8f7d"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro.git",title:"Taro"},"Taro"),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," \u5206\u652f\u3002"),(0,o.kt)("h4",{id:"4-\u5168\u5c40\u5b89\u88c5-node-sass-lerna-\u548c-rollup"},"4. \u5168\u5c40\u5b89\u88c5 Node-sass \u3001Lerna \u548c Rollup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node_sass/\nyarn global add lerna\nyarn global add rollup\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Node-sass \u6bd4\u8f83\u7279\u6b8a\uff0c\u5efa\u8bae\u63d0\u524d\u8fdb\u884c\u5b89\u88c5\uff0c\u89c4\u907f\u53ef\u80fd\u51fa\u73b0\u7684\u5404\u79cd\u5f02\u5e38\u9519\u8bef\u3002"))),(0,o.kt)("h4",{id:"5-\u6e90\u7801\u4f9d\u8d56\u5b89\u88c5"},"5. \u6e90\u7801\u4f9d\u8d56\u5b89\u88c5"),(0,o.kt)("p",null,"1.\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"VSCode")," \u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro")," \u6e90\u7801\u76ee\u5f55\uff0c\u5728\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," \uff0c\u5b89\u88c5\u9879\u76ee\u6240\u9700\u4f9d\u8d56\u5e93\uff08\u9996\u6b21\u5b89\u88c5\u6240\u82b1\u65f6\u95f4\u8f83\u957f\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff09"),(0,o.kt)("p",null,"2.\u5f85 ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," \u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn run bootstrap")," \u4e3a\u5b50\u5305\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("p",null,"3.\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build")," \u7f16\u8bd1\u6240\u6709\u6a21\u5757"),(0,o.kt)("h2",{id:"\u4e8c\u5355\u6b65\u8c03\u8bd5"},"\u4e8c\u3001\u5355\u6b65\u8c03\u8bd5"),(0,o.kt)("h3",{id:"1-\u914d\u7f6e-vscode-\u8c03\u8bd5\u53c2\u6570"},"1. \u914d\u7f6e VSCode \u8c03\u8bd5\u53c2\u6570"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"launch.json \u7684\u8be6\u7ec6\u914d\u7f6e\u8bf7\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"VSCode \u6587\u6863")))),(0,o.kt)("p",null,"\u5728 VSCode \u4e2d\u6253\u5f00 Taro \u6e90\u7801\u6839\u76ee\u5f55\u7684 ",(0,o.kt)("strong",{parentName:"p"},".vscode")," \u6587\u4ef6\u5939\uff0c\u7f16\u8f91 ",(0,o.kt)("strong",{parentName:"p"},"launch.json"),"\u3002"),(0,o.kt)("p",null,"\u4fee\u6539\u6b65\u9aa4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"li"},"cwd")," \u9009\u9879\u4e3a\u9700\u8981\u8c03\u8bd5\u7684\u76ee\u6807\u5de5\u4f5c\u76ee\u5f55"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"li"},"args")," \u4e3a\u9700\u8981\u8c03\u8bd5\u7684\u547d\u4ee4\u53c2\u6570")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json" {10-16}',title:'"launch.json"',"{10-16}":!0},'{\n  // ...\n  "configurations": [\n    //...\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "CLI debug",\n      "program": "${workspaceFolder}/packages/taro-cli/bin/taro",\n      // "cwd": "${project absolute path}",\n      // "args": [\n      //   "build",\n      //   "--type",\n      //   "weapp",\n      //   "--watch"\n      // ],\n      "skipFiles": [\n        "<node_internals>/**"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("h5",{id:"1-\u8c03\u8bd5-taro-build"},"1) \u8c03\u8bd5 taro-build"),(0,o.kt)("p",null,"\u5047\u8bbe\u9700\u8981\u8c03\u8bd5 test \u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"taro build --weapp --watch")," \u547d\u4ee4\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e launch.json\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop/test",\n      "args": [\n        "build",\n        "--type",\n        "weapp",\n        "--watch"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h5",{id:"2-\u8c03\u8bd5-taro-init"},"2) \u8c03\u8bd5 taro-init"),(0,o.kt)("p",null,"\u5047\u8bbe\u9700\u8981\u8c03\u8bd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"taro init projectName")," \u547d\u4ee4\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e launch.json\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop",\n      "args": [\n        "init",\n        "projectName"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"2-\u7f16\u8bd1\u5b50\u5305"},"2. \u7f16\u8bd1\u5b50\u5305"),(0,o.kt)("p",null,"\u8c03\u8bd5\u67d0\u4e00\u4e2a\u5b50\u5305\u65f6\uff0c\u5982\u679c\u5e0c\u671b\u80fd\u8c03\u8bd5\u4fee\u6539\u540e\u7684\u4ee3\u7801\uff0c\u8bf7\u5148\u8fdb\u5165\u5bf9\u5e94\u5b50\u5305\u7684\u6839\u76ee\u5f55\u5f00\u542f watch \u6a21\u5f0f\u7f16\u8bd1\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u8c03\u8bd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner"),"\uff0c\u5148\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/mini-runner/"),"\uff0c\u7136\u540e\u5728\u6b64\u76ee\u5f55\u4e0b\u5bf9\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),"\uff08\u5404\u5b50\u5305\u7f16\u8bd1\u547d\u4ee4\u53ef\u80fd\u6709\u6240\u4e0d\u540c\uff0c\u8be6\u60c5\u8bf7\u89c1\u5404\u5b50\u5305\u7684 ",(0,o.kt)("strong",{parentName:"p"},"package.json"),"\uff09\u3002\u8fd9\u6837\u6211\u4eec\u5c31\u80fd\u5bf9\u6bcf\u6b21\u4fee\u6539\u540e\u7684\u4ee3\u7801\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,o.kt)("h3",{id:"3\u94fe\u63a5\u672a\u53d1\u5e03\u7684\u5e93"},"3.\u94fe\u63a5\u672a\u53d1\u5e03\u7684\u5e93"),(0,o.kt)("p",null,"\u5982\u679c\u5f53\u524d\u5f00\u53d1\u7684\u5b50\u5305\u4f9d\u8d56\u4e8e\u5176\u5b83\u5b50\u5305\uff0c\u53ef\u4ee5\u628a\u5176\u5b83\u5b50\u5305 link \u8fc7\u6765\u4f7f\u7528\u3002",(0,o.kt)("a",{parentName:"p",href:"./debug-config#%E4%B8%80%E3%80%81%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA"},"\u5f00\u53d1\u73af\u5883\u642d\u5efa")," \u91cc\u4ecb\u7ecd\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn run bootstrap")," \u547d\u4ee4\u5df2\u7ecf\u4e3a\u6240\u6709\u5b50\u5305\u521b\u5efa\u597d\u8f6f\u8fde\u63a5\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u4e3a\u5f53\u524d\u5b50\u5305\u589e\u52a0\u5176\u5b83\u5b50\u5305\u4f5c\u4e3a\u4f9d\u8d56\uff0c\u53ef\u4ee5\u5728 Taro \u6e90\u7801\u6839\u76ee\u5f55\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna add [package] --scope=[target] [--dev]"),"\uff0c\u4e4b\u540e lerna \u4f1a\u81ea\u52a8\u521b\u5efa\u597d\u8f6f\u94fe\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," \u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," \u4f5c\u4e3a devdependencies\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lerna add @tarojs/webpack-runner --scope=@tarojs/cli --dev")),(0,o.kt)("p",null,"\u53e6\u5916\u5982\u679c\u8f6f\u94fe\u5931\u6548\u4e86\uff08\u4f8b\u5982\u5728\u5b50\u5305\u91cc\u6267\u884c\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add"),"\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna link")," \u547d\u4ee4\u91cd\u65b0\u8fdb\u884c\u8f6f\u94fe\u3002"),(0,o.kt)("h3",{id:"4\u542f\u52a8\u8c03\u8bd5"},"4.\u542f\u52a8\u8c03\u8bd5"),(0,o.kt)("p",null,"\u6309\u4e0b\u56fe\u64cd\u4f5c\u5373\u53ef\u5f00\u59cb\u5355\u6b65\u8c03\u8bd5\uff0c\u8be6\u7ec6\u8c03\u8bd5\u64cd\u4f5c\u53ef\u53c2\u8003 VSCode \u6587\u6863\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.jd.com/cjj-pub-images/WX20200602-221337.png",alt:null})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u76ee\u524d Taro \u9879\u76ee\u7684\u5b50\u5305\u4e00\u822c\u7f16\u8bd1\u90fd\u4f1a\u4ea7\u751f ",(0,o.kt)("inlineCode",{parentName:"p"},"source-map"),"\uff0c\u6240\u4ee5\u4e00\u822c\u90fd\u80fd\u591f\u76f4\u63a5\u5728\u6e90\u7801\u4f4d\u7f6e\u4f7f\u7528\u65ad\u70b9\u3002\u5982\u679c\u67d0\u4e9b\u5305\u7f16\u8bd1\u65f6\u6ca1\u6709\u5f00\u542f ",(0,o.kt)("inlineCode",{parentName:"p"},"source-map"),"\uff0c\u53ef\u624b\u52a8\u5f00\u542f\u7136\u540e\u63d0\u4ea4 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pull Requests"),"\u3002"))))}u.isMDXComponent=!0}}]);