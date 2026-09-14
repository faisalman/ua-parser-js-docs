[`← Browser Name`](../name.md)

# Conkeror

- **Developer:** The Conkeror Project
- **Released:** 2007
- **Platforms:** Windows, macOS, Linux
- **Type:** Browser
- **Rendering Engine:** Gecko

## Overview

Conkeror is a keyboard-driven web browser inspired by Emacs.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (X11; Linux x86_64; rv:6.0.1) Gecko/20110831 conkeror/0.9.3
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (X11; Linux x86_64; rv:6.0.1) Gecko/20110831 conkeror/0.9.3';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "conkeror", version: "0.9.3", major: "0"}

console.log(browser.is(BrowserName.CONKEROR));
// true
```
