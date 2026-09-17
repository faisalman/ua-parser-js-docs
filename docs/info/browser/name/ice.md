[`← Browser Name`](../name.md)

# ICEBrowser

- **Developer:** ICEsoft Technologies
- **Released:** 1996
- **Platforms:** Windows, macOS, Linux, Solaris
- **Type:** Browser

## Overview

ICEBrowser is a Java-based web browser developed by ICEsoft.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Java 1.6.0_01; Windows XP 5.1 x86; en) ICEbrowser/v6_1_2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Java 1.6.0_01; Windows XP 5.1 x86; en) ICEbrowser/v6_1_2';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "ICEbrowser", version: "6.1.2", major: "6"}

console.log(browser.is(BrowserName.ICE));
// true
```
