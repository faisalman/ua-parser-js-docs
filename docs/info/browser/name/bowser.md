[`← Browser Name`](../name.md)

# Bowser

- **Platforms:** iOS
- **Type:** Browser
- **Rendering Engine:** WebKit

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (iOS; like Mac OS X) AppleWebKit/536.36 (KHTML, like Gecko) not Chrome/27.0.1500.95 Mobile/10B141 Safari/537.36 Bowser/0.2.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iOS; like Mac OS X) AppleWebKit/536.36 (KHTML, like Gecko) not Chrome/27.0.1500.95 Mobile/10B141 Safari/537.36 Bowser/0.2.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Bowser", version: "0.2.1", major: "0"}

console.log(browser.is(BrowserName.BOWSER));
// true
```
