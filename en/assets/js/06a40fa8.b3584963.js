"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[53347],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=a,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,c(c({ref:e},u),{},{components:n})):r.createElement(m,c({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},12919:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),c=["components"],o={title:"Icon",sidebar_label:"Icon"},i=void 0,p={unversionedId:"components/base/icon",id:"version-2.x/components/base/icon",title:"Icon",description:"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px",source:"@site/versioned_docs/version-2.x/components/base/icon.md",sourceDirName:"components/base",slug:"/components/base/icon",permalink:"/taro/en/docs/2.x/components/base/icon",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/components/base/icon.md",tags:[],version:"2.x",frontMatter:{title:"Icon",sidebar_label:"Icon"},sidebar:"version-2.x/components",previous:{title:"CoverView",permalink:"/taro/en/docs/2.x/components/viewContainer/cover-view"},next:{title:"Text",permalink:"/taro/en/docs/2.x/components/base/text"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"IconProps",id:"iconprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"TIconType",id:"ticontype",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],d={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,c);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u56fe\u6807\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/icon.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<IconProps>\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Icon size='60' type='success' />\n        <Icon size='60' type='info' />\n        <Icon size='60' type='warn' color='#ccc' />\n        <Icon size='60' type='warn' />\n        <Icon size='60' type='waiting' />\n        <Icon size='20' type='success_no_circle' />\n        <Icon size='20' type='warn' />\n        <Icon size='20' type='success' />\n        <Icon size='20' type='download' />\n        <Icon size='20' type='clear' color='red' />\n        <Icon size='20' type='search' />\n      </View>\n    )\n  }\n}\n")),(0,l.kt)("h2",{id:"iconprops"},"IconProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"success" | "success_no_circle" | "info" | "warn" | "waiting" | "cancel" | "download" | "search" | "clear"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"icon \u7684\u7c7b\u578b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"size"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"23")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"icon \u7684\u5927\u5c0f\uff0c\u5355\u4f4dpx")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"color"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"icon \u7684\u989c\u8272\uff0c\u540c css \u7684 color")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"IconProps.type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"IconProps.size"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"IconProps.color"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,l.kt)("h3",{id:"ticontype"},"TIconType"),(0,l.kt)("p",null,"icon \u7684\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,"\u6210\u529f\u56fe\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success_no_circle"),(0,l.kt)("td",null,"\u6210\u529f\u56fe\u6807\uff08\u4e0d\u5e26\u5916\u5708\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"info"),(0,l.kt)("td",null,"\u4fe1\u606f\u56fe\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"warn"),(0,l.kt)("td",null,"\u8b66\u544a\u56fe\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"waiting"),(0,l.kt)("td",null,"\u7b49\u5f85\u56fe\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cancel"),(0,l.kt)("td",null,"\u53d6\u6d88\u56fe\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"download"),(0,l.kt)("td",null,"\u4e0b\u8f7d\u56fe\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"search"),(0,l.kt)("td",null,"\u641c\u7d22\u56fe\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"clear"),(0,l.kt)("td",null,"\u6e05\u9664\u56fe\u6807")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Icon"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);