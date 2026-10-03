<sup>*[`Device Types`](../type.md) > `xr`*</sup>

# `xr`

Extended reality devices, including virtual reality and augmented reality headsets.

## User-Agent Example

```sh
# Oculus Quest 2
Mozilla/5.0 (Linux; Android 10; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/15.0.0.0.22.280317669 SamsungBrowser/4.0 Chrome/89.0.4389.90 VR Safari/537.36
```

## Code Example

```js
import { UAParser } from 'ua-parser-js';
import { DeviceType } from 'ua-parser-js/enums';

const ua = 'Mozilla/5.0 (Linux; Android 10; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/15.0.0.0.22.280317669 SamsungBrowser/4.0 Chrome/89.0.4389.90 VR Safari/537.36';
const parser = new UAParser(ua);
const device = parser.getDevice();

console.log(device);
// {type: "xr", model: "Quest 2", vendor: "Facebook"}

console.log(device.is(DeviceType.XR));
// true
```
