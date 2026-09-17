[`← Browser Name`](../name.md)

# Sogou Explorer

- **Developer:** Sogou (Tencent)
- **Development Status:** Active
- **Released:** 2008
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Trident (compatibility mode), WebKit (older releases), Blink (newer releases)

## Overview

Sogou Explorer is a web browser for Windows developed by Sogou.

## Related Browsers

UAParser.js detects Sogou's desktop and mobile browser products separately:

| Browser | Description |
| --- | --- |
| [`Sogou Explorer`](./sogou-explorer.md) | Sogou's desktop browser. |
| [`Sogou Mobile`](./sogou-mobile.md) | Sogou's mobile browser. |

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Sogou Explorer", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.SOGOU_EXPLORER));
// true
```
