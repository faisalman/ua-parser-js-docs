[`← Browser Name`](../name.md)

# Android Browser

- **Developer:** Google (Alphabet)
- **Development Status:** Discontinued
- **Released:** 2008
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Android Browser was the stock web browser included with early Android releases.

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

Android Browser came with early open-source Android releases. Google made [Mobile Chrome](./mobile-chrome.md) the standard browser on the Nexus 7 in 2012, but other manufacturers kept using Android Browser or their own browsers, so the change did not happen everywhere at once.

## User-Agent Examples

##### Android

```sh
# Android Browser on Galaxy Nexus
Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30

# Android Browser on Galaxy S3
Mozilla/5.0 (Linux; Android 4.4.4; en-us; SAMSUNG GT-I9300I Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36

# Android Browser on HTC Flyer (P510E)
Mozilla/5.0 (Linux; U; Android 3.2.1; ru-ru; HTC Flyer P510e Build/HTK75C) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13

# Android Browser on Huawei Honor Glory II (U9508)
Mozilla/5.0 (Linux; U; Android 4.0.4; ru-by; HUAWEI U9508 Build/HuaweiU9508) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 ACHEETAHI/2100050044

#Android Browser on Huawei P8 (H891L)
Mozilla/5.0 (Linux; Android 4.4.4; HUAWEI H891L Build/HuaweiH891L) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36

# Android Browser on Samsung S6 (SM-G925F)
Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.0 Chrome/38.0.2125.102 Mobile Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Android Browser", version: "4.0", major: "4"}

console.log(browser.is(BrowserName.ANDROID));
// true
```
