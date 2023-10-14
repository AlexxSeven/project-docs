"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3180],{1547:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var n=t(7462),l=(t(7294),t(3905)),i=t(5457),o=t.n(i);const s={slug:"melodi-change-latest",title:"Melodi Unlit & Premium Changelog (v1.2.1)",authors:"alexxseven",tags:["Shaders","Melodi","Changelogs"]},r=void 0,m={permalink:"/changelogs/melodi-change-latest",source:"@site/changelogs/melodicl/2023-10-14-melodi-change-v1-2-1 copy.md",title:"Melodi Unlit & Premium Changelog (v1.2.1)",description:"This is a smol bugfix update to 1.2.0 that was urgently needed, to see the longer list of changes in 1.2.0 check out this post.",date:"2023-10-14T00:00:00.000Z",formattedDate:"October 14, 2023",tags:[{label:"Shaders",permalink:"/changelogs/tags/shaders"},{label:"Melodi",permalink:"/changelogs/tags/melodi"},{label:"Changelogs",permalink:"/changelogs/tags/changelogs"}],readingTime:1.45,hasTruncateMarker:!0,authors:[{name:"AlexxSeven",title:"Local Potato",url:"https://alexxseven.com/",imageURL:"https://github.com/AlexxSeven.png",key:"alexxseven"}],frontMatter:{slug:"melodi-change-latest",title:"Melodi Unlit & Premium Changelog (v1.2.1)",authors:"alexxseven",tags:["Shaders","Melodi","Changelogs"]},nextItem:{title:"Melodi Unlit & Premium Changelog (v1.2.0)",permalink:"/changelogs/melodi-change-v1-20-0"}},p={authorsImageUrls:[void 0]},d=[{value:"Major Changes:",id:"major-changes",level:2},{value:"Minor Changes:",id:"minor-changes",level:2},{value:"Removals:",id:"removals",level:2},{value:"(\u2b50) Preview:",id:"-preview",level:2}],c={toc:d},u="wrapper";function h(e){let{components:a,...t}=e;return(0,l.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is a smol bugfix update to 1.2.0 that was urgently needed, to see the longer list of changes in 1.2.0 check out ",(0,l.kt)("a",{parentName:"p",href:"/blog/melodi-change-v1-20-0"},"this post"),"."),(0,l.kt)("admonition",{title:"Legend",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"(\u2b50) = Premium only change.",(0,l.kt)("br",{parentName:"p"}),"\n","(\ud83c\udd93) = Free only change.")),(0,l.kt)("h2",{id:"major-changes"},"Major Changes:"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Fixed an issue where albedo texture was not being calculated into specular color properly."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Reworked specular math to be more in line with a metallic workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"(\u2b50) ",(0,l.kt)("inlineCode",{parentName:"li"},"Smoothness + Mask")," was moved and split, replacing the functions of ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Map")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Amount"),","))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"(\u2b50) ",(0,l.kt)("inlineCode",{parentName:"li"},"Metallic + Mask")," replaced what was ",(0,l.kt)("inlineCode",{parentName:"li"},"Smoothness + Mask")," and offers better metallic support (albedo color). ")))),(0,l.kt)("h2",{id:"minor-changes"},"Minor Changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed an issue with static branching and audio link UV effects."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Fixed an issue with the AO texture rollout not having a map channel selector."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Renamed ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Texture Settings")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Settings"),"."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Renamed ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Map")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"Roughness Map")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Settings"),"."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Renamed ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Amount")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"Smoothness")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Settings"),"."),(0,l.kt)("li",{parentName:"ul"},"(\u2b50) Renamed ",(0,l.kt)("inlineCode",{parentName:"li"},"Smoothness + Mask")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"Metallic + Mask")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Specular Settings"),".")),(0,l.kt)("h2",{id:"removals"},"Removals:"),(0,l.kt)("admonition",{title:"NOTICE!",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"A7-SimpleMicSource.cs is no longer included as part of the melodi premium package. The script is now open sourced, and MIT licensed. non subscribers can find out how to obtain and use them in ",(0,l.kt)("a",{parentName:"p",href:"/category/miscellaneous"},"the documentation"),"."),(0,l.kt)("p",{parentName:"admonition"},"Subscribers can find it included as part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Unity Utility Scripts")," package.")),(0,l.kt)("h2",{id:"-preview"},"(\u2b50) Preview:"),(0,l.kt)("div",{className:"player-wrapper"},(0,l.kt)(o(),{className:"react-player",playing:!0,loop:!0,playsinline:!0,controls:!0,volume:"1",muted:!0,url:"https://share.alexxseven.com/5a7f8fdfc862.mp4",height:"100%",width:"100%",mdxType:"ReactPlayer"})))}h.isMDXComponent=!0}}]);