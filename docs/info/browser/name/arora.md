[`← Browser Name`](../name.md)

# Arora

- **Developer:** Benjamin C. Meyer
- **Development Status:** Discontinued
- **Released:** 2008
- **Platforms:** Windows, macOS, Linux, FreeBSD
- **Type:** Browser
- **Rendering Engine:** WebKit

## Overview

Arora is a lightweight cross-platform web browser built with Qt and WebKit.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows; U; Windows NT 5.1; de-CH) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de-CH) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.2';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Arora", version: "0.2", major: "0"}

console.log(browser.is(BrowserName.ARORA));
// true
```
