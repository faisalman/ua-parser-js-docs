[`← Browser Name`](../name.md)

# Kindle Browser

- **Developer:** Amazon
- **Development Status:** Active
- **Released:** 2007
- **Platforms:** Kindle
- **Type:** Browser
- **Rendering Engine:** NetFront (earlier devices), WebKit (newer devices)

## Overview

Kindle Browser is the web browser included on Amazon Kindle e-readers.

## Related Browsers

These browsers are developed for Amazon devices:

| Browser | Description |
| --- | --- |
| [`Kindle Browser`](./kindle.md) | The browser included with Kindle e-readers. |
| [`Silk Browser`](./silk.md) | The browser developed for Amazon Fire devices. |

## User-Agent Examples

##### Linux

```sh
Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.5 (screen 600x800; rotate)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.5 (screen 600x800; rotate)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Kindle", version: "2.5", major: "2"}

console.log(browser.is(BrowserName.KINDLE));
// true
```
