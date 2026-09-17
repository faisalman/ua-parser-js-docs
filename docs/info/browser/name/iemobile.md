[`← Browser Name`](../name.md)

# IE Mobile

- **Developer:** Microsoft
- **Development Status:** Discontinued
- **Released:** 1996
- **Platforms:** Windows Mobile, Windows Phone
- **Type:** Browser
- **Rendering Engine:** Trident

## Overview

Internet Explorer Mobile was Microsoft's web browser for Windows Mobile devices.

## Related Browsers

UAParser.js separates Microsoft's legacy, current, mobile, and embedded browser identities:

| Browser | Description |
| --- | --- |
| [`IE`](./ie.md) | Microsoft's legacy browser, replaced by Edge. |
| [`IE Mobile`](./iemobile.md) | The former mobile version of Internet Explorer. |
| [`Edge`](./edge.md) | Microsoft's browser that replaced Internet Explorer. |
| [`Edge WebView`](./edge-webview.md) | The embedded web control from the legacy Edge platform. |
| [`Edge WebView2`](./edge-webview2.md) | The modern web control powered by the Edge Chromium runtime. |

## User-Agent Examples

##### Windows Mobile

```sh
Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.1 Standard
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) 320x240; VZW; Motorola-Q9c; Windows Mobile 6.1 Standard';

console.log(parser.setUA(ua).getBrowser());
// {name: "IEMobile", version: "7.11", major: "7"}
```
