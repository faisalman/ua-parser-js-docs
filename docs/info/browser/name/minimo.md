[`← Browser Name`](../name.md)

# Minimo

- **Developer:** Mozilla
- **Development Status:** Discontinued
- **Released:** 2004
- **Platforms:** Linux, Windows Mobile
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Minimo was Mozilla's lightweight web browser for mobile devices.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux armv6l; rv 1.8.1.5pre) Gecko/20070619 Minimo/0.020
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux armv6l; rv 1.8.1.5pre) Gecko/20070619 Minimo/0.020';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Minimo", version: "0.020", major: "0"}

console.log(browser.is(BrowserName.MINIMO));
// true
```
