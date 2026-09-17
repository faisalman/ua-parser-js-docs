[`← Browser Name`](../name.md)

# Slimjet

- **Developer:** FlashPeak
- **Development Status:** Active
- **Released:** 2014
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Blink

## Overview

Slimjet is a Chromium-based web browser developed by FlashPeak.

## Related Browsers

These browsers are developed by FlashPeak:

| Browser | Description |
| --- | --- |
| [`SlimBrowser`](./slimbrowser.md) | FlashPeak's main Windows browser. |
| [`SlimBoat`](./slimboat.md) | FlashPeak's discontinued lightweight browser. |
| [`Slimjet`](./slimjet.md) | FlashPeak's Chromium-based browser. |

## User-Agent Examples

```sh
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36 Slimjet/20.0.2.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36 Slimjet/20.0.2.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Slimjet", version: "20.0.2.0", major: "20"}

console.log(browser.is(BrowserName.SLIMJET));
// true
```
