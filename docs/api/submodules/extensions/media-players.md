# MediaPlayers

Apps that let you play music, videos, or online radio. They can play files stored on the device or stream content from the internet. 

```sh
# List of known media players
Apple TV, Aqualung, Lyssna, BSPlayer, Ares, OSSProxy,
Audacious, AudiMusicStream, Amarok, BASS, OpenCORE,
Dalvik, GnomeMplayer, MoC, NSPlayer,
PSP-InternetRadioPlayer, Videos, NexPlayer, Flip
Player, FStream, NativeHost, QuerySeekSpider, Gstreamer, HTC
Streaming Player, HTC One S, MPlayer, YourMuze, 
Media Player Classic, Ner ShowTime, Nero Home, Nero Scout, 
Nokia Player, Songbird, Philips Songbird, Winamp, OCMS Bot,
Tap In, TuneIn, InLight Radio, QuickTime, RealMedia,
RadioApp, RadioClientApplication, SoundTap, Totem,
Stagefright, Streamium, SMP, VLC, XBMC, gvfs, Xine,
XMMS, irapp, Foobar2000, iTunes, Windows Media Player,
Windows Media Server, RiseUP Radio Alarm, Rad.io, ...
```

## Code Example

```js
import { MediaPlayers } from 'ua-parser-js/extensions';

const mediaPlayerParser = new UAParser(MediaPlayers);
```