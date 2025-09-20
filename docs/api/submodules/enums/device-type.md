# DeviceType

[↩ Back to Enums](/api/submodules/enums.md)

```csv:no-line-numbers
CONSOLE, DESKTOP, EMBEDDED, MOBILE, SMARTTV, TABLET, WEARABLE, XR
```
::: info
See list of possible device type [here](/info/device/type).
:::


## Code Example

```js
import { DeviceType } from 'ua-parser-js/enums';

if (UAParser().device.is(DeviceType.SMARTTV)) {
    console.log('Some big display here');
}
```