"use strict";(self.webpackChunkgo_labx_github_io=self.webpackChunkgo_labx_github_io||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Quickstart",l={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"\ud83d\ude80\ud83d\ude80\ud83d\ude80 lightning is a lightweight and fast web framework for Go. It is designed to be easy to use and highly performant.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Routing",permalink:"/docs/routing"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Additional Features",id:"additional-features",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"\ud83d\ude80\ud83d\ude80\ud83d\ude80 lightning is a lightweight and fast web framework for Go. It is designed to be easy to use and highly performant."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go 1.19 or above")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Once you have installed Go, you can install ",(0,i.kt)("inlineCode",{parentName:"p"},"lightning")," using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/go-labx/lightning\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To start building your web application, create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go")," and add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/go-labx/lightning"\n    "net/http"\n)\n\nfunc main() {\n    app := lightning.DefaultApp()\n\n    app.Get("/ping", func(ctx *lightning.Context) {\n        ctx.JSON(http.StatusOK, map[string]string{\n            "message": "pong",\n        })\n    })\n\n    app.Run(":6789")\n}\n')),(0,i.kt)("p",null,'In this example, we have created a simple web application that serves a JSON response at the URL ("/ping").'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"lightning.DefaultApp()")," function initializes a new instance of the framework."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"app.Get()")," function defines a new route that responds to HTTP GET requests at the specified URL."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx.JSON()")," function is used to send a JSON response to the client.")),(0,i.kt)("h2",{id:"running-the-application"},"Running the Application"),(0,i.kt)("p",null,"To run the application, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go run app.go\n")),(0,i.kt)("h2",{id:"additional-features"},"Additional Features"),(0,i.kt)("p",null,"The go ",(0,i.kt)("inlineCode",{parentName:"p"},"lightning")," framework has many additional features that make it a powerful tool for developing web applications, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfa8 Built-in JSON and HTML rendering"),(0,i.kt)("li",{parentName:"ul"},"\u26a1 Fast routing, with routing algorithm implemented based on Trie tree"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udd25 Support for grouping routes and applying middleware to specific groups"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd Supports middleware, include global scope and route socpe middleware"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude80 Customizable 404 Not Found and 500 Internal Server Error handler functions"),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf89 And much more!")),(0,i.kt)("p",null,"To learn more about these features and how to use them, check out the official go ",(0,i.kt)("inlineCode",{parentName:"p"},"lightning")," framework documentation."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"With this basic example and additional features, you can begin exploring the go ",(0,i.kt)("inlineCode",{parentName:"p"},"lightning")," framework and building your own web applications."),(0,i.kt)("p",null,"\ud83c\udf89 \ud83c\udf89 \ud83c\udf89 Happy coding!"))}d.isMDXComponent=!0}}]);