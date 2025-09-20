# [Enums](/api/submodules/enums/overview) : DeviceType

```csv:no-line-numbers
CONSOLE, DESKTOP, EMBEDDED, MOBILE, SMARTTV, TABLET, WEARABLE, XR
```
::: info
See list of possible device type [here](/info/device/type).
:::


## Code Example

```js [detect-tv.js]
import { UAParser } from 'ua-parser-js'; 
import { DeviceType } from 'ua-parser-js/enums';

if (UAParser().device.is(DeviceType.SMARTTV)) {
    console.log('Some big display here');
}
```