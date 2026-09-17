[`← Browser Name`](../name.md)

# Oculus Browser

- **Developer:** Meta
- **Development Status:** Active
- **Released:** 2017
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Oculus Browser, now called Meta Quest Browser, is the web browser for Meta Quest headsets.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 7.0; SM-G920I Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/3.4.9 SamsungBrowser/4.0 Chrome/57.0.2987.146 Mobile VR Safari/537.36
Mozilla/5.0 (Linux; Android 10; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/15.0.0.0.22.280317669 SamsungBrowser/4.0 Chrome/89.0.4389.90 VR Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 7.0; SM-G920I Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/3.4.9 SamsungBrowser/4.0 Chrome/57.0.2987.146 Mobile VR Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Oculus Browser", version: "3.4.9", major: "3"}

console.log(browser.is(BrowserName.OCULUS));
// true
```
