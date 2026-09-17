[`← Browser Name`](../name.md)

# NAVER

- **Developer:** NAVER
- **Development Status:** Active
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

NAVER is a South Korean search and portal app with an integrated web browser.

## Related Browsers

UAParser.js detects these NAVER browsing experiences separately:

| Browser | Description |
| --- | --- |
| [`NAVER`](./naver.md) | The browser built into the NAVER app. |
| [`Whale Browser`](./whale.md) | NAVER's standalone web browser. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 12; SM-G988N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.232 Whale/1.0.0.0 Crosswalk/26.90.3.21 Mobile Safari/537.36 NAVER(inapp; search; 1010; 11.11.2)
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/605.1 NAVER(inapp; search; 720; 10.25.0; 11PRO)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 12; SM-G988N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.232 Whale/1.0.0.0 Crosswalk/26.90.3.21 Mobile Safari/537.36 NAVER(inapp; search; 1010; 11.11.2)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "NAVER", version: "11.11.2", major: "11", type: "inapp"}

console.log(browser.is(BrowserName.NAVER));
// true
```
