[`← Browser Name`](../name.md)

# Aloha Browser

- **Developer:** Aloha Mobile
- **Development Status:** Active
- **Released:** 2015
- **Platforms:** Windows, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (Windows and Android), WebKit (iOS)

## Overview

Aloha Browser is a privacy-focused web browser for mobile and desktop platforms.

## User-Agent Examples

##### iOS

```sh
Mozilla/5.0 (iPad; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Version/19.0 Safari/605.1.15 AlohaBrowser/7.5.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (iPad; CPU iPhone OS 19_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Version/19.0 Safari/605.1.15 AlohaBrowser/7.5.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Aloha", version: "7.5.1", major: "7"}

console.log(browser.is(BrowserName.ALOHA));
// true
```
