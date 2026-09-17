[`← Browser Name`](../name.md)

# SlimBrowser

- **Developer:** FlashPeak
- **Development Status:** Active
- **Released:** 2000
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Trident (older releases), Blink (current releases)

## Overview

SlimBrowser is a web browser for Windows developed by FlashPeak.

## Related Browsers

These browsers are developed by FlashPeak:

| Browser | Description |
| --- | --- |
| [`SlimBrowser`](./slimbrowser.md) | FlashPeak's main Windows browser. |
| [`SlimBoat`](./slimboat.md) | FlashPeak's discontinued lightweight browser. |
| [`Slimjet`](./slimjet.md) | FlashPeak's Chromium-based browser. |

## User-Agent Examples

##### Windows

```sh
Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SlimBrowser)
Mozilla/5.0 (Windows NT 5.2) AppleWebKit/534.34 (KHTML, like Gecko) SlimBoat/1.1.23 Chrome/11.0.696.7 Version/5.1 Safari/534.34
```

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36 Slimjet/20.0.2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SlimBrowser)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "SlimBrowser"}

console.log(browser.is(BrowserName.SLIMBROWSER));
// true
```
