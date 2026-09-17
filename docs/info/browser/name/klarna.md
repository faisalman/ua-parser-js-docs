[`← Browser Name`](../name.md)

# Klarna

- **Developer:** Klarna
- **Development Status:** Active
- **Platforms:** Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Android), WebKit (iOS)

## Overview

Klarna is a shopping and payment app with an integrated web browser.

## User-Agent Examples

##### Android

```sh
Mozilla/5.0 (Linux; Android 12; moto g(60)s Build/S3RLS32.114-25-13; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 Klarna/23.36.215
```

##### iOS

```sh
Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Klarna/23.36.223
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; Android 12; moto g(60)s Build/S3RLS32.114-25-13; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 Klarna/23.36.215';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Klarna", version: "23.36.215", major: "23", type: "inapp"}

console.log(browser.is(BrowserName.KLARNA));
// true
```
