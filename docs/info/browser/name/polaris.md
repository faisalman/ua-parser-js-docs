[`← Browser Name`](../name.md)

# Polaris

- **Developer:** Infraware
- **Platforms:** Java ME
- **Type:** Browser

## Overview

Polaris was a mobile web browser developed by Infraware.

## User-Agent Examples

```sh
LG-LX600 Polaris/6.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'LG-LX600 Polaris/6.0 MMP/2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Polaris", version: "6.0", major: "6"}

console.log(browser.is(BrowserName.POLARIS));
// true
```
