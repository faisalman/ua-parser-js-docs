[`← Browser Name`](../name.md)

# Dillo

- **Developer:** The Dillo Project
- **Development Status:** Active
- **Released:** 1999
- **Platforms:** Linux, BSD, macOS
- **Type:** Browser
- **Rendering Engine:** Dillo

## Overview

Dillo is a small, lightweight graphical web browser.

## User-Agent Examples

```sh
Dillo/2.2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Dillo/2.2';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Dillo", version: "2.2", major: "2"}

console.log(browser.is(BrowserName.DILLO));
// true
```
