"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5178],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6071:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=o(3117),r=(o(7294),o(3905));const a={id:"api",title:"API Definition",description:"Kratos implements REST and gRPC as the transport protocols. We mainly follow the [API Design Guide](https://cloud.google.com/apis/design/) from Google. You could define REST API and gRPC API in proto files and generate Go codes from these files.",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,l={unversionedId:"component/api",id:"component/api",title:"API Definition",description:"Kratos implements REST and gRPC as the transport protocols. We mainly follow the [API Design Guide](https://cloud.google.com/apis/design/) from Google. You could define REST API and gRPC API in proto files and generate Go codes from these files.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/01-api.md",sourceDirName:"component",slug:"/component/api",permalink:"/en/docs/component/api",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/01-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"api",title:"API Definition",description:"Kratos implements REST and gRPC as the transport protocols. We mainly follow the [API Design Guide](https://cloud.google.com/apis/design/) from Google. You could define REST API and gRPC API in proto files and generate Go codes from these files.",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u6846\u67b6\u7ec4\u4ef6",permalink:"/en/docs/category/\u6846\u67b6\u7ec4\u4ef6"},next:{title:"Configuration",permalink:"/en/docs/component/config"}},s={},p=[{value:"API Definition",id:"api-definition",level:2},{value:"API Generation",id:"api-generation",level:2},{value:"API Register",id:"api-register",level:2},{value:"References",id:"references",level:2}],c={toc:p};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kratos implements REST and gRPC as the transport protocols. We mainly follow the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/apis/design/"},"API Design Guide")," from Google."),(0,r.kt)("p",null,"You could define REST API and gRPC API in proto files and generate Go codes from these files. "),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("p",null,"You could define REST API and gRPC API in Protobuf IDL."),(0,r.kt)("p",null,"api/helloworld/v1/greeter.proto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage helloworld.v1;\n\nimport "google/api/annotations.proto";\n\noption go_package = "github.com/go-kratos/service-layout/api/helloworld/v1;v1";\noption java_multiple_files = true;\noption java_package = "dev.kratos.api.helloworld.v1";\noption java_outer_classname = "HelloWorldProtoV1";\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply)  {\n    option (google.api.http) = {\n        // To define GET API, map name to HelloRequest\n        get: "/helloworld/{name}",\n        // You could also add some additional APIs\n        additional_bindings {\n            // To define POST API, map body to HelloRequest\n            post: "/v1/greeter/say_hello",\n            body: "*",\n        }\n    };\n  }\n}\n\n// The request message contains the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message contains the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,r.kt)("h2",{id:"api-generation"},"API Generation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# To generate proto template\nkratos proto add api/helloworld/v1/greeter.proto\n# To generate client codes\nkratos proto client api/helloworld/v1/greeter.proto\n# To generate server codes\nkratos proto server api/helloworld/v1/greeter.proto -t internal/service\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-api"},"client:\n|____api\n| |____helloworld\n| | |____v1\n| | | |____greeter.pb.go\n| | | |____greeter.proto\n| | | |____greeter_http.pb.go\n| | | |____greeter_grpc.pb.go\n\nserver:\n| |____service\n| | |____greeter.go\n")),(0,r.kt)("h2",{id:"api-register"},"API Register"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP API")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"http.Handler"),", which is generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc-gen-go-http")," plugin, can be registered into HTTP Server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/transport/http"\n\ngreeter := &GreeterService{}\nsrv := http.NewServer(http.Address(":8000"))\nsrv.HandlePrefix("/", v1.NewGreeterHandler(greeter))\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"gRPC API")," is a gRPC Register, which is generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc-gen-go-grpc")," plugin, can be registered into GRPC Server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/transport/grpc"\n\ngreeter := &GreeterService{}\nsrv := grpc.NewServer(grpc.Address(":9000"))\nv1.RegisterGreeterServer(srv, greeter)\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/apis/design"},"https://cloud.google.com/apis/design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/endpoints/docs/grpc/transcoding"},"https://cloud.google.com/endpoints/docs/grpc/transcoding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/googleapis/googleapis"},"https://github.com/googleapis/googleapis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go-kratos.dev/docs/guide/api-protobuf/"},"https://go-kratos.dev/docs/guide/api-protobuf/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/style"},"https://developers.google.com/protocol-buffers/docs/style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"https://developers.google.com/protocol-buffers/docs/proto3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://colobu.com/2017/03/16/Protobuf3-language-guide/"},"https://colobu.com/2017/03/16/Protobuf3-language-guide/"))))}g.isMDXComponent=!0}}]);