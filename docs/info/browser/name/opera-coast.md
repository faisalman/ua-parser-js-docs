[`← Browser Name`](../name.md)

# Opera Coast

- **Developer:** Opera
- **Development Status:** Discontinued
- **Released:** 2013
- **Platforms:** iOS
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Opera Coast was a touch-oriented mobile web browser developed by Opera.

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

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X; en) AppleWebKit/601.1.46 (KHTML, like Gecko) Coast/5.04.110603 Mobile/13F69 Safari/7534.48.3
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X; en) AppleWebKit/601.1.46 (KHTML, like Gecko) Coast/5.04.110603 Mobile/13F69 Safari/7534.48.3';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Opera Coast", version: "5.04.110603", major: "5"}

console.log(browser.is(BrowserName.OPERA_COAST));
// true
```
