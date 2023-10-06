---
sidebar_position: 0
title: 📄 Simple Mic Source
---

# A7 Simple Mic Source

:::note

The `A7 Simple Mic Source` script is currently only distributed as part of `Melodi Premium`.

:::

Simple mic source is a script that does exactly what it says in the name, a simple script to attach an audio input, or mic, to an audio source.

This can be useful for testing AudioLink effects without having to import dozens of audio files or fiddle with youtube urls.

## How to add the script:

To add the script to your scene, start by importing the `A7 Simple Mic Source` script to your project. Then, find an existing audio source in your scene, or create an audio source if you don't already have one, then select it from the object hierarchy.

Once selected, in your inspector tab attach the script as a component to your audio source.
<div style={{textAlign: 'center'}}>

![Attaching the script as a component.](/img/misc/simplemic/attaching.gif)

</div>
Then, simply type the name of your desired input device into the "selected divice" component option.
Below we'll discuss how to configure the component.


## Configuration options:
### Audio Clip:
The audio clip here is optional. This setting tells unity to play the selected audio clip in the event it fails to hook into the selected microphone source.

### Get Device Names:
Checking this box will tell unity to output the device names into the console log whenever play mode is started. This can be used as a way to copy a device name exactly to be pasted in the "selected device" option.
<div style={{textAlign: 'center'}}>

![Example of the log output this option will generate.](/img/misc/simplemic/devicelog.png)

</div>

### Selected Device:
This text box option tells unity which device to hook into when turning on play mode, it is IMPORTANT that this be typed exactly the same as the device name shows in your system.