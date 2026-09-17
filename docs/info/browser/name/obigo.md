[`← Browser Name`](../name.md)

# Obigo

- **Developer:** Obigo
- **Development Status:** Active
- **Platforms:** Linux, Windows Mobile, Symbian, BREW
- **Type:** Browser
- **Rendering Engine:** Obigo

## Overview

Obigo was an embedded web browser platform used on mobile phones.

## User-Agent Examples

```sh
LG-GS290/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1
LG/KU990i/v10a Browser/Obigo-Q05A/3.6 MMS/LG-MMS-V1.0/1.2 Java/ASVM/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'LG-GS290/V100 Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Obigo", version: "WAP2.0", major: "2"}

console.log(browser.is(BrowserName.OBIGO));
// true
```
