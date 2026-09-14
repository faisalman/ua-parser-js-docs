[`← Browser Name`](../name.md)

# DuckDuckGo

- **Developer:** DuckDuckGo
- **Development Status:** Active
- **Released:** 2018
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (Windows and Android), WebKit (macOS and iOS)

## Overview

DuckDuckGo is a privacy-focused search service that also provides web browsers.

## Desktop

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.1517.4.1 Ddg/17.4.1
```

## Mobile

##### Android

```sh
Mozilla/5.0 (Linux; Android 8.1.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile DuckDuckGo/5 Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.1517.4.1 Ddg/17.4.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "DuckDuckGo", version: "17.4.1", major: "17"}

console.log(browser.is(BrowserName.DUCKDUCKGO));
// true
```
