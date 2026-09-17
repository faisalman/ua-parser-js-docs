[`← Browser Name`](../name.md)

# Luakit

- **Developer:** The Luakit Project
- **Development Status:** Active
- **Released:** 2009
- **Platforms:** Linux, BSD
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Luakit is a lightweight, keyboard-driven web browser built with WebKit.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (Linux x86_64) AppleWebKit/535.4+ (KHTML, like Gecko) WebKitGTK+/1.6.3 luakit
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux x86_64) AppleWebKit/535.4+ (KHTML, like Gecko) WebKitGTK+/1.6.3 luakit';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "luakit"}

console.log(browser.is(BrowserName.LUAKIT));
// true
```
