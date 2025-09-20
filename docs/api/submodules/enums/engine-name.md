# [Enums](/api/submodules/enums/overview) : EngineName

```csv:no-line-numbers
AMAYA, ARKWEB, BLINK, EDGEHTML, FLOW, GECKO, GOANNA, ICAB, KHTML, LIBWEB, 
LINKS, LYNX, NETFRONT, NETSURF, PRESTO, SERVO, TASMAN, TRIDENT, W3M, WEBKIT
```
::: info
See list of possible engine name [here](/info/engine/name).
:::

## Code Example

```js [text-based-browser.js]
import { UAParser } from 'ua-parser-js'; 
import { EngineName } from 'ua-parser-js/enums';

if (UAParser().engine.is(EngineName.LYNX)) {
    console.log('Here some text for you');
}
```