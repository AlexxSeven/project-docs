---
sidebar_position: 0
title: 📜 Cam Rotato
---
import ReactPlayer from 'react-player/file'

# A7 Cam Rotato
:::tip
[Download the script here.](https://github.com/AlexxSeven/Utility-Unity-Scripts/tree/main/Cam%20Rotato)
:::

:::note Preview
<div className='player-wrapper'>
    <ReactPlayer
        className='react-player'
        playing
        loop
        playsinline
        controls
        volume='1'
        muted
        url='https://share.alexxseven.com/5c16ac914d1b.mp4'
        height='100%'
        width='100%'
    />
</div>
:::
Cam rotato is a small script that rotates your camera around the centerpoint of a target, useful for simple object showcases!

## How to add the script:

To add the script to your scene, start by importing the `A7 Cam Rotato` script to your project. Then, find the camera in your scene that you want to use, or create one if you don't already have one, then select it from the object hierarchy.

Once selected, in your inspector tab attach the script as a component to your camera.
<div style={{textAlign: 'center'}}>

![Attaching the script as a component.](/img/misc/camrotato/attaching.gif)

</div>

As the gif above shows, you'll then need to fill out the camera object, and camera target parameters. these will be the camera to rotate, and the target object it will look at and rotate around.

once those are filled out, you'll want to configure your distance to object, speed, and rotation axis parameters before starting play mode. You may configure them after, but do note that the settings will not be saved until applied outside of play mode.

## Configuration options:
<div style={{textAlign: 'center'}}>

![A view of the component and its options.](/img/misc/camrotato/componentview.png)

</div>

### Cam:
This is the camera object that will be rotated by the script.

### Target:
This is the target object transform that the camera will look at, and rotate around.

### Distance to target:
This is how far away the camera will be from the target when the script is initiated.

### Speed:
This is how fast the camera will spin around the target object.

### Rotation axis:
This is the axis the object will rotate on. 