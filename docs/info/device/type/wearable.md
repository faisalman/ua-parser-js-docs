<sup>*[`Device Types`](../type.md) > `wearable`*</sup>

# `wearable`

Devices worn on the body, such as smartwatches and fitness trackers.

## User-Agent Example

```sh
# Apple Watch
atc/1.0 watchOS/7.3.3 model/Watch4,2 hwp/t8006 build/18S830 (6; dt:191)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { DeviceType } from 'ua-parser-js/enums';

const ua = 'atc/1.0 watchOS/7.3.3 model/Watch4,2 hwp/t8006 build/18S830 (6; dt:191)';
const parser = new UAParser(ua);
const device = parser.getDevice();

console.log(device);
// {type: "wearable", model: "watch", vendor: "Apple"}

console.log(device.is(DeviceType.WEARABLE));
// true
```
