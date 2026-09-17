[`← Browser Name`](../name.md)

# NetFront

- **Developer:** ACCESS
- **Development Status:** Active
- **Released:** 1995
- **Platforms:** Windows CE, Symbian, Linux, Android
- **Type:** Browser
- **Rendering Engine:** NetFront

## Overview

NetFront is an embedded web browser developed by ACCESS for mobile and consumer devices.

## User-Agent Examples

##### Windows CE

```sh
Mozilla/4.0 (PDA; Windows CE/1.0.1) NetFront/3.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (PDA; Windows CE/1.0.1) NetFront/3.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "NetFront", version: "3.0", major: "3"}

console.log(browser.is(BrowserName.NETFRONT));
// true
```
