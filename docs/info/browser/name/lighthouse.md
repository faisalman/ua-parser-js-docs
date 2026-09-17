[`← Browser Name`](../name.md)

# Lighthouse

- **Developer:** Google
- **Development Status:** Active
- **Released:** 2016
- **Platforms:** Windows, macOS, Linux
- **Type:** In-app Browser
- **Rendering Engine:** Blink

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4590.2 Mobile Safari/537.36 Chrome-Lighthouse
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4590.2 Mobile Safari/537.36 Chrome-Lighthouse';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Lighthouse", type: "fetcher"}

console.log(browser.is(BrowserName.LIGHTHOUSE));
// true
```
