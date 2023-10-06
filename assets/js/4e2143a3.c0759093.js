"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5026],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(i),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return i?o.createElement(h,c(c({ref:t},p),{},{components:i})):o.createElement(h,c({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,c=new Array(r);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:n,c[1]=a;for(var l=2;l<r;l++)c[l]=i[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2384:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=i(7462),n=(i(7294),i(3905));const r={sidebar_position:0,title:"\ud83d\udcc4 Simple Mic Source"},c="A7 Simple Mic Source",a={unversionedId:"misc/simple-mic-source",id:"misc/simple-mic-source",title:"\ud83d\udcc4 Simple Mic Source",description:"The A7 Simple Mic Source script is currently only distributed as part of Melodi Premium.",source:"@site/docs/misc/simple-mic-source.md",sourceDirName:"misc",slug:"/misc/simple-mic-source",permalink:"/misc/simple-mic-source",draft:!1,editUrl:"https://github.com/AlexxSeven/project-docs/tree/main/docs/misc/simple-mic-source.md",tags:[],version:"current",lastUpdatedAt:1696570215,formattedLastUpdatedAt:"Oct 6, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\ud83d\udcc4 Simple Mic Source"},sidebar:"mainSidebar",previous:{title:"\ud83d\ude36\u200d\ud83c\udf2b\ufe0f Miscellaneous \ud83d\ude36\u200d\ud83c\udf2b\ufe0f",permalink:"/category/miscellaneous"}},s={},l=[{value:"How to add the script:",id:"how-to-add-the-script",level:2},{value:"Configuration options:",id:"configuration-options",level:2},{value:"Audio Clip:",id:"audio-clip",level:3},{value:"Get Device Names:",id:"get-device-names",level:3},{value:"Selected Device:",id:"selected-device",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"a7-simple-mic-source"},"A7 Simple Mic Source"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"A7 Simple Mic Source")," script is currently only distributed as part of ",(0,n.kt)("inlineCode",{parentName:"p"},"Melodi Premium"),".")),(0,n.kt)("p",null,"Simple mic source is a script that does exactly what it says in the name, a simple script to attach an audio input, or mic, to an audio source."),(0,n.kt)("p",null,"This can be useful for testing AudioLink effects without having to import dozens of audio files or fiddle with youtube urls."),(0,n.kt)("h2",{id:"how-to-add-the-script"},"How to add the script:"),(0,n.kt)("p",null,"To add the script to your scene, start by importing the ",(0,n.kt)("inlineCode",{parentName:"p"},"A7 Simple Mic Source")," script to your project. Then, find an existing audio source in your scene, or create an audio source if you don't already have one, then select it from the object hierarchy."),(0,n.kt)("p",null,"Once selected, in your inspector tab attach the script as a component to your audio source."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Attaching the script as a component.",src:i(3459).Z,width:"535",height:"987"}))),'Then, simply type the name of your desired input device into the "selected divice" component option. Below we\'ll discuss how to configure the component.',(0,n.kt)("h2",{id:"configuration-options"},"Configuration options:"),(0,n.kt)("h3",{id:"audio-clip"},"Audio Clip:"),(0,n.kt)("p",null,"The audio clip here is optional. This setting tells unity to play the selected audio clip in the event it fails to hook into the selected microphone source."),(0,n.kt)("h3",{id:"get-device-names"},"Get Device Names:"),(0,n.kt)("p",null,'Checking this box will tell unity to output the device names into the console log whenever play mode is started. This can be used as a way to copy a device name exactly to be pasted in the "selected device" option.'),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example of the log output this option will generate.",src:i(9953).Z,width:"582",height:"126"}))),(0,n.kt)("h3",{id:"selected-device"},"Selected Device:"),(0,n.kt)("p",null,"This text box option tells unity which device to hook into when turning on play mode, it is IMPORTANT that this be typed exactly the same as the device name shows in your system."))}d.isMDXComponent=!0},3459:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/attaching-caca76b274cc97a79510664b164227f7.gif"},9953:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/devicelog-3ffd7db58f6a4ebc5a7dc92aa65ec09a.png"}}]);