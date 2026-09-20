[`← Browser Type`](../type.md)

# `mediaplayer`

Applications that access web content specifically for playing media files.

::: tip
See the full list of detected values in the [`MediaPlayers`](/api/submodules/extensions/media-players) extension.
:::

## User-Agent Examples

```sh
# VLC
VLC/2.0.0 LibVLC/2.0.0

# QuickTime
QuickTime/7.5.6 (qtver=7.5.6;cpu=IA32;os=Mac 10.5.8)

# Windows Media Player
Windows-Media-Player/10.00.00.4019

# Winamp
Winamp 2.81

# XBMC
XBMC/12.0 Git:20130127-fb595f2 (Windows NT 6.1;WOW64;Win64;x64; http://www.xbmc.org)

# rad.io
rad.io 1.18.1 rv:593 (iPhone 4S; iPhone OS 7.0.4; it_IT)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { MediaPlayers } from 'ua-parser-js/extensions';
import { BrowserType } from 'ua-parser-js/enums';

const parser = new UAParser(MediaPlayers);

console.log(parser.setUA('VLC/2.0.0 LibVLC/2.0.0').getBrowser());
// {name: "VLC", version: "2.0.0", major: "2", type: "mediaplayer"}

console.log(parser.browser.is(BrowserType.MEDIAPLAYER));
// true
```
