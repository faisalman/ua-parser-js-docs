[`← Browser Name`](../name.md)

# Mozilla

- **Developer:** Mozilla
- **Development Status:** Continued as [SeaMonkey](./seamonkey.md)
- **Released:** 1998
- **Platforms:** Windows, macOS, Linux, Unix
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Mozilla was an open-source internet application suite that included a web browser.

## Related Browsers

These pages cover the original Mozilla suite, its community continuation, and a Debian rebrand:

| Browser | Description |
| --- | --- |
| [`Mozilla`](./mozilla.md) | The original Mozilla Application Suite. |
| [`SeaMonkey`](./seamonkey.md) | The community continuation of the Mozilla Application Suite. |
| [`IceApe`](./iceape.md) | Debian's rebranded version of SeaMonkey. |

## History

The Mozilla project began in 1998 when [Netscape](./netscape.md) released its browser-suite source code. Mozilla 1.0 arrived in 2002, and in 2005 Mozilla stopped developing the suite itself. The community continued the project as [SeaMonkey](./seamonkey.md).

## User-Agent Examples

##### Windows

```sh
Mozilla/2.02 [fr] (WinNT; I)
```

##### Solaris

```sh
Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.7) Gecko/20070606
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/2.02 [fr] (WinNT; I)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Mozilla", version: "2.02", major: "2"}

console.log(browser.is(BrowserName.MOZILLA));
// true
```
