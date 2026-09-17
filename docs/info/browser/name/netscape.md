[`← Browser Name`](../name.md)

# Netscape

- **Developer:** Netscape Communications
- **Development Status:** Discontinued
- **Released:** 1994
- **Platforms:** Windows, macOS, Linux, Unix
- **Type:** Browser
- **Rendering Engine:** Gecko (main engine), Trident (optional in version 8)

## Overview

Netscape Navigator was an influential early commercial web browser.

## History

Netscape released its browser-suite source code in 1998, helping start the [Mozilla](./mozilla.md) project. AOL stopped developing and supporting Netscape browsers in 2008, while Mozilla and [Firefox](./firefox.md) continued as separate projects.

## User-Agent Examples

##### Windows

```sh
# Netscape 6
Mozilla/5.0 (Windows; U; Win95; de-DE; rv:0.9.2) Gecko/20010726 Netscape6/6.1

# Netscape on Windows ME
Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.8.1.8pre) Gecko/20071015 Firefox/2.0.0.7 Navigator/9.0

# Netscape on Windows 2000
Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.5) Gecko/20050519 Netscape/8.0.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows; U; Win95; de-DE; rv:0.9.2) Gecko/20010726 Netscape6/6.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Netscape", version: "6.1", major: "6"}

console.log(browser.is(BrowserName.NETSCAPE));
// true
```
