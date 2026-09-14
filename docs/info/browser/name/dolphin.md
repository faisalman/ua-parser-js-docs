[`← Browser Name`](../name.md)

# Dolphin

- **Developer:** MoboTap
- **Development Status:** Active
- **Released:** 2009
- **Platforms:** Bada, Android, iOS
- **Type:** Browser
- **Rendering Engine:** WebKit (iOS and older Android releases), Blink

## Overview

Dolphin is a mobile web browser developed by MoboTap.

## User-Agent Examples

##### Bada OS

```sh
Mozilla/5.0 (SCH-F859/F859DG12;U;NUCLEUS/2.1;Profile/MIDP-2.1 Configuration/CLDC-1.1;480*800;CTC/2.0) Dolfin/2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (SCH-F859/F859DG12;U;NUCLEUS/2.1;Profile/MIDP-2.1 Configuration/CLDC-1.1;480*800;CTC/2.0) Dolfin/2.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Dolphin", version: "2.0", major: "2"}

console.log(browser.is(BrowserName.DOLPHIN));
// true
```
