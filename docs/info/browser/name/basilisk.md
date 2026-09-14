[`← Browser Name`](../name.md)

# Basilisk

- **Developer:** Moonchild Productions
- **Development Status:** Active
- **Released:** 2017
- **Platforms:** Windows, macOS, Linux, FreeBSD
- **Type:** Browser
- **Rendering Engine:** Goanna

## Overview

Basilisk is an open-source web browser developed by Moonchild Productions.

## Related Browsers

These browsers are developed by Moonchild Productions:

| Browser | Description |
| --- | --- |
| [`PaleMoon`](./palemoon.md) | Focuses on customization and efficiency. |
| [`Basilisk`](./basilisk.md) | Focuses on classic Firefox features and extensions. |

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64; rv:55.0) Gecko/20100101 Goanna/4.0 Firefox/55.0 Basilisk/20171113
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64; rv:55.0) Gecko/20100101 Goanna/4.0 Firefox/55.0 Basilisk/20171113';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Basilisk", version: "20171113", major: "20171113"}

console.log(browser.is(BrowserName.BASILISK));
// true
```
