[`← Browser Name`](../name.md)

# Whale Browser

- **Developer:** NAVER
- **Development Status:** Active
- **Released:** 2017
- **Platforms:** Windows, macOS, Linux, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (desktop and Android), WebKit (iOS)

## Overview

Whale is a Chromium-based web browser developed by NAVER.

## Related Browsers

UAParser.js detects these NAVER browsing experiences separately:

| Browser | Description |
| --- | --- |
| [`NAVER`](./naver.md) | The browser built into the NAVER app. |
| [`Whale Browser`](./whale.md) | NAVER's standalone web browser. |

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.146 Whale/2.6.90.14 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.146 Whale/2.6.90.14 Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Whale", version: "2.6.90.14", major: "2"}

console.log(browser.is(BrowserName.WHALE));
// true
```
