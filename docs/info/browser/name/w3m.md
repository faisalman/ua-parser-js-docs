[`← Browser Name`](../name.md)

# w3m

- **Developer:** Akinori Ito and contributors
- **Development Status:** Active
- **Released:** 1995
- **Platforms:** Linux, BSD, macOS, Unix
- **Type:** Browser
- **Rendering Engine:** w3m

## Overview

w3m is a text-based web browser for command-line terminals.

## User-Agent Examples

```sh
w3m/0.5.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'w3m/0.5.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "w3m", version: "0.5.1", major: "0"}

console.log(browser.is(BrowserName.W3M));
// true
```
