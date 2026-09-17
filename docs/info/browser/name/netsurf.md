[`← Browser Name`](../name.md)

# NetSurf

- **Developer:** The NetSurf Developers
- **Development Status:** Active
- **Released:** 2003
- **Platforms:** RISC OS, Linux, BSD, macOS, AmigaOS, Atari TOS, Haiku
- **Type:** Browser
- **Rendering Engine:** NetSurf

## Overview

NetSurf is a lightweight open-source web browser with its own rendering engine.

## User-Agent Examples

##### Linux

```sh
NetSurf/3.10 (Linux; Arch Linux)
```

##### Plan9

```sh
Mozilla/5.0 (Plan9) NetSurf/3.12
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'NetSurf/3.10 (Linux; Arch Linux)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "NetSurf", version: "3.10", major: "3"}

console.log(browser.is(BrowserName.NETSURF));
// true
```
