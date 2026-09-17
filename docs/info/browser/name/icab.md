[`← Browser Name`](../name.md)

# iCab

- **Developer:** Alexander Clauss
- **Development Status:** Active
- **Released:** 1999
- **Platforms:** macOS, iOS
- **Type:** Browser
- **Rendering Engine:** Proprietary (early releases), WebKit (since version 4)

## Overview

iCab is a web browser developed for Apple platforms.

## User-Agent Examples

##### macOS

```sh
iCab/2.9.5 (Macintosh; U; PPC; Mac OS X)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'iCab/2.9.5 (Macintosh; U; PPC; Mac OS X)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "iCab", version: "2.9.5", major: "2"}

console.log(browser.is(BrowserName.ICAB));
// true
```
