[`← Browser Name`](../name.md)

# Chromium

- **Developer:** The Chromium Project (Google)
- **Development Status:** Active
- **Released:** 2008
- **Platforms:** Windows, macOS, Linux, Android, ChromeOS
- **Type:** Browser
- **Rendering Engine:** WebKit (before version 28), Blink (since version 28)

## Overview

Chromium is the open-source browser project that underpins Google Chrome and many other browsers.

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

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.7 (KHTML, like Gecko) Ubuntu/11.10 Chromium/16.0.912.21 Chrome/16.0.912.21 Safari/535.7
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.7 (KHTML, like Gecko) Ubuntu/11.10 Chromium/16.0.912.21 Chrome/16.0.912.21 Safari/535.7';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Chromium", version: "16.0.912.21", major: "16"}

console.log(browser.is(BrowserName.CHROMIUM));
// true
```
