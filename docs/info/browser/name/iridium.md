[`← Browser Name`](../name.md)

# Iridium

- **Developer:** The Iridium Browser Team
- **Development Status:** Active
- **Released:** 2015
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Iridium is a privacy-focused web browser based on Chromium.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Iridium/43.8 Safari/537.36 Chrome/43.0.2357.132
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Iridium/43.8 Safari/537.36 Chrome/43.0.2357.132';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Iridium", version: "43.8", major: "43"}

console.log(browser.is(BrowserName.IRIDIUM));
// true
```
