[`← Browser Name`](../name.md)

# GSA (Google Search App)

- **Developer:** Google
- **Development Status:** Active
- **Released:** 2008
- **Platforms:** iOS
- **Type:** In-app Browser
- **Rendering Engine:** WebKit

## Overview

The Google Search App provides Google search and an integrated browser on mobile devices.

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) GSA/30.1.161623614 Mobile/14F89 Safari/602.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) GSA/30.1.161623614 Mobile/14F89 Safari/602.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "GSA", version: "30.1.161623614", major: "30", type: "inapp"}

console.log(browser.is(BrowserName.GOOGLE_SEARCH));
// true
```
