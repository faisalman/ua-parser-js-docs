<sup>*[`Device Types`](../type.md) > `smarttv`*</sup>

# `smarttv`

Televisions and similar large-screen devices with built-in web capabilities.

## User-Agent Example

```sh
# LG Smart TV
Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.41 (KHTML, like Gecko) Large Screen Safari/537.41 LG Browser/7.00.00(LGE; 42LB670V-ZA; 05.05.90; 1); webOS.TV-2014; LG NetCast.TV-2013 Compatible (LGE, 42LB670V-ZA, wireless)
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { DeviceType } from 'ua-parser-js/enums';

const ua = 'Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.41 (KHTML, like Gecko) Large Screen Safari/537.41 LG Browser/7.00.00(LGE; 42LB670V-ZA; 05.05.90; 1); webOS.TV-2014; LG NetCast.TV-2013 Compatible (LGE, 42LB670V-ZA, wireless)';
const parser = new UAParser(ua);
const device = parser.getDevice();

console.log(device);
// {type: "smarttv", model: "42LB670V-ZA", vendor: "LG"}

console.log(device.is(DeviceType.SMARTTV));
// true
```
