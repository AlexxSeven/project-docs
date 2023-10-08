"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4842],{2922:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=i(7462),n=(i(7294),i(3905)),l=i(5457),o=i.n(l);const r={slug:"melodi-change-latest",title:"Melodi Unlit & Premium Changelog (v1.2.0)",authors:"alexxseven",tags:["Shaders","Melodi","Changelogs"]},d=void 0,s={permalink:"/blog/melodi-change-latest",source:"@site/blog/melodicl/2023-10-7-melodi-change-v1-2-0.md",title:"Melodi Unlit & Premium Changelog (v1.2.0)",description:"(\u2b50) = Premium only change.",date:"2023-10-07T00:00:00.000Z",formattedDate:"October 7, 2023",tags:[{label:"Shaders",permalink:"/blog/tags/shaders"},{label:"Melodi",permalink:"/blog/tags/melodi"},{label:"Changelogs",permalink:"/blog/tags/changelogs"}],readingTime:4.085,hasTruncateMarker:!1,authors:[{name:"AlexxSeven",title:"Local Potato",url:"https://alexxseven.com/",imageURL:"https://github.com/AlexxSeven.png",key:"alexxseven"}],frontMatter:{slug:"melodi-change-latest",title:"Melodi Unlit & Premium Changelog (v1.2.0)",authors:"alexxseven",tags:["Shaders","Melodi","Changelogs"]},nextItem:{title:"BS Unlit Standard Changelog (v1.1)",permalink:"/blog/unlitst-change-latest"}},m={authorsImageUrls:[void 0]},u=[{value:"Major Changes:",id:"major-changes",level:2},{value:"Minor Changes:",id:"minor-changes",level:2},{value:"Additions:",id:"additions",level:2},{value:"Extra:",id:"extra",level:2},{value:"(\u2b50) Preview:",id:"-preview",level:2}],p={toc:u},h="wrapper";function k(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Legend",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"(\u2b50) = Premium only change.",(0,n.kt)("br",{parentName:"p"}),"\n","(\ud83c\udd93) = Free only change.")),(0,n.kt)("h2",{id:"major-changes"},"Major Changes:"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed issues with audio link parameters using incorrect math in certain functions."),(0,n.kt)("li",{parentName:"ul"},"Fixed Cutout alpha mode not properly using trail mask."),(0,n.kt)("li",{parentName:"ul"},"Changed the property name for ",(0,n.kt)("inlineCode",{parentName:"li"},"Cutoff")," to fix an issue where it would default to 0.5 instead of 0. (Fixes alpha opaque bug.)"),(0,n.kt)("li",{parentName:"ul"},"Fixed Audiolink chronotensity being represented as a rotation rather than time in all instances as they were always time based.\n(fixes AL time jitter on all texture scrolls, gradient scrolls, and object rotation effects)"),(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("inlineCode",{parentName:"li"},"Rotation Speed")," from all AL Chronotensity based options."),(0,n.kt)("li",{parentName:"ul"},"Increased ",(0,n.kt)("inlineCode",{parentName:"li"},"Effect Speed")," maximum on all chronotensity based options from 1 to 3."),(0,n.kt)("li",{parentName:"ul"},"Fixed all time based parameters to utilize time properly and fixed consistency issues in large unity time values."),(0,n.kt)("li",{parentName:"ul"},"Completely reworked ",(0,n.kt)("inlineCode",{parentName:"li"},"Randomize axis")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"AudioLink > Object Rotation")," to utilize AL chrono properly now."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Randomize axis")," under ",(0,n.kt)("inlineCode",{parentName:"li"},"AudioLink > Object Rotation")," is no longer multiplicative of object rotation axis."),(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("inlineCode",{parentName:"li"},"Effect Type")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"AudioLink > Object Rotation")," as it conflicted with randomize axis."),(0,n.kt)("li",{parentName:"ul"},"Reworked the math and parameters completely for ",(0,n.kt)("inlineCode",{parentName:"li"},"Object Rotation")," to support future growth."),(0,n.kt)("li",{parentName:"ul"},"Reduced the number of samplers across the shader through the utilization of sampler states."),(0,n.kt)("li",{parentName:"ul"},"Made rotation mode a toggle-able feature. tied the AudioLink menu for it to its enabled-state."),(0,n.kt)("li",{parentName:"ul"},"Added a gamma correction toggle to all color palette selectors."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Fixed tangent calculation in physically lit mode for object rotations (fixes funky normals.)"),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Adjusted the math around specular to fix high parameter numbers causing the effect to spill past a set specular map and other specularity visual issues."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Completely reworked the lit mode custom lighting model to fix lighting calculation."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Fixed issues with vertex lighting (point/spot lights) and vertex/object animation."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added a toggle for vertex lighting support under ",(0,n.kt)("inlineCode",{parentName:"li"},"Shader Options")," when lit mode is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"Physical"),"."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added shading color settings to the simulated lighting menu."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Changed manual light position to a float3 from a set of 3 ranged (-1, 1) floats."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added a position type enum to manual light direction mode to swap from local and world pos.")),(0,n.kt)("h2",{id:"minor-changes"},"Minor Changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reworked and trimmed sevreal unused functions and lines of code from the shader."),(0,n.kt)("li",{parentName:"ul"},"Renamed audio link menus from ",(0,n.kt)("inlineCode",{parentName:"li"},"Audio Link Settings")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"\u266b\u266a AudioLink Settings \u266a\u266b")),(0,n.kt)("li",{parentName:"ul"},"Rearranged and reorganized the AudioLink menu inside Trail Mask."),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("inlineCode",{parentName:"li"},"Diffuse Texture")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"Albedo Texture")," to better represent how the texture was used mathmatically."),(0,n.kt)("li",{parentName:"ul"},"Adjusted all references to ",(0,n.kt)("inlineCode",{parentName:"li"},"Diffuse Texture")," to align with the name change to ",(0,n.kt)("inlineCode",{parentName:"li"},"Albedo Texture.")),(0,n.kt)("li",{parentName:"ul"},"Moved the Albedo/Diffuse Distortion menu into the ",(0,n.kt)("inlineCode",{parentName:"li"},"Albedo Texture Settings")," menu as it's technically a setting for it."),(0,n.kt)("li",{parentName:"ul"},"Renamed all instances of ",(0,n.kt)("inlineCode",{parentName:"li"},"Rotation Mode")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"Motion Mode")," where the effect was motion/panning rather than rotation."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,n.kt)("inlineCode",{parentName:"li"},"_Color")," was set as a property multiple times in the shader."),(0,n.kt)("li",{parentName:"ul"},"Reworked the look of the ",(0,n.kt)("inlineCode",{parentName:"li"},"AudioLink > Object Rotation")," menu."),(0,n.kt)("li",{parentName:"ul"},"Reworked the look of a few UI elements due to changes in recent thry editor versions."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Renamed the ",(0,n.kt)("inlineCode",{parentName:"li"},"Blend Env Lights")," option to ",(0,n.kt)("inlineCode",{parentName:"li"},"Blend Directional Lights")," to clarify what it does.")),(0,n.kt)("h2",{id:"additions"},"Additions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"Affect Cutoff")," toggles under the rollouts for Diffuse Texture and Trail Mask."),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"Object Distortion")," option for even more neat effects!"),(0,n.kt)("li",{parentName:"ul"},"Support for BloomFogEnvironment added, options can be found under the ",(0,n.kt)("inlineCode",{parentName:"li"},"BeatSaber Options")," Menu! (uses code from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kaitlyndotmoe/BeatSaberShaderTools"},"/github/kaitlyndotmoe"),")."),(0,n.kt)("li",{parentName:"ul"},"Added Thry version checks and warnings for extremely outdated and/or missing installs."),(0,n.kt)("li",{parentName:"ul"},"Added Axis settings to the ",(0,n.kt)("inlineCode",{parentName:"li"},"AudioLink > Object Rotation")," menu."),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"Light ID #")," options to ",(0,n.kt)("inlineCode",{parentName:"li"},"BeatSaber Settings > Custom Colors Override")," to pull from the global light IDs like platform light objects."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added a ",(0,n.kt)("inlineCode",{parentName:"li"},"Scene Light Illumination")," under the ",(0,n.kt)("inlineCode",{parentName:"li"},"custom")," mode of light color options."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added ",(0,n.kt)("inlineCode",{parentName:"li"},"Scene Light Direction")," under the light direction option."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added warning for Scene lighting and Scene Light Dir options to clarify they require a mod that creates scene lights."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added ",(0,n.kt)("inlineCode",{parentName:"li"},"Reflections")," rollout and options to ",(0,n.kt)("inlineCode",{parentName:"li"},"Specular Settings"),"."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added Support for cube maps and reflection probes. under ",(0,n.kt)("inlineCode",{parentName:"li"},"Specular Texture Settings > Reflection Settings.")),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added Ambient Occlusion map support to ",(0,n.kt)("inlineCode",{parentName:"li"},"Physical")," light mode."),(0,n.kt)("li",{parentName:"ul"},"(\u2b50) Added Normal map support to ",(0,n.kt)("inlineCode",{parentName:"li"},"Physical")," light mode (it's now in its own rollout menu.)")),(0,n.kt)("h2",{id:"extra"},"Extra:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated the packaged thry editor version to ",(0,n.kt)("inlineCode",{parentName:"li"},"2.45.1")," as the shader now utilizes features from it.")),(0,n.kt)("h2",{id:"-preview"},"(\u2b50) Preview:"),(0,n.kt)("div",{className:"player-wrapper"},(0,n.kt)(o(),{className:"react-player",playing:!0,loop:!0,playsinline:!0,controls:!0,volume:"1",muted:!0,url:"https://share.alexxseven.com/d0bd9fccab5b.mp4",height:"100%",width:"100%",mdxType:"ReactPlayer"})))}k.isMDXComponent=!0}}]);