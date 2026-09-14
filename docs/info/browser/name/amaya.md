[`← Browser Name`](../name.md)

# Amaya

- **Developer:** W3C, INRIA
- **Development Status:** Discontinued
- **Released:** 1996
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Amaya

## Overview

Amaya was an open-source web browser and web-authoring tool developed by W3C and INRIA.

## User-Agent Examples

##### Cross-platform

```sh
amaya/11.4.4 libwww/5.3.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'amaya/11.4.4 libwww/5.3.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "amaya", version: "11.4.4", major: "11"}

console.log(browser.is(BrowserName.AMAYA));
// true
```
