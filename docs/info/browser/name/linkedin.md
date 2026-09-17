[`← Browser Name`](../name.md)

# LinkedIn

- **Developer:** Microsoft
- **Development Status:** Active
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

LinkedIn is Microsoft's professional networking app with an integrated web browser.

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [LinkedInApp]
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [LinkedInApp]';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "LinkedIn", type: "inapp"}

console.log(browser.is(BrowserName.LINKEDIN));
// true
```
