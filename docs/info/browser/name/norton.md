[`← Browser Name`](../name.md)

# Norton Private Browser

- **Developer:** Norton (Gen Digital)
- **Development Status:** Active
- **Released:** 2023
- **Platforms:** Windows, macOS
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Norton Private Browser is a privacy and security-focused web browser from Norton.

## Related Browsers

These security and privacy browsers are part of Gen Digital brands:

| Browser | Description |
| --- | --- |
| [`Avast Secure Browser`](./avast.md) | The secure browser from Avast. |
| [`AVG Secure Browser`](./avg.md) | The secure browser from AVG. |
| [`Avira Secure Browser`](./avira.md) | The secure browser from Avira. |
| [`Norton Private Browser`](./norton.md) | The private browser from Norton. |

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Norton/130.0.0.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Norton/130.0.0.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Norton Private Browser", version: "130.0.0.0", major: "130"}

console.log(browser.is(BrowserName.NORTON));
// true
```
