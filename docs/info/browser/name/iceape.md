[`← Browser Name`](../name.md)

# IceApe

- **Developer:** The Debian Project
- **Development Status:** Discontinued
- **Released:** 2006
- **Platforms:** Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

IceApe was Debian's rebranded version of the SeaMonkey internet suite.

## Related Browsers

These pages cover the original Mozilla suite, its community continuation, and a Debian rebrand:

| Browser | Description |
| --- | --- |
| [`Mozilla`](./mozilla.md) | The original Mozilla Application Suite. |
| [`SeaMonkey`](./seamonkey.md) | The community continuation of the Mozilla Application Suite. |
| [`IceApe`](./iceape.md) | Debian's rebranded version of SeaMonkey. |

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.19) Gecko/20110817 Iceape/2.0.14
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.19) Gecko/20110817 Iceape/2.0.14';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Iceape", version: "2.0.14", major: "2"}

console.log(browser.is(BrowserName.ICEAPE));
// true
```
