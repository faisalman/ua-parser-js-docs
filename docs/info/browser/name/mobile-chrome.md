[`← Browser Name`](../name.md)

# Chrome Mobile

- **Developer:** Google (Alphabet)
- **Development Status:** Active
- **Released:** 2012
- **Platforms:** Android, iOS
- **Type:** Browser
- **Rendering Engine:** WebKit (iOS and Android before version 28), Blink (Android since version 28)

## Overview

Mobile Chrome refers to Google's mobile browser, officially distributed as `Chrome for Android` and `Chrome for iOS`.

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

##### Android

```sh
Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Galaxy Nexus Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Mobile Safari/535.7
Mozilla/5.0 (Linux; Android 7.1.2; Nexus 5X Build/N2G47W) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.83 Mobile Safari/537.36
```

##### iOS

```sh
Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Mobile Chrome", version: "19.0.1084.60", major: "19"}

console.log(browser.is(BrowserName.CHROME_MOBILE));
// true
```
