[`← Browser Name`](../name.md)

# MIUI Browser

- **Developer:** Xiaomi
- **Development Status:** Active
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

MIUI Browser is Xiaomi's web browser for its Android devices.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; U; Android 4.2.2; ru-ru; 2013023 Build/HM2013023) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 XiaoMi/MiuiBrowser/1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; U; Android 4.2.2; ru-ru; 2013023 Build/HM2013023) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 XiaoMi/MiuiBrowser/1.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "MIUI Browser", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.MIUI));
// true
```
