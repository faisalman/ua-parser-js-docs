[`← Browser Name`](../name.md)

# Klar

- **Developer:** Mozilla
- **Development Status:** Active
- **Released:** 2017
- **Platforms:** Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (early Android releases), Gecko (current Android releases), WebKit (iOS)

## Overview

Firefox Klar is the German-language branding of Mozilla's Firefox Focus browser.

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
# Klar < 4.1
Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Klar/1.0 Chrome/58.0.3029.83 Mobile Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Klar/1.0 Chrome/58.0.3029.83 Mobile Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Klar", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.KLAR));
// true
```
