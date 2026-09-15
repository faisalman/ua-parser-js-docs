[`← Browser Name`](../name.md)

# Firefox Mobile

- **Developer:** Mozilla
- **Development Status:** Active
- **Released:** 2011
- **Platforms:** Android, iOS
- **Type:** Browser
- **Rendering Engine:** Gecko (Android), WebKit (iOS)

## Overview

Mobile Firefox is Mozilla's Firefox web browser for mobile devices.

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

## History

Mozilla previously used [Fennec](./fennec.md) as the codename for its mobile browser work. Its current Android and iOS browsers use the Firefox name, while older user agents may still contain `Fennec/`.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 7.1.2; Nexus 5X Build/N2G47W) AppleWebKit/537.36 (KHTML, like Gecko) FxiOS/7.5b3349 Mobile/14F89 Safari/603.2.4
Mozilla/5.0 (Android 5.0; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) FxiOS/1.1 Mobile/13B143 Safari/601.1.46
Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/112.0 Mobile/15E148 Safari/605.1.15
Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 7.1.2; Nexus 5X Build/N2G47W) AppleWebKit/537.36 (KHTML, like Gecko) FxiOS/7.5b3349 Mobile/14F89 Safari/603.2.4';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Mobile Firefox", version: "7.5b3349", major: "7"}

console.log(browser.is(BrowserName.FIREFOX_MOBILE));
// true
```
