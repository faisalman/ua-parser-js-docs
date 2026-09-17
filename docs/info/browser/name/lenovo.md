[`← Browser Name`](../name.md)

# Smart Lenovo Browser

- **Developer:** Lenovo
- **Development Status:** Active
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Smart Lenovo Browser is a web browser provided by Lenovo.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 SLBrowser/8.0.0.10171 SLBChan/8
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 SLBrowser/9.0.0.9011 SLBChan/10
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 SLBrowser/8.0.0.10171 SLBChan/8';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Smart Lenovo Browser", version: "8.0.0.10171", major: "8"}

console.log(browser.is(BrowserName.LENOVO));
// true
```
