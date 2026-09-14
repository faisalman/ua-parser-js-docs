[`← Browser Name`](../name.md)

# Edge

- **Developer:** Microsoft
- **Development Status:** Active
- **Released:** 2015
- **Platforms:** Windows, macOS, Linux, Android, iOS
- **Type:** Browser
- **Rendering Engine:** EdgeHTML (legacy Edge), Blink (desktop and Android), WebKit (iOS)

## Overview

Microsoft Edge is a cross-platform web browser developed by Microsoft.

## Related Browsers

UAParser.js separates Microsoft's legacy, current, mobile, and embedded browser identities:

| Browser | Description |
| --- | --- |
| [`IE`](./ie.md) | Microsoft's legacy browser, replaced by Edge. |
| [`IE Mobile`](./iemobile.md) | The former mobile version of Internet Explorer. |
| [`Edge`](./edge.md) | Microsoft's browser that replaced Internet Explorer. |
| [`Edge WebView`](./edge-webview.md) | The embedded web control from the legacy Edge platform. |
| [`Edge WebView2`](./edge-webview2.md) | The modern web control powered by the Edge Chromium runtime. |

## History

The original Edge used Microsoft's EdgeHTML engine. Microsoft replaced it with a [Chromium](./chromium.md)-based version in January 2020 and ended support for the old version in March 2021. The old browser uses `Edge/` in its user agent, while the newer one uses `Edg/`.

## Desktop

## User-Agent Examples

##### Windows

```sh
# Microsoft Edge 0.1
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0

# Microsoft Edge 42
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134

# Microsoft Edge 44
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763

# Microsoft Edge Chromium
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.48 Safari/537.36 Edg/74.1.96.24
```

##### macOS

```sh
# Microsoft Edge 100
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.1108.55 Safari/537.36 Edg/100.0.1108.55
```

## Mobile

##### Android

```sh
Mozilla/5.0 (Linux; Android 8.0.0; G8441 Build/47.1.A.12.270) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.123 Mobile Safari/537.36 EdgA/42.0.0.2529
Mozilla/5.0 (Linux; Android 11; SM-G991B Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.120 Mobile Safari/537.36 EdgW/1.0
```

##### iOS
```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 EdgiOS/42.1.1.0 Mobile/15F79 Safari/605.1.15
```

##### Windows IoT

```sh
Mozilla/5.0 (Windows IoT 10.0; Android 6.0.1; WebView/3.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Mobile Safari/537.36 Edge/18.17763
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Edge", version: "12.0", major: "12"}

console.log(browser.is(BrowserName.EDGE));
// true
```
