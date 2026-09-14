[`← Browser Name`](../name.md)

# Instagram

- **Developer:** Meta
- **Development Status:** Active
- **Released:** 2010
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Instagram is Meta's photo and video sharing app with an integrated web browser.

## Related Browsers

UAParser.js detects these as separate in-app browsers from Meta apps:

| Browser | Description |
| --- | --- |
| [`Facebook`](./facebook.md) | The in-app browser used by the Facebook app. |
| [`Instagram`](./instagram.md) | The in-app browser used by the Instagram app. |

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 142.0.0.22.109 (iPhone12,5; iOS 14_1; en_US; en-US; scale=3.00; 1242x2688; 214888322) NW/1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 142.0.0.22.109 (iPhone12,5; iOS 14_1; en_US; en-US; scale=3.00; 1242x2688; 214888322) NW/1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Instagram", version: "142.0.0.22.109", major: "142", type: "inapp"}

console.log(browser.is(BrowserName.INSTAGRAM));
// true
```
