[`← Browser Name`](../name.md)

# Sailfish Browser

- **Developer:** Jolla
- **Development Status:** Active
- **Released:** 2013
- **Platforms:** Sailfish OS
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Sailfish Browser is the open-source web browser included with Sailfish OS.

## Sailfish OS

## User-Agent Examples

```sh
Mozilla/5.0 (Linux; U; Sailfish 3.0; Mobile; rv:45.0) Gecko/45.0 Firefox/45.0 SailfishBrowser/1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; U; Sailfish 3.0; Mobile; rv:45.0) Gecko/45.0 Firefox/45.0 SailfishBrowser/1.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Sailfish Browser", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.SAILFISH));
// true
```
