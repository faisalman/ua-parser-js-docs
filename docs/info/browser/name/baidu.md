[`← Browser Name`](../name.md)

# Baidu

- **Developer:** Baidu
- **Development Status:** Discontinued
- **Released:** 2011
- **Platforms:** Windows, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Trident (compatibility mode), WebKit (old releases), Blink

## Overview

Baidu Browser is a web browser developed by Baidu.

## Desktop

## User-Agent Examples

##### Windows

```sh
Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; baidubrowser 1.x)
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 BIDUBrowser/8.7 Safari/537.36
```

## Mobile

##### Android

```sh
Mozilla/5.0 (Linux; Android 9; Redmi Note 5 Build/PKQ1.180904.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/110.0.5481.153 Mobile Safari/537.36 bdbrowser/6.4.0.4
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.4.9999.1900 Safari/537.31 BDSpark/26.4
Mozilla/5.0 (Linux; Android 8.1.0; BKK-AL10 Build/HONORBKK-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/11.11 baiduboxapp/11.11.0.0 (Baidu; P1 8.1.0)
```

##### iOS
```sh
Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) BaiduHD/5.4.0.0 Mobile/10A406 Safari/8536.25
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C101 main%2F1.0 baiduboxapp/11.12.0.18 (Baidu; P2 12.1.2)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; baidubrowser 1.x)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Baidu", version: "1.x", major: "1"}

console.log(browser.is(BrowserName.BAIDU));
// true
```
