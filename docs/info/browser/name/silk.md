[`← Browser Name`](../name.md)

# Silk Browser

- **Developer:** Amazon
- **Development Status:** Active
- **Released:** 2011
- **Platforms:** Fire OS
- **Type:** Browser
- **Rendering Engine:** WebKit (early releases), Blink (current releases)

## Overview

Amazon Silk is a web browser developed for Amazon Fire devices.

## Related Browsers

These browsers are developed for Amazon devices:

| Browser | Description |
| --- | --- |
| [`Kindle Browser`](./kindle.md) | The browser included with Kindle e-readers. |
| [`Silk Browser`](./silk.md) | The browser developed for Amazon Fire devices. |

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Silk", version: "1.1.0-84", major: "1"}

console.log(browser.is(BrowserName.SILK));
// true
```
