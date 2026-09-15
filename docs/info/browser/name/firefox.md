[`← Browser Name`](../name.md)

# Firefox

- **Developer:** Mozilla
- **Development Status:** Active
- **Released:** 2004
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Firefox is an open-source web browser developed by Mozilla.

## Related Browsers

UAParser.js detects Firefox products, historical names, and independently maintained derivatives separately.

### Firefox products and historical names

| Browser | Description |
| --- | --- |
| [`Firefox`](./firefox.md) | Mozilla's main Firefox browser. |
| [`Firefox Mobile`](./mobile-firefox.md) | Mozilla's Firefox browser for mobile devices. |
| [`Firefox Focus`](./firefox-focus.md) | Mozilla's privacy-focused mobile browser. |
| [`Klar`](./klar.md) | The name used for Firefox Focus in German-speaking markets. |
| [`Fennec`](./fennec.md) | Mozilla's former mobile browser, followed by Firefox Mobile. |
| [`Phoenix`](./phoenix.md) | Firefox's original project name. |
| [`Firebird`](./firebird.md) | Firefox's name after Phoenix and before Firefox. |

### Firefox-derived browsers

These are separate projects, not official Firefox editions:

| Browser | Description |
| --- | --- |
| [`Waterfox`](./waterfox.md) | An independently maintained Firefox fork. |
| [`LibreWolf`](./librewolf.md) | A community Firefox fork focused on privacy and security. |
| [`PaleMoon`](./palemoon.md) | An independent browser that began as a Firefox fork. |
| [`IceCat`](./icecat.md) | GNU's Firefox-based browser and rebrand. |
| [`Iceweasel`](./iceweasel.md) | Debian's former rebranded Firefox package. |
| [`Swiftfox`](./swiftfox.md) | A Firefox-based build optimized for Linux. |

## History

Firefox started as [Phoenix](./phoenix.md) in 2002 and was later called [Mozilla Firebird](./firebird.md). Mozilla renamed it Firefox with version 0.8 in February 2004 to avoid confusion with another open-source project.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.1; rv:15.0) Gecko/20120716 Firefox/15.0a2
```

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0
```

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0 AppName/1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.1; rv:15.0) Gecko/20120716 Firefox/15.0a2';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Firefox", version: "15.0a2", major: "15"}

console.log(browser.is(BrowserName.FIREFOX));
// true
```
