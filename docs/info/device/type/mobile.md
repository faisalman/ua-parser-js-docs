<sup>*[`Device Types`](../type.md) > `mobile`*</sup>

# `mobile`

Mobile phones and smartphones designed for portable use.

## User-Agent Example

```sh
# Apple iPhone
Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { DeviceType } from 'ua-parser-js/enums';

const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';
const parser = new UAParser(ua);
const device = parser.getDevice();

console.log(device);
// {type: "mobile", model: "iPhone", vendor: "Apple"}

console.log(device.is(DeviceType.MOBILE));
// true
```
