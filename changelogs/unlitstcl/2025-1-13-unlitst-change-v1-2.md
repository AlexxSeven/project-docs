---
slug: unlitst-change-v1-2
title: BS Unlit Standard Changelog (v1.2)
authors: alexxseven
tags: [Shaders, UnlitStandard, Changelogs]
---

## Major Changes:
:::caution

The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.

:::
- Shader is now fully SPI(Single pass instanced) ready!
- Replaced the math behind bloomfog with Kaitlyn's BloomFog CGINC, found at [Beat Saber Shader Tools](https://github.com/whatdahopper/BeatSaberShaderTools).
- Changed the toggles for bloomfog to shader features and defaulted bloomfog to enabled.

## Minor Changes:
- Updated material drawer socials footer links.
- Added version number to material header.

## Additions:
- Added `Cutout` as an alpha mode along with a `Cutoff` slider to control the cutout amount. (shown when set to cutout.)

<!-- truncate -->