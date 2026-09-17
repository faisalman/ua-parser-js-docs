[`← Browser Name`](../name.md)

# Snapchat

- **Developer:** Snap Inc.
- **Development Status:** Active
- **Released:** 2011
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Snapchat is a multimedia messaging app with an integrated web browser.

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Snapchat/12.33.0.36 (like Safari/8614.1.25.0.31, panda)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Snapchat/12.33.0.36 (like Safari/8614.1.25.0.31, panda)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Snapchat", version: "12.33.0.36", major: "12", type: "inapp"}

console.log(browser.is(BrowserName.SNAPCHAT));
// true
```
