[`← Browser Name`](../name.md)

# Bing

- **Developer:** Microsoft
- **Development Status:** Active
- **Released:** 2009
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Bing is Microsoft's search app with an integrated web browsing experience.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4893.0 Mobile Safari/537.36 BingWeb/6.9.12
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/605.1.15 BingSapphire/31.8.430522001
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4893.0 Mobile Safari/537.36 BingWeb/6.9.12';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Bing", version: "6.9.12", major: "6", type: "inapp"}

console.log(browser.is(BrowserName.BING));
// true
```
