[`← Browser Name`](../name.md)

# Chrome

- **Developer:** Google (Alphabet)
- **Development Status:** Active
- **Released:** 2008
- **Platforms:** Windows, macOS, Linux, ChromeOS
- **Type:** Browser
- **Rendering Engine:** WebKit (before version 28), Blink (since version 28)

## Overview

Google Chrome is a cross-platform web browser developed by Google.

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

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
```

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4758.102 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
```

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
```

##### ChromeOS

```sh
Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Chrome", version: "20.0.1090.0", major: "20"}

console.log(browser.is(BrowserName.CHROME));
// true
```
