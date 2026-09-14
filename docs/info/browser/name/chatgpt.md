[`← Browser Name`](../name.md)

# ChatGPT

- **Developer:** OpenAI
- **Development Status:** Active
- **Released:** 2022
- **Platforms:** Windows, macOS, Android, iOS
- **Type:** In-app Browser
- **Rendering Engine:** Blink (Windows and Android), WebKit (macOS and iOS)

## Overview

ChatGPT is OpenAI's artificial intelligence assistant app with web browsing capabilities.

## Related Browsers

These browsing products are developed by OpenAI:

| Browser | Description |
| --- | --- |
| [`Atlas`](./atlas.md) | OpenAI's web browser. |
| [`ChatGPT`](./chatgpt.md) | OpenAI's assistant app with web browsing capability. |

## User-Agent Examples

##### iOS

```sh
ChatGPT/1.2024.348 (iOS 16.7.12; iPhone10,5; build 12643679358)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'ChatGPT/1.2024.348 (iOS 16.7.12; iPhone10,5; build 12643679358)';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "ChatGPT", version: "1.2024.348", major: "1", type: "inapp"}

console.log(browser.is(BrowserName.CHATGPT));
// true
```
