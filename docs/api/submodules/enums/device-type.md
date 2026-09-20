[`← enums`](/api/submodules/enums/overview)

# `DeviceType` enum

```csv:no-line-numbers
CONSOLE, EMBEDDED, MOBILE, SMARTTV, TABLET, WEARABLE, XR
```
::: info
See list of possible device type [here](/info/device/type).
:::

## Values

| Enum | Value |
|-|-|
| `DeviceType.CONSOLE` | `"console"` |
| `DeviceType.EMBEDDED` | `"embedded"` |
| `DeviceType.MOBILE` | `"mobile"` |
| `DeviceType.SMARTTV` | `"smarttv"` |
| `DeviceType.TABLET` | `"tablet"` |
| `DeviceType.WEARABLE` | `"wearable"` |
| `DeviceType.XR` | `"xr"` |

::: warning
`DeviceType.DESKTOP` is deprecated, see [here](/info/device/type) for more details.
:::

## Code Example

```js [detect-tv.js]
import { UAParser } from 'ua-parser-js'; 
import { DeviceType } from 'ua-parser-js/enums';

if (UAParser().device.is(DeviceType.SMARTTV)) {
    console.log('Some big display here');
}
```