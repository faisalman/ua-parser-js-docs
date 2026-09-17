[`← Browser Name`](../name.md)

# SlimBoat

- **Developer:** FlashPeak
- **Development Status:** Discontinued
- **Released:** 2011
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

SlimBoat was a lightweight web browser developed by FlashPeak.

## Related Browsers

These browsers are developed by FlashPeak:

| Browser | Description |
| --- | --- |
| [`SlimBrowser`](./slimbrowser.md) | FlashPeak's main Windows browser. |
| [`SlimBoat`](./slimboat.md) | FlashPeak's discontinued lightweight browser. |
| [`Slimjet`](./slimjet.md) | FlashPeak's Chromium-based browser. |

## User-Agent Examples

```sh
Mozilla/5.0 (Windows NT 5.2) AppleWebKit/534.34 (KHTML, like Gecko) SlimBoat/1.1.23 Chrome/11.0.696.7 Version/5.1 Safari/534.34
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 5.2) AppleWebKit/534.34 (KHTML, like Gecko) SlimBoat/1.1.23 Chrome/11.0.696.7 Version/5.1 Safari/534.34';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "SlimBoat", version: "1.1.23", major: "1"}

console.log(browser.is(BrowserName.SLIMBOAT));
// true
```
