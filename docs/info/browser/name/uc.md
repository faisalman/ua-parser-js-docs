[`← Browser Name`](../name.md)

# UC Browser

- **Developer:** UCWeb (Alibaba Group)
- **Development Status:** Active
- **Released:** 2004
- **Platforms:** Windows, Windows Mobile, Windows Phone, Android, iOS, Symbian, Tizen, Bada, KaiOS, Fire OS, ChromeOS, Linux, BlackBerry OS, Java ME
- **Type:** Browser
- **Rendering Engine:** Trident (Windows compatibility mode), WebKit (older and iOS releases), Blink (newer releases)

## Overview

UC Browser is a cross-platform web browser developed by UCWeb.

## Desktop

## Related Browsers

These browsers are developed by UCWeb:

| Browser | Description |
| --- | --- |
| [`UC Browser`](./uc.md) | UCWeb's main cross-platform browser. |
| [`Quark`](./quark.md) | UCWeb's mobile browser and search app. |

## User-Agent Examples

```sh
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 UBrowser/5.6.12860.7 Safari/537.36
```

## Mobile

```sh
Mozilla/5.0 (Linux; U; Android 6.0.1; en-US; Lenovo P2a42 Build/MMB29M) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.2.0.915 U3/0.8.0 Mobile Safari/534.30
Mozilla/5.0 (Java; U; Pt-br; samsung-gt-s5620) UCBrowser8.2.1.144/69/352/UCWEB Mobile UNTRUSTED/1.0
Mozilla/5.0 (S60V3; U; en-in; NokiaN73)/UC Browser8.4.0.159/28/351/UCWEB Mobile
UCWEB/2.0 (MIDP-2.0; U; zh-CN; HTC EVO 3D X515m) U2/1.0.0 UCBrowser/10.4.0.558 U2/1.0.0 Mobile
JUC (Linux; U; 2.3.5; zh-cn; GT-I9100; 480*800) UCWEB7.9.0.94/139/800
```

##### Windows

```sh
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 UCPC/1.1.0.12
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 UBrowser/5.6.12860.7 Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "UCBrowser", version: "5.6.12860.7", major: "5"}

console.log(browser.is(BrowserName.UC));
// true
```
