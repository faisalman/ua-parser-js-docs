[`← Browser Name`](../name.md)

# Safari Mobile

- **Developer:** Apple
- **Development Status:** Active
- **Released:** 2007
- **Platforms:** iOS
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Mobile Safari is Apple's web browser for iPhone and iPad.

## Related Browsers

UAParser.js detects Apple's desktop and mobile Safari browsers separately:

| Browser | Description |
| --- | --- |
| [`Safari`](./safari.md) | Apple's desktop browser for macOS. |
| [`Safari Mobile`](./mobile-safari.md) | Apple's Safari browser for mobile devices. |

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7
Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)  Mobile/15E148 Safari/604.1
# Mobile Safari including comma in minor version number
Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6,2 Mobile/15E148 Safari/604.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Mobile Safari", version: "4.0.5", major: "4"}

console.log(browser.is(BrowserName.SAFARI_MOBILE));
// true
```
