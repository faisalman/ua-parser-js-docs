[`← Browser Name`](../name.md)

# Opera Mobile

- **Developer:** Opera
- **Development Status:** Replaced by [Opera](./opera.md)
- **Released:** 2000
- **Platforms:** Symbian, Windows Mobile, Maemo, MeeGo, Android
- **Type:** Browser
- **Rendering Engine:** Elektra (early releases), Presto (later releases)

## Overview

Opera Mobile was Opera's full-featured web browser for smartphones.

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

##### Android

```sh
Opera/9.80 (Android 2.3.5; Linux; Opera Mobi/ADR-1111101157; U; de) Presto/2.9.201 Version/11.50
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Opera/9.80 (Android 2.3.5; Linux; Opera Mobi/ADR-1111101157; U; de) Presto/2.9.201 Version/11.50';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Opera Mobi", version: "11.50", major: "11"}

console.log(browser.is(BrowserName.OPERA_MOBI));
// true
```
