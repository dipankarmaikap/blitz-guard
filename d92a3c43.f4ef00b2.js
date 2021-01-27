(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(3),o=(t(0),t(85));const s={id:"resources",title:"Resources",sidebar_label:"Resources",slug:"/resources"},a={unversionedId:"resources",id:"resources",isDocsHomePage:!1,title:"Resources",description:"The resource is the subject of the action you are performing.",source:"@site/docs/resources.md",slug:"/resources",permalink:"/blitz-guard/docs/resources",editUrl:"https://github.com/ntgussoni/blitz-guard/edit/main/docs/docs/resources.md",version:"current",sidebar_label:"Resources",sidebar:"someSidebar",previous:{title:"Abilities",permalink:"/blitz-guard/docs/abilities"},next:{title:"How to secure your endpoints",permalink:"/blitz-guard/docs/secure-your-endpoints"}},i=[{value:"Extending the resources",id:"extending-the-resources",children:[]},{value:"Prisma users",id:"prisma-users",children:[]}],c={toc:i};function u({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The resource is the subject of the action you are performing.\nOut of the box only ",Object(o.b)("inlineCode",{parentName:"p"},"all")," is present. ",Object(o.b)("strong",{parentName:"p"},"It's special and it will apply to all resources.")),Object(o.b)("h2",{id:"extending-the-resources"},"Extending the resources"),Object(o.b)("p",null,"You can extend the resources easily by passing a tuple to ",Object(o.b)("inlineCode",{parentName:"p"},"GuardBuilder")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"{3}","{3}":!0}),'import { GuardBuilder, PrismaModelsType } from "@blitz-guard/core"\n\ntype ExtendedResourceTypes = "comment" | "article" | "users"\n\nconst Guard = GuardBuilder<ExtendedResourceTypes>(\n    ...\n\n')),Object(o.b)("h2",{id:"prisma-users"},"Prisma users"),Object(o.b)("p",null,"There's a very useful utility function to generate a type based on the model names of your prisma database.\nYou simply need to add ",Object(o.b)("inlineCode",{parentName:"p"},"PrismaModelsType<typeof db>")," as part of your resource types."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"{3}","{3}":!0}),'import { GuardBuilder, PrismaModelsType } from "@blitz-guard/core"\n\ntype ExtendedResourceTypes = PrismaModelsType<typeof db>\n\nconst Guard = GuardBuilder<ExtendedResourceTypes>(\n    ...\n\n')))}u.isMDXComponent=!0},85:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||s;return t?o.a.createElement(m,i(i({ref:r},u),{},{components:t})):o.a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);