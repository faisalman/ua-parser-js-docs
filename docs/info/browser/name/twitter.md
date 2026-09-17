[`← Browser Name`](../name.md)

# Twitter

- **Developer:** X Corp.
- **Development Status:** Active
- **Released:** 2006
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Twitter is a social networking app with an integrated web browser.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 13; CPH2531 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.6312.120 Mobile Safari/537.36 TwitterAndroid
```

##### iOS

```sh
Mozilla/5.0 (iPad; CPU OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19H12 Twitter for iPhone/10.34
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 13; CPH2531 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.6312.120 Mobile Safari/537.36 TwitterAndroid';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Twitter", type: "inapp"}

console.log(browser.is(BrowserName.TWITTER));
// true
```
