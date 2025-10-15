# [helpers](/api/submodules/helpers/overview) : isFrozenUA()

`isFrozenUA(ua: string): boolean`

Determines whether a given User-Agent string matches Chrome’s reduced (frozen) User-Agent pattern:

```
Mozilla/5.0 ([unifiedPlatform]) AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/[majorVersion].0.0.0 [deviceCompat] Safari/537.36
```

| Token | Possible values |
| ------ | ---------------- |
| `[unifiedPlatform]` | <p>Desktop:</p><ul><li>`Windows NT 10.0; Win64; x64`</li><li>`Macintosh; Intel Mac OS X 10_15_7`</li><li>`X11; Linux x86_64`</li><li>`X11; CrOS x86_64 14541.0.0`</li><li>`Fuchsia`</li></ul><p>Mobile:</p><ul><li>`Linux; Android 10; K`</li></ul> |
| `[deviceCompat]` | <ul><li>(empty) — for tablets/desktops</li><li>`Mobile` — for mobile devices</li></ul> |

::: tip
Learn how to identify the real device behind a reduced user-agent [here](/guides/how-to-identify-android-k-device)
:::

## Code Example

```js [example-freeze-test.js]
import { isFrozenUA } from 'ua-parser-js/helpers';

const regularMobileUA = "Mozilla/5.0 (Linux; Android 9; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Mobile Safari/537.36";
const frozenMobileUA = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Mobile Safari/537.36";

console.log(isFrozenUA(regularMobileUA));
// false

console.log(isFrozenUA(frozenMobileUA));
// true
```

---

#### References

* [User-Agent Reduction🡥](https://www.chromium.org/updates/ua-reduction/) *—The Chromium Projects*