[`← Browser Name`](../name.md)

# Qwant

- **Developer:** Qwant
- **Development Status:** Active
- **Released:** 2018
- **Platforms:** Android, iOS
- **Type:** Browser
- **Rendering Engine:** Gecko (Android), WebKit (iOS)

## Overview

Qwant is a privacy-focused search service that also provides a mobile browser.

## User-Agent Examples

##### Android

```sh
QwantMobile/2.0 (Android 8.0.0; Mobile; rv:59.0) Gecko/59.0 Firefox/59.0 QwantBrowser/59.0
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) QwantMobile/6.7.6 Mobile/15E148 Safari/605.1.15
QwantMobile/2.0 (iPad; CPU OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) QwantiOS/2.7.0b1 Mobile/15E148 Safari/605.1.15
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'QwantMobile/2.0 (Android 8.0.0; Mobile; rv:59.0) Gecko/59.0 Firefox/59.0 QwantBrowser/59.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Qwant", version: "59.0", major: "59"}

console.log(browser.is(BrowserName.QWANT));
// true
```
