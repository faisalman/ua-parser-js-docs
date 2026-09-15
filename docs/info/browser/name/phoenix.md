[`← Browser Name`](../name.md)

# Phoenix

- **Developer:** Mozilla
- **Development Status:** Renamed to [Firefox](./firefox.md)
- **Released:** 2002
- **Platforms:** Windows, Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Phoenix was the original name of the browser that became Mozilla Firefox.

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

Mozilla first released this browser as Phoenix in 2002. It was later called [Mozilla Firebird](./firebird.md), then became [Firefox](./firefox.md) with version 0.8 in February 2004.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.2b) Gecko/20021029 Phoenix/0.4
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.2b) Gecko/20021029 Phoenix/0.4';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Phoenix", version: "0.4", major: "0"}

console.log(browser.is(BrowserName.PHOENIX));
// true
```
