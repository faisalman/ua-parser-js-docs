[`← Browser Name`](../name.md)

# Brave Browser

- **Developer:** Brave Software
- **Development Status:** Active
- **Released:** 2016
- **Platforms:** Windows, macOS, Linux, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (desktop and Android), WebKit (iOS)

## Overview

Brave is a privacy-focused web browser developed by Brave Software.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 11; SM-T870) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.96 Safari/537.36
Mozilla/5.0 (Linux; Android 11; Samsung Galaxy F62 SM-E625F Build/SME625F512091028;) AppleWebKit/537.36 (KHTML, like Gecko) Brave/1.75.110 Mobile Safari/537.36
```

##### iOS

```sh
Brave/4.5.16 CFNetwork/893.13.1 Darwin/17.3.0 (x86_64)
Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4.2 Mobile/15E148 Safari/604.1 Brave
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 11; SM-T870) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.96 Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Brave", version: "88.0.4324.96", major: "88"}

console.log(browser.is(BrowserName.BRAVE));
// true
```
