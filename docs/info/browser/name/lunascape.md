[`← Browser Name`](../name.md)

# Lunascape

- **Developer:** Lunascape Corporation
- **Development Status:** Active
- **Released:** 2001
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** Browser
- **Rendering Engine:** Trident (IE mode), Gecko (Firefox mode), WebKit (Safari mode)

## Overview

Lunascape is a Japanese web browser known for supporting multiple rendering engines.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.2) Gecko/20090804 Firefox/3.5.2 Lunascape/5.1.4.5
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.2) Gecko/20090804 Firefox/3.5.2 Lunascape/5.1.4.5';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Lunascape", version: "5.1.4.5", major: "5"}

console.log(browser.is(BrowserName.LUNASCAPE));
// true
```
