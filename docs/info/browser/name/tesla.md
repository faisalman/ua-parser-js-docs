[`← Browser Name`](../name.md)

# Tesla

- **Developer:** Tesla
- **Development Status:** Active
- **Released:** 2012
- **Platforms:** Linux
- **Type:** Browser
- **Rendering Engine:** WebKit (older software), Blink (newer software)

## Overview

Tesla Browser is the web browser built into Tesla vehicle infotainment systems.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Tesla QtCarBrowser Safari/601.1
Mozilla/5.0 (X11; GNU/Linux) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/79.0.3945.130 Chrome/79.0.3945.130 Safari/537.36 Tesla/2020.16.2.1-e99c70fff409
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Tesla QtCarBrowser Safari/601.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Tesla"}

console.log(browser.is(BrowserName.TESLA));
// true
```
