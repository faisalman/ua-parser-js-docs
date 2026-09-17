[`← Browser Name`](../name.md)

# Opera Mini

- **Developer:** Opera
- **Development Status:** Active
- **Released:** 2005
- **Platforms:** Java ME, Symbian, BlackBerry OS, Windows Mobile, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Presto (classic server rendering), WebKit and Blink (newer clients)

## Overview

Opera Mini is a mobile browser that uses server-side compression to reduce data usage.

## Related Browsers

UAParser.js detects these Opera products, editions, and historical mobile names separately:

| Browser | Description |
| --- | --- |
| [`Opera`](./opera.md) | Opera's main cross-platform browser. |
| [`Opera GX`](./opera-gx.md) | Opera's gaming-focused browser. |
| [`Opera Mini`](./opera-mini.md) | Opera's mobile browser focused on saving data. |
| [`Opera Mobile`](./opera-mobi.md) | The former mobile browser detected as `Opera Mobi` by UAParser.js. |
| [`Opera Tablet`](./opera-tablet.md) | The former tablet version of Opera Mobile. |
| [`Opera Touch`](./opera-touch.md) | Opera's mobile browser later renamed Opera Browser. |
| [`Opera Coast`](./opera-coast.md) | Opera's discontinued touch-focused mobile browser. |
| [`Opera Neon`](./opera-neon.md) | Opera's experimental concept browser. |

## User-Agent Examples

##### iOS

```sh
Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25
# Opera Mini 8 above on iPhone
Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) OPiOS/12.1.1.98980 Mobile/13C75 Safari/9537.53
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Opera Mini", version: "5.1.21214", major: "5"}

console.log(browser.is(BrowserName.OPERA_MINI));
// true
```
