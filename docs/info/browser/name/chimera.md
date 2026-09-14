[`← Browser Name`](../name.md)

# Chimera

- **Developer:** The Camino Project
- **Development Status:** Renamed to [Camino](./camino.md)
- **Released:** 2002
- **Platforms:** macOS
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Chimera was the original name of the Camino web browser for macOS.

## Related Browsers

These names refer to the same browser project before and after its rename:

| Browser | Description |
| --- | --- |
| [`Chimera`](./chimera.md) | Camino's original name. |
| [`Camino`](./camino.md) | The name adopted when Chimera was renamed. |

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; U; PPC Mac OS X; pl-PL; rv:1.0.1) Gecko/20021111 Chimera/0.6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; pl-PL; rv:1.0.1) Gecko/20021111 Chimera/0.6';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Chimera", version: "0.6", major: "0"}

console.log(browser.is(BrowserName.CHIMERA));
// true
```
