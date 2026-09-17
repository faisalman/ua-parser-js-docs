[`← Browser Name`](../name.md)

# K-Meleon

- **Developer:** The K-Meleon Project
- **Development Status:** Active
- **Released:** 2000
- **Platforms:** Windows
- **Type:** Browser
- **Rendering Engine:** Gecko (official releases), Goanna (community builds)

## Overview

K-Meleon is a lightweight Gecko-based web browser for Windows.

## User-Agent Examples

##### Windows

```sh
Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.5) Gecko/20031016 K-Meleon/0.8.2
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.5) Gecko/20031016 K-Meleon/0.8.2';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "K-Meleon", version: "0.8.2", major: "0"}

console.log(browser.is(BrowserName.K_MELEON));
// true
```
