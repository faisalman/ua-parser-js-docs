[`← Browser Name`](../name.md)

# Maemo Browser

- **Developer:** Nokia
- **Development Status:** Discontinued
- **Released:** 2007
- **Platforms:** Maemo
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Maemo Browser was a Mozilla-based web browser for Nokia's Maemo platform.

## Related Browsers

These browsers were developed for Nokia devices and platforms:

| Browser | Description |
| --- | --- |
| [`Go Browser`](./go.md) | A browser found on older Nokia phones. |
| [`Maemo Browser`](./maemo.md) | The browser for Nokia's Maemo platform. |
| [`Nokia Browser`](./nokia.md) | The browser bundled with Nokia phones. |
| [`Ovi Browser`](./ovi.md) | Nokia's data-saving browser for Series 40 phones. |

## User-Agent Examples

##### Maemo

```sh
Mozilla/5.0 (X11; U; Linux armv7l; ru-RU; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux armv7l; ru-RU; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.5 Maemo Browser 1.7.4.8 RX-51 N900';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Maemo Browser", version: "1.7.4.8", major: "1"}

console.log(browser.is(BrowserName.MAEMO));
// true
```
