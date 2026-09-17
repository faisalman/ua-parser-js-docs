[`← Browser Name`](../name.md)

# Helio

- **Developer:** Magic Leap
- **Development Status:** Discontinued
- **Released:** 2018
- **Platforms:** Lumin OS
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Helio was the spatial web browser for Magic Leap devices.

## User-Agent Examples

##### Lumin OS

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36 Helio/0.98.20
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Safari/537.36 Helio/0.98.20';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Helio", version: "0.98.20", major: "0"}

console.log(browser.is(BrowserName.HELIO));
// true
```
