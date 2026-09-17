[`← Browser Name`](../name.md)

# Mosaic

- **Developer:** NCSA
- **Development Status:** Discontinued
- **Released:** 1993
- **Platforms:** Windows, macOS, Unix
- **Type:** Browser
- **Rendering Engine:** Mosaic

## Overview

NCSA Mosaic was an early graphical web browser that helped popularize the World Wide Web.

## User-Agent Examples

##### Solaris

```sh
NCSA_Mosaic/2.6 (X11; SunOS 4.1.3 sun4m)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'NCSA_Mosaic/2.6 (X11; SunOS 4.1.3 sun4m)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Mosaic", version: "2.6", major: "2"}

console.log(browser.is(BrowserName.MOSAIC));
// true
```
