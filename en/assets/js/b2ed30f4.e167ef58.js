"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5216],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||l[p]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8858:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return l},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var o=n(3117),r=(n(7294),n(3905));const i={id:"documentation",title:"Documentation Guide",description:"Documentation Guide",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},a=void 0,u={unversionedId:"community/documentation",id:"community/documentation",title:"Documentation Guide",description:"Documentation Guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/community/02-documentation.md",sourceDirName:"community",slug:"/community/documentation",permalink:"/en/docs/community/documentation",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/community/02-documentation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"documentation",title:"Documentation Guide",description:"Documentation Guide",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Contribution Guide",permalink:"/en/docs/community/contribution"},next:{title:"core contributors",permalink:"/en/docs/community/contributors"}},s={},c=[{value:"Add/modify Documents",id:"addmodify-documents",level:2},{value:"Modify the sidebar",id:"modify-the-sidebar",level:2},{value:"Document translation",id:"document-translation",level:2},{value:"Document Specification",id:"document-specification",level:2}],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document is maintained in the repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/go-kratos.dev"},"go-kratos/go-kratos.dev")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"docusaurus")," as a document system. When repository content is updated, Github Actions will be automatically triggered to build and deploy documents."),(0,r.kt)("h2",{id:"addmodify-documents"},"Add/modify Documents"),(0,r.kt)("p",null,"First fork document repository, and clone to local."),(0,r.kt)("p",null,"You can then add or modify the appropriate documents under the corresponding subdirectory in the docs directory. The document format is Markdown and supports some extended syntax, as well as specifically supported syntax\n",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus: Markdown Features")),(0,r.kt)("p",null,"Note the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subheadings of the body of the document should use a second or lower level of the title, i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"##")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"###")," and so on, to avoid using a level 1 title."),(0,r.kt)("li",{parentName:"ul"},"For other pages within the document, references can be made directly by something like",(0,r.kt)("inlineCode",{parentName:"li"},"[document in a subfolder](subfolder/doc3.md)")),(0,r.kt)("li",{parentName:"ul"},"If you add a new document, follow the instructions below to modify the sidebar so that the document can appear in the sidebar.")),(0,r.kt)("p",null,"After committing to Github, create a Pull Request to the 'main' branch, waiting for merging by the maintenance team."),(0,r.kt)("h2",{id:"modify-the-sidebar"},"Modify the sidebar"),(0,r.kt)("p",null,"The entries for the sidebar are maintained in the file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/go-kratos.dev/blob/main/sidebars.js"},"sidebars.js")," If you need to modify the sidebar, edit this file.\nPut subpath of ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," and doc id into this .json file."),(0,r.kt)("p",null,"Please refer to the specific configuration method of this file ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/sidebar"},"Docusaurus: Sidebar")),(0,r.kt)("h2",{id:"document-translation"},"Document translation"),(0,r.kt)("p",null,"If you want to maintain multilingual translations, clone the document repository to local."),(0,r.kt)("p",null,"The corresponding language directory is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n")," directory, such as the English version in ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n/en/docusaurus-plugin-content-docs/current"),", you can find or create a file corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," directory, note that the id should be the same as the id of the corresponding file in ",(0,r.kt)("inlineCode",{parentName:"p"},"docs"),". Once the appropriate document has been translated, it can be submitted."),(0,r.kt)("p",null,"Please refer to the advanced use of document translation ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/git"},"Docusaurus: i18n - Using git")),(0,r.kt)("h2",{id:"document-specification"},"Document Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The contents remain intact, with functional components fully represented. Simple examples or their links should be attached. Such efforts shall be made to guide the users and offer them answers as they read this materials."),(0,r.kt)("li",{parentName:"ul"},"For code indentation, it needs to set space indent before duplication."),(0,r.kt)("li",{parentName:"ul"},"The hierarchical directory should take the form of ",(0,r.kt)("a",{parentName:"li",href:"https://google.aip.dev/121"},"Google AIP"),"."),(0,r.kt)("li",{parentName:"ul"},"What is lined with the numeral and the English is the Chinese characters with space,more ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sparanoid/chinese-copywriting-guidelines"},"Chinese Copywriting Guidelines"),". For English Content, the punctuation is the next content with space. Recommand to use formatter such as ",(0,r.kt)("strong",{parentName:"li"},"Prettier")," to format."),(0,r.kt)("li",{parentName:"ul"},"Reduce the diff before commit to ease the workload of the auditor."),(0,r.kt)("li",{parentName:"ul"},"It's different to ",(0,r.kt)("strong",{parentName:"li"},"Line separator(EOL)")," in multi-platforms.You can set to ",(0,r.kt)("strong",{parentName:"li"},"End Of Line(EOL)")," config to ",(0,r.kt)("strong",{parentName:"li"},"LF(\\n)")," in editor to prevent a large number of errors in commit."),(0,r.kt)("li",{parentName:"ul"},"Kratos shall begin with a capital letter \u201cK\u201d.")))}l.isMDXComponent=!0}}]);