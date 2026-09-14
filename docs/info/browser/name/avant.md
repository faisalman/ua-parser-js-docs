[`← Browser Name`](../name.md)

# Avant

- **Developer:** Avant Force
- **Development Status:** Active
- **Released:** 2004
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Trident (IE mode), Gecko (Firefox mode), WebKit and Blink (Chrome mode)

## Overview

Avant is a multi-engine web browser for Windows.

## User-Agent Examples

##### Windows

```sh
Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB5; Avant Browser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB5; Avant Browser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Avant"}

console.log(browser.is(BrowserName.AVANT));
// true
```
