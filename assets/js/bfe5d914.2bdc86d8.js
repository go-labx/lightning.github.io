"use strict";(self.webpackChunkgo_labx_github_io=self.webpackChunkgo_labx_github_io||[]).push([[846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},l="compress",a={unversionedId:"middlewares/compress",id:"middlewares/compress",title:"compress",description:"This is a middleware for lightning that provides compression for HTTP responses. It supports four compression algorithms: Brotli, Deflate, Gzip, and Zstd.",source:"@site/docs/middlewares/compress.md",sourceDirName:"middlewares",slug:"/middlewares/compress",permalink:"/docs/middlewares/compress",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"middlewareSidebar",previous:{title:"requestid",permalink:"/docs/middlewares/requestid"},next:{title:"cors",permalink:"/docs/middlewares/cors"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Supported Encodings",id:"supported-encodings",level:2},{value:"API Documentation",id:"api-documentation",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compress"},"compress"),(0,i.kt)("p",null,"This is a middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-labx/lightning"},"lightning")," that provides compression for HTTP responses. It supports four compression algorithms: Brotli, Deflate, Gzip, and Zstd."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install the middleware, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/lightning-contrib/compress\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the middleware, import the package and add it to your lightning middleware chain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/go-labx/lightning"\n    "github.com/lightning-contrib/compress"\n)\n\nfunc main() {\n    app := lightning.NewApp()\n\n    app.Use(compress.Default())\n\n    app.Get("/ping", func(ctx *lightning.Context) {\n        ctx.Text(200, "hello world")\n    })\n\n    app.Run(":6789")\n}\n')),(0,i.kt)("p",null,"By default, the middleware will use the following compression levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brotli: brotli.DefaultCompression"),(0,i.kt)("li",{parentName:"ul"},"Deflate: flate.DefaultCompression"),(0,i.kt)("li",{parentName:"ul"},"Gzip: gzip.DefaultCompression")),(0,i.kt)("p",null,"You can customize the compression levels by passing options to the New function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"app.Use(compress.New(\n    compress.WithBrotliCompressionLevel(6),\n    compress.WithDeflateCompressionLevel(9),\n    compress.WithGzipCompressionLevel(1),\n))\n")),(0,i.kt)("h2",{id:"supported-encodings"},"Supported Encodings"),(0,i.kt)("p",null,"The middleware supports the following encodings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"br (Brotli)"),(0,i.kt)("li",{parentName:"ul"},"deflate (Deflate)"),(0,i.kt)("li",{parentName:"ul"},"gzip (Gzip)"),(0,i.kt)("li",{parentName:"ul"},"zstd (Zstd)")),(0,i.kt)("p",null,"If the client sends a request with an Accept-Encoding header that includes one of these encodings, the middleware will compress the response using the corresponding algorithm."),(0,i.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,i.kt)("p",null,"For detailed API documentation and usage examples, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/lightning-contrib/compress"},"documentation"),"."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"If you'd like to contribute to lightning, please\nsee ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lightning-contrib/compress/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md")," for guidelines."),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"This middleware is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lightning-contrib/compress/blob/main/LICENSE"},"MIT License"),"."))}d.isMDXComponent=!0}}]);