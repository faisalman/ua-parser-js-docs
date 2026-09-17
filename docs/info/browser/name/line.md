[`← Browser Name`](../name.md)

# LINE

- **Developer:** LY Corporation
- **Development Status:** Active
- **Released:** 2011
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

LINE is a messaging and social app with an integrated web browser.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 5.0; ASUS_Z00AD Build/LRX21V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36 Line/6.5.1/IAB
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_6 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) Mobile/15D100 Safari Line/8.4.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 5.0; ASUS_Z00AD Build/LRX21V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36 Line/6.5.1/IAB';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Line", version: "6.5.1", major: "6", type: "inapp"}

console.log(browser.is(BrowserName.LINE));
// true
```
