# Helpers Submodule

### `'ua-parser-js/helpers'`

## List of Built-in Helpers:

- [`getDeviceVendor(model: string): string | undefined`](/api/submodules/helpers/get-device-vendor)

Guess for the device vendor based on its model name

- [`isAppleSilicon(resultOrUA: IResult | string): boolean`](/api/submodules/helpers/is-apple-silicon)

Check whether device has Apple Silicon Mac device properties.

- [`isAIBot(resultOrUA: IResult | string): boolean`](/api/submodules/helpers/is-ai-bot)

Check whether user-agent is an AI bot

- [`isBot(resultOrUA: IResult | string): boolean`](/api/submodules/helpers/is-bot)

Check whether user-agent is a bot

- [`isChromeFamily(resultOrUA: IResult | string): boolean`](/api/submodules/helpers/is-chrome-family)

Check whether browser is a Chrome-based browser (using Blink engine)

- [`isElectron(): boolean`](/api/submodules/helpers/is-electron)

Check whether current window is running inside Electron

- [`isFromEU(): boolean`](/api/submodules/helpers/is-from-eu)

Check whether current browser timezone is from an EU country

- [`isFrozenUA(ua: string): boolean`](/api/submodules/helpers/is-frozen-ua)

Check whether user-agent string match with [reduced/frozen user-agent pattern](https://www.chromium.org/updates/ua-reduction/)

- [`isStandalonePWA(): boolean`](/api/submodules/helpers/is-standalone-pwa)

Check whether current PWA window is running in a standalone mode (not in browser)

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