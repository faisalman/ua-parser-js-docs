[`← Browser Name`](../name.md)

# Camino

- **Developer:** The Camino Project
- **Development Status:** Discontinued
- **Released:** 2002
- **Platforms:** macOS
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Camino was a Mozilla-based web browser designed for macOS.

## Related Browsers

These names refer to the same browser project before and after its rename:

| Browser | Description |
| --- | --- |
| [`Chimera`](./chimera.md) | Camino's original name. |
| [`Camino`](./camino.md) | The name adopted when Chimera was renamed. |

## User-Agent Examples

##### macOS

```sh
## Camino on PPC Mac
Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; en; rv:1.9.0.19) Gecko/2011091218 Camino/2.0.9 (like Firefox/3.0.19)

## Camino on Intel Mac
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Camino/2.2.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; en; rv:1.9.0.19) Gecko/2011091218 Camino/2.0.9 (like Firefox/3.0.19)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Camino", version: "2.0.9", major: "2"}

console.log(browser.is(BrowserName.CAMINO));
// true
```
