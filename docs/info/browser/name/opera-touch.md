[`← Browser Name`](../name.md)

# Opera Touch

- **Developer:** Opera
- **Development Status:** Renamed to [Opera](./opera.md)
- **Released:** 2018
- **Platforms:** Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Opera Touch is a mobile web browser designed by Opera for one-handed use.

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

##### Android

```sh
Mozilla/5.0 (Linux; Android 7.0; Lenovo P2a42 Build/NRD90N) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 OPT/1.10.33
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 7.0; Lenovo P2a42 Build/NRD90N) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 OPT/1.10.33';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Opera Touch", version: "1.10.33", major: "1"}

console.log(browser.is(BrowserName.OPERA_TOUCH));
// true
```
