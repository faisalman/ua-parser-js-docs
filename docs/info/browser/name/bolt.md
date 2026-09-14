[`← Browser Name`](../name.md)

# Bolt

- **Developer:** Bitstream
- **Development Status:** Discontinued
- **Released:** 2009
- **Platforms:** Java ME, BlackBerry OS, Symbian, Windows Mobile
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Bolt was a proxy-based mobile web browser developed by Bitstream.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/527+ (KHTML, like Gecko) Bolt/0.862 Version/3.0 Safari/523.15
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; 78; CentOS; US-en) AppleWebKit/527+ (KHTML, like Gecko) Bolt/0.862 Version/3.0 Safari/523.15';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Bolt", version: "0.862", major: "0"}

console.log(browser.is(BrowserName.BOLT));
// true
```
