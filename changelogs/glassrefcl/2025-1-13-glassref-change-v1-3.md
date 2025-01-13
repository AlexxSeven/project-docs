---
slug: glassref-change-v1-3
title: Glass Refraction Changelog (v1.3)
authors: alexxseven
tags: [Shaders, Glass Refraction, Changelogs]
---

:::note 

Glass refraction is a premium only shader.

:::

## Major Changes:
:::caution

The changes in this section will affect the look of materials using previous versions! It's advised to use a copy/backup material instead to ensure you can rollback if needed.

:::
- Shader is now fully SPI(Single pass instanced) ready!
- Updated for proper SPI support with grabpass.
- Changed global variables for alt colors (saber, light, boost, ect) to the variables from the AssetLib mod.
- Replaced the math behind bloomfog with Kaitlyn's BloomFog CGINC, found at [Beat Saber Shader Tools](https://github.com/whatdahopper/BeatSaberShaderTools).
- Changed the toggles for bloomfog to shader features and defaulted bloomfog to enabled.
- Fixed an issue with the math behind normals distortion.

## Minor Changes:
- Updated material drawer socials footer links.
- Fixed Color property not working with `Custom Colors` toggle due to shader locking.

## Additions:
- Added Wall color as an alt color in color override.
- Added a toggle to `Distortion Parameters` with the default being disabled.
- Added the gpu instancing toggle under `Shader Options`.

## Removals:
- Removed support for global variables from SaberFactory and AudioLink mods. (AudioLink theme colors will return in a later version.)

<!-- truncate -->