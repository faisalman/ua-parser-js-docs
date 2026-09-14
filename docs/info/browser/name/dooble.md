[`← Browser Name`](../name.md)

# Dooble

- **Developer:** The Dooble Project
- **Development Status:** Active
- **Released:** 2008
- **Platforms:** Windows, macOS, Linux, FreeBSD
- **Type:** Browser
- **Rendering Engine:** WebKit (earlier releases), Blink

## Overview

Dooble is an open-source web browser focused on privacy.

## User-Agent Examples

##### Haiku

```sh
Mozilla/5.0 (X11; Haiku BePC) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/5.15.17 Chrome/87.0.4280.144 Safari/537.36 Dooble/2023.12.25 Dooble/2023.12.25
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Haiku BePC) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/5.15.17 Chrome/87.0.4280.144 Safari/537.36 Dooble/2023.12.25 Dooble/2023.12.25';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Dooble", version: "2023.12.25", major: "2023"}

console.log(browser.is(BrowserName.DOOBLE));
// true
```
