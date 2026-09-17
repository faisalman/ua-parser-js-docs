[`← Browser Name`](../name.md)

# Pico Browser

- **Developer:** PICO (ByteDance)
- **Development Status:** Active
- **Platforms:** Android
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Pico Browser is a web browser designed for PICO virtual reality headsets.

## User-Agent Examples

##### Pico

```sh
Mozilla/5.0 (X11; Linux x86_64; Pico Neo3 Link OS5.8.4.0 like Quest) AppleWebKit/537.36 (KHTML, like Gecko) PicoBrowser/3.3.22 Chrome/105.0.5195.68 VR Safari/537.36
Mozilla/5.0 (X11; Linux x86_64; PICO 4 OS5.8.2 like Quest) AppleWebKit/537.36 (KHTML, like Gecko) PicoBrowser/3.3.38 Chrome/105.0.5195.68 VR Safari/537.36
Mozilla/5.0 (X11; Linux x86_64; PICO 4 OS5.4.0 like Quest) AppleWebKit/537.36 (KHTML, like Gecko) PicoBrowser/3.3.22 Chrome/105.0.5195.68 VR Safari/537.36 OculusBrowser/7.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64; Pico Neo3 Link OS5.8.4.0 like Quest) AppleWebKit/537.36 (KHTML, like Gecko) PicoBrowser/3.3.22 Chrome/105.0.5195.68 VR Safari/537.36';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Pico Browser", version: "3.3.22", major: "3"}

console.log(browser.is(BrowserName.PICOBROWSER));
// true
```
