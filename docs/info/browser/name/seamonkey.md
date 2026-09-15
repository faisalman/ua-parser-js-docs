[`← Browser Name`](../name.md)

# SeaMonkey

- **Developer:** The SeaMonkey Council
- **Development Status:** Active
- **Released:** 2006
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

SeaMonkey is an open-source internet suite that includes a web browser.

## Related Browsers

These pages cover the original Mozilla suite, its community continuation, and a Debian rebrand:

| Browser | Description |
| --- | --- |
| [`Mozilla`](./mozilla.md) | The original Mozilla Application Suite. |
| [`SeaMonkey`](./seamonkey.md) | The community continuation of the Mozilla Application Suite. |
| [`IceApe`](./iceape.md) | Debian's rebranded version of SeaMonkey. |

## History

SeaMonkey is the community-run continuation of the [Mozilla Application Suite](./mozilla.md). It began after Mozilla shifted its focus to Firefox and Thunderbird and stopped releasing the suite itself.

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1
```

##### Linux

```sh
Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1b4pre) Gecko/20090405 SeaMonkey/2.0b1pre
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "SeaMonkey", version: "2.7.1", major: "2"}

console.log(browser.is(BrowserName.SEAMONKEY));
// true
```
