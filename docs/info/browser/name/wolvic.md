[`← Browser Name`](../name.md)

# Wolvic

- **Developer:** Igalia
- **Development Status:** Active
- **Released:** 2022
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Wolvic is an open-source web browser for virtual and mixed reality devices.

## Related Browsers

Wolvic continues the Firefox Reality project for virtual and mixed reality devices:

| Browser | Description |
| --- | --- |
| [`Firefox Reality`](./firefox-reality.md) | Mozilla's former browser for virtual and augmented reality headsets. |
| [`Wolvic`](./wolvic.md) | The browser that continues the Firefox Reality project. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Android 12; Mobile VR; rv:121.0) Gecko/121.0 Firefox/121.0 Wolvic/1.6.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Android 12; Mobile VR; rv:121.0) Gecko/121.0 Firefox/121.0 Wolvic/1.6.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Wolvic", version: "1.6.1", major: "1"}

console.log(browser.is(BrowserName.WOLVIC));
// true
```
