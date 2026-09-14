[`← Browser Name`](../name.md)

# Atlas

- **Developer:** OpenAI
- **Development Status:** Active
- **Released:** 2025
- **Platforms:** macOS
- **Type:** Browser
- **Rendering Engine:** Blink

## Related Browsers

| Browser | Description |
| --- | --- |
| [`Atlas`](./atlas.md) | OpenAI's web browser. |
| [`ChatGPT`](./chatgpt.md) | OpenAI's assistant app with web browsing capability. |

## User-Agent Examples

##### macOS

```sh
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Atlas/1.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { BrowserName } from 'ua-parser-js/enums';

const parser = new UAParser();
const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Atlas/1.0';

const browser = parser.setUA(ua).getBrowser();

console.log(browser);
// {name: "Atlas", version: "1.0", major: "1"}

console.log(browser.is(BrowserName.ATLAS));
// true
```
