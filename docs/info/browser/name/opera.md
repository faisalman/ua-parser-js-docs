[`← Browser Name`](../name.md)

# Opera

- **Developer:** Opera
- **Development Status:** Active
- **Released:** 1995
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Presto (through version 12), Blink (since version 15)

## Overview

Opera is a cross-platform web browser developed by Opera.

## Related Browsers

UAParser.js detects these Opera products, editions, and historical mobile names separately:

| Browser | Description |
| --- | --- |
| [`Opera`](./opera.md) | Opera's main cross-platform browser. |
| [`Opera GX`](./opera-gx.md) | Opera's gaming-focused browser. |
| [`Opera Mini`](./opera-mini.md) | Opera's mobile browser focused on saving data. |
| [`Opera Mobile`](./opera-mobi.md) | The former mobile browser detected as `Opera Mobi` by UAParser.js. |
| [`Opera Tablet`](./opera-tablet.md) | The former tablet version of Opera Mobile. |
| [`Opera Touch`](./opera-touch.md) | Opera's mobile browser later renamed Opera Browser. |
| [`Opera Coast`](./opera-coast.md) | Opera's discontinued touch-focused mobile browser. |
| [`Opera Neon`](./opera-neon.md) | Opera's experimental concept browser. |

## History

Opera switched its desktop browser from the Presto engine to a [Chromium](./chromium.md)-based platform with Opera 15 in 2013. Its main user-agent identifier also changed from `Opera/` to `OPR/`.

## User-Agent Examples

##### Windows

```sh
# Opera < 9.80 on Windows
Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) Opera 6.01 [en]
```

##### macOS

```sh
# Opera < 9.80 on macOS
Opera/8.5 (Macintosh; PPC Mac OS X; U; en)
```

##### Linux

```sh
# Opera >= 9.80
Opera/9.80 (X11; Linux x86_64; U; Linux Mint; en) Presto/2.2.15 Version/10.10
```

```sh
# Opera >= 14
Mozilla/5.0 AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.123 Mobile Safari/537.22 OPR/14.0.1025.52315
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) Opera 6.01 [en]';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Opera", version: "6.01", major: "6"}

console.log(browser.is(BrowserName.OPERA));
// true
```
