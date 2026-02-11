# Device-Detection Submodule

Import from `'ua-parser-js/device-detection'`

## List of Built-in Methods:

- [`getDeviceVendor(model: string): string | undefined`](/api/submodules/device-detection/get-device-vendor)

Guess for the device vendor based on its model name

- [`isAppleSilicon(resultOrUA: IResult | string): boolean`](/api/submodules/device-detection/is-apple-silicon)

Check whether device has Apple Silicon Mac device properties.

## Code Example

```js
import { getDeviceVendor } from 'ua-parser-js/device-detection';

console.log(getDeviceVendor('SM-A605G'));       // Samsung
console.log(getDeviceVendor('Redmi Note 8'));   // Xiaomi
console.log(getDeviceVendor('Nexus 6P'));       // Huawei
console.log(getDeviceVendor('Quest 3'));        // Facebook
console.log(getDeviceVendor('AQUOS-TVX19B'));   // Sharp
```