---
slug: melodi-change-v1-1-5
title: Melodi Unlit & Premium Changelog (v1.1.5)
authors: alexxseven
tags: [Shaders, Melodi, Changelogs]
---

:::note Legend

(⭐) = Premium only change.     
(🆓) = Free only change.

:::


## Major Changes:
:::caution

The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.

:::
- Fixed normal calculation when Diffuse Distortion is disabled.
- Changed Fresnel Mask to `Texture Packer` type.
- Fixed distortion map blending across the shader.
- Improved glow calculations and fixed some bad math.
- (🆓) Fixed alpha mode not properly changing
- (⭐) Changed screenspace calculations and added `Object bound` screenspace mode.
- (⭐) Fixed bad math and parameter flow for emissive alt color. (Fixes Alt color not working if audiolink wasn't installed)

## Minor Changes:
- Reorganized formulas for trail mask feature.
- Moved Audiolink Debug into its own category so multiple materials can have it linked together. [Example](https://i.imgur.com/f1L1NAr.mp4)
- Set the `Custom Colors` toggle to not hide if main color is being overridden.
- Fixed missing help boxes that explained the color options under `Fresnel Parameters > Color Options.`
- Reworked flow of the alt color function. (fixes AL fallback color on all alt color options.)
- (⭐) Fixed missing help boxes that explained the color options under `Emissive Adv Parameters > Emissive Alt Color.`

## Additions:
- Added `ZTest Mode` control under shader options menu.
- Added `Preview Type` control under the shader options menu.
- Added a warning to the main area when Audiolink is debug-disabled in the shader.
- Added a `_Color` option to all features that allow selecting an alt color. This allows sampling/using the CC as an alt color.
- Added a `Smooth Waves` toggle to all wave mask settings.
- (⭐) Added experimental Physically Based Lit mode.
- (⭐) Added glow bypass toggle to Trail Mask.
- (⭐) Added a `Use Main Color` option to `Emissive Adv Parameters > Emissive Alt Color`
- (⭐) Added a `Blend Env Lights` toggle to Physically lit mode to reflect map lighting on objects. (Thanks to some code from [Kaitlyn](https://github.com/kaitlyndotmoe)!)