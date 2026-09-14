[`← Browser Name`](../name.md)

# QupZilla

- **Developer:** The QupZilla Project
- **Development Status:** Renamed to [Falkon](./falkon.md)
- **Released:** 2010
- **Platforms:** Windows, macOS, Linux, BSD, OS/2, Haiku
- **Type:** Browser
- **Rendering Engine:** WebKit (before version 2), Blink (since version 2)

## Overview

QupZilla was a Qt-based web browser that was renamed Falkon.

## Related Browsers

These browser projects are connected through KDE:

| Browser | Description |
| --- | --- |
| [`QupZilla`](./qupzilla.md) | Falkon's original name. |
| [`Falkon`](./falkon.md) | The KDE browser that replaced QupZilla. |
| [`Konqueror`](./konqueror.md) | KDE's web browser and file manager. |
| [`Rekonq`](./rekonq.md) | A discontinued browser developed for KDE. |

## History

QupZilla was renamed [Falkon](./falkon.md) when the project moved to KDE. Older releases still use `QupZilla/` in their user agents.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) QupZilla/1.8.9 Safari/538.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) QupZilla/1.8.9 Safari/538.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "QupZilla", version: "1.8.9", major: "1"}

console.log(browser.is(BrowserName.QUPZILLA));
// true
```
