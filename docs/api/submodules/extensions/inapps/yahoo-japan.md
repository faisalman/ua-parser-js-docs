[`← InApps`](../inapps.md)

# Yahoo! Japan

## User-Agent Examples

```sh
# Yahoo! Japan on Android
Mozilla/5.0 (Linux; Android 13; SH-M20 Build/TKQ1.220915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 YJApp-ANDROID jp.co.yahoo.android.yjtop/3.187.0

# Yahoo! Japan on iOS
Mozilla/5.0 (iPad; CPU OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 YJApp-IOS jp.co.yahoo.ipn.appli/4.131.0
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { InApps } from 'ua-parser-js/extensions';

const appParser = new UAParser(InApps);

console.log(appParser.setUA('Mozilla/5.0 (Linux; Android 13; SH-M20 Build/TKQ1.220915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/132.0.6834.163 Mobile Safari/537.36 YJApp-ANDROID jp.co.yahoo.android.yjtop/3.187.0').getBrowser());
// {name: "Yahoo! Japan", version: "3.187.0", type: "inapp"}

console.log(appParser.setUA('Mozilla/5.0 (iPad; CPU OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 YJApp-IOS jp.co.yahoo.ipn.appli/4.131.0').getBrowser());
// {name: "Yahoo! Japan", version: "4.131.0", type: "inapp"}
```

## References

- [Yahoo! Japan🡥](https://www.yahoo.co.jp/)
