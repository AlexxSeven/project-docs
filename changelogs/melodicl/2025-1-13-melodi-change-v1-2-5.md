---
slug: melodi-change-v1-2-5
title: Melodi Unlit & Premium Changelog (v1.2.5)
authors: alexxseven
tags: [Shaders, Melodi, Changelogs]
---
import ReactPlayer from 'react-player/file'

This version of melodi marks a slight shift in direction features wise, as some features will be moved to melodi unlit like originally planned. This release also includes a few bug fixes and additions. 

:::note Legend

(⭐) = Premium only change.     
(🆓) = Free only change.

:::

## Major Changes:
:::caution

The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.

:::
- Shader is now fully SPI(Single pass instanced) ready!
- Fixed an issue with AudioLink UV animations being broken and disabling general UV animations when enabled. (Reported by Alyng)
- Changed global variables for alt colors (saber, light, boost, ect) to the variables from the AssetLib mod.
- Replaced the math behind bloomfog with Kaitlyn's BloomFog CGINC, found at [Beat Saber Shader Tools](https://github.com/whatdahopper/BeatSaberShaderTools).
- Changed the toggles for bloomfog to shader features and defaulted bloomfog to enabled.
- Changed `AudioLink Settings > Object Scale > Scale Strength` to be a float rather than a float range multiplier. (Ranges from 0 - inf)
- (⭐) Adjusted reflection smoothness to not be tied with specular smoothness. Now has its own setting in `Specular Settings > Reflection Settings`.
- (⭐) Renamed the material property for `Specular Settings > Smoothness` for internal organization.
- (⭐) Fixed an issue with `BeatSaber Settings > Trailmask > AudioLink > Alpha/Glow Bypass` that caused it to override alpha even when audio link was not present.
- (⭐) Fixed improper usage of UVs in `Audio Link > Object Scale > Mask Settings` which fixes texture scale issues.

## Minor Changes:
- Fixed broken value references for hiding and showing material properties based on material settings.
- Updated values for hidden/shown material properties to reflect added values.
- Updated material drawer socials footer links.
- (⭐) Split reflection mask into its own option as it now affects both `Reflection Settings > Smoothness` and `Reflection Settings > Reflectance`.
- (🆓) Fixed Condition for `Object Distortion > AudioLink Settings` to disable when audiolink is not present.

## Additions:
- Added shadowcaster pass for realtime casted shadows.
- Added new stickers menu, with support for 4 stickers/decals.
- Added Wall color as an alt color in all color overrides.
- Added support for LightID to all remaining alt color options that didn't yet support it.
- (⭐) Added support for sticker specific PBR settings in `Physical` mode.
- (⭐) Added `Shininess` option to `Specular Settings` menu.
- (🆓) Added Fresnel Distortion options under `Fresnel Parameters` menu.
- (🆓) Added Fresnel Distortion options to `AudioLink Settings > Fresnel Options`.

## Removals:
- Removed version numbers from material headers.
- Removed support for global variables from SaberFactory and AudioLink mods. (AudioLink theme colors will return in a later version.)
- (⭐) Removed the `(Premium Only)` tag from `Fresnel Distortion`.
<!--truncate-->

## Preview:

<div className='player-wrapper'>
    <ReactPlayer
        className='react-player'
        playing
        loop
        playsinline
        controls
        volume='1'
        muted
        url='https://share.alexxseven.com/ed2e3756b82f.mp4'
        height='100%'
        width='100%'
    />
</div>

<div className='player-wrapper'>
    <ReactPlayer
        className='react-player'
        loop
        playsinline
        controls
        volume='1'
        muted
        url='https://share.alexxseven.com/2558ec1d019f.mp4'
        height='100%'
        width='100%'
    />
</div>

<div className='player-wrapper'>
    <ReactPlayer
        className='react-player'
        loop
        playsinline
        controls
        volume='1'
        muted
        url='https://share.alexxseven.com/c52edd46c516.mp4'
        height='100%'
        width='100%'
    />
</div>