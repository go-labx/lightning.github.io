"use strict";(self.webpackChunkgo_labx_docs=self.webpackChunkgo_labx_docs||[]).push([[825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,k=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?r.createElement(k,s(s({ref:t},d),{},{components:n})):r.createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},s="Context",o={unversionedId:"context",id:"context",title:"Context",description:"The Context struct in the lightning represents the context of an HTTP request / response. It contains information about the request and response, as well as methods for manipulating them.",source:"@site/docs/context.md",sourceDirName:".",slug:"/context",permalink:"/docs/context",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/middleware"},next:{title:"Contextual data",permalink:"/docs/examples/contextual-data"}},l={},c=[{value:"Request",id:"request",level:2},{value:"ctx.Param(key string)",id:"ctxparamkey-string",level:3},{value:"ctx.Params()",id:"ctxparams",level:3},{value:"ctx.Query(key string)",id:"ctxquerykey-string",level:3},{value:"ctx.Queries()",id:"ctxqueries",level:3},{value:"ctx.RawBody()",id:"ctxrawbody",level:3},{value:"ctx.StringBody()",id:"ctxstringbody",level:3},{value:"ctx.JSONBody(v interface{})",id:"ctxjsonbodyv-interface",level:3},{value:"ctx.Header(key string)",id:"ctxheaderkey-string",level:3},{value:"ctx.Headers()",id:"ctxheaders",level:3},{value:"ctx.Cookie(name string)",id:"ctxcookiename-string",level:3},{value:"ctx.Cookies()",id:"ctxcookies",level:3},{value:"ctx.UserAgent()",id:"ctxuseragent",level:3},{value:"ctx.Referer()",id:"ctxreferer",level:3},{value:"ctx.RemoteAddr()",id:"ctxremoteaddr",level:3},{value:"Response",id:"response",level:2},{value:"ctx.Status()",id:"ctxstatus",level:3},{value:"ctx.SetStatus(code int)",id:"ctxsetstatuscode-int",level:3},{value:"ctx.AddHeader(key string, value string)",id:"ctxaddheaderkey-string-value-string",level:3},{value:"ctx.SetHeader(key string, value string)",id:"ctxsetheaderkey-string-value-string",level:3},{value:"ctx.DelHeader(key string)",id:"ctxdelheaderkey-string",level:3},{value:"ctx.SetCookie(key string, value string)",id:"ctxsetcookiekey-string-value-string",level:3},{value:"ctx.SetCustomCookie(cookie *http.Cookie)",id:"ctxsetcustomcookiecookie-httpcookie",level:3},{value:"ctx.JSON(code int, obj interface{})",id:"ctxjsoncode-int-obj-interface",level:3},{value:"ctx.Text(code int, text string)",id:"ctxtextcode-int-text-string",level:3},{value:"ctx.XML(code int, obj interface{})",id:"ctxxmlcode-int-obj-interface",level:3},{value:"ctx.File(filepath string)",id:"ctxfilefilepath-string",level:3},{value:"ctx.Redirect(code int, url string)",id:"ctxredirectcode-int-url-string",level:3},{value:"ctx.Success(data interface{})",id:"ctxsuccessdata-interface",level:3},{value:"ctx.Fail(code int, msg string)",id:"ctxfailcode-int-msg-string",level:3},{value:"Contextual Data",id:"contextual-data",level:2},{value:"GetData(key string)",id:"getdatakey-string",level:3},{value:"SetData(key string, value interface{})",id:"setdatakey-string-value-interface",level:3},{value:"DelData(key string)",id:"deldatakey-string",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context"},"Context"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Context struct in the lightning represents the context of an HTTP request / response.")," It contains information about the request and response, as well as methods for manipulating them."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,"The Request of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Lightning")," framework's Context struct provides various methods for accessing and manipulating the HTTP request data. These methods allow developers to retrieve the raw request body or parse it as JSON, access URL parameters and query parameters, and access the HTTP method and URL path of the request."),(0,a.kt)("p",null,"It contains the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.Method"),": the HTTP method of the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.Path"),": the URL path of the request")),(0,a.kt)("p",null,"In addition to these fields, the Request also provides the following methods:"),(0,a.kt)("h3",{id:"ctxparamkey-string"},"ctx.Param(key string)"),(0,a.kt)("p",null,"returns the value of a URL parameter for a given key."),(0,a.kt)("h3",{id:"ctxparams"},"ctx.Params()"),(0,a.kt)("p",null,"returns all URL parameters for the reqest."),(0,a.kt)("h3",{id:"ctxquerykey-string"},"ctx.Query(key string)"),(0,a.kt)("p",null,"returns the value of a given query parameter."),(0,a.kt)("h3",{id:"ctxqueries"},"ctx.Queries()"),(0,a.kt)("p",null,"returns all query parameters for the reqest."),(0,a.kt)("h3",{id:"ctxrawbody"},"ctx.RawBody()"),(0,a.kt)("p",null,"returns the raw origin request body."),(0,a.kt)("h3",{id:"ctxstringbody"},"ctx.StringBody()"),(0,a.kt)("p",null,"returns the origin request body as a string."),(0,a.kt)("h3",{id:"ctxjsonbodyv-interface"},"ctx.JSONBody(v interface{})"),(0,a.kt)("p",null,"parses the origin request body as JSON and stores the result in v."),(0,a.kt)("h3",{id:"ctxheaderkey-string"},"ctx.Header(key string)"),(0,a.kt)("p",null,"returns the value of a given header."),(0,a.kt)("h3",{id:"ctxheaders"},"ctx.Headers()"),(0,a.kt)("p",null,"returns all headers for the request"),(0,a.kt)("h3",{id:"ctxcookiename-string"},"ctx.Cookie(name string)"),(0,a.kt)("p",null,"returns the cookie with the given name."),(0,a.kt)("h3",{id:"ctxcookies"},"ctx.Cookies()"),(0,a.kt)("p",null,"returns all cookies from the request."),(0,a.kt)("h3",{id:"ctxuseragent"},"ctx.UserAgent()"),(0,a.kt)("p",null,"returns the user-agent of the request."),(0,a.kt)("h3",{id:"ctxreferer"},"ctx.Referer()"),(0,a.kt)("p",null,"returns the referer of the request."),(0,a.kt)("h3",{id:"ctxremoteaddr"},"ctx.RemoteAddr()"),(0,a.kt)("p",null,"returns the remote address of the request."),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"ctxstatus"},"ctx.Status()"),(0,a.kt)("p",null,"returns the HTTP status code of the response."),(0,a.kt)("h3",{id:"ctxsetstatuscode-int"},"ctx.SetStatus(code int)"),(0,a.kt)("p",null,"sets the HTTP status code for the response."),(0,a.kt)("h3",{id:"ctxaddheaderkey-string-value-string"},"ctx.AddHeader(key string, value string)"),(0,a.kt)("p",null,"adds a new header key-value pair to the response."),(0,a.kt)("h3",{id:"ctxsetheaderkey-string-value-string"},"ctx.SetHeader(key string, value string)"),(0,a.kt)("p",null,"sets the value of a given header in the response."),(0,a.kt)("h3",{id:"ctxdelheaderkey-string"},"ctx.DelHeader(key string)"),(0,a.kt)("p",null,"deletes a given header from the response."),(0,a.kt)("h3",{id:"ctxsetcookiekey-string-value-string"},"ctx.SetCookie(key string, value string)"),(0,a.kt)("p",null,"sets a new cookie with the given key-value pair."),(0,a.kt)("h3",{id:"ctxsetcustomcookiecookie-httpcookie"},"ctx.SetCustomCookie(cookie ","*","http.Cookie)"),(0,a.kt)("p",null,"sets a custom cookie in the response."),(0,a.kt)("h3",{id:"ctxjsoncode-int-obj-interface"},"ctx.JSON(code int, obj interface{})"),(0,a.kt)("p",null,"writes a JSON response with the given status code and object."),(0,a.kt)("h3",{id:"ctxtextcode-int-text-string"},"ctx.Text(code int, text string)"),(0,a.kt)("p",null,"writes a plain text response with the given status code and format."),(0,a.kt)("h3",{id:"ctxxmlcode-int-obj-interface"},"ctx.XML(code int, obj interface{})"),(0,a.kt)("p",null,"writes an XML response with the given status code and object."),(0,a.kt)("h3",{id:"ctxfilefilepath-string"},"ctx.File(filepath string)"),(0,a.kt)("p",null,"writes a file as the response."),(0,a.kt)("h3",{id:"ctxredirectcode-int-url-string"},"ctx.Redirect(code int, url string)"),(0,a.kt)("p",null,"redirects the request to a new URL with the given status code."),(0,a.kt)("h3",{id:"ctxsuccessdata-interface"},"ctx.Success(data interface{})"),(0,a.kt)("p",null,"writes a successful response with the given data."),(0,a.kt)("h3",{id:"ctxfailcode-int-msg-string"},"ctx.Fail(code int, msg string)"),(0,a.kt)("p",null,"writes a failed response with the given code and message."),(0,a.kt)("h2",{id:"contextual-data"},"Contextual Data"),(0,a.kt)("p",null,"Contextual Data in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Lightning")," framework is used to store custom data fields that can be accessed throughout the middleware chain, which can be passed along the entire middleware chain. The Contextual Data component includes the following methods:"),(0,a.kt)("h3",{id:"getdatakey-string"},"GetData(key string)"),(0,a.kt)("p",null,"Returns the value of a custom data field for the context."),(0,a.kt)("h3",{id:"setdatakey-string-value-interface"},"SetData(key string, value interface{})"),(0,a.kt)("p",null,"Sets the value of a custom data field for the context."),(0,a.kt)("h3",{id:"deldatakey-string"},"DelData(key string)"),(0,a.kt)("p",null,"Deletes a custom data field from the context."),(0,a.kt)("p",null,"By using the Context struct and its components, developers can easily manage the state of an HTTP request/response throughout the middleware chain."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In summary, the Context struct and its components are essential to building web applications in Go with the Lightning framework. Understanding how to use the Request, Response, and Contextual Data components enables developers to build more robust and flexible web applications."))}h.isMDXComponent=!0}}]);