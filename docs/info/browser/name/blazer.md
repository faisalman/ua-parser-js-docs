[`← Browser Name`](../name.md)

# Blazer

- **Developer:** Palm
- **Development Status:** Discontinued
- **Released:** 2000
- **Platforms:** Palm OS
- **Type:** Browser
- **Rendering Engine:** NetFront

## Overview

Blazer was a web browser developed by Palm for its mobile devices.

## User-Agent Examples

##### Windows

```sh
Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Blazer", version: "4.0", major: "4"}

console.log(browser.is(BrowserName.BLAZER));
// true
```
