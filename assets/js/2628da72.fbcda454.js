"use strict";(self.webpackChunkgo_labx_github_io=self.webpackChunkgo_labx_github_io||[]).push([[7719],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||s;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(1163),o=(n(9496),n(9613));const s={},a="Response Body",i={unversionedId:"examples/response_body",id:"examples/response_body",title:"Response Body",description:"In this article, we will explore the various response handling functions available in the Lightning framework. With these functions, we can easily set HTTP responses in a variety of formats, including plain text, JSON, XML, and file downloads. This makes the Lightning framework a powerful tool for building web applications in Go.",source:"@site/docs/examples/response_body.md",sourceDirName:"examples",slug:"/examples/response_body",permalink:"/docs/examples/response_body",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Response Header",permalink:"/docs/examples/response_header"},next:{title:"Custom not found",permalink:"/docs/examples/custom_not_found"}},l={},p=[{value:"Setting Plain Text Responses",id:"setting-plain-text-responses",level:3},{value:"Setting JSON Responses",id:"setting-json-responses",level:3},{value:"Setting XML Responses",id:"setting-xml-responses",level:3},{value:"Serving Files",id:"serving-files",level:3}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"response-body"},"Response Body"),(0,o.kt)("p",null,"In this article, we will explore the various response handling functions available in the Lightning framework. With these functions, we can easily set HTTP responses in a variety of formats, including ",(0,o.kt)("inlineCode",{parentName:"p"},"plain text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"XML"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"file downloads"),". This makes the Lightning framework a powerful tool for building web applications in Go."),(0,o.kt)("h3",{id:"setting-plain-text-responses"},"Setting Plain Text Responses"),(0,o.kt)("p",null,"To set a plain text response, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Text"),' function. This function takes two arguments: the HTTP status code and the text to be returned. For example, the following code sets a plain text response with the message "hello world":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/text", func(ctx *lightning.Context) {\n    ctx.Text(http.StatusOK, "hello world")\n})\n')),(0,o.kt)("h3",{id:"setting-json-responses"},"Setting JSON Responses"),(0,o.kt)("p",null,"To set a JSON response, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.JSON")," function. This function takes two arguments: the HTTP status code and a struct to be serialized as JSON. For example, the following code sets a JSON response with a Person struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Person struct {\n    Name string `xml:"name" json:"name"`\n    Age  int    `xml:"age" json:"age"`\n    City string `xml:"city" json:"city"`\n}\n\napp.Get("/json", func(ctx *lightning.Context) {\n    ctx.JSON(http.StatusOK, &Person{\n        Name: "zhangsan",\n        Age:  20,\n        City: "Hangzhou",\n    })\n})\n')),(0,o.kt)("h3",{id:"setting-xml-responses"},"Setting XML Responses"),(0,o.kt)("p",null,"To set an XML response, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.XML")," function. This function takes two arguments: the HTTP status code and a struct to be serialized as XML. For example, the following code sets an XML response with a Person struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Person struct {\n    Name string `xml:"name" json:"name"`\n    Age  int    `xml:"age" json:"age"`\n    City string `xml:"city" json:"city"`\n}\n\napp.Get("/xml", func(ctx *lightning.Context) {\n    ctx.XML(http.StatusOK, &Person{\n        Name: "zhangsan",\n        Age:  20,\n        City: "Hangzhou",\n    })\n})\n')),(0,o.kt)("h3",{id:"serving-files"},"Serving Files"),(0,o.kt)("p",null,"To serve a file, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.File")," function. This function takes one argument: the path to the file to be served. For example, the following code serves the README.md file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/file", func(ctx *lightning.Context) {\n    err := ctx.File("./README.md")\n    if err != nil {\n        ctx.Fail(-1, err.Error())\n    }\n})\n')))}g.isMDXComponent=!0}}]);