"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9499],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,g=m["".concat(c,".").concat(k)]||m[k]||s[k]||r;return t?o.createElement(g,i(i({ref:n},u),{},{components:t})):o.createElement(g,i({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9424:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var o=t(3117),a=(t(7294),t(3905));const r={id:"config",title:"\u914d\u7f6e",description:"Kratos \u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 map[string]interface{}\uff0c\u7136\u540e\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u503c\u5185\u5bb9",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,l={unversionedId:"component/config",id:"component/config",title:"\u914d\u7f6e",description:"Kratos \u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 map[string]interface{}\uff0c\u7136\u540e\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u503c\u5185\u5bb9",source:"@site/docs/component/02-config.md",sourceDirName:"component",slug:"/component/config",permalink:"/docs/component/config",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/02-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"config",title:"\u914d\u7f6e",description:"Kratos \u914d\u7f6e\u6e90\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5e76\u4e14 config \u4f1a\u8fdb\u884c\u5408\u5e76\u6210 map[string]interface{}\uff0c\u7136\u540e\u901a\u8fc7 Scan \u6216\u8005 Value \u83b7\u53d6\u503c\u5185\u5bb9",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"API \u5b9a\u4e49",permalink:"/docs/component/api"},next:{title:"\u5e8f\u5217\u5316",permalink:"/docs/component/encoding"}},c={},p=[{value:"\u8bbe\u8ba1\u7406\u5ff5",id:"\u8bbe\u8ba1\u7406\u5ff5",level:2},{value:"1.\u652f\u6301\u591a\u79cd\u914d\u7f6e\u6e90",id:"1\u652f\u6301\u591a\u79cd\u914d\u7f6e\u6e90",level:3},{value:"2.\u652f\u6301\u591a\u79cd\u914d\u7f6e\u683c\u5f0f",id:"2\u652f\u6301\u591a\u79cd\u914d\u7f6e\u683c\u5f0f",level:3},{value:"3.\u70ed\u66f4\u65b0",id:"3\u70ed\u66f4\u65b0",level:3},{value:"4.\u914d\u7f6e\u5408\u5e76",id:"4\u914d\u7f6e\u5408\u5e76",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"1.\u521d\u59cb\u5316\u914d\u7f6e\u6e90",id:"1\u521d\u59cb\u5316\u914d\u7f6e\u6e90",level:3},{value:"2.\u8bfb\u53d6\u914d\u7f6e",id:"2\u8bfb\u53d6\u914d\u7f6e",level:3},{value:"3.\u76d1\u542c\u914d\u7f6e\u53d8\u66f4",id:"3\u76d1\u542c\u914d\u7f6e\u53d8\u66f4",level:3},{value:"4.\u8bfb\u53d6\u73af\u5883\u53d8\u91cf",id:"4\u8bfb\u53d6\u73af\u5883\u53d8\u91cf",level:3},{value:"5.\u914d\u7f6e\u89e3\u6790Decoder",id:"5\u914d\u7f6e\u89e3\u6790decoder",level:3},{value:"6.\u914d\u7f6e\u5904\u7406Resolver",id:"6\u914d\u7f6e\u5904\u7406resolver",level:3},{value:"7.\u652f\u6301\u5176\u5b83\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6",id:"7\u652f\u6301\u5176\u5b83\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6",level:3},{value:"kratos-layout",id:"kratos-layout",level:2},{value:"\u7406\u5ff5",id:"\u7406\u5ff5",level:3},{value:"1.\u9879\u76ee\u7ed3\u6784",id:"1\u9879\u76ee\u7ed3\u6784",level:4},{value:"2.\u914d\u7f6e\u751f\u6210\u547d\u4ee4",id:"2\u914d\u7f6e\u751f\u6210\u547d\u4ee4",level:4},{value:"3.\u4f7f\u7528Protobuf\u5b9a\u4e49\u914d\u7f6e",id:"3\u4f7f\u7528protobuf\u5b9a\u4e49\u914d\u7f6e",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",level:3},{value:"1.\u5b9a\u4e49",id:"1\u5b9a\u4e49",level:4},{value:"2.\u751f\u6210",id:"2\u751f\u6210",level:4},{value:"3.\u4f7f\u7528",id:"3\u4f7f\u7528",level:4},{value:"\u6269\u5c55\u9605\u8bfb",id:"\u6269\u5c55\u9605\u8bfb",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5fae\u670d\u52a1\u6216\u8005\u8bf4\u4e91\u539f\u751f\u5e94\u7528\u7684\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5\u662f\u5c06\u914d\u7f6e\u6587\u4ef6\u548c\u5e94\u7528\u4ee3\u7801\u5206\u5f00\u7ba1\u7406\u2014\u2014\u4e0d\u5c06\u914d\u7f6e\u6587\u4ef6\u653e\u5165\u4ee3\u7801\u4ed3\u5e93\uff0c\u4e5f\u4e0d\u6253\u5305\u8fdb\u5bb9\u5668\u955c\u50cf\uff0c\u800c\u662f\u5728\u670d\u52a1\u8fd0\u884c\u65f6\uff0c\u628a\u914d\u7f6e\u6587\u4ef6\u6302\u8f7d\u8fdb\u53bb\u6216\u8005\u76f4\u63a5\u4ece\u914d\u7f6e\u4e2d\u5fc3\u52a0\u8f7d\u3002Kratos\u7684config\u7ec4\u4ef6\u5c31\u662f\u7528\u6765\u5e2e\u52a9\u5e94\u7528\u4ece\u5404\u79cd\u914d\u7f6e\u6e90\u52a0\u8f7d\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u7406\u5ff5"},"\u8bbe\u8ba1\u7406\u5ff5"),(0,a.kt)("h3",{id:"1\u652f\u6301\u591a\u79cd\u914d\u7f6e\u6e90"},"1.\u652f\u6301\u591a\u79cd\u914d\u7f6e\u6e90"),(0,a.kt)("p",null,"Kratos\u5b9a\u4e49\u4e86\u6807\u51c6\u5316\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/config/source.go"},"Source\u548cWatcher\u63a5\u53e3"),"\u6765\u9002\u914d\u5404\u79cd\u914d\u7f6e\u6e90\u3002"),(0,a.kt)("p",null,"\u6846\u67b6\u5185\u7f6e\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/config/file"},"\u672c\u5730\u6587\u4ef6file"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/config/env"},"\u73af\u5883\u53d8\u91cfenv"),"\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config"},"contrib/config"),"\u4e0b\u9762\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u5982\u4e0b\u7684\u914d\u7f6e\u4e2d\u5fc3\u7684\u9002\u914d\u4f9b\u4f7f\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/apollo"},"apollo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/consul"},"consul")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/etcd"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/kubernetes"},"kubernetes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/nacos"},"nacos")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/polaris"},"polaris"))),(0,a.kt)("p",null,"\u5982\u679c\u4e0a\u8ff0\u7684\u914d\u7f6e\u52a0\u8f7d\u65b9\u5f0f\u65e0\u6cd5\u6db5\u76d6\u60a8\u7684\u73af\u5883\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u63a5\u53e3\u6765\u9002\u914d\u60a8\u81ea\u5df1\u7684\u914d\u7f6e\u52a0\u8f7d\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"2\u652f\u6301\u591a\u79cd\u914d\u7f6e\u683c\u5f0f"},"2.\u652f\u6301\u591a\u79cd\u914d\u7f6e\u683c\u5f0f"),(0,a.kt)("p",null,"\u914d\u7f6e\u7ec4\u4ef6\u590d\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"encoding"),"\u4e2d\u7684\u53cd\u5e8f\u5217\u5316\u903b\u8f91\u4f5c\u4e3a\u914d\u7f6e\u89e3\u6790\u4f7f\u7528\u3002\u9ed8\u8ba4\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\u7684\u89e3\u6790\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"json"),(0,a.kt)("li",{parentName:"ul"},"proto"),(0,a.kt)("li",{parentName:"ul"},"xml"),(0,a.kt)("li",{parentName:"ul"},"yaml")),(0,a.kt)("p",null,"\u6846\u67b6\u5c06\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u7c7b\u578b\u5339\u914d\u5bf9\u5e94\u7684Codec\uff0c\u8fdb\u884c\u914d\u7f6e\u6587\u4ef6\u7684\u89e3\u6790\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/encoding/encoding.go#L10"},"Codec"),"\u5e76\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"encoding.RegisterCodec"),"\u65b9\u6cd5\uff0c\u5c06\u5b83\u6ce8\u518c\u8fdb\u53bb\uff0c\u6765\u89e3\u6790\u5176\u5b83\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7c7b\u578b\u7684\u63d0\u53d6\uff0c\u6839\u636e\u914d\u7f6e\u6e90\u5177\u4f53\u5b9e\u73b0\u4e0d\u540c\u800c\u7565\u6709\u533a\u522b\uff0c\u5185\u7f6e\u7684file\u662f\u628a\u6587\u4ef6\u540e\u7f00\u4f5c\u4e3a\u6587\u4ef6\u7c7b\u578b\u7684\uff0c\u5176\u5b83\u914d\u7f6e\u6e90\u63d2\u4ef6\u7684\u5177\u4f53\u903b\u8f91\u8bf7\u53c2\u8003\u5bf9\u5e94\u7684\u6587\u6863\u3002"),(0,a.kt)("h3",{id:"3\u70ed\u66f4\u65b0"},"3.\u70ed\u66f4\u65b0"),(0,a.kt)("p",null,"Kratos\u7684config\u7ec4\u4ef6\u652f\u6301\u914d\u7f6e\u7684\u70ed\u66f4\u65b0\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u4e2d\u5fc3\u914d\u5408config\u7684\u70ed\u66f4\u65b0\u529f\u80fd\uff0c\u5728\u670d\u52a1\u4e0d\u91cd\u65b0\u53d1\u5e03/\u4e0d\u505c\u673a/\u4e0d\u91cd\u542f\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u7ebf\u66f4\u65b0\u670d\u52a1\u7684\u914d\u7f6e\uff0c\u4fee\u6539\u670d\u52a1\u7684\u4e00\u4e9b\u884c\u4e3a\u3002"),(0,a.kt)("h3",{id:"4\u914d\u7f6e\u5408\u5e76"},"4.\u914d\u7f6e\u5408\u5e76"),(0,a.kt)("p",null,"\u5728config\u7ec4\u4ef6\u4e2d\uff0c\u6240\u6709\u7684\u914d\u7f6e\u6e90\u4e2d\u7684\u914d\u7f6e\uff08\u6587\u4ef6\uff09\u5c06\u88ab\u9010\u4e2a\u8bfb\u51fa\uff0c\u5206\u522b\u89e3\u6790\u6210map\uff0c\u5e76\u5408\u5e76\u5230\u4e00\u4e2amap\u4e2d\u53bb\u3002\u56e0\u6b64\u5728\u52a0\u8f7d\u5b8c\u6bd5\u540e\uff0c\u4e0d\u9700\u8981\u518d\u7406\u4f1a\u914d\u7f6e\u7684\u6587\u4ef6\u540d\uff0c\u4e0d\u7528\u6587\u4ef6\u540d\u6765\u8fdb\u884c\u67e5\u627e\uff0c\u800c\u662f\u7528\u5185\u5bb9\u4e2d\u7684\u7ed3\u6784\u6765\u5bf9\u914d\u7f6e\u7684\u503c\u8fdb\u884c\u7d22\u5f15\u5373\u53ef\u3002\u8bbe\u8ba1\u548c\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u8bf7\u6ce8\u610f",(0,a.kt)("strong",{parentName:"p"},"\u5404\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6839\u5c42\u7ea7\u7684key\u4e0d\u8981\u91cd\u590d\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u88ab\u8986\u76d6"),"\u3002"),(0,a.kt)("p",null,"\u4e3e\u4f8b\uff1a"),(0,a.kt)("p",null,"\u6709\u5982\u4e0b\u4e24\u4e2a\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u6587\u4ef61\nfoo:\n  baz: "2"\n  biu: "example"\nhello:\n  a: b\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6587\u4ef62\nfoo:\n  bar: 3\n  baz: aaaa\nhey:\n  good: bad\n  qux: quux\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".Load"),"\u540e\uff0c\u5c06\u88ab\u5408\u5e76\u4e3a\u5982\u4e0b\u7684\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "foo": {\n    "baz": "aaaa",\n    "bar": 3,\n    "biu": "example"\n  },\n  "hey": {\n    "good": "bad",\n    "qux": "quux"\n  },\n  "hello": {\n    "a": "b"\n  }\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\uff0c\u914d\u7f6e\u6587\u4ef6\u7684\u5404\u5c42\u7ea7\u5c06\u5206\u522b\u5408\u5e76\uff0c\u5728key\u51b2\u7a81\u65f6\u4f1a\u53d1\u751f\u8986\u76d6\uff0c\u800c\u5177\u4f53\u7684\u8986\u76d6\u987a\u5e8f\uff0c\u4f1a\u7531\u914d\u7f6e\u6e90\u5b9e\u73b0\u4e2d\u7684\u8bfb\u53d6\u987a\u5e8f\u51b3\u5b9a\uff0c\u56e0\u6b64\u8fd9\u91cc\u91cd\u65b0\u63d0\u9192\u4e00\u4e0b\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5404\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6839\u5c42\u7ea7\u7684key\u4e0d\u8981\u91cd\u590d\uff0c\u4e5f\u4e0d\u8981\u4f9d\u8d56\u8fd9\u4e2a\u8986\u76d6\u7684\u7279\u6027"),"\uff0c\u4ece\u6839\u672c\u4e0a\u907f\u514d\u4e0d\u540c\u914d\u7f6e\u6587\u4ef6\u7684\u5185\u5bb9\u4e92\u76f8\u8986\u76d6\u9020\u6210\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},'.Value("foo.bar")'),"\u76f4\u63a5\u83b7\u53d6\u67d0\u4e2a\u5b57\u6bb5\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},".Scan"),"\u65b9\u6cd5\u6765\u5c06\u6574\u4e2amap\u8bfb\u8fdb\u67d0\u4e2a\u7ed3\u6784\u4f53\u4e2d\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u8bf7\u770b\u4e0b\u6587\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h3",{id:"1\u521d\u59cb\u5316\u914d\u7f6e\u6e90"},"1.\u521d\u59cb\u5316\u914d\u7f6e\u6e90"),(0,a.kt)("p",null,"\u4f7f\u7528file\uff0c\u5373\u4ece\u672c\u5730\u6587\u4ef6\u52a0\u8f7d\uff1a\n\u8fd9\u91cc\u7684path\u5c31\u662f\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u586b\u5199\u4e00\u4e2a\u76ee\u5f55\u540d\uff0c\u8fd9\u6837\u4f1a\u5c06\u6574\u4e2a\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u8fdb\u884c\u89e3\u6790\u52a0\u8f7d\uff0c\u5408\u5e76\u5230\u540c\u4e00\u4e2amap\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/go-kratos/kratos/v2/config"\n    "github.com/go-kratos/kratos/v2/config/file"\n)\n\npath := "configs/config.yaml"\nc := config.New(\n    config.WithSource(\n        file.NewSource(path),\n    )\n\uff09\n')),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u7528\u5916\u90e8\u7684\u914d\u7f6e\u4e2d\u5fc3\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config"},"contrib/config"),"\u91cc\u9762\u627e\u4e00\u4e2a\uff0c\u4ee5consul\u4e3a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/go-kratos/kratos/contrib/config/consul/v2"\n    "github.com/hashicorp/consul/api"\n)\n\nconsulClient, err := api.NewClient(&api.Config{\n  Address: "127.0.0.1:8500",\n})\nif err != nil {\n  panic(err)\n}\ncs, err := consul.New(consulClient, consul.WithPath("app/cart/configs/"))\nif err != nil {\n  panic(err)\n}\nc := config.New(config.WithSource(cs))\n')),(0,a.kt)("p",null,"\u4e0d\u540c\u7684\u914d\u7f6e\u6e90\u63d2\u4ef6\u4f7f\u7528\u65b9\u5f0f\u7565\u6709\u5dee\u522b\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u5b83\u4eec\u5404\u81ea\u7684\u6587\u6863\u6216examples\u3002"),(0,a.kt)("h3",{id:"2\u8bfb\u53d6\u914d\u7f6e"},"2.\u8bfb\u53d6\u914d\u7f6e"),(0,a.kt)("p",null,"\u9996\u5148\u8981\u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u4f53\u7528\u6765\u89e3\u6790\u5b57\u6bb5\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fkratos-layout\u521b\u5efa\u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u53c2\u8003\u540e\u9762\u8bb2\u89e3kratos-layout\u7684\u90e8\u5206\uff0c\u4f7f\u7528proto\u6587\u4ef6\u5b9a\u4e49\u914d\u7f6e\u548c\u751f\u6210struct\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u6f14\u793a\u7684\u662f\u624b\u5de5\u5b9a\u4e49\u7ed3\u6784\uff0c\u60a8\u9700\u8981\u5728\u7ed3\u6784\u4f53\u4e0a\u7528json tag\u6765\u5b9a\u4e49\u60a8\u914d\u7f6e\u6587\u4ef6\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var v struct {\n  Service struct {\n    Name    string `json:"name"`\n    Version string `json:"version"`\n  } `json:"service"`\n}\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u4e4b\u524d\u521b\u5efa\u597d\u7684config\u5b9e\u4f8b\uff0c\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},".Scan"),"\u65b9\u6cd5\uff0c\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u7684\u5185\u5bb9\u5230\u7ed3\u6784\u4f53\u4e2d\uff0c\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u5b8c\u6574\u83b7\u53d6\u6574\u4e2a\u914d\u7f6e\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Unmarshal the config to struct\nif err := c.Scan(&v); err != nil {\n  panic(err)\n}\nfmt.Printf("config: %+v", v)\n')),(0,a.kt)("p",null,"\u4f7f\u7528config\u5b9e\u4f8b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},".Value"),"\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5355\u72ec\u83b7\u53d6\u67d0\u4e2a\u5b57\u6bb5\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'name, err := c.Value("service.name").String()\nif err != nil {\n  panic(err)\n}\nfmt.Printf("service: %s", name)\n')),(0,a.kt)("h3",{id:"3\u76d1\u542c\u914d\u7f6e\u53d8\u66f4"},"3.\u76d1\u542c\u914d\u7f6e\u53d8\u66f4"),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},".Watch"),"\u65b9\u6cd5\uff0c\u53ef\u4ee5\u76d1\u542c\u914d\u7f6e\u4e2d\u67d0\u4e2a\u5b57\u6bb5\u7684\u53d8\u66f4\uff0c\u5728\u672c\u5730\u6216\u8fdc\u7aef\u7684\u914d\u7f6e\u4e2d\u5fc3\u6709\u914d\u7f6e\u6587\u4ef6\u53d8\u66f4\u65f6\uff0c\u6267\u884c\u56de\u8c03\u51fd\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'if err := c.Watch("service.name", func(key string, value config.Value) {\n  fmt.Printf("config changed: %s = %v\\n", key, value)\n  // \u5728\u8fd9\u91cc\u5199\u56de\u8c03\u7684\u903b\u8f91\n}); err != nil {\n  log.Error(err)\n}\n')),(0,a.kt)("h3",{id:"4\u8bfb\u53d6\u73af\u5883\u53d8\u91cf"},"4.\u8bfb\u53d6\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u914d\u7f6e\u9700\u8981\u4ece\u73af\u5883\u53d8\u91cf\u8bfb\u53d6\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff1a"),(0,a.kt)("p",null,"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u6e90env\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'c := config.New(\n    config.WithSource(\n        // \u6dfb\u52a0\u524d\u7f00\u4e3a KRATOS_ \u7684\u73af\u5883\u53d8\u91cf\uff0c\u4e0d\u9700\u8981\u7684\u8bdd\u4e5f\u53ef\u4ee5\u8bbe\u4e3a\u7a7a\u5b57\u7b26\u4e32\n        env.NewSource("KRATOS_"),\n        // \u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6\n        file.NewSource(path),\n    ))\n    \n// \u52a0\u8f7d\u914d\u7f6e\u6e90\uff1a\nif err := c.Load(); err != nil {\n    log.Fatal(err)\n}\n\n// \u83b7\u53d6\u73af\u5883\u53d8\u91cf KRATOS_PORT \u7684\u503c\uff0c\u8fd9\u91cc\u7528\u53bb\u6389\u524d\u7f00\u7684\u540d\u79f0\u8fdb\u884c\u8bfb\u53d6\nport, err := c.Value("PORT").String()\n')),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u4f7f\u7528Value\u65b9\u6cd5\u76f4\u63a5\u8bfb\u7684\u65b9\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u91cc\u4f7f\u7528\u5360\u4f4d\u7b26\u6765\u628a\u73af\u5883\u53d8\u91cf\u4e2d\u7684\u503c\u6e32\u67d3\u8fdb\u53bb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'service:\n  name: "kratos_app"\nhttp:\n  server:\n    # \u4f7f\u7528 service.name \u7684\u503c\n    name: "${service.name}"\n    # \u4f7f\u7528\u73af\u5883\u53d8\u91cf PORT \u66ff\u6362\uff0c\u82e5\u4e0d\u5b58\u5728\uff0c\u4f7f\u7528\u9ed8\u8ba4\u503c 8080\n    port: "${PORT:8080}"\n    # \u4f7f\u7528\u73af\u5883\u53d8\u91cf TIMEOUT \u66ff\u6362\uff0c\u65e0\u9ed8\u8ba4\u503c\n    timeout: "$TIMEOUT"\n')),(0,a.kt)("h3",{id:"5\u914d\u7f6e\u89e3\u6790decoder"},"5.\u914d\u7f6e\u89e3\u6790Decoder"),(0,a.kt)("p",null,"Decoder\u7528\u4e8e\u5c06\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u7528\u7279\u5b9a\u7684\u53cd\u5e8f\u5217\u5316\u65b9\u6cd5\u89e3\u6790\u51fa\u6765\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/config/options.go#L60"},"\u9ed8\u8ba4decoder"),"\u4f1a\u6839\u636e\u6587\u4ef6\u7684\u7c7b\u578b\u81ea\u52a8\u8bc6\u522b\u7c7b\u578b\u5e76\u89e3\u6790\uff0c\u901a\u5e38\u60c5\u51b5\u4e0d\u9700\u8981\u81ea\u5b9a\u4e49\u8fd9\u4e2a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u540e\u6587\u7684\u5b9e\u73b0Codec\u7684\u65b9\u5f0f\u6765\u6ce8\u518c\u66f4\u591a\u6587\u4ef6\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u5728\u521d\u59cb\u5316config\u65f6\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"WithDecoder"),"\u53c2\u6570\uff0c\u53ef\u4ee5\u5c06Decoder\u8986\u76d6\u4e3a\u81ea\u5b9a\u4e49\u7684\u903b\u8f91\u3002\u5982\u4e0b\u4ee3\u7801\u5c55\u793a\u4e86\u914d\u7f6e\u81ea\u5b9a\u4e49Decoder\u7684\u65b9\u6cd5\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86yaml\u5e93\u89e3\u6790\u6240\u6709\u914d\u7f6e\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u6765\u4f7f\u7528\u7279\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u89e3\u6790\u65b9\u6cd5\uff0c\u4f46\u66f4\u63a8\u8350\u4f7f\u7528\u540e\u6587\u7684\u5b9e\u73b0Codec\u7684\u65b9\u5f0f\uff0c\u80fd\u540c\u65f6\u652f\u6301\u591a\u79cd\u683c\u5f0f\u7684\u89e3\u6790\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "gopkg.in/yaml.v2"\n\nc := config.New(\n  config.WithSource(\n    file.NewSource(flagconf),\n  ),\n  config.WithDecoder(func(kv *config.KeyValue, v map[string]interface{}) error {\n    return yaml.Unmarshal(kv.Value, v)\n  }),\n)\n')),(0,a.kt)("h3",{id:"6\u914d\u7f6e\u5904\u7406resolver"},"6.\u914d\u7f6e\u5904\u7406Resolver"),(0,a.kt)("p",null,"Resolver\u7528\u4e8e\u5bf9\u89e3\u6790\u5b8c\u6bd5\u540e\u7684map\u7ed3\u6784\u8fdb\u884c\u518d\u6b21\u5904\u7406\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/32272fe44156cf3d1fa5cd4dbbb9b5098c9c2a4f/config/options.go#L85"},"\u9ed8\u8ba4resolver"),"\u4f1a\u5bf9\u914d\u7f6e\u4e2d\u7684\u5360\u4f4d\u7b26\u8fdb\u884c\u586b\u5145\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u521d\u59cb\u5316config\u65f6\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"WithResolver"),"\u53c2\u6570\uff0c\u6765\u8986\u76d6resolver\u7684\u884c\u4e3a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"c := config.New(\n  config.WithSource(\n    file.NewSource(flagconf),\n  ),\n  config.WithResolver(func (input map[string]interface{}) (err error)  {\n    // \u5728\u8fd9\u91cc\u5bf9input\u8fdb\u884c\u5904\u7406\u5373\u53ef\n    // \u60a8\u53ef\u80fd\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u9012\u5f52\u7684\u51fd\u6570\uff0c\u6765\u5904\u7406\u5d4c\u5957\u7684map\u7ed3\u6784\n    return \n  }),\n)\n")),(0,a.kt)("h3",{id:"7\u652f\u6301\u5176\u5b83\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6"},"7.\u652f\u6301\u5176\u5b83\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\u5b9e\u73b0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/encoding/encoding.go#L10"},"Codec"),"\uff0c\u8fd9\u91cc\u4ee5yaml\u4e3a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/go-kratos/kratos/v2/encoding"\n    "gopkg.in/yaml.v3"\n)\n\nconst Name = "myyaml"\n\nfunc init() {\n    encoding.RegisterCodec(codec{})\n}\n\n// codec is a Codec implementation with yaml.\ntype codec struct{}\n\nfunc (codec) Marshal(v interface{}) ([]byte, error) {\n    return yaml.Marshal(v)\n}\n\nfunc (codec) Unmarshal(data []byte, v interface{}) error {\n    return yaml.Unmarshal(data, v)\n}\n\nfunc (codec) Name() string {\n    return Name\n}\n')),(0,a.kt)("p",null,"\u7136\u540e\u6ce8\u518c\u8be5Codec\n\u8fd9\u91cc\u7531\u4e8e\u6211\u4eec\u628a\u6ce8\u518c\u4ee3\u7801",(0,a.kt)("inlineCode",{parentName:"p"},"encoding.RegisterCodec(codec{})"),"\u5199\u5728\u4e86\u5305\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\u4e2d\uff0c\u6240\u4ee5\u5728\u5305\u88abimport\u7684\u65f6\u5019\uff0c\u5c06\u4f1a\u8fd0\u884c\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662f\u8fdb\u884c\u6ce8\u518c\u3002\u6240\u4ee5\u60a8\u53ef\u4ee5\u5728\u4ee3\u7801\u5165\u53e3\uff08\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"main.go"),"\uff09\u5bf9\u5b83\u8fdb\u884c\u6ce8\u518c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import _ "path/to/your/codec"\n')),(0,a.kt)("p",null,"\u968f\u540e\uff0cconfig\u7ec4\u4ef6\u5c31\u80fd\u628a\u4e0a\u9762\u4ee3\u7801\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},'const Name = "myyaml"'),"\u8fd9\u90e8\u5206\u4f5c\u4e3a\u683c\u5f0f\u7c7b\u578b\u540d\uff0c\u8c03\u7528\u8be5Codec\u89e3\u6790\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"kratos-layout"},"kratos-layout"),(0,a.kt)("h3",{id:"\u7406\u5ff5"},"\u7406\u5ff5"),(0,a.kt)("h4",{id:"1\u9879\u76ee\u7ed3\u6784"},"1.\u9879\u76ee\u7ed3\u6784"),(0,a.kt)("p",null,"layout\u4e2d\u6d89\u53ca\u5230\u914d\u7f6e\u6587\u4ef6\u6709\u4ee5\u4e0b\u90e8\u5206\uff0c\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u5b83\u4eec\u7684\u4f5c\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos-layout/blob/main/cmd/server/main.go"},"cmd/server/main.go")," \u8fd9\u4e2a\u662f\u670d\u52a1\u7684\u5165\u53e3\uff0c\u6211\u4eec\u9ed8\u8ba4\u4f7f\u7528\u4e86\u5185\u7f6e\u7684config/file\u7ec4\u4ef6\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4f1a\u8bfb\u53d6\u76f8\u5bf9\u8def\u5f84",(0,a.kt)("inlineCode",{parentName:"li"},"configs"),"\u76ee\u5f55\uff0c\u60a8\u53ef\u4ee5\u4fee\u6539\u8fd9\u4e2a\u6587\u4ef6\u91cc",(0,a.kt)("inlineCode",{parentName:"li"},"config.New()"),"\u53c2\u6570\u4e2d\u4f7f\u7528\u7684\u914d\u7f6e\u6e90\uff0c\u4ece\u5176\u5b83\u914d\u7f6e\u6e90\uff08\u6bd4\u5982\u914d\u7f6e\u4e2d\u5fc3\uff09\u8fdb\u884c\u52a0\u8f7d\u914d\u7f6e\u3002\u914d\u7f6e\u5728\u8fd9\u91cc\u5c06\u88ab\u52a0\u8f7d\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"conf.Bootstrap"),"\u7ed3\u6784\u4f53\u4e2d\uff0c\u8fd9\u4e2a\u7ed3\u6784\u4f53\u7684\u5185\u5bb9\u53ef\u4ee5\u901a\u8fc7\u4f9d\u8d56\u6ce8\u5165\uff0c\u6ce8\u5165\u5230\u670d\u52a1\u5185\u90e8\u7684\u5176\u5b83\u5c42\uff0c\u6bd4\u5982server\u6216data\uff0c\u8fd9\u6837\u5404\u5c42\u5c31\u80fd\u8bfb\u53d6\u5230\u5404\u81ea\u9700\u8981\u7684\u914d\u7f6e\uff0c\u5b8c\u6210\u81ea\u5df1\u7684\u521d\u59cb\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos-layout/blob/main/configs/config.yaml"},"configs/config.yaml")," \u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff0cconfigs\u76ee\u5f55\u7684\u5185\u5bb9\u901a\u5e38\u4e0d\u53c2\u4e0e\u670d\u52a1\u7684\u751f\u4ea7\u73af\u5883\u8fd0\u884c\uff0c\u60a8\u53ef\u4ee5\u7528\u5b83\u6765\u8fdb\u884c\u672c\u5730\u5f00\u53d1\u65f6\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u52a0\u8f7d\uff0c\u65b9\u4fbf\u5e94\u7528\u80fd\u672c\u5730\u80fd\u8dd1\u8d77\u6765\u8c03\u8bd5\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u5c06\u751f\u4ea7\u73af\u5883\u7684\u914d\u7f6e\u653e\u5728\u8fd9\u91cc\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos-layout/tree/main/internal/conf"},"internal/conf")," \u5728\u8fd9\u91cc\u653e\u914d\u7f6e\u6587\u4ef6\u7684\u7ed3\u6784\u5b9a\u4e49\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},".proto"),"\u6587\u4ef6\u6765\u8fdb\u884c\u914d\u7f6e\u5b9a\u4e49\uff0c\u7136\u540e\u901a\u8fc7\u5728\u6839\u76ee\u5f55\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"make config"),"\uff0c\u5c31\u53ef\u4ee5\u5c06\u5bf9\u5e94",(0,a.kt)("inlineCode",{parentName:"li"},".pb.go"),"\u6587\u4ef6\u751f\u6210\u5230\u76f8\u540c\u76ee\u5f55\u4e0b\u4f9b\u4f7f\u7528\u3002\u5728\u521d\u59cb\u72b6\u6001\u4e0b\uff0c\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"conf.proto"),"\u6240\u5b9a\u4e49\u7684\u7ed3\u6784\uff0c\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"configs/config.yaml"),"\u7684\u7ed3\u6784\uff0c\u8bf7\u4fdd\u6301\u4e24\u8005\u4e00\u81f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos-layout/blob/main/Makefile"},"make config")," Makefile\u4e2d\u7684\u8fd9\u4e2a\u6307\u4ee4\uff0c\u7528\u4e8e\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"li"},".proto"),"\u5b9a\u4e49\u7684\u914d\u7f6e\u5bf9\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"li"},".pb.go"),"\u6587\u4ef6\uff08\u5c31\u662f\u8c03\u4e86\u4e00\u4e0bprotoc\uff09\uff0c\u8981\u8bb0\u5f97\u6bcf\u6b21\u4fee\u6539\u5b9a\u4e49\u540e\uff0c\u4e00\u5b9a\u8981\u6267\u884c\u8fd9\u4e2a\u6307\u4ee4\u6765\u91cd\u65b0\u751f\u6210go\u6587\u4ef6")),(0,a.kt)("h4",{id:"2\u914d\u7f6e\u751f\u6210\u547d\u4ee4"},"2.\u914d\u7f6e\u751f\u6210\u547d\u4ee4"),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u628a\u6839\u636eproto\u751f\u6210\u7ed3\u6784\u4f53\u7684\u6307\u4ee4\u9884\u7f6e\u5728Makefile\u91cc\u9762\u4e86\uff0c\u901a\u8fc7\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"make config"),"\u5373\u53ef\u751f\u6210\u3002\u5b83\u5b9e\u9645\u4e0a\u662f\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"protoc"),"\u5de5\u5177\uff0c\u626b\u63cfinternal\u76ee\u5f55\u4e0b\u7684proto\u6587\u4ef6\u8fdb\u884c\u751f\u6210\u3002"),(0,a.kt)("h4",{id:"3\u4f7f\u7528protobuf\u5b9a\u4e49\u914d\u7f6e"},"3.\u4f7f\u7528Protobuf\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("p",null,"\u6b63\u5982\u524d\u6587\u6240\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u76f4\u63a5\u7528struct\u6765\u5b9a\u4e49\u914d\u7f6e\u7ed3\u6784\u8fdb\u884c\u89e3\u6790\u3002\u4f46\u60a8\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c\u6211\u4eec\u7684\u6700\u4f73\u5b9e\u8df5\u9879\u76ee\u6a21\u677fkratos-layout\u4e2d\u91c7\u7528\u4e86Protobuf\u6765\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u7684\u7ed3\u6784\u3002\u901a\u8fc7Protobuf\u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u540c\u65f6\u652f\u6301\u591a\u79cd\u683c\u5f0f\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"xml"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"yaml"),"\u7b49\u591a\u79cd\u914d\u7f6e\u683c\u5f0f\u7edf\u4e00\u89e3\u6790\uff0c\u8fd9\u6837\u5728\u8bfb\u914d\u7f6e\u65f6\u4f1a\u53d8\u5f97\u975e\u5e38\u65b9\u4fbf\u3002"),(0,a.kt)("p",null,"layout\u4e2d\u4f7f\u7528\u4e86\u5982\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},".proto"),"\u6587\u4ef6\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u7684\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage kratos.api;\n\noption go_package = "github.com/go-kratos/kratos-layout/internal/conf;conf";\n\nimport "google/protobuf/duration.proto";\n\nmessage Bootstrap {\n  Server server = 1;\n}\n\nmessage Server {\n  message HTTP {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration timeout = 3;\n  }\n  message GRPC {\n    string network = 1;\n    string addr = 2;\n    google.protobuf.Duration timeout = 3;\n  }\n  HTTP http = 1;\n  GRPC grpc = 2;\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0cProtobuf\u7684\u5b9a\u4e49\u7ed3\u6784\u6e05\u6670\uff0c\u5e76\u4e14\u53ef\u4ee5\u6307\u5b9a\u5b57\u6bb5\u7684\u7c7b\u578b\uff0c\u8fd9\u5728\u540e\u7eed\u7684\u914d\u7f6e\u6587\u4ef6\u89e3\u6790\u4e2d\u53ef\u4ee5\u8d77\u5230\u6821\u9a8c\u7684\u4f5c\u7528\uff0c\u4fdd\u8bc1\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u7684\u6709\u6548\u6027\u3002"),(0,a.kt)("p",null,"\u5728\u5b9a\u4e49\u597d\u7ed3\u6784\u540e\uff0c\u6211\u4eec\u9700\u8981\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"protoc"),"\u5de5\u5177\u6765\u751f\u6210\u5bf9\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"p"},".pb.go"),"\u4ee3\u7801\uff0c\u4e5f\u5c31\u662f\u76f8\u5e94\u7684Go struct\u548c\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316\u4ee3\u7801\uff0c\u4f9b\u6211\u4eec\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),(0,a.kt)("h4",{id:"1\u5b9a\u4e49"},"1.\u5b9a\u4e49"),(0,a.kt)("p",null,"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"internal/conf/config.proto"),"\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u5728\u8fd9\u91cc\u4f7f\u7528Protobuf IDL\u5b9a\u4e49\u4f60\u914d\u7f6e\u6587\u4ef6\u7684\u7ed3\u6784\u3002\u60a8\u4e5f\u53ef\u4ee5\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u521b\u5efa\u65b0\u7684proto\u6587\u4ef6\u6765\u5b9a\u4e49\u989d\u5916\u7684\u914d\u7f6e\u683c\u5f0f\u3002"),(0,a.kt)("h4",{id:"2\u751f\u6210"},"2.\u751f\u6210"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5373\u53ef\u751f\u6210\u7528\u6765\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u7684\u7ed3\u6784\u4f53\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make config\n")),(0,a.kt)("p",null,"\u6267\u884c\u6210\u529f\u540e\uff0c\u60a8\u5e94\u8be5\u80fd\u770b\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"config.pb.go"),"\u751f\u6210\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"config.proto"),"\u6587\u4ef6\u7684\u65c1\u8fb9\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528\u91cc\u9762\u7684\u7ed3\u6784\u4f53\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"Bootstrap"),"\u6765\u8bfb\u53d6\u60a8\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h4",{id:"3\u4f7f\u7528"},"3.\u4f7f\u7528"),(0,a.kt)("p",null,"\u8bfb\u53d6\u914d\u7f6e\u9879\u3001\u76d1\u542c\u914d\u7f6e\u53d8\u66f4\u548c\u5176\u5b83\u9ad8\u7ea7\u7528\u6cd5\u7b49\u4f7f\u7528\u65b9\u9762\u7684\u5185\u5bb9\uff0c\u4e0e\u524d\u6587\u4ecb\u7ecd\u7684\u4e00\u81f4\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,a.kt)("h2",{id:"\u6269\u5c55\u9605\u8bfb"},"\u6269\u5c55\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/examples/tree/main/config"},"config example")," \u6837\u4f8b\u4ee3\u7801")))}s.isMDXComponent=!0}}]);