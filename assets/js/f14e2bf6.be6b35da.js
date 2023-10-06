"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=d(n),u=l,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const o={slug:"melodi-change-v1-1-5",title:"Melodi Unlit & Premium Changelog (v1.1.5)",authors:"alexxseven",tags:["Shaders","Melodi","Changelogs"]},i=void 0,r={permalink:"/blog/melodi-change-v1-1-5",source:"@site/blog/melodicl/2023-6-14-melodi-change-v1-1-5.md",title:"Melodi Unlit & Premium Changelog (v1.1.5)",description:"(\u2b50) = Premium only change.",date:"2023-06-14T00:00:00.000Z",formattedDate:"June 14, 2023",tags:[{label:"Shaders",permalink:"/blog/tags/shaders"},{label:"Melodi",permalink:"/blog/tags/melodi"},{label:"Changelogs",permalink:"/blog/tags/changelogs"}],readingTime:1.71,hasTruncateMarker:!1,authors:[{name:"AlexxSeven",title:"Local Potato",url:"https://alexxseven.com/",imageURL:"https://github.com/AlexxSeven.png",key:"alexxseven"}],frontMatter:{slug:"melodi-change-v1-1-5",title:"Melodi Unlit & Premium Changelog (v1.1.5)",authors:"alexxseven",tags:["Shaders","Melodi","Changelogs"]},prevItem:{title:"Melodi Unlit & Premium Changelog (v1.1.6)",permalink:"/blog/melodi-change-v1-1-6"}},s={authorsImageUrls:[void 0]},d=[{value:"Major Changes:",id:"major-changes",level:2},{value:"Minor Changes:",id:"minor-changes",level:2},{value:"Additions:",id:"additions",level:2}],m={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Legend",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"(\u2b50) = Premium only change.",(0,l.kt)("br",{parentName:"p"}),"\n","(\ud83c\udd93) = Free only change.")),(0,l.kt)("h2",{id:"major-changes"},"Major Changes:"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed normal calculation when Diffuse Distortion is disabled."),(0,l.kt)("li",{parentName:"ul"},"Changed Fresnel Mask to ",(0,l.kt)("inlineCode",{parentName:"li"},"Texture Packer")," type."),(0,l.kt)("li",{parentName:"ul"},"Fixed distortion map blending across the shader."),(0,l.kt)("li",{parentName:"ul"},"Improved glow calculations and fixed some bad math."),(0,l.kt)("li",{parentName:"ul"},"(\ud83c\udd93) Fixed alpha mode not properly changing"),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Changed screenspace calculations and added ",(0,l.kt)("inlineCode",{parentName:"li"},"Object bound")," screenspace mode."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Fixed bad math and parameter flow for emissive alt color. (Fixes Alt color not working if audiolink wasn't installed)")),(0,l.kt)("h2",{id:"minor-changes"},"Minor Changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reorganized formulas for trail mask feature."),(0,l.kt)("li",{parentName:"ul"},"Moved Audiolink Debug into its own category so multiple materials can have it linked together. ",(0,l.kt)("a",{parentName:"li",href:"https://i.imgur.com/f1L1NAr.mp4"},"Example")),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("inlineCode",{parentName:"li"},"Custom Colors")," toggle to not hide if main color is being overridden."),(0,l.kt)("li",{parentName:"ul"},"Fixed missing help boxes that explained the color options under ",(0,l.kt)("inlineCode",{parentName:"li"},"Fresnel Parameters > Color Options.")),(0,l.kt)("li",{parentName:"ul"},"Reworked flow of the alt color function. (fixes AL fallback color on all alt color options.)"),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Fixed missing help boxes that explained the color options under ",(0,l.kt)("inlineCode",{parentName:"li"},"Emissive Adv Parameters > Emissive Alt Color."))),(0,l.kt)("h2",{id:"additions"},"Additions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added ",(0,l.kt)("inlineCode",{parentName:"li"},"ZTest Mode")," control under shader options menu."),(0,l.kt)("li",{parentName:"ul"},"Added ",(0,l.kt)("inlineCode",{parentName:"li"},"Preview Type")," control under the shader options menu."),(0,l.kt)("li",{parentName:"ul"},"Added a warning to the main area when Audiolink is debug-disabled in the shader."),(0,l.kt)("li",{parentName:"ul"},"Added a ",(0,l.kt)("inlineCode",{parentName:"li"},"_Color")," option to all features that allow selecting an alt color. This allows sampling/using the CC as an alt color."),(0,l.kt)("li",{parentName:"ul"},"Added a ",(0,l.kt)("inlineCode",{parentName:"li"},"Smooth Waves")," toggle to all wave mask settings."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Added experimental Physically Based Lit mode."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Added glow bypass toggle to Trail Mask."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Added a ",(0,l.kt)("inlineCode",{parentName:"li"},"Use Main Color")," option to ",(0,l.kt)("inlineCode",{parentName:"li"},"Emissive Adv Parameters > Emissive Alt Color")),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Added a ",(0,l.kt)("inlineCode",{parentName:"li"},"Blend Env Lights")," toggle to Physically lit mode to reflect map lighting on objects. (Thanks to some code from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kaitlyndotmoe"},"Kaitlyn"),"!)")))}c.isMDXComponent=!0}}]);