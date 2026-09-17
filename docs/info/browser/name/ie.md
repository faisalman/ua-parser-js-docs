[`← Browser Name`](../name.md)

# IE (Internet Explorer)

- **Developer:** Microsoft
- **Development Status:** Replaced by [Edge](./edge.md)
- **Released:** 1995
- **Platforms:** Windows, macOS
- **Type:** Browser
- **Rendering Engine:** Trident (Windows), Tasman (macOS)

## Overview

Internet Explorer was Microsoft's web browser for Windows.

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

Microsoft replaced Internet Explorer with [Edge](./edge.md) as its main Windows browser, with IE 11 as the last major version.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.1; WOW64; APCPMS=^N201205020840572565478A37A6F9C41BD33F_9975^; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; MARKANYEPS#25118; Zoom 3.6.0; rv:11.0) like Gecko
# IE 11 with IE token
Mozilla/5.0 (IE 11.0; Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko
# IE 11 without IE token
Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko
```

##### macOS

```sh
Mozilla/4.0 (compatible; MSIE 5.0b1; Mac_PowerPC)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64; APCPMS=^N201205020840572565478A37A6F9C41BD33F_9975^; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; MARKANYEPS#25118; Zoom 3.6.0; rv:11.0) like Gecko';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "IE", version: "11.0", major: "11"}

console.log(browser.is(BrowserName.IE));
// true
```
