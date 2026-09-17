[`← Browser Name`](../name.md)

# QQBrowserLite

- **Developer:** Tencent
- **Platforms:** macOS
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

QQBrowserLite is a lightweight edition of Tencent's QQ Browser.

## Related Browsers

UAParser.js detects the main QQ browser and its lighter edition separately:

| Browser | Description |
| --- | --- |
| [`QQBrowser`](./qq.md) | Tencent's main QQ web browser. |
| [`QQBrowserLite`](./qq-lite.md) | The lightweight version of QQ Browser. |

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0.1 Safari/602.2.14 QQBrowserLite/1.1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/602.2.14 (KHTML, like Gecko) Version/10.0.1 Safari/602.2.14 QQBrowserLite/1.1.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "QQBrowserLite", version: "1.1.0", major: "1"}

console.log(browser.is(BrowserName.QQ_LITE));
// true
```
