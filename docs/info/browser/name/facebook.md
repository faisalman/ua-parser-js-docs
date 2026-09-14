[`← Browser Name`](../name.md)

# Facebook

- **Developer:** Meta
- **Development Status:** Active
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Facebook is Meta's social networking app with an integrated web browser.

## Related Browsers

UAParser.js detects these as separate in-app browsers from Meta apps:

| Browser | Description |
| --- | --- |
| [`Facebook`](./facebook.md) | The in-app browser used by the Facebook app. |
| [`Instagram`](./instagram.md) | The in-app browser used by the Instagram app. |

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/35.0.0.48.273;]
```

##### iOS

```sh
# Facebook in-App Browser for iOS with version
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E304 [FBAN/FBIOS;FBAV/91.0.0.41.73;FBBV/57050710;FBDV/iPhone8,1;FBMD/iPhone;FBSN/iOS;FBSV/10.3.1;FBSS/2;FBCR/Telekom.de;FBID/phone;FBLC/de_DE;FBOP/5;FBRV/0])

# Facebook in-App Browser for iOS without version
Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone10,2;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/35.0.0.48.273;]';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Facebook", version: "35.0.0.48.273", major: "35", type: "inapp"}

console.log(browser.is(BrowserName.FACEBOOK));
// true
```
