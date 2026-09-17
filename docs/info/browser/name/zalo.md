[`← Browser Name`](../name.md)

# Zalo

- **Developer:** VNG Corporation
- **Development Status:** Active
- **Released:** 2012
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Zalo is a Vietnamese messaging app with an integrated web browser.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 10; Vsmart Live Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 Zalo/20.04.02.r1
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Zalo/20.05.01 Mobile/15E148
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 10; Vsmart Live Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 Zalo/20.04.02.r1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Zalo", version: "20.04.02.r1", major: "20", type: "inapp"}

console.log(browser.is(BrowserName.ZALO));
// true
```
