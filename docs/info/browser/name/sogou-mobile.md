[`← Browser Name`](../name.md)

# Sogou Mobile

- **Developer:** Sogou (Tencent)
- **Development Status:** Active
- **Platforms:** Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Sogou Mobile is Sogou's web browser for mobile devices.

## Related Browsers

UAParser.js detects Sogou's desktop and mobile browser products separately:

| Browser | Description |
| --- | --- |
| [`Sogou Explorer`](./sogou-explorer.md) | Sogou's desktop browser. |
| [`Sogou Mobile`](./sogou-mobile.md) | Sogou's mobile browser. |

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 SogouMSE,SogouMobileBrowser/3.7.4
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 SogouMSE,SogouMobileBrowser/3.7.4';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Sogou Mobile", version: "3.7.4", major: "3"}

console.log(browser.is(BrowserName.SOGOU_MOBILE));
// true
```
