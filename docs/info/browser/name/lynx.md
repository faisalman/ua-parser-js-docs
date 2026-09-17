[`← Browser Name`](../name.md)

# Lynx

- **Developer:** Thomas Dickey and contributors
- **Development Status:** Active
- **Released:** 1992
- **Platforms:** Windows, macOS, Linux, BSD, Unix
- **Type:** Browser
- **Rendering Engine:** Lynx

## Overview

Lynx is a text-based web browser designed for command-line terminals.

## User-Agent Examples

```sh
Lynx/2.8.5dev.16 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.6b
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Lynx/2.8.5dev.16 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.6b';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Lynx", version: "2.8.5dev.16", major: "2"}

console.log(browser.is(BrowserName.LYNX));
// true
```
