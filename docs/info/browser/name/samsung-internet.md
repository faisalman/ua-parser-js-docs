[`← Browser Name`](../name.md)

# Samsung Internet

- **Developer:** Samsung Electronics (Samsung Group)
- **Development Status:** Active
- **Released:** 2012
- **Platforms:** Windows, Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Samsung Internet is a Chromium-based mobile web browser developed by Samsung.

## Related Browsers

These browsers were developed for Samsung devices and platforms:

| Browser | Description |
| --- | --- |
| [`Jasmine`](./jasmine.md) | Samsung's browser for older mobile devices. |
| [`Samsung Internet`](./samsung-internet.md) | Samsung's current mobile browser. |
| [`Tizen Browser`](./tizen.md) | The browser included with Tizen devices. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.0 Chrome/38.0.2125.102 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG-SM-G925A Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile Safari/537.36
Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925K Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Mobile VR Safari/537.36
Mozilla/5.0 (Linux; Android 10; Redmi 8A) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36
```

##### Tizen

```sh
Mozilla/5.0 (Linux; Tizen 2.3; SAMSUNG SM-Z130H) AppleWebKit/537.3 (KHTML, like Gecko) SamsungBrowser/1.0 Mobile Safari/537.3
Mozilla/5.0 (SMART-TV; Linux; Tizen 2.3) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.0 TV Safari/538.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-G925F Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.0 Chrome/38.0.2125.102 Mobile Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Samsung Internet", version: "3.0", major: "3"}

console.log(browser.is(BrowserName.SAMSUNG));
// true
```
