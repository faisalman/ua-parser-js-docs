[`← Browser Name`](../name.md)

# Iceweasel

- **Developer:** The Debian Project
- **Development Status:** Renamed to [Firefox](./firefox.md)
- **Released:** 2006
- **Platforms:** Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Iceweasel was Debian's rebranded version of Mozilla Firefox.

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

## History

Debian shipped [Firefox](./firefox.md) under the Iceweasel name because of disagreements with Mozilla about branding and security fixes. Starting with Debian Stretch, `iceweasel` became a transitional package that moved users to `firefox-esr`.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.0.16) Gecko/2009121610 Iceweasel/3.0.6 (Debian-3.0.6-3)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.0.16) Gecko/2009121610 Iceweasel/3.0.6 (Debian-3.0.6-3)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Iceweasel", version: "3.0.6", major: "3"}

console.log(browser.is(BrowserName.ICEWEASEL));
// true
```
