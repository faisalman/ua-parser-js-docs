[`← Browser Name`](../name.md)

# Vivo Browser

- **Developer:** vivo
- **Development Status:** Active
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Vivo Browser is a mobile web browser developed for Vivo devices.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 13; 23049RAD8C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/16.7.1.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 13; 23049RAD8C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36 VivoBrowser/16.7.1.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Vivo Browser", version: "16.7.1.1", major: "16"}

console.log(browser.is(BrowserName.VIVO));
// true
```
