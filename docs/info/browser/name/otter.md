[`← Browser Name`](../name.md)

# Otter Browser

- **Developer:** The Otter Browser Project
- **Development Status:** Active
- **Released:** 2014
- **Platforms:** Windows, macOS, Linux, BSD
- **Type:** Browser
- **Rendering Engine:** WebKit (QtWebKit backend), Blink (QtWebEngine backend)

## Overview

Otter Browser is an open-source browser inspired by the classic Opera interface.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/602.1 (KHTML, like Gecko) Otter/1.0.81
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/602.1 (KHTML, like Gecko) Otter/1.0.81';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Otter", version: "1.0.81", major: "1"}

console.log(browser.is(BrowserName.OTTER));
// true
```
