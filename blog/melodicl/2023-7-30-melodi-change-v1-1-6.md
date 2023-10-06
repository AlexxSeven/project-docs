---
slug: melodi-change-v1-1-6
title: Melodi Unlit & Premium Changelog (v1.1.6)
authors: alexxseven
tags: [Shaders, Melodi, Changelogs]
---

:::note Legend

(⭐) = Premium only change.     
(🆓) = Free only change.

:::

:::danger Bug Warning!

There is currently a bug with opacity the causes the shader to default as transparent! The current workaround is to set your alpha type to opaque even if it already says its set.

:::

## Major Changes:
:::caution

The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.

:::
- (⭐) Converted Audio Link Color Flash Mask to a Texture Packer from Gradient.
- - (⭐) Reworked color flash mask transform options to work like other textures.
- - (⭐) Added texture screen space mode options to color flash mask.
- - (⭐) Adjusted texture UV usage in color flash mask to account for switch from gradient.

## Minor Changes:
- ZTest Mode option under shader options no longer goes away when ZWrite is set to off.
- Shortened sentence length of audio link debug enabled warning.

## Additions:
- Added texture channel selector to all texture packer rollouts.
- Added GPU Instancing material toggle into Shader Options.

## Extra:
- Updated packaged thry editor version.