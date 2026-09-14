[`← Browser Name`](../name.md)

# Ecosia

- **Developer:** Ecosia
- **Development Status:** Active
- **Released:** 2024
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (desktop and Android), WebKit (iOS)

## Overview

Ecosia is a search engine that also provides a privacy-focused web browser.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 10; SM-G975U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 (Ecosia android@85.0.4183.127)
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60 (Ecosia ios@3.0.1.533)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 10; SM-G975U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 (Ecosia android@85.0.4183.127)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Ecosia", version: "85.0.4183.127", major: "85"}

console.log(browser.is(BrowserName.ECOSIA));
// true
```
