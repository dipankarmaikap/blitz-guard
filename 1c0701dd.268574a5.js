(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(84)),i={id:"middleware",title:"Middleware",sidebar_label:"Middleware",slug:"/middleware"},c={unversionedId:"middleware",id:"middleware",isDocsHomePage:!1,title:"Middleware",description:"In order to aid your development, you can add a middleware to your blitz.config.js that will throw a warning in the console whenever you access an endpoint that is not protected by blitz guard.",source:"@site/docs/middleware.md",slug:"/middleware",permalink:"/docs/middleware",editUrl:"https://github.com/ntgussoni/blitz-guard/edit/main/docs/docs/middleware.md",version:"current",sidebar_label:"Middleware",sidebar:"someSidebar",previous:{title:"useGuard Hook",permalink:"/docs/use-guard-hook"}},d=[],l={toc:d};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to aid your development, you can add a middleware to your ",Object(o.b)("inlineCode",{parentName:"p"},"blitz.config.js")," that will throw a warning in the console whenever you access an endpoint that is not protected by blitz guard."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE"),": Only enabled in development"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'const { BlitzGuardMiddleware } = require("blitz-guard/dist/middleware.js")\n\nmodule.exports = {\n  middleware: [\n    ...BlitzGuardMiddleware({\n      excluded: [],\n    }),\n  ],\n}\n')),Object(o.b)("p",null,"If you don't want to be warned about certain api routes, you can pass an array of excluded routes."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'...\nBlitzGuardMiddleware({\n    excluded: ["/api/auth/mutations/login", "/api/auth/mutations/logout"],\n}),\n...\n')))}u.isMDXComponent=!0},84:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||s[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);