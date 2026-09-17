[`← Browser Name`](../name.md)

# Midori

- **Developer:** Astian
- **Development Status:** Active
- **Released:** 2007
- **Platforms:** Windows, macOS, Linux, Android, iOS
- **Type:** Browser
- **Rendering Engine:** WebKit (classic releases), Blink (Electron-based releases), Gecko (current releases)

## Overview

Midori is a lightweight cross-platform web browser.

## User-Agent Examples

##### Linux

```sh
Midori/0.2.2 (X11; Linux i686; U; en-us) WebKit/531.2+
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Midori/0.2.2 (X11; Linux i686; U; en-us) WebKit/531.2+';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Midori", version: "0.2.2", major: "0"}

console.log(browser.is(BrowserName.MIDORI));
// true
```
