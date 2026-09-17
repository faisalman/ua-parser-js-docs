[`← Browser Name`](../name.md)

# LieBao Browser

- **Developer:** Cheetah Mobile
- **Development Status:** Active
- **Released:** 2012
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Trident (compatibility mode), WebKit (older releases), Blink (newer releases)

## Overview

LieBao Browser is a web browser developed by Cheetah Mobile.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.154 Safari/537.36 LBBROWSER
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.154 Safari/537.36 LBBROWSER';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "LBBROWSER"}

console.log(browser.is(BrowserName.LIEBAO));
// true
```
