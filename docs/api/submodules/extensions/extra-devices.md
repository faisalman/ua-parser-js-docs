<sup>*[`Extensions Submodule`](./overview.md) > `ExtraDevices`*</sup>

# `ExtraDevices`

Extends [`device`](/api/main/get-device) detection to include devices that are rarely encountered in the real world today, but still devices nonetheless.

## List of Detected Extra Devices

| **Device Type** | **Vendors** |
| --- | --- |
| `mobile` | AT&T, Essential, LvTel, Siemens, Swiss, Voice, ZTE |
| `tablet` | Barnes & Noble, Dell, Dragon Touch, Envizen, Gigaset, Insignia, Le Pan, MachSpeed, NextBook, Nook, NuVision, RCA, Rotor, Swiss, Trinity, Verizon, Vodafone, Zeki, ZTE |

## Code Example

```js
import { ExtraDevices } from 'ua-parser-js/extensions';

const parserWithExtraDevices = new UAParser([ExtraDevices]);
```