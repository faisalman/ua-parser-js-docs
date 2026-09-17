[`← Browser Name`](../name.md)

# Sleipnir

- **Developer:** Fenrir
- **Development Status:** Active
- **Released:** 2004
- **Platforms:** Windows, macOS, Windows Phone, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Trident and Gecko (older Windows releases), WebKit and Blink (newer releases)

## Overview

Sleipnir is a cross-platform web browser developed by Fenrir.

## User-Agent Examples

##### Windows

```sh
Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Sleipnir 2.8.4)
Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.1; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022) Sleipnir/2.8.4
```

##### Android

```sh
Mozilla/5.0 (Linux; Android 10; SOV37 Build/52.1.C.0.220; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.6312.120 Mobile Safari/537.36 Sleipnir/3.7.5
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Sleipnir 2.8.4)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Sleipnir", version: "2.8.4", major: "2"}

console.log(browser.is(BrowserName.SLEIPNIR));
// true
```
