<sup>*[`Extensions Submodule`](../overview.md) > [`InApps`](../inapps.md) > `TikTok Lite`*</sup>

# TikTok Lite

- **Developer:** ByteDance
- **BrowserType:** [`inapp`](/info/browser/type/inapp)

## User-Agent Examples

```sh
Mozilla/5.0 (Linux; Android 8.0.0; SM-J400F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 Channel/release AppName/ultralite app_version/27.2.3 Region/ID ByteLocale/id-ID ByteFullLocale/id-ID
```

## Code Example

```js
import { UAParser }  from 'ua-parser-js';
import { InApps }    from 'ua-parser-js/extensions';
import { Extension } from 'ua-parser-js/enums';

const appParser = new UAParser(InApps);
const browser = appParser.setUA('Mozilla/5.0 (Linux; Android 8.0.0; SM-J400F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 Channel/release AppName/ultralite app_version/27.2.3 Region/ID ByteLocale/id-ID ByteFullLocale/id-ID').getBrowser();

console.log(browser);
// {name: "TikTok Lite", version: "27.2.3", type: "inapp"}

// Compare using the built-in enum
const { InApp } = Extension.BrowserName;
console.log(browser.is(InApp.TIKTOK_LITE));
// true
```

## References

- [TikTok Lite🡥](https://www.tiktok.com/)
