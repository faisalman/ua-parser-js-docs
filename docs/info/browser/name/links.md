[`← Browser Name`](../name.md)

# Links

- **Developer:** Twibright Labs
- **Development Status:** Active
- **Released:** 1999
- **Platforms:** Windows, macOS, Linux, BSD, Unix
- **Type:** Browser
- **Rendering Engine:** Links

## Overview

Links is an open-source text and graphical web browser.

## User-Agent Examples

##### macOS

```sh
Links (2.1pre33; Darwin 8.11.0 Power Macintosh; 169x55)
```

##### Linux

```sh
Links (2.xpre7; Linux 2.4.18 i586; x)
```

##### NetBSD

```sh
Links (2.29; NetBSD 10.0 i386; GNU C 10.5; x)
```

##### FreeBSD

```sh
Links (2.1pre15; FreeBSD 5.3-RELEASE i386; 196x84)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Links (2.1pre33; Darwin 8.11.0 Power Macintosh; 169x55)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Links", version: "2.1pre33", major: "2"}

console.log(browser.is(BrowserName.LINKS));
// true
```
