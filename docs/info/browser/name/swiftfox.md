[`← Browser Name`](../name.md)

# Swiftfox

- **Developer:** Jason Halme
- **Development Status:** Discontinued
- **Released:** 2005
- **Platforms:** Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Swiftfox was a set of processor-optimized Firefox builds for Linux.

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
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1) Gecko/20061024 Firefox/2.0 (Swiftfox)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1) Gecko/20061024 Firefox/2.0 (Swiftfox)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Swiftfox"}

console.log(browser.is(BrowserName.SWIFTFOX));
// true
```
