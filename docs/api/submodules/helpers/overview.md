# Helpers Submodule

### `'ua-parser-js/helpers'`

## List of Built-in Helpers:

- [`isAppleSilicon(res: IResult): boolean`](/api/submodules/helpers/is-apple-silicon)

Check for an ARM-based Apple Silicon device properties

- [`isChromiumBased(res: IResult): boolean`](/api/submodules/helpers/is-chromium-based)

Check whether the current browser is a Chromium-based browser

- [`isFrozenUA(ua: string): boolean`](/api/submodules/helpers/is-frozen-ua)

Check whether a user-agent string match with [frozen user-agent pattern](https://www.chromium.org/updates/ua-reduction/)

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