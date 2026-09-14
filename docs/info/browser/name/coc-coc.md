[`← Browser Name`](../name.md)

# Coc Coc

- **Developer:** Cốc Cốc
- **Development Status:** Active
- **Released:** 2013
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (desktop and Android), WebKit (iOS)

## Overview

Coc Coc is a Vietnamese web browser developed by Coc Coc.

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/78.0.129 Chrome/72.0.3626.129 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/78.0.129 Chrome/72.0.3626.129 Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Coc Coc", version: "78.0.129", major: "78"}

console.log(browser.is(BrowserName.COC_COC));
// true
```
