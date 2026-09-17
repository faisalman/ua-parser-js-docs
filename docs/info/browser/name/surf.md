[`← Browser Name`](../name.md)

# Surf Browser

- **Released:** 2009
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Android 6.0; HUAWEI ALE-L21) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 SurfBrowser/3.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Android 6.0; HUAWEI ALE-L21) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 SurfBrowser/3.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Surf", version: "3.0", major: "3"}

console.log(browser.is(BrowserName.SURF));
// true
```
