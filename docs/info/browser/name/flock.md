[`← Browser Name`](../name.md)

# Flock

- **Developer:** Flock, Inc.
- **Development Status:** Discontinued
- **Released:** 2005
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Gecko (through version 2), WebKit (version 3)

## Overview

Flock was a web browser designed around social networking and web services.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008100716 Firefox/3.0.3 Flock/2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008100716 Firefox/3.0.3 Flock/2.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Flock", version: "2.0", major: "2"}

console.log(browser.is(BrowserName.FLOCK));
// true
```
