[`← Browser Name`](../name.md)

# Tizen Browser

- **Developer:** Samsung Electronics (Samsung Group)
- **Development Status:** Active
- **Released:** 2012
- **Platforms:** Tizen
- **Type:** Browser
- **Rendering Engine:** WebKit (older releases), Blink (newer releases)

## Overview

Tizen Browser is the web browser provided on devices running Tizen.

## Related Browsers

These browsers were developed for Samsung devices and platforms:

| Browser | Description |
| --- | --- |
| [`Jasmine`](./jasmine.md) | Samsung's browser for older mobile devices. |
| [`Samsung Internet`](./samsung-internet.md) | Samsung's current mobile browser. |
| [`Tizen Browser`](./tizen.md) | The browser included with Tizen devices. |

## User-Agent Examples

##### Tizen

```sh
Mozilla/5.0 (Linux; U; Tizen/1.0 like Android; en-us; AppleWebKit/534.46 (KHTML, like Gecko) Tizen Browser/1.0 Mobile
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Linux; U; Tizen/1.0 like Android; en-us; AppleWebKit/534.46 (KHTML, like Gecko) Tizen Browser/1.0 Mobile';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Tizen Browser", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.TIZEN));
// true
```
