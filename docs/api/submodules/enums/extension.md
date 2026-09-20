[`← enums`](/api/submodules/enums/overview)

# `Extension` enum

## List of Extension Enums

- [`Extension.BrowserName.CLI`](./extension/cli.md)
- [`Extension.BrowserName.Crawler`](./extension/crawler.md)
- [`Extension.BrowserName.Email`](./extension/email.md)
- [`Extension.BrowserName.Fetcher`](./extension/fetcher.md)
- [`Extension.BrowserName.InApp`](./extension/inapp.md)
- [`Extension.BrowserName.Library`](./extension/library.md)
- [`Extension.DeviceVendor.Vehicle`](./extension/vehicle.md)

## Code Example

```js [greet-chatgpt-user.js]
import { UAParser } from 'ua-parser-js';
import { Fetchers } from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const userAgent = "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot";
const { BrowserName: { Fetcher }} = Extension;
const { browser } = UAParser(userAgent, Fetchers);
if (browser.is(Fetcher.OPENAI_CHATGPT_USER)) {
    console.log('Hello, ChatGPT!');
}
```
