[`← browser-detection`](/api/submodules/browser-detection/overview)

# `isStandalonePWA(): boolean`

::: warning
This method is only applicable in a client-side browser environment
:::

Check whether current PWA window is running in a standalone mode (not in browser)

## Code Example

```js [example-client.js]
import { isStandalonePWA } from 'ua-parser-js/browser-detection';

if(isStandalonePWA()) {
    console.log("Smile! you're on candid camera ^_^");
} else {
    console.log("Please install our App first! Thx");
}
```