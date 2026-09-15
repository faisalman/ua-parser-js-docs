[`← Browser Name`](../name.md)

# Firebird

- **Developer:** Mozilla
- **Development Status:** Renamed to [Firefox](./firefox.md)
- **Released:** 2003
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Firebird was an early name used for the browser that became Mozilla Firefox.

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

Mozilla used the Firebird name after [Phoenix](./phoenix.md). To avoid confusion with another open-source project, it renamed the browser [Firefox](./firefox.md) with version 0.8 in February 2004.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.5) Gecko/20031007 Firebird/0.7
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.5) Gecko/20031007 Firebird/0.7';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Firebird", version: "0.7", major: "0"}

console.log(browser.is(BrowserName.FIREBIRD));
// true
```
