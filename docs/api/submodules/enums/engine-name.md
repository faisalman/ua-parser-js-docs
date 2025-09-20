# EngineName

[↩ Back to Enums](/api/submodules/enums.md)

```csv:no-line-numbers
AMAYA, ARKWEB, BLINK, EDGEHTML, FLOW, GECKO, GOANNA, ICAB, KHTML, LIBWEB, 
LINKS, LYNX, NETFRONT, NETSURF, PRESTO, SERVO, TASMAN, TRIDENT, W3M, WEBKIT
```
::: info
See list of possible engine name [here](/info/engine/name).
:::

## Code Example

```js
import { EngineName } from 'ua-parser-js/enums';

if (UAParser().engine.is(EngineName.LYNX)) {
    console.log('Here some text for you');
}
```