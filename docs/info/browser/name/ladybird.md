[`← Browser Name`](../name.md)

# Ladybird

- **Developer:** Ladybird Browser Initiative
- **Development Status:** Active
- **Platforms:** Linux, macOS
- **Type:** Browser
- **Rendering Engine:** LibWeb

## Overview

Ladybird is an independent open-source web browser built with a new browser engine.

## User-Agent Examples

##### Linux

```sh
Mozilla/5.0 (Linux; x86_64) Ladybird/1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; x86_64) Ladybird/1.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Ladybird", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.LADYBIRD));
// true
```
