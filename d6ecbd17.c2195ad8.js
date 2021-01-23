(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(84)),o={id:"ability-file",title:"Ability file",sidebar_label:"Ability file",slug:"/ability-file"},c={unversionedId:"ability-file",id:"ability-file",isDocsHomePage:!1,title:"Ability file",description:"This file is the main entrypoint for your rules.",source:"@site/docs/ability-file.md",slug:"/ability-file",permalink:"/docs/ability-file",editUrl:"https://github.com/ntgussoni/blitz-guard/edit/main/docs/docs/ability-file.md",version:"current",sidebar_label:"Ability file",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/"},next:{title:"Abilities",permalink:"/docs/abilities"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This file is the main entrypoint for your rules.\n",Object(a.b)("inlineCode",{parentName:"p"},"app/guard/ability.ts")),Object(a.b)("p",null,"Eg."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { Ctx } from "blitz"\nimport { db } from "db"\nimport { IGuard } from "blitz-guard"\nimport { DeleteCommentInput } from "app/comments/mutations/deleteComments"\n\nexport default async function ability(ctx: Ctx, { can, cannot }: IGuard) {\n  cannot("manage", "comment")\n  cannot("manage", "article")\n\n  can("read", "article")\n  can("read", "comment")\n\n  if (ctx.session.isAuthorized()) {\n    can("create", "article")\n    can("create", "comment")\n\n    can("delete", "comment", async (_args) => {\n      return (await db.comment.count({ where: { userId: ctx.session.userId } })) === 1\n    })\n  }\n}\n')))}s.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||f[m]||a;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);