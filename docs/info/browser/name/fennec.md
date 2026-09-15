[`← Browser Name`](../name.md)

# Fennec

- **Developer:** Mozilla
- **Development Status:** Replaced by [Mobile Firefox](./mobile-firefox.md)
- **Released:** 2010
- **Platforms:** Android, Maemo
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Fennec was Mozilla's mobile version of Firefox.

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

Fennec was Mozilla's codename for its mobile Firefox work, especially Firefox for Android.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux armv61; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1
```

##### Maemo

```sh
Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux armv61; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Fennec", version: "1.0a1", major: "1"}

console.log(browser.is(BrowserName.FENNEC));
// true
```
