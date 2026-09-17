[`← Browser Name`](../name.md)

# Nokia Browser

- **Developer:** Nokia
- **Development Status:** Discontinued
- **Released:** 2005
- **Platforms:** Symbian
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Nokia Browser was a mobile web browser bundled with Nokia phones.

## Related Browsers

These browsers were developed for Nokia devices and platforms:

| Browser | Description |
| --- | --- |
| [`Go Browser`](./go.md) | A browser found on older Nokia phones. |
| [`Maemo Browser`](./maemo.md) | The browser for Nokia's Maemo platform. |
| [`Nokia Browser`](./nokia.md) | The browser bundled with Nokia phones. |
| [`Ovi Browser`](./ovi.md) | Nokia's data-saving browser for Series 40 phones. |

## User-Agent Examples

##### Symbian

```sh
Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/025.007; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.37 Mobile Safari/533.4 3gpp-gba
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/025.007; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.37 Mobile Safari/533.4 3gpp-gba';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "NokiaBrowser", version: "7.3.1.37", major: "7"}

console.log(browser.is(BrowserName.NOKIA));
// true
```
