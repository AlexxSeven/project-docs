---
slug: melodi-change-v1-2-0
title: Melodi Unlit & Premium Changelog (v1.2.0)
authors: alexxseven
tags: [Shaders, Melodi, Changelogs]
---
import ReactPlayer from 'react-player/file'

:::note Legend

(⭐) = Premium only change.     
(🆓) = Free only change.

:::


## Major Changes:
:::caution

The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.

:::
- Fixed issues with audio link parameters using incorrect math in certain functions.
- Fixed Cutout alpha mode not properly using trail mask.
- Changed the property name for `Cutoff` to fix an issue where it would default to 0.5 instead of 0. (Fixes alpha opaque bug.)
- Fixed Audiolink chronotensity being represented as a rotation rather than time in all instances as they were always time based.
(fixes AL time jitter on all texture scrolls, gradient scrolls, and object rotation effects)
- Removed `Rotation Speed` from all AL Chronotensity based options.
- Increased `Effect Speed` maximum on all chronotensity based options from 1 to 3.
- Fixed all time based parameters to utilize time properly and fixed consistency issues in large unity time values.
- Completely reworked `Randomize axis` under `AudioLink > Object Rotation` to utilize AL chrono properly now.
- `Randomize axis` under `AudioLink > Object Rotation` is no longer multiplicative of object rotation axis.
- Removed `Effect Type` from `AudioLink > Object Rotation` as it conflicted with randomize axis.
- Reworked the math and parameters completely for `Object Rotation` to support future growth.
- Reduced the number of samplers across the shader through the utilization of sampler states.
- Made rotation mode a toggle-able feature. tied the AudioLink menu for it to its enabled-state.
- Added a gamma correction toggle to all color palette selectors.
- (⭐) Fixed tangent calculation in physically lit mode for object rotations (fixes funky normals.)
- (⭐) Adjusted the math around specular to fix high parameter numbers causing the effect to spill past a set specular map and other specularity visual issues.
- (⭐) Completely reworked the lit mode custom lighting model to fix lighting calculation.
- (⭐) Fixed issues with vertex lighting (point/spot lights) and vertex/object animation.
- (⭐) Added a toggle for vertex lighting support under `Shader Options` when lit mode is set to `Physical`.
- (⭐) Added shading color settings to the simulated lighting menu.
- (⭐) Changed manual light position to a float3 from a set of 3 ranged (-1, 1) floats.
- (⭐) Added a position type enum to manual light direction mode to swap from local and world pos.

## Minor Changes:
- Reworked and trimmed sevreal unused functions and lines of code from the shader.
- Renamed audio link menus from `Audio Link Settings` to `♫♪ AudioLink Settings ♪♫`
- Rearranged and reorganized the AudioLink menu inside Trail Mask.
- Renamed `Diffuse Texture` to `Albedo Texture` to better represent how the texture was used mathmatically.
- Adjusted all references to `Diffuse Texture` to align with the name change to `Albedo Texture.`
- Moved the Albedo/Diffuse Distortion menu into the `Albedo Texture Settings` menu as it's technically a setting for it.
- Renamed all instances of `Rotation Mode` to `Motion Mode` where the effect was motion/panning rather than rotation.
- Fixed a bug where `_Color` was set as a property multiple times in the shader.
- Reworked the look of the `AudioLink > Object Rotation` menu.
- Reworked the look of a few UI elements due to changes in recent thry editor versions.
- (⭐) Renamed the `Blend Env Lights` option to `Blend Directional Lights` to clarify what it does.

## Additions:
- Added `Affect Cutoff` toggles under the rollouts for Diffuse Texture and Trail Mask.
- Added `Object Distortion` option for even more neat effects!
- Support for BloomFogEnvironment added, options can be found under the `BeatSaber Options` Menu! (uses code from [/github/kaitlyndotmoe](https://github.com/kaitlyndotmoe/BeatSaberShaderTools)).
- Added Thry version checks and warnings for extremely outdated and/or missing installs.
- Added Axis settings to the `AudioLink > Object Rotation` menu.
- Added `Light ID #` options to `BeatSaber Settings > Custom Colors Override` to pull from the global light IDs like platform light objects.
- (⭐) Added a `Scene Light Illumination` under the `custom` mode of light color options.
- (⭐) Added `Scene Light Direction` under the light direction option.
- (⭐) Added warning for Scene lighting and Scene Light Dir options to clarify they require a mod that creates scene lights.
- (⭐) Added `Reflections` rollout and options to `Specular Settings`.
- (⭐) Added Support for cube maps and reflection probes. under `Specular Texture Settings > Reflection Settings.`
- (⭐) Added Ambient Occlusion map support to `Physical` light mode.
- (⭐) Added Normal map support to `Physical` light mode (it's now in its own rollout menu.)

## Extra:
- Updated the packaged thry editor version to `2.45.1` as the shader now utilizes features from it.

## (⭐) Preview:

<div className='player-wrapper'>
    <ReactPlayer
        className='react-player'
        playing
        loop
        playsinline
        controls
        volume='1'
        muted
        url='https://share.alexxseven.com/d0bd9fccab5b.mp4'
        height='100%'
        width='100%'
    />
</div>