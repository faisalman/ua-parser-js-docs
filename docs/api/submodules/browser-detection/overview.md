# Browser-Detection Submodule

Import from `'ua-parser-js/browser-detection'`

## List of Built-in Methods:

- [`isChromeFamily(resultOrUA: IResult | string): boolean`](/api/submodules/browser-detection/is-chrome-family)

Check whether browser is a Chrome-based browser (using Blink engine)

- [`isElectron(): boolean`](/api/submodules/browser-detection/is-electron)

Check whether current window is running inside Electron

- [`isFromEU(): boolean`](/api/submodules/browser-detection/is-from-eu)

Check whether current browser timezone is from an EU country

- [`isStandalonePWA(): boolean`](/api/submodules/browser-detection/is-standalone-pwa)

Check whether current PWA window is running in a standalone mode (not in browser)

## Code Example

```js
import { isChromeFamily } from 'ua-parser-js/browser-detection';

const edge = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.2151.58';
const firefox = 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0';

console.log(isChromeFamily(edge)); // true
console.log(isChromeFamily(firefox)); // false
```