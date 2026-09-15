[`← Browser Name`](../name.md)

# IceCat

- **Developer:** The GNU Project
- **Development Status:** Active
- **Released:** 2008
- **Platforms:** Windows, macOS, Linux, Android
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

GNU IceCat is a free-software web browser based on Firefox.

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
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092921 IceCat/3.0.3-g1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092921 IceCat/3.0.3-g1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "IceCat", version: "3.0.3-g1", major: "3"}

console.log(browser.is(BrowserName.ICECAT));
// true
```
