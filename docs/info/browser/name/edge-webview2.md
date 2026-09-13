[`← Browser Name`](../name.md)

# Edge WebView2

- **Developer:** Microsoft
- **Development Status:** Active
- **Released:** 2019
- **Platforms:** Windows, Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Edge WebView2 is Microsoft's embedded web control powered by the Chromium-based Edge runtime.

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

##### Android

```sh
Mozilla/5.0 (Linux; Android 11; SM-G991B Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.120 Mobile Safari/537.36 EdgW/1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 11; SM-G991B Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.120 Mobile Safari/537.36 EdgW/1.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Edge WebView2", version: "91.0.4472.120", major: "91", type: "inapp"}

console.log(browser.is(BrowserName.EDGE_WEBVIEW2));
// true
```
