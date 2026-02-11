# Helpers Submodule

Import from `'ua-parser-js/helpers'`

## List of Built-in Helpers:

- [`isFrozenUA(ua: string): boolean`](/api/submodules/helpers/is-frozen-ua)

Check whether user-agent string match with [reduced/frozen user-agent pattern](https://www.chromium.org/updates/ua-reduction/)

### List of Deprecated Methods (since v2.0.7):
- `getDeviceVendor()`, `isAppleSilicon()` => moved to [`device-detection`](/api/submodules/device-detection/overview)
- `isAIBot()`, `isBot()` => moved to [`bot-detection`](/api/submodules/bot-detection/overview)
- `isChromeFamily()`, `isElectron()`, `isFromEU()`, `isStandalonePWA()` => moved to [`browser-detection`](/api/submodules/browser-detection/overview)


## Code Example

```js
import { isFrozenUA } from 'ua-parser-js/helpers';

const regularMobileUA = "Mozilla/5.0 (Linux; Android 9; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Mobile Safari/537.36";
const freezedMobileUA = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Mobile Safari/537.36";

console.log(isFrozenUA(regularMobileUA));
// false

console.log(isFrozenUA(freezedMobileUA));
// true
```