[`← Browser Name`](../name.md)

# Avast Secure Browser

- **Developer:** Avast (Gen Digital)
- **Development Status:** Active
- **Released:** 2016
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Avast Secure Browser is a security-focused Chromium-based browser from Avast.

## Related Browsers

These security and privacy browsers are part of Gen Digital brands:

| Browser | Description |
| --- | --- |
| [`Avast Secure Browser`](./avast.md) | The secure browser from Avast. |
| [`AVG Secure Browser`](./avg.md) | The secure browser from AVG. |
| [`Avira Secure Browser`](./avira.md) | The secure browser from Avira. |
| [`Norton Private Browser`](./norton.md) | The private browser from Norton. |

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36 Avast/72.0.1174.122
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36 Avast/72.0.1174.122';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Avast Secure Browser", version: "72.0.1174.122", major: "72"}

console.log(browser.is(BrowserName.AVAST));
// true
```
