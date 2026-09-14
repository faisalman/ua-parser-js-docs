[`← Browser Name`](../name.md)

# Chrome WebView

- **Developer:** Google (Alphabet)
- **Development Status:** Active
- **Released:** 2013
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Chrome WebView is Android's Chromium-based component for displaying web content inside apps.

## Related Browsers

UAParser.js detects these related browser products and projects separately:

| Browser | Description |
| --- | --- |
| [`Chrome`](./chrome.md) | The standard desktop version of Chrome. |
| [`Chrome Mobile`](./mobile-chrome.md) | Chrome's standalone browser for Android and iOS. |
| [`Chrome WebView`](./chrome-webview.md) | A browser component for showing web content inside Android apps. |
| [`Chrome Headless`](./chrome-headless.md) | Chrome without a graphical interface, commonly used for automation. |
| [`Chromium`](./chromium.md) | The open-source browser project behind Chrome. |
| [`Android Browser`](./android.md) | The stock browser included with early Android releases. |

## History

Android changed WebView to a [Chromium](./chromium.md)-based implementation in Android 4.4. This affected the component used inside apps, not the standalone [Chrome Mobile](./mobile-chrome.md) browser.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Chrome WebView", version: "43.0.2357.65", major: "43", type: "inapp"}

console.log(browser.is(BrowserName.CHROME_WEBVIEW));
// true
```
