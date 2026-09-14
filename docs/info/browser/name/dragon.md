[`← Browser Name`](../name.md)

# Dragon

- **Developer:** Comodo
- **Development Status:** Active
- **Released:** 2010
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** WebKit (before Chromium 28), Blink (since Chromium 28)

## Overview

Comodo Dragon is a security-focused Chromium-based web browser from Comodo.

## Related Browsers

These security-focused browsers are developed by Comodo:

| Browser | Description |
| --- | --- |
| [`Dragon`](./dragon.md) | Comodo's Chromium-based browser. |
| [`IceDragon`](./icedragon.md) | Comodo's Firefox-based browser. |

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.7 (KHTML, like Gecko) Comodo_Dragon/16.1.1.0 Chrome/16.0.912.63 Safari/535.7
Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Dragon/98.0.4758.102 Chrome/98.0.4758.102 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/535.7 (KHTML, like Gecko) Comodo_Dragon/16.1.1.0 Chrome/16.0.912.63 Safari/535.7';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Dragon", version: "16.1.1.0", major: "16"}

console.log(browser.is(BrowserName.DRAGON));
// true
```
