[`← Browser Name`](../name.md)

# Ovi Browser

- **Developer:** Nokia
- **Development Status:** Discontinued
- **Released:** 2010
- **Platforms:** Series 40
- **Type:** Browser

## Overview

Ovi Browser was Nokia's proxy-based web browser for Series 40 phones.

## Related Browsers

These browsers were developed for Nokia devices and platforms:

| Browser | Description |
| --- | --- |
| [`Go Browser`](./go.md) | A browser found on older Nokia phones. |
| [`Maemo Browser`](./maemo.md) | The browser for Nokia's Maemo platform. |
| [`Nokia Browser`](./nokia.md) | The browser bundled with Nokia phones. |
| [`Ovi Browser`](./ovi.md) | Nokia's data-saving browser for Series 40 phones. |

## User-Agent Examples

##### Series40

```sh
Mozilla/5.0 (Series40; NokiaX3-02/le6.32; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/1.0.0.11.8
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Series40; NokiaX3-02/le6.32; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/1.0.0.11.8';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "OviBrowser", version: "1.0.0.11.8", major: "1"}

console.log(browser.is(BrowserName.OVI));
// true
```
