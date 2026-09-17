[`← Browser Name`](../name.md)

# Flow

- **Developer:** Ekioh
- **Development Status:** Active
- **Released:** 2020
- **Platforms:** Windows, macOS, Linux, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Flow

## Overview

Flow is a web browser developed by Ekioh around its own browser engine.

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) EkiohFlow/5.7.4.30559 Flow/5.7.4 (like Gecko Firefox/53.0 rv:53.0)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) EkiohFlow/5.7.4.30559 Flow/5.7.4 (like Gecko Firefox/53.0 rv:53.0)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Flow", version: "5.7.4", major: "5"}

console.log(browser.is(BrowserName.FLOW));
// true
```
