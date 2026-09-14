[`← Browser Name`](../name.md)

# AVG Secure Browser

- **Developer:** AVG Technologies (Gen Digital)
- **Development Status:** Active
- **Platforms:** Windows, macOS, Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

AVG Secure Browser is a security-focused Chromium-based browser from AVG.

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
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36 AVG/72.0.719.123
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36 AVG/72.0.719.123';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "AVG Secure Browser", version: "72.0.719.123", major: "72"}

console.log(browser.is(BrowserName.AVG));
// true
```
