[`← Browser Name`](../name.md)

# WeiBo

- **Developer:** Sina Corporation
- **Development Status:** Active
- **Released:** 2009
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Weibo is a Chinese social media app with an integrated web browser.

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 Weibo (iPhone8,2__weibo__8.9.3__iphone__os12.0)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 Weibo (iPhone8,2__weibo__8.9.3__iphone__os12.0)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "weibo", version: "8.9.3", major: "8"}

console.log(browser.is(BrowserName.WEIBO));
// true
```
