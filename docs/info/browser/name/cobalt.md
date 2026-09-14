[`← Browser Name`](../name.md)

# Cobalt

- **Developer:** Google (Alphabet)
- **Development Status:** Active
- **Platforms:** Smart TVs, streaming devices
- **Type:** Browser
- **Rendering Engine:** Cobalt (earlier releases), Blink (newer releases)

## Overview

Cobalt is an application runtime and web platform designed for embedded devices.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64) Cobalt/9.0-qa (unlike Gecko) Starboard/4
Mozilla/5.0 (X11; Linux x86_64) Cobalt/11.0-qa (unlike Gecko) Starboard/6
Mozilla/5.0 (X11; Linux x86_64) Cobalt/23.master.0.0-devel (unlike Gecko) v8/8.8.278.8-jit gles Starboard/15
Mozilla/5.0 (X11; Linux x86_64) Cobalt/23.lts.1.0-qa (unlike Gecko) v8/8.8.278.8-jit gles Starboard/15
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) Cobalt/9.0-qa (unlike Gecko) Starboard/4';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Cobalt", version: "9.0", major: "9"}

console.log(browser.is(BrowserName.COBALT));
// true
```
