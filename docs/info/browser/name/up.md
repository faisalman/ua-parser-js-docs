[`← Browser Name`](../name.md)

# UP.Browser

- **Developer:** Openwave
- **Development Status:** Discontinued
- **Released:** 1996
- **Platforms:** Java ME, BREW
- **Type:** Browser

## Overview

UP.Browser was a mobile web browser developed by Openwave.

## User-Agent Examples

```sh
BenQ-CF61/1.00/WAP2.0/MIDP2.0/CLDC1.0 UP.Browser/6.3.0.4.c.1.102 (GUI) MMP/2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'BenQ-CF61/1.00/WAP2.0/MIDP2.0/CLDC1.0 UP.Browser/6.3.0.4.c.1.102 (GUI) MMP/2.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "UP.Browser", version: "6.3.0.4.c.1.102", major: "6"}

console.log(browser.is(BrowserName.UP));
// true
```
