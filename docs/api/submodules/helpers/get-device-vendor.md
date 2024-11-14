# `getDeviceVendor(model: string): string | undefined`

Guess for the device vendor based on its model name

## Code Example

```js
import { getDeviceVendor } from 'ua-parser-js/helpers';

console.log(getDeviceVendor('SM-A605G'));       // Samsung
console.log(getDeviceVendor('Redmi Note 8'));   // Xiaomi
console.log(getDeviceVendor('Nexus 6P'));       // Huawei
console.log(getDeviceVendor('Quest 3'));        // Facebook
console.log(getDeviceVendor('AQUOS-TVX19B'));   // Sharp
```