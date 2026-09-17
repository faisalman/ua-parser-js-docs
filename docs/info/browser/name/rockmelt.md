[`← Browser Name`](../name.md)

# RockMelt

- **Developer:** Rockmelt
- **Development Status:** Discontinued
- **Released:** 2010
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

RockMelt was a Chromium-based web browser centered on social networking.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) RockMelt/0.8.36.78 Chrome/7.0.517.44 Safari/534.7
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) RockMelt/0.8.36.78 Chrome/7.0.517.44 Safari/534.7';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "RockMelt", version: "0.8.36.78", major: "0"}

console.log(browser.is(BrowserName.ROCKMELT));
// true
```
