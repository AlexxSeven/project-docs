"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={slug:"glassref-change-latest",title:"Glass Refraction Changelog (v1.2)",authors:"alexxseven",tags:["Shaders","Glass Refraction","Changelogs"]},o=void 0,i={permalink:"/changelogs/glassref-change-latest",source:"@site/changelogs/glassrefcl/2023-10-17-glassref-change-v1-2.md",title:"Glass Refraction Changelog (v1.2)",description:"Glass refraction is a premium only shader.",date:"2023-10-17T00:00:00.000Z",formattedDate:"October 17, 2023",tags:[{label:"Shaders",permalink:"/changelogs/tags/shaders"},{label:"Glass Refraction",permalink:"/changelogs/tags/glass-refraction"},{label:"Changelogs",permalink:"/changelogs/tags/changelogs"}],readingTime:.47,hasTruncateMarker:!1,authors:[{name:"AlexxSeven",title:"Local Potato",url:"https://alexxseven.com/",imageURL:"https://github.com/AlexxSeven.png",key:"alexxseven"}],frontMatter:{slug:"glassref-change-latest",title:"Glass Refraction Changelog (v1.2)",authors:"alexxseven",tags:["Shaders","Glass Refraction","Changelogs"]},nextItem:{title:"Melodi Unlit & Premium Changelog (v1.2.1)",permalink:"/changelogs/melodi-change-latest"}},s={authorsImageUrls:[void 0]},c=[{value:"Minor Changes:",id:"minor-changes",level:2},{value:"Additions:",id:"additions",level:2},{value:"Extra:",id:"extra",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Glass refraction is a premium only shader.")),(0,a.kt)("h2",{id:"minor-changes"},"Minor Changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Moved ZWrite Depth to ",(0,a.kt)("inlineCode",{parentName:"li"},"Shader Options")," menu."),(0,a.kt)("li",{parentName:"ul"},"Moved ZTest Mode to ",(0,a.kt)("inlineCode",{parentName:"li"},"Shader Options")," menu."),(0,a.kt)("li",{parentName:"ul"},"Moved ",(0,a.kt)("inlineCode",{parentName:"li"},"Custom Colors Override")," menu below the glow.")),(0,a.kt)("h2",{id:"additions"},"Additions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Shader Options")," submenu."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Cull Mode")," option under ",(0,a.kt)("inlineCode",{parentName:"li"},"Shader Options"),"."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Bloom & Height Fog")," options to support BeatSaber bloomfog."),(0,a.kt)("li",{parentName:"ul"},"Added Stencil options under ",(0,a.kt)("inlineCode",{parentName:"li"},"Shader Options > Stencil Options"),"."),(0,a.kt)("li",{parentName:"ul"},"Added Thry version checks and warnings for extremely outdated and/or missing installs.")),(0,a.kt)("h2",{id:"extra"},"Extra:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated packaged thry editor version.")))}u.isMDXComponent=!0}}]);