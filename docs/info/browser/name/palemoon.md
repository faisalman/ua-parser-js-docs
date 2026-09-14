[`← Browser Name`](../name.md)

# PaleMoon

- **Developer:** Moonchild Productions
- **Development Status:** Active
- **Released:** 2009
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Gecko (before version 26), Goanna (since version 26)

## Overview

Pale Moon is an open-source web browser derived from Firefox.

## Related Browsers

### Firefox-derived browsers

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

### Moonchild browsers

PaleMoon and Basilisk are both developed by Moonchild Productions:

| Browser | Description |
| --- | --- |
| [`PaleMoon`](./palemoon.md) | Focuses on customization and efficiency. |
| [`Basilisk`](./basilisk.md) | Focuses on classic Firefox features and extensions. |

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64; rv:52.9) Gecko/20100101 Goanna/3.4 Firefox/52.9 PaleMoon/27.6.1
```

##### Windows

```sh
(Windows NT 6.2; WOW64) KHTML/4.11 Gecko/20130308 Firefox/23.0 (PaleMoon/20.3)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64; rv:52.9) Gecko/20100101 Goanna/3.4 Firefox/52.9 PaleMoon/27.6.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "PaleMoon", version: "27.6.1", major: "27"}

console.log(browser.is(BrowserName.PALEMOON));
// true
```
