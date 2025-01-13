---
slug: melodi-change-v1-2-1
title: Melodi Unlit & Premium Changelog (v1.2.1)
authors: alexxseven
tags: [Shaders, Melodi, Changelogs]
---
import ReactPlayer from 'react-player/file'

This is a smol bugfix update to 1.2.0 that was urgently needed, to see the longer list of changes in 1.2.0 check out [this post](/blog/melodi-change-v1-2-0).

:::note Legend

(⭐) = Premium only change.     
(🆓) = Free only change.

:::

## Major Changes:
:::caution

The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.

:::
- (⭐) Fixed an issue where albedo texture was not being calculated into specular color properly.
- (⭐) Reworked specular math to be more in line with a metallic workflow.
- - (⭐) `Smoothness + Mask` was moved and split, replacing the functions of `Specular Map` and `Specular Amount`,
- - (⭐) `Metallic + Mask` replaced what was `Smoothness + Mask` and offers better metallic support (albedo color). 

## Minor Changes:
- Fixed an issue with static branching and audio link UV effects.
- (⭐) Fixed an issue with the AO texture rollout not having a map channel selector.
- (⭐) Renamed `Specular Texture Settings` to `Specular Settings`.
- (⭐) Renamed `Specular Map` to `Roughness Map` in `Specular Settings`.
- (⭐) Renamed `Specular Amount` to `Smoothness` in `Specular Settings`.
- (⭐) Renamed `Smoothness + Mask` to `Metallic + Mask` in `Specular Settings`.

## Additions:
- Added stencil buffer options under `Shader Options > Stencil Options`.

## Removals:
:::danger NOTICE!

A7-SimpleMicSource.cs is no longer included as part of the melodi premium package. The script is now open sourced, and MIT licensed. non subscribers can find out how to obtain and use them in [the documentation](/category/miscellaneous).

Subscribers can find it included as part of the `Unity Utility Scripts` package.

:::
<!--truncate-->
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
        url='https://share.alexxseven.com/5a7f8fdfc862.mp4'
        height='100%'
        width='100%'
    />
</div>