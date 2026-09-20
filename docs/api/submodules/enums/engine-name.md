[`← enums`](/api/submodules/enums/overview)

# `EngineName` enum

```csv:no-line-numbers
AMAYA, ARKWEB, BLINK, DILLO, EDGEHTML, FLOW, GECKO, GOANNA, ICAB, KHTML, 
LIBWEB, LINKS, LYNX, NETFRONT, NETSURF, PRESTO, SERVO, TASMAN, TRIDENT, 
W3M, WEBKIT
```
::: info
See list of possible engine name [here](/info/engine/name).
:::

## Values

| Enum | Value |
|-|-|
| `EngineName.AMAYA` | `"Amaya"` |
| `EngineName.ARKWEB` | `"ArkWeb"` |
| `EngineName.BLINK` | `"Blink"` |
| `EngineName.DILLO` | `"Dillo"` |
| `EngineName.EDGEHTML` | `"EdgeHTML"` |
| `EngineName.FLOW` | `"Flow"` |
| `EngineName.GECKO` | `"Gecko"` |
| `EngineName.GOANNA` | `"Goanna"` |
| `EngineName.ICAB` | `"iCab"` |
| `EngineName.KHTML` | `"KHTML"` |
| `EngineName.LIBWEB` | `"LibWeb"` |
| `EngineName.LINKS` | `"Links"` |
| `EngineName.LYNX` | `"Lynx"` |
| `EngineName.NETFRONT` | `"NetFront"` |
| `EngineName.NETSURF` | `"NetSurf"` |
| `EngineName.PRESTO` | `"Presto"` |
| `EngineName.SERVO` | `"Servo"` |
| `EngineName.TASMAN` | `"Tasman"` |
| `EngineName.TRIDENT` | `"Trident"` |
| `EngineName.W3M` | `"w3m"` |
| `EngineName.WEBKIT` | `"WebKit"` |

## Code Example

```js [text-based-browser.js]
import { UAParser } from 'ua-parser-js'; 
import { EngineName } from 'ua-parser-js/enums';

if (UAParser().engine.is(EngineName.LYNX)) {
    console.log('Here some text for you');
}
```