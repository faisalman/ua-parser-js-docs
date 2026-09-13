[`← Browser Name`](../name.md)

# WebKit

- **Developer:** The WebKit Project (Apple)
- **Development Status:** Active
- **Released:** 2005
- **Platforms:** macOS, iOS, Linux, Windows
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

WebKit is an open-source browser engine used by Safari and other applications. UAParser.js reports a generic WebKit user agent as `WebKit` when it cannot identify a more specific browser.

## User-Agent Examples

##### Cross-platform

```sh
Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "WebKit", version: "537.36", major: "537"}

console.log(browser.is(BrowserName.WEBKIT));
// true
```
