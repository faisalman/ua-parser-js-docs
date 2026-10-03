<sup>*[`Device Types`](../type.md) > `embedded`*</sup>

# `embedded`

Devices integrated into other systems, such as smart appliances, vehicle displays, and kiosks.

## User-Agent Example

```sh
# Tesla
Mozilla/5.0 (X11; GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Tesla QtCarBrowser Safari/601.1
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { DeviceType } from 'ua-parser-js/enums';

const ua = 'Mozilla/5.0 (X11; GNU/Linux) AppleWebKit/601.1 (KHTML, like Gecko) Tesla QtCarBrowser Safari/601.1';
const parser = new UAParser(ua);
const device = parser.getDevice();

console.log(device);
// {type: "embedded", vendor: "Tesla"}

console.log(device.is(DeviceType.EMBEDDED));
// true
```
