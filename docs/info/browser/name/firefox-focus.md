[`← Browser Name`](../name.md)

# Firefox Focus

- **Developer:** Mozilla
- **Development Status:** Active
- **Released:** 2016
- **Platforms:** Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (early Android releases), Gecko (current Android releases), WebKit (iOS)

## Overview

Firefox Focus is a privacy-focused mobile browser developed by Mozilla.

## Related Browsers

UAParser.js detects these Mozilla Firefox products and historical names separately:

| Browser | Description |
| --- | --- |
| [`Firefox`](./firefox.md) | Mozilla's main Firefox browser. |
| [`Firefox Mobile`](./mobile-firefox.md) | Mozilla's Firefox browser for mobile devices. |
| [`Firefox Focus`](./firefox-focus.md) | Mozilla's privacy-focused mobile browser. |
| [`Klar`](./klar.md) | The name used for Firefox Focus in German-speaking markets. |
| [`Fennec`](./fennec.md) | Mozilla's former mobile browser, followed by Firefox Mobile. |
| [`Phoenix`](./phoenix.md) | Firefox's original project name. |
| [`Firebird`](./firebird.md) | Firefox's name after Phoenix and before Firefox. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/6.1.1 Chrome/68.0.3440.91 Mobile Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/6.1.1 Chrome/68.0.3440.91 Mobile Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Firefox Focus", version: "6.1.1", major: "6"}

console.log(browser.is(BrowserName.FIREFOX_FOCUS));
// true
```
