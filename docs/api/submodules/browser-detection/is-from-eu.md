[`← browser-detection`](/api/submodules/browser-detection/overview)

# `isFromEU(): boolean`

::: warning
This method is only applicable in a client-side browser environment
:::

Check whether current browser timezone is from an EU country

## Code Example

```js [example-client.js]
import { isFromEU } from 'ua-parser-js/browser-detection';

if(isFromEU()) {
    console.log('Hello EU user, please accept our cookies!');
}
```