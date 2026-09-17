[`← Browser Name`](../name.md)

# qutebrowser

- **Developer:** Florian Bruhin
- **Development Status:** Active
- **Released:** 2014
- **Platforms:** Windows, macOS, Linux, BSD
- **Type:** Browser
- **Rendering Engine:** WebKit (QtWebKit backend), Blink (QtWebEngine backend)

## Overview

qutebrowser is a keyboard-driven web browser with Vim-style controls.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) qutebrowser/2.4.0 QtWebEngine/5.15.6 Chrome/95.0.4628.2 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) qutebrowser/2.4.0 QtWebEngine/5.15.6 Chrome/95.0.4628.2 Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "qutebrowser", version: "2.4.0", major: "2"}

console.log(browser.is(BrowserName.QUTEBROWSER));
// true
```
