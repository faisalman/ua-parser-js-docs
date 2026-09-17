[`← Browser Name`](../name.md)

# Quark

- **Developer:** UCWeb (Alibaba Group)
- **Development Status:** Active
- **Released:** 2016
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (desktop and Android), WebKit (iOS)

## Overview

Quark is a web browser developed by Alibaba's UCWeb.

## Related Browsers

These browsers are developed by UCWeb:

| Browser | Description |
| --- | --- |
| [`UC Browser`](./uc.md) | UCWeb's main cross-platform browser. |
| [`Quark`](./quark.md) | UCWeb's mobile browser and search app. |

## User-Agent Examples

##### Windows

```sh
mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/112.0.0.0 safari/537.36 quarkpc/1.5.5.75
```

##### Android

```sh
Mozilla/5.0 (Linux; U; Android 12; zh-Hans-CN; JLH-AN00 Build/HONORJLH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Quark/5.8.2.221 Mobile Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/112.0.0.0 safari/537.36 quarkpc/1.5.5.75';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Quark", version: "1.5.5.75", major: "1"}

console.log(browser.is(BrowserName.QUARK));
// true
```
