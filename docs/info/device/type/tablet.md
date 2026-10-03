<sup>*[`Device Types`](../type.md) > `tablet`*</sup>

# `tablet`

Portable touchscreen devices larger than smartphones and smaller than laptops.

## User-Agent Example

```sh
# Motorola Xoom
Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; Xoom Build/HWI69) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { DeviceType } from 'ua-parser-js/enums';

const ua = 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; Xoom Build/HWI69) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13';
const parser = new UAParser(ua);
const device = parser.getDevice();

console.log(device);
// {type: "tablet", model: "Xoom", vendor: "Motorola"}

console.log(device.is(DeviceType.TABLET));
// true
```
