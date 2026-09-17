[`← Browser Name`](../name.md)

# HeyTap

- **Developer:** OPPO
- **Development Status:** Active
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

HeyTap Browser is a mobile web browser for devices in the OPPO ecosystem.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.61 Safari/537.36 HeyTapBrowser/40.8.10.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.61 Safari/537.36 HeyTapBrowser/40.8.10.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "HeyTap", version: "40.8.10.1", major: "40"}

console.log(browser.is(BrowserName.HEYTAP));
// true
```
