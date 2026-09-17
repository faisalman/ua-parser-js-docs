[`← Browser Name`](../name.md)

# PhantomJS

- **Developer:** Ariya Hidayat and contributors
- **Development Status:** Discontinued
- **Released:** 2011
- **Platforms:** Windows, macOS, Linux
- **Type:** Headless Browser
- **Rendering Engine:** WebKit

## Overview

PhantomJS was a scriptable headless web browser based on WebKit.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.2 Safari/534.34
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.2 Safari/534.34';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "PhantomJS", version: "1.9.2", major: "1"}

console.log(browser.is(BrowserName.PHANTOMJS));
// true
```
