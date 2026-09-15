[`← Browser Name`](../name.md)

# Waterfox

- **Developer:** Waterfox Ltd.
- **Development Status:** Active
- **Released:** 2011
- **Platforms:** Windows, macOS, Linux, Android
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Waterfox is a privacy-focused web browser derived from Firefox.

## Related Browsers

These Firefox-derived browsers are separate projects, not official Firefox editions:

| Browser | Description |
| --- | --- |
| [`Firefox`](./firefox.md) | The Mozilla browser these projects are based on. |
| [`Waterfox`](./waterfox.md) | An independently maintained Firefox fork. |
| [`LibreWolf`](./librewolf.md) | A community Firefox fork focused on privacy and security. |
| [`PaleMoon`](./palemoon.md) | An independent browser that began as a Firefox fork. |
| [`IceCat`](./icecat.md) | GNU's Firefox-based browser and rebrand. |
| [`Iceweasel`](./iceweasel.md) | Debian's former rebranded Firefox package. |
| [`Swiftfox`](./swiftfox.md) | A Firefox-based build optimized for Linux. |

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.2.2 Waterfox/55.2.2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.2.2 Waterfox/55.2.2';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Waterfox", version: "55.2.2", major: "55"}

console.log(browser.is(BrowserName.WATERFOX));
// true
```
