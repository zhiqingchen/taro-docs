"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56314],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},46104:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),l=["components"],p={title:"\u6027\u80fd\u4f18\u5316\u5b9e\u8df5"},i=void 0,u={unversionedId:"optimized-practice",id:"version-2.x/optimized-practice",title:"\u6027\u80fd\u4f18\u5316\u5b9e\u8df5",description:"\u5f00\u53d1\u8005\u624b\u52a8\u4f18\u5316",source:"@site/versioned_docs/version-2.x/optimized-practice.md",sourceDirName:".",slug:"/optimized-practice",permalink:"/taro/en/docs/2.x/optimized-practice",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/optimized-practice.md",tags:[],version:"2.x",frontMatter:{title:"\u6027\u80fd\u4f18\u5316\u5b9e\u8df5"},sidebar:"version-2.x/docs",previous:{title:"Taro \u4ee3\u7801\u4e0e\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6df7\u5199",permalink:"/taro/en/docs/2.x/hybrid"},next:{title:"\u8fc1\u79fb\u81f3 Taro 2.x",permalink:"/taro/en/docs/2.x/migrate-to-2"}},s=[{value:"\u5f00\u53d1\u8005\u624b\u52a8\u4f18\u5316",id:"\u5f00\u53d1\u8005\u624b\u52a8\u4f18\u5316",children:[{value:"\u9884\u52a0\u8f7d",id:"\u9884\u52a0\u8f7d",children:[],level:3},{value:"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 this.$preload \u51fd\u6570\u8fdb\u884c\u9875\u9762\u8df3\u8f6c\u4f20\u53c2",id:"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u4f7f\u7528-thispreload-\u51fd\u6570\u8fdb\u884c\u9875\u9762\u8df3\u8f6c\u4f20\u53c2",children:[],level:3},{value:"shouldComponentUpdate",id:"shouldcomponentupdate",children:[],level:3},{value:"Taro.PureComponent",id:"taropurecomponent",children:[],level:3},{value:"Taro.memo",id:"taromemo",children:[],level:3}],level:2},{value:"Taro \u6846\u67b6\u5c42\u9762\u4f18\u5316",id:"taro-\u6846\u67b6\u5c42\u9762\u4f18\u5316",children:[{value:"\u5c0f\u7a0b\u5e8f\u6570\u636e diff",id:"\u5c0f\u7a0b\u5e8f\u6570\u636e-diff",children:[{value:"diff \u903b\u8f91\uff1a",id:"diff-\u903b\u8f91",children:[],level:5}],level:3}],level:2}],d={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5f00\u53d1\u8005\u624b\u52a8\u4f18\u5316"},"\u5f00\u53d1\u8005\u624b\u52a8\u4f18\u5316"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u501f\u52a9 Taro \u63d0\u4f9b\u7684\u5404\u79cd\u5de5\u5177\u5bf9\u7a0b\u5e8f\u6027\u80fd\u8fdb\u884c\u4f18\u5316\u3002"),(0,a.kt)("h3",{id:"\u9884\u52a0\u8f7d"},"\u9884\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"QQ\u8f7b\u5e94\u7528"),"\u4e2d\uff0c\u4ece\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.navigateTo")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.redirectTo")," \u540e\uff0c\u5230\u9875\u9762\u89e6\u53d1 componentWillMount \u4f1a\u6709\u4e00\u5b9a\u5ef6\u65f6\u3002\u56e0\u6b64\u4e00\u4e9b\u7f51\u7edc\u8bf7\u6c42\u53ef\u4ee5\u63d0\u524d\u5230\u53d1\u8d77\u8df3\u8f6c\u524d\u4e00\u523b\u53bb\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"Taro \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"componentWillPreload")," \u94a9\u5b50\uff0c\u5b83\u63a5\u6536\u9875\u9762\u8df3\u8f6c\u7684\u53c2\u6570\u4f5c\u4e3a\u53c2\u6570\u3002\u53ef\u4ee5\u628a\u9700\u8981\u9884\u52a0\u8f7d\u7684\u5185\u5bb9\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," \u8fd4\u56de\uff0c\u7136\u540e\u5728\u9875\u9762\u89e6\u53d1 componentWillMount \u540e\u5373\u53ef\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.$preloadData")," \u83b7\u53d6\u5230\u9884\u52a0\u8f7d\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u8c03\u7528\u8df3\u8f6c\u65b9\u6cd5\u65f6\u9700\u8981\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7edd\u5bf9\u8def\u5f84"),"\uff0c\u76f8\u5bf9\u8def\u5f84\u4e0d\u4f1a\u89e6\u53d1\u6b64\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class Index extends Component {\n  componentWillMount () {\n    console.log('isFetching: ', this.isFetching)\n    this.$preloadData\n      .then(res => {\n        console.log('res: ', res)\n        this.isFetching = false\n      })\n  }\n\n  componentWillPreload (params) {\n    return this.fetchData(params.url)\n  }\n\n  fetchData () {\n    this.isFetching = true\n    ...\n  }\n}\n")),(0,a.kt)("h3",{id:"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u4f7f\u7528-thispreload-\u51fd\u6570\u8fdb\u884c\u9875\u9762\u8df3\u8f6c\u4f20\u53c2"},"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 this.$preload \u51fd\u6570\u8fdb\u884c\u9875\u9762\u8df3\u8f6c\u4f20\u53c2"),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"this.$preload(key: String | Object, [ value: Any ])")),(0,a.kt)("p",null,"\u4e4b\u6240\u4ee5\u547d\u540d\u4e3a $preload\uff0c\u56e0\u4e3a\u5b83\u4e5f\u6709\u4e00\u70b9\u9884\u52a0\u8f7d\u6570\u636e\u7684\u610f\u5473\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u89c9\u5f97\u6bcf\u6b21\u9875\u9762\u8df3\u8f6c\u4f20\u53c2\u65f6\uff0c\u9700\u8981\u5148\u628a\u53c2\u6570 stringify \u540e\u52a0\u5230 url \u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u4e2d\u5f88\u7e41\u7410\uff0c\u53ef\u4ee5\u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.$preload")," \u8fdb\u884c\u4f20\u53c2\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u5982\u679c\u4f20\u5165\u7684\u662f\u4e0b\u4e00\u4e2a\u9875\u9762\u7684\u6570\u636e\u8bf7\u6c42 promise\uff0c\u4e5f\u6709\u4e0a\u4e00\u70b9\u63d0\u5230\u7684\u201c\u9884\u52a0\u8f7d\u201d\u529f\u80fd\uff0c\u4e5f\u80fd\u591f\u7ed5\u8fc7 componentWillMount \u5ef6\u65f6\u3002\u4e0d\u540c\u70b9\u4e3b\u8981\u5728\u4e8e\u4ee3\u7801\u7ba1\u7406\uff0c\u5f00\u53d1\u8005\u53ef\u914c\u60c5\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u4f20\u5165\u5355\u4e2a\u53c2\u6570\n\n// A \u9875\u9762\n// \u8c03\u7528\u8df3\u8f6c\u65b9\u6cd5\u524d\u4f7f\u7528 this.$preload\nthis.$preload('key', 'val')\nTaro.navigateTo({ url: '/pages/B/B' })\n\n// B \u9875\u9762\n// \u53ef\u4ee5\u4e8e this.$router.preload \u4e2d\u8bbf\u95ee\u5230 this.$preload \u4f20\u5165\u7684\u53c2\u6570\ncomponentWillMount () {\n  console.log('preload: ', this.$router.preload.key)\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u4f20\u5165\u591a\u4e2a\u53c2\u6570\n\n// A \u9875\u9762\nthis.$preload({\n  x: 1,\n  y: 2\n})\nTaro.navigateTo({ url: '/pages/B/B' })\n\n// B \u9875\u9762\ncomponentWillMount () {\n  console.log('preload: ', this.$router.preload)\n}\n")),(0,a.kt)("h3",{id:"shouldcomponentupdate"},"shouldComponentUpdate"),(0,a.kt)("p",null,"\u5f53\u4f60\u6e05\u695a\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7ec4\u4ef6\u4e0d\u9700\u8981\u88ab\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," \u94a9\u5b50\u91cc\u8fd4\u56de ",(0,a.kt)("strong",{parentName:"p"},"false")," \u6765\u8df3\u8fc7\u672c\u6b21\u6e32\u67d3\u6d41\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"shouldComponentUpdate (nextProps, nextState) {\n  if (this.props.color !== nextProps.color) {\n    return true\n  }\n  if (this.state.count !== nextState.count) {\n    return true\n  }\n  return false\n}\n")),(0,a.kt)("h3",{id:"taropurecomponent"},"Taro.PureComponent"),(0,a.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8ba9\u7ec4\u4ef6\u7ee7\u627f\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.PureComponent")," \u7c7b\uff0c\u800c\u65e0\u9700\u624b\u52a8\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.PureComponent")," \u91cc\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"\uff0c\u5b83\u4f1a\u628a\u65b0\u65e7 props \u548c\u65b0\u65e7 state \u5206\u522b\u505a\u4e00\u6b21\u6d45\u5bf9\u6bd4\uff0c\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002"),(0,a.kt)("h3",{id:"taromemo"},"Taro.memo"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea v1.3.0 \u53ef\u7528")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Taro.memo")," \u662f\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u5b83\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"PureComponent")," \u975e\u5e38\u76f8\u4f3c\u3002\u4f46\u5b83\u9002\u7528\u4e8e\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u800c\u975e Class \u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u51fd\u6570\u7ec4\u4ef6\u5728\u7ed9\u5b9a\u76f8\u540c props \u7684\u60c5\u51b5\u4e0b\u6e32\u67d3\u76f8\u540c\u7684\u7ed3\u679c\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u5176\u5305\u88c5\u5728 Taro.memo \u4e2d\u8c03\u7528\uff0c\u4ee5\u6b64\u901a\u8fc7\u8bb0\u5fc6\u7ec4\u4ef6\u6e32\u67d3\u7ed3\u679c\u7684\u65b9\u5f0f\u6765\u63d0\u9ad8\u7ec4\u4ef6\u7684\u6027\u80fd\u8868\u73b0\u3002\u8fd9\u610f\u5473\u7740\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cTaro \u5c06\u8df3\u8fc7\u6e32\u67d3\u7ec4\u4ef6\u7684\u64cd\u4f5c\u5e76\u76f4\u63a5\u590d\u7528\u6700\u8fd1\u4e00\u6b21\u6e32\u67d3\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5176\u53ea\u4f1a\u5bf9\u590d\u6742\u5bf9\u8c61\u505a\u6d45\u5c42\u5bf9\u6bd4\uff08\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"PureComponent")," \u884c\u4e3a\u4e00\u81f4\uff09\uff0c\u5982\u679c\u4f60\u60f3\u8981\u63a7\u5236\u5bf9\u6bd4\u8fc7\u7a0b\uff0c\u90a3\u4e48\u8bf7\u5c06\u81ea\u5b9a\u4e49\u7684\u6bd4\u8f83\u51fd\u6570\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent(props) {\n  /* \u4f7f\u7528 props \u6e32\u67d3 */\n}\nfunction areEqual(prevProps, nextProps) {\n  /*\n  \u5982\u679c\u628a nextProps \u4f20\u5165 render \u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u4e0e\n  \u5c06 prevProps \u4f20\u5165 render \u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u4e00\u81f4\u5219\u8fd4\u56de true\uff0c\n  \u5426\u5219\u8fd4\u56de false\n  */\n}\nexport default Taro.memo(MyComponent, areEqual);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\n\u4e0e class \u7ec4\u4ef6\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," \u65b9\u6cd5\u4e0d\u540c\u7684\u662f\uff0c\u5982\u679c props \u76f8\u7b49\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"areEqual")," \u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff1b\u5982\u679c props \u4e0d\u76f8\u7b49\uff0c\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u8fd9\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u76f8\u53cd\u3002")),(0,a.kt)("h2",{id:"taro-\u6846\u67b6\u5c42\u9762\u4f18\u5316"},"Taro \u6846\u67b6\u5c42\u9762\u4f18\u5316"),(0,a.kt)("p",null,"Taro \u6846\u67b6\u505a\u4e86\u4e00\u4e9b\u6027\u80fd\u4f18\u5316\u65b9\u9762\u7684\u5de5\u4f5c\uff0c\u8fd9\u90e8\u5206\u6bcb\u9700\u5f00\u53d1\u8005\u624b\u52a8\u5904\u7406\uff0c\u5f00\u53d1\u8005\u53ef\u7a0d\u505a\u4e86\u89e3\u3002"),(0,a.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u6570\u636e-diff"},"\u5c0f\u7a0b\u5e8f\u6570\u636e diff"),(0,a.kt)("p",null,"\u5728\u771f\u6b63\u8c03\u7528\u5c0f\u7a0b\u5e8f\u7684 setData \u65b9\u6cd5\u4e4b\u524d\uff0cTaro \u4f1a\u628a\u9875\u9762\u6216\u7ec4\u4ef6\u7684 state \u548c\u5f53\u524d\u9875\u9762\u6216\u7ec4\u4ef6\u7684 data \u505a\u4e00\u6b21 diff\uff0c\u53ea\u5bf9\u5fc5\u8981\u66f4\u65b0\u7684\u6570\u636e\u505a setData\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u624b\u52a8\u4f18\u5316\u3002"),(0,a.kt)("h5",{id:"diff-\u903b\u8f91"},"diff \u903b\u8f91\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5168\u7b49 => \u8df3\u8fc7"),(0,a.kt)("li",{parentName:"ol"},"\u65b0\u589e\u5b57\u6bb5 => \u4f7f\u7528\u65b0\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u7c7b\u578b\u4e0d\u540c => \u4f7f\u7528\u65b0\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u7c7b\u578b\u76f8\u540c\u3001\u57fa\u7840\u6570\u636e\u7c7b\u578b => \u4f7f\u7528\u65b0\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4e2d\u4e00\u65b9\u4e3a\u6570\u7ec4\uff0c\u53e6\u4e00\u65b9\u4e0d\u662f => \u4f7f\u7528\u65b0\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u90fd\u4e3a\u6570\u7ec4\u3001\u65b0\u6570\u7ec4\u6bd4\u65e7\u6570\u7ec4\u77ed => \u4f7f\u7528\u65b0\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u90fd\u4e3a\u6570\u7ec4\u3001\u65b0\u6570\u7ec4\u957f\u5ea6\u5927\u4e8e\u7b49\u4e8e\u65e7\u6570\u7ec4\u7684\u957f\u5ea6 => \u9010\u9879 diff\u3001\u6309\u8def\u5f84\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4e2d\u4e00\u65b9\u4e3a null\uff0c\u53e6\u4e00\u65b9\u4e0d\u662f => \u4f7f\u7528\u65b0\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u90fd\u4e3a\u5bf9\u8c61\uff0c\u65b0\u5bf9\u8c61\u7f3a\u5c11\u65e7\u5bf9\u8c61\u67d0\u4e9b\u5c5e\u6027 => \u4f7f\u7528\u65b0\u503c"),(0,a.kt)("li",{parentName:"ol"},"\u90fd\u4e3a\u5bf9\u8c61\uff0c\u65b0\u5bf9\u8c61\u62e5\u6709\u65e7\u5bf9\u8c61\u6240\u6709\u7684\u5c5e\u6027 => \u9010\u9879 diff\u3001\u6309\u8def\u5f84\u66f4\u65b0")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u65b0\u503c\nconst state = {\n  a: 1,\n  b: 22,\n  d: 4,\n  list: [1],\n  arr: [1, 'a', true, null, 66],\n  obj: {\n    x: 5\n  },\n  foo: {\n    x: 8,\n    y: 10,\n    z: 0\n  }\n}\n\n// \u65e7\u503c\nconst data = {\n  a: 1,\n  b: 2,\n  c: 3,\n  list: [1, 2, 3],\n  arr: [1, 2, 3],\n  obj: {\n    x: 10,\n    y: 8\n  },\n  foo: {\n    x: 'xxx',\n    y: 10\n  }\n}\n\ndiff(data, state)\n/**\n * diff \u7ed3\u679c\n{\n  b: 22,\n  d: 4,\n  list: [ 1 ],\n  'arr[1]': 'a',\n  'arr[2]': true,\n  'arr[3]': null,\n  'arr[4]': 66,\n  obj: { x: 5 },\n  'foo.x': 8,\n  'foo.z': 0\n}\n*/\n")))}c.isMDXComponent=!0}}]);