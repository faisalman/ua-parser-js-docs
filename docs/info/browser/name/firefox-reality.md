[`← Browser Name`](../name.md)

# Firefox Reality

- **Developer:** Mozilla
- **Development Status:** Replaced by [Wolvic](./wolvic.md)
- **Released:** 2018
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Firefox Reality was Mozilla's web browser for virtual and augmented reality headsets.

## Related Browsers

Wolvic continues the Firefox Reality project for virtual and mixed reality devices:

| Browser | Description |
| --- | --- |
| [`Firefox Reality`](./firefox-reality.md) | Mozilla's former browser for virtual and augmented reality headsets. |
| [`Wolvic`](./wolvic.md) | The browser that continues the Firefox Reality project. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Android 7.1.2; Mobile VR; rv:65.0) Gecko/65.0 Firefox/65.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Android 7.1.2; Mobile VR; rv:65.0) Gecko/65.0 Firefox/65.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Firefox Reality", version: "65.0", major: "65"}

console.log(browser.is(BrowserName.FIREFOX_REALITY));
// true
```
