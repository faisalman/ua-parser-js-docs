[`← Browser Name`](../name.md)

# Rekonq

- **Developer:** KDE
- **Development Status:** Discontinued
- **Released:** 2008
- **Platforms:** Linux, BSD
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Rekonq was a lightweight web browser developed for the KDE desktop.

## Related Browsers

These browser projects are connected through KDE:

| Browser | Description |
| --- | --- |
| [`QupZilla`](./qupzilla.md) | Falkon's original name. |
| [`Falkon`](./falkon.md) | The KDE browser that replaced QupZilla. |
| [`Konqueror`](./konqueror.md) | KDE's web browser and file manager. |
| [`Rekonq`](./rekonq.md) | A discontinued browser developed for KDE. |

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux x86_64; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) rekonq Safari/533.3
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.21 (KHTML, like Gecko) rekonq/2.2.1 Safari/537.21
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux x86_64; cs-CZ) AppleWebKit/533.3 (KHTML, like Gecko) rekonq Safari/533.3';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "rekonq"}

console.log(browser.is(BrowserName.REKONQ));
// true
```
