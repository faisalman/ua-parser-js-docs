[`← Browser Name`](../name.md)

# OmniWeb

- **Developer:** The Omni Group
- **Development Status:** Active
- **Released:** 1995
- **Platforms:** NeXTSTEP, macOS
- **Type:** Browser
- **Rendering Engine:** Proprietary (before version 5), WebKit (since version 5)

## Overview

OmniWeb is a web browser for macOS developed by the Omni Group.

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/85 (KHTML, like Gecko) OmniWeb/v558.48
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/85 (KHTML, like Gecko) OmniWeb/v558.48';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "OmniWeb", version: "558.48", major: "558"}

console.log(browser.is(BrowserName.OMNIWEB));
// true
```
