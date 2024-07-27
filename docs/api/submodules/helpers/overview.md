# Helpers Submodule

### `'ua-parser-js/helpers'`

## List of Built-in Helpers:

- [`getDeviceVendor(model: string): string | undefined`](/api/submodules/helpers/get-device-vendor)

Guess for the device vendor from a device model name

- [`isAppleSilicon(res: IResult): boolean`](/api/submodules/helpers/is-apple-silicon)

Check for an ARM-based Apple Silicon device properties

- [`isChromeFamily(res: IResult): boolean`](/api/submodules/helpers/is-chrome-family)

Check whether the current browser is a Chromium-based browser

- [`isFrozenUA(ua: string): boolean`](/api/submodules/helpers/is-frozen-ua)

Check whether a user-agent string match with [reduced/frozen user-agent pattern](https://www.chromium.org/updates/ua-reduction/)

- [`isStandalonePWA(): boolean`](/api/submodules/helpers/is-standalone-pwa)

Check whether the current window is a standalone PWA

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