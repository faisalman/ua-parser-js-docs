[`← Browser Name`](../name.md)

# Skyfire

- **Developer:** Skyfire Labs
- **Development Status:** Discontinued
- **Released:** 2008
- **Platforms:** Windows Mobile, Symbian, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Gecko (early releases), WebKit (later releases)

## Overview

Skyfire was a mobile web browser that used cloud processing to render content.

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17 Skyfire/2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17 Skyfire/2.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Skyfire", version: "2.0", major: "2"}

console.log(browser.is(BrowserName.SKYFIRE));
// true
```
