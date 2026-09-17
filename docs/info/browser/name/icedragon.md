[`← Browser Name`](../name.md)

# IceDragon

- **Developer:** Comodo
- **Development Status:** Discontinued
- **Released:** 2012
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Comodo IceDragon was a security-focused browser based on Firefox.

## Related Browsers

These security-focused browsers are developed by Comodo:

| Browser | Description |
| --- | --- |
| [`Dragon`](./dragon.md) | Comodo's Chromium-based browser. |
| [`IceDragon`](./icedragon.md) | Comodo's Firefox-based browser. |

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0 IceDragon 52.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0 IceDragon 52.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "IceDragon", version: "52.0", major: "52"}

console.log(browser.is(BrowserName.ICEDRAGON));
// true
```
