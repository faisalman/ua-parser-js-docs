[`← Browser Name`](../name.md)

# Falkon

- **Developer:** KDE
- **Development Status:** Active
- **Released:** 2018
- **Platforms:** Windows, Linux
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Falkon is a Qt-based web browser developed by the KDE project.

## Related Browsers

These browser projects are connected through KDE:

| Browser | Description |
| --- | --- |
| [`QupZilla`](./qupzilla.md) | Falkon's original name. |
| [`Falkon`](./falkon.md) | The KDE browser that replaced QupZilla. |
| [`Konqueror`](./konqueror.md) | KDE's web browser and file manager. |
| [`Rekonq`](./rekonq.md) | A discontinued browser developed for KDE. |

## History

Falkon is the new name for the Qt-based browser previously called [QupZilla](./qupzilla.md). The name changed when the project moved to KDE.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Falkon/3.0.0 Chrome/61.0.3163.140 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Falkon/3.0.0 Chrome/61.0.3163.140 Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Falkon", version: "3.0.0", major: "3"}

console.log(browser.is(BrowserName.FALKON));
// true
```
