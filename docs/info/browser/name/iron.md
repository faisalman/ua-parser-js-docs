[`← Browser Name`](../name.md)

# Iron

- **Developer:** SRWare
- **Development Status:** Active
- **Released:** 2008
- **Platforms:** Windows, macOS, Linux, Android
- **Type:** Browser
- **Rendering Engine:** WebKit (before Chromium 28), Blink (since Chromium 28)

## Overview

SRWare Iron is a privacy-oriented web browser based on Chromium.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1250.0 Iron/22.0.2150.0 Safari/537.4
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Iron Safari/537.36
```

##### Android

```sh
Mozilla/5.0 (Linux; Android 11; Pixel 4 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Iron Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1250.0 Iron/22.0.2150.0 Safari/537.4';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Iron", version: "22.0.2150.0", major: "22"}

console.log(browser.is(BrowserName.IRON));
// true
```
