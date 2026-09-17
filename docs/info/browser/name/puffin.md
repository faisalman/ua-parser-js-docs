[`← Browser Name`](../name.md)

# Puffin

- **Developer:** CloudMosa
- **Development Status:** Active
- **Released:** 2010
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Puffin is a cloud-based web browser developed by CloudMosa.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 6.0.1; Lenovo P2a42 Build/MMB29M; en-us) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Puffin/6.0.8.15804AP
Mozilla/5.0 (Linux; Android 7.1.1; ZTE BLADE A0620 Build/NMF26F; ru-ru) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36 Puffin/9.2.0.50586AP
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 6.0.1; Lenovo P2a42 Build/MMB29M; en-us) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Puffin/6.0.8.15804AP';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Puffin", version: "6.0.8.15804AP", major: "6"}

console.log(browser.is(BrowserName.PUFFIN));
// true
```
