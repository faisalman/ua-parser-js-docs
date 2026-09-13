[`← Browser Name`](../name.md)

# Edge WebView

- **Developer:** Microsoft
- **Development Status:** Replaced by [Edge WebView2](./edge-webview2.md)
- **Released:** 2015
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** EdgeHTML

## Overview

Edge WebView was Microsoft's embedded web control based on the legacy EdgeHTML version of Edge.

## Related Browsers

UAParser.js separates Microsoft's legacy, current, mobile, and embedded browser identities:

| Browser | Relationship |
| --- | --- |
| [`IE`](./ie.md) | Microsoft's legacy browser, replaced by Edge. |
| [`IE Mobile`](./iemobile.md) | The former mobile version of Internet Explorer. |
| [`Edge`](./edge.md) | Microsoft's browser that replaced Internet Explorer. |
| [`Edge WebView`](./edge-webview.md) | The embedded web control from the legacy Edge platform. |
| [`Edge WebView2`](./edge-webview2.md) | The modern web control powered by the Edge Chromium runtime. |

## User-Agent Examples

##### Windows IoT

```sh
Mozilla/5.0 (Windows IoT 10.0; Android 6.0.1; WebView/3.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Mobile Safari/537.36 Edge/18.17763
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows IoT 10.0; Android 6.0.1; WebView/3.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Mobile Safari/537.36 Edge/18.17763';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Edge WebView", version: "18.17763", major: "18", type: "inapp"}

console.log(browser.is(BrowserName.EDGE_WEBVIEW));
// true
```
