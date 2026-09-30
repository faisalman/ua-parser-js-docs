<sup>*[`Extensions Submodule`](./overview.md) > `MediaPlayers`*</sup>

# `MediaPlayers`

Extends [`browser`](/info/browser/name) detection to include apps that let you play music, videos, or online radio. The apps can play files stored on the device or stream content from the internet.

## List of Known Media Players

| **Media Player** |   |   |
| --- | --- | --- |
| `Amarok` | `Lyssna` | `RadioClientApplication` |
| `Apple TV` | `Media Player Classic` | `RealMedia` |
| `Aqualung` | `MoC` | `RiseUP Radio Alarm` |
| `Ares` | `MPlayer` | `SMP` |
| `Audacious` | `NativeHost` | `Songbird` |
| `AudiMusicStream` | `Ner ShowTime` | `SoundTap` |
| `BASS` | `Nero Home` | `Stagefright` |
| `BSPlayer` | `Nero Scout` | `Streamium` |
| `Dalvik` | `NexPlayer` | `Tap In` |
| `Flip Player` | `Nokia Player` | `Totem` |
| `Foobar2000` | `NSPlayer` | `TuneIn` |
| `FStream` | `OCMS Bot` | `Videos` |
| `GnomeMplayer` | `OpenCORE` | `VLC` |
| `Gstreamer` | `OSSProxy` | `Winamp` |
| `gvfs` | `Philips Songbird` | `Windows Media Player` |
| `HTC One S` | `PSP-InternetRadioPlayer` | `Windows Media Server` |
| `HTC Streaming Player` | `QuerySeekSpider` | `XBMC` |
| `InLight Radio` | `QuickTime` | `Xine` |
| `irapp` | `Rad.io` | `XMMS` |
| `iTunes` | `RadioApp` | `YourMuze` |

- ... etc.

## Code Example

```js
import { MediaPlayers } from 'ua-parser-js/extensions';

const mediaPlayerParser = new UAParser(MediaPlayers);
```