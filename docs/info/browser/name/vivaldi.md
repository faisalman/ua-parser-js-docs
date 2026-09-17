[`← Browser Name`](../name.md)

# Vivaldi

- **Developer:** Vivaldi Technologies
- **Development Status:** Active
- **Released:** 2015
- **Platforms:** Windows, macOS, Linux, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink (desktop and Android), WebKit (iOS)

## Overview

Vivaldi is a customizable cross-platform web browser developed by Vivaldi Technologies.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Vivaldi/1.0.83.38 Safari/537.36
```

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.88 Safari/537.36 Vivaldi/2.4.1488.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Vivaldi/1.0.83.38 Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Vivaldi", version: "1.0.83.38", major: "1"}

console.log(browser.is(BrowserName.VIVALDI));
// true
```
