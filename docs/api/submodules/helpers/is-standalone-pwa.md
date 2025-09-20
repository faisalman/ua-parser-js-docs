# [Helpers](/api/submodules/helpers/overview) : isStandalonePWA()

`isStandalonePWA(): boolean`

Check whether current PWA window is running in a standalone mode (not in browser)

::: warning
This method is only applicable in a client-side browser environment
:::

## Code Example

```js [example-client.js]
import { isStandalonePWA } from 'ua-parser-js/helpers';

if(isStandalonePWA()) {
    console.log("Smile! you're on candid camera ^_^");
} else {
    console.log("Please install our App first! Thx");
}
```