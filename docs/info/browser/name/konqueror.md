[`← Browser Name`](../name.md)

# Konqueror

- **Developer:** KDE
- **Development Status:** Active
- **Released:** 2000
- **Platforms:** Linux, BSD
- **Type:** Browser
- **Rendering Engine:** KHTML (original), WebKit (optional), Blink (QtWebEngine)

## Overview

Konqueror is KDE's web browser and file manager.

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
Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) konqueror/5.0.97 Safari/534.34
Mozilla/5.0 (compatible; Konqueror/3.5; Linux; X11; x86_64) KHTML/3.5.6 (like Gecko) (Kubuntu)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) konqueror/5.0.97 Safari/534.34';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Konqueror", version: "5.0.97", major: "5"}

console.log(browser.is(BrowserName.KONQUEROR));
// true
```
