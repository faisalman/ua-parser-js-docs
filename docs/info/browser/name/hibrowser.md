[`← Browser Name`](../name.md)

# Hi Browser

- **Development Status:** Active
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Hi Browser is a mobile web browser for Android devices.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 14; en; TECNO BG6m Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 HiBrowser/v2.25.6.3;lang=es;nation=DO;locale=es_DO UWS/ Mobile Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 14; en; TECNO BG6m Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 HiBrowser/v2.25.6.3;lang=es;nation=DO;locale=es_DO UWS/ Mobile Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "HiBrowser", version: "2.25.6.3", major: "2"}

console.log(browser.is(BrowserName.HIBROWSER));
// true
```
