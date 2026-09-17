[`← Browser Name`](../name.md)

# Safari

- **Developer:** Apple
- **Development Status:** Active
- **Released:** 2003
- **Platforms:** Windows, macOS
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Safari is Apple's web browser for macOS, iPhone, and iPad.

## Related Browsers

UAParser.js detects Apple's desktop and mobile Safari browsers separately:

| Browser | Description |
| --- | --- |
| [`Safari`](./safari.md) | Apple's desktop browser for macOS. |
| [`Safari Mobile`](./mobile-safari.md) | Apple's Safari browser for mobile devices. |

## History

Safari was once available for Windows, but Apple no longer updates it on non-Apple operating systems. Safari 5.1.7 was the final Windows release, so Windows Safari user agents are now historical.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8
```

##### macOS

```sh
# Safari < 3.0
Mozilla/5.0 (Macintosh; U; PPC Mac OS X; sv-se) AppleWebKit/419 (KHTML, like Gecko) Safari/419.3
# Safari including comma in minor version number
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6,2 Safari/605.1.15
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Safari", version: "5.0.1", major: "5"}

console.log(browser.is(BrowserName.SAFARI));
// true
```
