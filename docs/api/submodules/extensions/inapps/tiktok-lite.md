[`← InApps`](../inapps.md)

# TikTok Lite

## User-Agent Examples

```sh
Mozilla/5.0 (Linux; Android 8.0.0; SM-J400F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 Channel/release AppName/ultralite app_version/27.2.3 Region/ID ByteLocale/id-ID ByteFullLocale/id-ID
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Linux; Android 8.0.0; SM-J400F Build/R16NW; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 Channel/release AppName/ultralite app_version/27.2.3 Region/ID ByteLocale/id-ID ByteFullLocale/id-ID').getBrowser());
// {name: "TikTok Lite", version: "27.2.3", type: "inapp"}
```

## References

- [TikTok Lite🡥](https://www.tiktok.com/)
