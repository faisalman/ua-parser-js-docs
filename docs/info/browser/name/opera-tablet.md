[`← Browser Name`](../name.md)

# Opera Tablet

- **Developer:** Opera
- **Development Status:** Discontinued
- **Released:** 2011
- **Platforms:** Android, Windows
- **Type:** Browser
- **Rendering Engine:** Presto

## Overview

Opera Tablet was a version of Opera's mobile browser optimized for tablets.

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

## User-Agent Examples

##### Windows

```sh
Opera/9.80 (Windows NT 6.1; Opera Tablet/15165; U; en) Presto/2.8.149 Version/11.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Opera/9.80 (Windows NT 6.1; Opera Tablet/15165; U; en) Presto/2.8.149 Version/11.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Opera Tablet", version: "11.1", major: "11"}

console.log(browser.is(BrowserName.OPERA_TABLET));
// true
```
