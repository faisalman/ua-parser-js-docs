# [Helpers](/api/submodules/helpers/overview) : isFrozenUA()

`isFrozenUA(ua: string): boolean`

Check whether a user-agent string match with [reduced/frozen user-agent pattern](https://www.chromium.org/updates/ua-reduction/)

## Code Example

```js [example-freeze-test.js]
import { isFrozenUA } from 'ua-parser-js/helpers';

const regularMobileUA = "Mozilla/5.0 (Linux; Android 9; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Mobile Safari/537.36";
const freezedMobileUA = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Mobile Safari/537.36";

console.log(isFrozenUA(regularMobileUA));
// false

console.log(isFrozenUA(freezedMobileUA));
// true
```