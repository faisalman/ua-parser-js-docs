[`← Browser Name`](../name.md)

# Epiphany

- **Developer:** The GNOME Project
- **Development Status:** Renamed to GNOME Web
- **Released:** 2002
- **Platforms:** Linux, BSD, Haiku
- **Type:** Browser
- **Rendering Engine:** Gecko (through version 2.26), WebKit (since version 2.28)

## Overview

Epiphany, now called GNOME Web, is the web browser for the GNOME desktop.

## History

GNOME's browser used to be called Epiphany and is now called Web. Older versions can still use `Epiphany/` in their user agents.

## User-Agent Examples

##### FreeBSD

```sh
Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7) Gecko/20040628 Epiphany/1.2.6
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7) Gecko/20040628 Epiphany/1.2.6';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Epiphany", version: "1.2.6", major: "1"}

console.log(browser.is(BrowserName.EPIPHANY));
// true
```
