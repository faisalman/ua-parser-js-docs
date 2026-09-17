[`← Browser Name`](../name.md)

# LG Browser

- **Developer:** LG Electronics (LG Corporation)
- **Development Status:** Active
- **Platforms:** webOS, Linux
- **Type:** Browser
- **Rendering Engine:** WebKit (webOS), Blink (newer releases)

## Overview

LG Browser is the built-in web browser on LG webOS devices.

## User-Agent Examples

##### webOS

```sh
Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.41 (KHTML, like Gecko) Large Screen Safari/537.41 LG Browser/7.00.00(LGE; 47LB680V-ZD; 05.05.90; 1); webOS.TV-2014; LG NetCast.TV-2013 Compatible (LGE, 47LB680V-ZD, wired)
```

##### Linux

```sh
Mozilla/5.0 (Unknown; Linux armv7l) AppleWebKit/537.1+ (KHTML, like Gecko) Safari/537.1+ LG Browser/6.00.00(+mouse+3D+SCREEN+TUNER; LGE; 47LA621V-ZD; 04.28.17; 0x00000001;); LG NetCast.TV-2013 /04.28.17 (LG, 47LA621V-ZD, wired)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.41 (KHTML, like Gecko) Large Screen Safari/537.41 LG Browser/7.00.00(LGE; 47LB680V-ZD; 05.05.90; 1); webOS.TV-2014; LG NetCast.TV-2013 Compatible (LGE, 47LB680V-ZD, wired)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "LG Browser", version: "7.00.00", major: "7"}

console.log(browser.is(BrowserName.LG));
// true
```
