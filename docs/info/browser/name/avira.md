[`← Browser Name`](../name.md)

# Avira Secure Browser

- **Developer:** Avira (Gen Digital)
- **Development Status:** Active
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Avira Secure Browser is a security-focused web browser from Avira.

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
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Avira/129.0.0.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Avira/129.0.0.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Avira Secure Browser", version: "129.0.0.0", major: "129"}

console.log(browser.is(BrowserName.AVIRA));
// true
```
